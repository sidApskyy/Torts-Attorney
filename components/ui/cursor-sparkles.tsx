'use client'

import { useEffect, useRef } from 'react'

export function CursorSparkles() {
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastSpawn = 0
    let mounted = true

    const handleMouseMove = (e: MouseEvent) => {
      if (!mounted) return
      const now = Date.now()
      if (now - lastSpawn < 60) return
      lastSpawn = now

      // Only spawn sparkles when over dark sections
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (!el) return
      const section = el.closest('section')
      if (!section) return
      const bg = window.getComputedStyle(section).backgroundColor
      // Check if it's a dark background (low rgb values)
      const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
      if (!match) return
      const brightness = (parseInt(match[1]) + parseInt(match[2]) + parseInt(match[3])) / 3
      if (brightness > 100) return

      const sparkle = document.createElement('div')
      sparkle.className = 'cursor-sparkle'
      sparkle.style.left = `${e.clientX + (Math.random() - 0.5) * 16}px`
      sparkle.style.top = `${e.clientY + (Math.random() - 0.5) * 16}px`
      document.body.appendChild(sparkle)

      setTimeout(() => {
        if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle)
      }, 800)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      mounted = false
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return null
}
