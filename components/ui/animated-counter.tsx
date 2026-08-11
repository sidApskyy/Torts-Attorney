'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  format?: 'number' | 'currency' | 'percent'
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 1.8,
  format = 'number',
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  // Direct DOM text update — avoids 60+ setState re-renders per second
  useMotionValueEvent(spring, 'change', (latest) => {
    if (ref.current) {
      ref.current.textContent = formatValue(latest, format)
    }
  })

  return (
    <span ref={ref} className={className}>
      0
    </span>
  )
}

function formatValue(val: number, format: string): string {
  const rounded = Math.round(val)
  switch (format) {
    case 'currency':
      return `$${rounded.toLocaleString()}`
    case 'percent':
      return `${rounded}%`
    default:
      return rounded.toLocaleString()
  }
}
