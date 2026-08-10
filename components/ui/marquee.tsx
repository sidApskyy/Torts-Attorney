'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
  reverse?: boolean
}

export function Marquee({ children, speed = 30, className = '', reverse = false }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-6 w-max"
      >
        <div className="flex gap-6 shrink-0">{children}</div>
        <div className="flex gap-6 shrink-0" aria-hidden>{children}</div>
      </motion.div>
    </div>
  )
}
