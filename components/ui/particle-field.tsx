'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  size: number
  left: number
  duration: number
  delay: number
  opacity: number
}

interface ParticleFieldProps {
  count?: number
  className?: string
}

export function ParticleField({ count = 30, className = '' }: ParticleFieldProps) {
  const [effectiveCount, setEffectiveCount] = useState(0)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lowPower = isTouch || reducedMotion
    setEffectiveCount(lowPower ? 0 : count)
  }, [count])

  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (effectiveCount === 0) {
      setParticles([])
      return
    }
    setParticles(
      Array.from({ length: effectiveCount }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 20,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    )
  }, [effectiveCount])

  if (particles.length === 0) return null

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-gold"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
