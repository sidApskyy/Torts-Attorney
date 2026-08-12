'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface RollingCounterProps {
  value: number
  duration?: number
  format?: 'number' | 'currency' | 'percent'
  className?: string
}

export function RollingCounter({
  value,
  duration = 3,
  format = 'number',
  className = '',
}: RollingCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setStarted(true), 200)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const formatted =
    format === 'currency'
      ? `$${value.toLocaleString()}`
      : format === 'percent'
        ? `${value}%`
        : value.toLocaleString()

  const digitCount = formatted.replace(/[^0-9]/g, '').length

  let digitIdx = -1
  const chars = formatted.split('').map((char) => {
    if (/[0-9]/.test(char)) {
      digitIdx++
      return {
        char,
        isDigit: true,
        digitIndex: digitIdx,
        digitValue: parseInt(char, 10),
        totalDigits: digitCount,
      }
    }
    return { char, isDigit: false, digitIndex: -1, digitValue: -1, totalDigits: digitCount }
  })

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'baseline', fontVariantNumeric: 'tabular-nums' }}
    >
      {chars.map((c, i) =>
        c.isDigit ? (
          <RollingDigit
            key={`d-${i}`}
            targetDigit={c.digitValue}
            digitIndex={c.digitIndex}
            totalDigits={c.totalDigits}
            duration={duration}
            started={started}
          />
        ) : (
          <span key={`c-${i}`} style={{ display: 'inline-block' }}>
            {c.char}
          </span>
        ),
      )}
    </span>
  )
}

function RollingDigit({
  targetDigit,
  digitIndex,
  totalDigits,
  duration,
  started,
}: {
  targetDigit: number
  digitIndex: number
  totalDigits: number
  duration: number
  started: boolean
}) {
  // Variable cycles: leftmost digits roll more, rightmost roll fewer
  const cycles = 5 - Math.round((digitIndex / Math.max(totalDigits - 1, 1)) * 3)
  const totalPositions = cycles * 10 + targetDigit
  const digits = Array.from({ length: totalPositions + 1 }, (_, i) => i % 10)

  // Stagger: each digit starts 120ms after the previous
  const delay = digitIndex * 0.12
  // Slightly longer duration for digits that travel farther
  const digitDuration = duration + digitIndex * 0.1

  return (
    <span
      style={{
        display: 'inline-block',
        height: '1em',
        overflow: 'hidden',
        verticalAlign: 'top',
        lineHeight: '1',
        position: 'relative',
      }}
    >
      <span
        style={{
          display: 'block',
          transition: started
            ? `transform ${digitDuration + 0.35}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`
            : 'none',
          transform: started ? `translateY(-${totalPositions}em)` : 'translateY(0)',
          willChange: 'transform',
        }}
      >
        {digits.map((d, i) => (
          <span key={i} style={{ display: 'block', height: '1em', lineHeight: '1' }}>
            {d}
          </span>
        ))}
      </span>
    </span>
  )
}
