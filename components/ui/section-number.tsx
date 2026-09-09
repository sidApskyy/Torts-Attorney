'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SectionNumberProps {
  number: string
  className?: string
}

function useSSRReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(media.matches)
    update()
    const listener = () => update()
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}

export function SectionNumber({ number, className = '' }: SectionNumberProps) {
  const prefersReducedMotion = useSSRReducedMotion()

  return (
    <motion.span
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 0.04, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute font-serif font-bold text-[#C6A24A] select-none pointer-events-none tabular-nums ${className}`}
      aria-hidden
    >
      {number}
    </motion.span>
  )
}
