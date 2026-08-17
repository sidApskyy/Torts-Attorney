'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SectionNumberProps {
  number: string
  className?: string
}

export function SectionNumber({ number, className = '' }: SectionNumberProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.span
      initial={prefersReducedMotion ? { opacity: 0.04 } : { opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 0.04, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute font-serif font-bold text-[#C6A24A] select-none pointer-events-none tabular-nums ${className}`}
      aria-hidden
    >
      {number}
    </motion.span>
  )
}
