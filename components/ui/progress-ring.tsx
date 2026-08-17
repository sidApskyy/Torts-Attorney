'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface ProgressRingProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: string
  trackColor?: string
  delay?: number
  children?: React.ReactNode
}

export function ProgressRing({
  value,
  max = 100,
  size = 120,
  strokeWidth = 4,
  color = '#C6A24A',
  trackColor = 'rgba(198, 162, 74, 0.12)',
  delay = 0,
  children,
}: ProgressRingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'center 50%'],
  })

  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const pathLength = useTransform(springProgress, [0, 1], [0, value / max])

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ pathLength, strokeDashoffset: 0 }}
          transition={{ delay }}
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
