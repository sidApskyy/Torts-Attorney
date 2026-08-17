'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  id?: string
}

export function TextReveal({ children, className = '', delay = 0, as = 'h2', id }: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      id={id}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </MotionTag>
  )
}
