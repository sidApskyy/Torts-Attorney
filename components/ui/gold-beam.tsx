'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface GoldBeamProps {
  className?: string
  position?: 'left' | 'right' | 'center'
}

export function GoldBeam({ className = '', position = 'center' }: GoldBeamProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  const positionClass =
    position === 'left' ? 'left-0' : position === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'

  if (prefersReducedMotion) return null

  return (
    <div
      ref={ref}
      className={`absolute top-0 bottom-0 w-px pointer-events-none ${positionClass} ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute top-0 w-[2px] h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, #C6A24A, transparent)',
          filter: 'blur(1px)',
          boxShadow: '0 0 20px rgba(198, 162, 74, 0.6), 0 0 40px rgba(198, 162, 74, 0.3)',
        }}
        animate={visible ? { y: ['-10%', '110%'] } : { y: '-10%' }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 1.5,
        }}
      />
    </div>
  )
}
