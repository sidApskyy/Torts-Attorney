'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

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
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      const formatted = formatValue(latest, format)
      setDisplay(formatted)
    })
    return () => unsubscribe()
  }, [spring, format])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
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
