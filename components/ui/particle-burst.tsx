'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ParticleBurst() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            setTriggered(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggered])

  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    angle: (i / 24) * Math.PI * 2,
    distance: 80 + Math.random() * 120,
    size: 3 + Math.random() * 4,
    delay: Math.random() * 0.3,
  }))

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        {triggered && (
          <div className="absolute inset-0 flex items-center justify-center">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: Math.cos(p.angle) * p.distance,
                  y: Math.sin(p.angle) * p.distance,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  delay: p.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  background: '#C6A24A',
                  boxShadow: '0 0 8px rgba(198, 162, 74, 0.6)',
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
