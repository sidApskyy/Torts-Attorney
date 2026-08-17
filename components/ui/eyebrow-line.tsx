'use client'

import { motion } from 'framer-motion'

interface EyebrowLineProps {
  className?: string
  delay?: number
}

export function EyebrowLine({ className = '', delay = 0 }: EyebrowLineProps) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: '2rem', opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px bg-gradient-to-r from-[#C6A24A] to-[#C6A24A]/30 ${className}`}
    />
  )
}
