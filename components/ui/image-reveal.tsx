'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface ImageRevealProps {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'circle'
  delay?: number
}

export function ImageReveal({
  children,
  className = '',
  direction = 'left',
  delay = 0,
}: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  const clipPaths: Record<string, string> = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    top: 'inset(0 0 100% 0)',
    bottom: 'inset(100% 0 0 0)',
    circle: 'circle(0% at 50% 50%)',
  }

  const finalClip: Record<string, string> = {
    left: 'inset(0 0 0 0)',
    right: 'inset(0 0 0 0)',
    top: 'inset(0 0 0 0)',
    bottom: 'inset(0 0 0 0)',
    circle: 'circle(100% at 50% 50%)',
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? { clipPath: finalClip[direction] } : { clipPath: clipPaths[direction] }}
      whileInView={{ clipPath: finalClip[direction] }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}
