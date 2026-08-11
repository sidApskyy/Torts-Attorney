'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface ParallaxOrbProps {
  className?: string
  size?: number
  color?: string
  blur?: number
  speed?: 'slow' | 'medium' | 'fast'
  children?: ReactNode
}

export function ParallaxOrb({
  className = '',
  size = 400,
  color = 'rgba(198, 162, 74, 0.06)',
  blur = 100,
  speed = 'medium',
  children,
}: ParallaxOrbProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const speedMultiplier = speed === 'slow' ? 60 : speed === 'fast' ? 120 : 80
  const y = useTransform(scrollYProgress, [0, 1], [-speedMultiplier, speedMultiplier])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 10, -20])

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        y: prefersReducedMotion ? 0 : y,
        x: prefersReducedMotion ? 0 : x,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  )
}
