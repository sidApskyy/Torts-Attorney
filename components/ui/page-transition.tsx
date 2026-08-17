'use client'

import { motion, AnimatePresence, useReducedMotion, type TargetAndTransition } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface RouteVariant {
  initial: TargetAndTransition
  animate: TargetAndTransition
  exit: TargetAndTransition
}

const routeVariants: Record<string, RouteVariant> = {
  '/': {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  },
  '/about': {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  '/contact': {
    initial: { opacity: 0, y: -20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.98 },
  },
}

const defaultVariant = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  const variant = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : routeVariants[pathname] || defaultVariant

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={variant.initial}
        animate={variant.animate}
        exit={variant.exit}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
