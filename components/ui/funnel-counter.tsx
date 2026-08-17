'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface FunnelCounterProps {
  value: string
  className?: string
  duration?: number
}

export function FunnelCounter({ value, className = '', duration = 2 }: FunnelCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const [displayValue, setDisplayValue] = useState('0')

  const numericValue = parseInt(value.replace(/,/g, ''), 10)

  useEffect(() => {
    if (!inView || isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    let startTime: number | null = null
    let rafId: number

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * numericValue)
      setDisplayValue(current.toLocaleString())

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(numericValue.toLocaleString())
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [inView, numericValue, duration, value])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
