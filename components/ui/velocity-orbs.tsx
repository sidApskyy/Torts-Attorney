'use client'

import { useRef } from 'react'
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion'

export function VelocityOrbs() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 200 })
  const skewX = useTransform(smoothVelocity, [-2000, 2000], [-3, 3])
  const scaleX = useTransform(smoothVelocity, [-2000, 2000], [1.05, 0.95])
  const opacity = useTransform(smoothVelocity, [0, 1000], [0.5, 0.8])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <motion.div
        className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[120px] animate-orb-1"
        style={{
          background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)',
          skewX,
          scaleX,
          opacity,
        }}
      />
      <motion.div
        className="absolute top-[50%] right-[10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full blur-[120px] sm:blur-[140px] animate-orb-2"
        style={{
          background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)',
          skewX: useTransform(smoothVelocity, [-2000, 2000], [3, -3]),
          scaleX: useTransform(smoothVelocity, [-2000, 2000], [0.95, 1.05]),
          opacity,
        }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[30%] w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] rounded-full blur-[80px] sm:blur-[100px] animate-orb-1"
        style={{
          background: 'radial-gradient(circle, rgba(107, 143, 214, 0.03), transparent 70%)',
          animationDelay: '5s',
          skewX,
          scaleX,
          opacity,
        }}
      />
    </div>
  )
}
