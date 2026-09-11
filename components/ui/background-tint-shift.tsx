'use client'

import { useEffect, useRef, useState } from 'react'

export function BackgroundTintShift() {
  const warmRef = useRef<HTMLDivElement>(null)
  const coolRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // The tint is subtle — not worth a scroll listener on mobile GPUs
    const touch = window.matchMedia('(pointer: coarse)').matches
    if (reducedMotion || touch) setEnabled(false)
  }, [])

  useEffect(() => {
    if (!enabled) return
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const tint = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
        const warm = tint < 0.5 ? 1 - tint * 0.6 : (tint - 0.5) * 1.2
        const cool = tint < 0.5 ? tint * 0.8 : 1 - (tint - 0.5) * 0.8
        // Mutate styles directly — avoids a React re-render per scroll frame
        if (warmRef.current) warmRef.current.style.opacity = String(warm)
        if (coolRef.current) coolRef.current.style.opacity = String(cool)
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <div
        ref={warmRef}
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(198, 162, 74, 0.03), transparent 60%)',
          opacity: 1,
        }}
      />
      <div
        ref={coolRef}
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(107, 143, 214, 0.02), transparent 60%)',
          opacity: 0,
        }}
      />
    </div>
  )
}
