'use client'

import { useEffect, useState } from 'react'

export function BackgroundTintShift() {
  const [tint, setTint] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setTint(Math.min(1, Math.max(0, scrollFraction)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Shift from warm gold (top) to cool blue-grey (middle) back to warm gold (bottom)
  const warmIntensity = tint < 0.5 ? 1 - tint * 0.6 : (tint - 0.5) * 1.2
  const coolIntensity = tint < 0.5 ? tint * 0.8 : 1 - (tint - 0.5) * 0.8

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(198, 162, 74, 0.03), transparent 60%)',
          opacity: warmIntensity,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(107, 143, 214, 0.02), transparent 60%)',
          opacity: coolIntensity,
        }}
      />
    </div>
  )
}
