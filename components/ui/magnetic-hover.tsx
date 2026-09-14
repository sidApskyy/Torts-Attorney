'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticHoverProps {
  children: ReactNode
  strength?: number
  className?: string
}

export function MagneticHover({ children, strength = 0.3, className = '' }: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 20, stiffness: 300 })
  const springY = useSpring(y, { damping: 20, stiffness: 300 })
  // Synthesized mousemove on touch would make elements stick to the
  // last tap point — only enable on real pointers
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
