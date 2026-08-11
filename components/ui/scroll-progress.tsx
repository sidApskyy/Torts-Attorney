'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    mass: 0.3,
  })
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      className="fixed top-0 left-0 right-0 h-[3px] scroll-progress-bar origin-left z-[100] pointer-events-none"
      style={{ scaleX }}
    />
  )
}
