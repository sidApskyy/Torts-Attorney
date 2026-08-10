'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'clip'

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  margin?: string
  className?: string
}

const offsets: Record<Direction, { x?: number; y?: number; scale?: number; filter?: string; clipPath?: string }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.92 },
  blur: { filter: 'blur(12px)' },
  clip: { clipPath: 'inset(0 100% 0 0)' },
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  margin = '-60px',
  className = '',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const initial = { opacity: 0, ...offsets[direction] }
  const animate: Record<string, string | number> = { opacity: 1 }
  if (direction === 'up' || direction === 'down' || direction === 'left' || direction === 'right') {
    const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'
    animate[axis] = 0
  }
  if (direction === 'scale') animate.scale = 1
  if (direction === 'blur') animate.filter = 'blur(0px)'
  if (direction === 'clip') animate.clipPath = 'inset(0 0 0 0)'

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
