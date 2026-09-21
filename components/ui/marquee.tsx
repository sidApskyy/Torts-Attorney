'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
  reverse?: boolean
  paused?: boolean
}

// Position is driven manually so touch can hold (pause) and swipe (drag).
// offset stays wrapped inside (-half, 0] — the track renders children twice.
export function Marquee({ children, speed = 30, className = '', reverse = false, paused = false }: MarqueeProps) {
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const touching = useRef(false)
  const dragging = useRef(false)
  const dragged = useRef(false)
  const lastX = useRef(0)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  const dir = reverse ? -1 : 1

  const wrapOffset = (v: number, half: number) =>
    (((v % half) + half) % half) - half

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let raf = 0
    let last = performance.now()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const loop = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const half = el.scrollWidth / 2
      if (half > 0 && !reduced && !pausedRef.current && !touching.current) {
        offset.current = wrapOffset(offset.current + dir * (half / speed) * dt, half)
        x.set(offset.current)
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, dir])

  const onTouchStart = (e: React.TouchEvent) => {
    touching.current = true
    dragging.current = false
    lastX.current = e.touches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touching.current) return
    const cx = e.touches[0].clientX
    const dx = cx - lastX.current
    if (!dragging.current && Math.abs(dx) > 6) dragging.current = true
    if (!dragging.current) return
    lastX.current = cx
    const half = trackRef.current ? trackRef.current.scrollWidth / 2 : 0
    if (half <= 0) return
    offset.current = wrapOffset(offset.current + dx, half)
    x.set(offset.current)
  }

  const onTouchEnd = () => {
    touching.current = false
    if (dragging.current) dragged.current = true
    dragging.current = false
  }

  // Swallow the click that follows a real swipe so cards don't flip on release
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragged.current) {
      e.preventDefault()
      e.stopPropagation()
      dragged.current = false
    }
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ touchAction: 'pan-y' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      onClickCapture={onClickCapture}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex gap-6 w-max">
        <div className="flex gap-6 shrink-0">{children}</div>
        <div className="flex gap-6 shrink-0" aria-hidden>{children}</div>
      </motion.div>
    </div>
  )
}
