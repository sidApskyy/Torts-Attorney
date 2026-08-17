'use client'

import { useEffect, useRef, useState } from 'react'

export function AnimatedFavicon() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 32
    canvas.height = 32

    let pulse = 0
    let mounted = true

    const draw = () => {
      if (!mounted || !ctx) return
      ctx.clearRect(0, 0, 32, 32)

      // Background circle
      pulse += 0.02
      const glow = Math.sin(pulse) * 0.15 + 0.85

      ctx.beginPath()
      ctx.arc(16, 16, 14, 0, Math.PI * 2)
      ctx.fillStyle = '#1A1A1F'
      ctx.fill()

      // Gold ring
      ctx.beginPath()
      ctx.arc(16, 16, 13, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(198, 162, 74, ${glow})`
      ctx.lineWidth = 1.5
      ctx.stroke()

      // "T" letter
      ctx.fillStyle = `rgba(198, 162, 74, ${glow})`
      ctx.font = 'bold 18px serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('T', 16, 17)

      // Convert to favicon
      const dataURL = canvas.toDataURL('image/png')
      let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = dataURL

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      mounted = false
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: 'none' }} />
}
