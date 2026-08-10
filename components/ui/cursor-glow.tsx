'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.4 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.4 })

  const visibleRef = useRef(false)

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250)
      mouseY.set(e.clientY - 250)
      if (!visibleRef.current) {
        visibleRef.current = true
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed pointer-events-none z-[5]"
      style={{
        left: springX,
        top: springY,
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04) 0%, rgba(198, 162, 74, 0.02) 30%, transparent 60%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}
