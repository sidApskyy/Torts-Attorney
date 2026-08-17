'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface SvgLineDrawProps {
  className?: string
  color?: string
  strokeWidth?: number
  direction?: 'horizontal' | 'vertical'
}

export function SvgLineDraw({
  className = '',
  color = '#C6A24A',
  strokeWidth = 1,
  direction = 'horizontal',
}: SvgLineDrawProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'center 50%'],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  const width = direction === 'horizontal' ? '100%' : '2'
  const height = direction === 'horizontal' ? '2' : '100%'

  return (
    <div ref={ref} className={className}>
      <svg
        width={width}
        height={height}
        style={{ overflow: 'visible' }}
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="1"
          x2={direction === 'horizontal' ? '100%' : '1'}
          y2={direction === 'horizontal' ? '1' : '100%'}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  )
}
