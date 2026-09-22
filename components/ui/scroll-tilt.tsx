'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface ScrollTiltProps {
  children: ReactNode
  className?: string
  rotateX?: number
  rotateZ?: number
  scale?: number
}

export function ScrollTilt({
  children,
  className = '',
  rotateX = 5,
  rotateZ = 0,
  scale = 1,
}: ScrollTiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // 3D tilt on a large card forces a repaint of the whole layer per scroll
    // frame — expensive on mobile GPUs and barely perceptible on touch scroll.
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotateXValue = useTransform(scrollYProgress, [0, 0.5, 1], [rotateX, 0, -rotateX])
  const rotateZValue = useTransform(scrollYProgress, [0, 0.5, 1], [rotateZ, 0, -rotateZ])
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [scale * 0.95, scale, scale * 0.95])
  const yValue = useTransform(scrollYProgress, [0, 1], [40, -40])

  if (prefersReducedMotion || isTouch) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: rotateXValue,
        rotateZ: rotateZValue,
        scale: scaleValue,
        y: yValue,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}
