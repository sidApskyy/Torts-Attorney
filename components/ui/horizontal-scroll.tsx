'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface HorizontalScrollProps {
  children: ReactNode
  className?: string
  itemCount: number
  itemWidth?: number
  gap?: number
}

export function HorizontalScroll({
  children,
  className = '',
  itemCount,
  itemWidth = 380,
  gap = 24,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const totalWidth = itemCount * itemWidth + (itemCount - 1) * gap

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${totalWidth}px`])
  const xReduced = useTransform(scrollYProgress, [0, 1], ['0%', '0%'])

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${totalWidth * 0.5}px` }}>
      <div className="sticky top-0 flex items-center overflow-hidden h-screen">
        <motion.div
          style={{ x: prefersReducedMotion ? xReduced : x, width: totalWidth }}
          className="flex gap-6 px-8"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
