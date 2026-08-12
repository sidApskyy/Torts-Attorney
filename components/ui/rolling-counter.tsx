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
      const timer = setTimeout(() => setStarted(true), 80)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const formatted =
    format === 'currency'
      ? `$${value.toLocaleString()}`
      : format === 'percent'
        ? `${value}%`
        : value.toLocaleString()

  let digitIdx = -1
  const chars = formatted.split('').map((char) => {
    if (/[0-9]/.test(char)) {
      digitIdx++
      return { char, isDigit: true, digitIndex: digitIdx, digitValue: parseInt(char, 10) }
    }
    return { char, isDigit: false, digitIndex: -1, digitValue: -1 }
  })

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      {chars.map((c, i) =>
        c.isDigit ? (
          <RollingDigit
            key={`d-${i}`}
            targetDigit={c.digitValue}
            delay={c.digitIndex * 0.15}
            duration={duration}
            started={started}
          />
        ) : (
          <span key={`c-${i}`} style={{ display: 'inline-block' }}>
            {c.char}
          </span>
        )
      )}
    </span>
  )
}

function RollingDigit({
  targetDigit,
  delay,
  duration,
  started,
}: {
  targetDigit: number
  delay: number
  duration: number
  started: boolean
}) {
  const cycles = 3
  const totalPositions = cycles * 10 + targetDigit
  const digits = Array.from({ length: totalPositions + 1 }, (_, i) => i % 10)

  return (
    <span
      style={{
        display: 'inline-block',
        height: '1em',
        overflow: 'hidden',
        verticalAlign: 'top',
        lineHeight: '1',
      }}
    >
      <span
        style={{
          display: 'block',
          transition: started
            ? `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
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
