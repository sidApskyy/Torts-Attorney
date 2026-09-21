'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  id?: string
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

export function TextReveal({ children, className = '', delay = 0, as = 'h2', id }: TextRevealProps) {
  const prefersReducedMotion = useSSRReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      id={id}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 1,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
