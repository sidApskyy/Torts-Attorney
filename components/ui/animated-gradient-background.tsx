'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

interface AnimatedGradientBackgroundProps {
  className?: string
  colors?: string[]
  speed?: number
  blur?: boolean
}

export function AnimatedGradientBackground({
  className = '',
  colors = ['#C6A24A', '#9B7830', '#F5F7FA', '#E4E1D8'],
  speed = 12,
  blur = true,
}: AnimatedGradientBackgroundProps) {
  const prefersReducedMotion = useSSRReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          background: `radial-gradient(circle at 30% 40%, ${colors[0]}08, transparent 50%), radial-gradient(circle at 70% 60%, ${colors[1]}08, transparent 50%)`,
        }}
        aria-hidden
      />
    )
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden
    >
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${60 + i * 10}%`,
            height: `${60 + i * 10}%`,
            background: `radial-gradient(circle, ${color}12, transparent 70%)`,
            filter: blur ? 'blur(80px)' : 'none',
            top: `${(i * 25) % 100}%`,
            left: `${(i * 30) % 100}%`,
          }}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: speed + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  )
}
