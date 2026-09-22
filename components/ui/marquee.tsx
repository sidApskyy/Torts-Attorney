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
  const halfRef = useRef(0)
  const touching = useRef(false)
  const dragging = useRef(false)
  const dragged = useRef(false)
  const lastX = useRef(0)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  const dir = reverse ? -1 : 1

  const wrapOffset = (v: number, half: number) =>
    (((v % half) + half) % half) - half

  // Cache track width — reading scrollWidth every frame forces layout
  // recalc 60×/s and makes the marquee stutter on mobile.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const measure = () => {
      halfRef.current = el.scrollWidth / 2
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let raf = 0
    let last = performance.now()
    let inView = true
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const loop = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const half = halfRef.current
      if (half > 0 && !reduced && !pausedRef.current && !touching.current) {
        offset.current = wrapOffset(offset.current + dir * (half / speed) * dt, half)
        x.set(offset.current)
      }
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (raf === 0) {
        last = performance.now()
        raf = requestAnimationFrame(loop)
      }
    }
    const stop = () => {
      if (raf !== 0) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    // Pause the loop entirely when the marquee is offscreen or the tab is
    // hidden — otherwise it burns a rAF every frame doing nothing on mobile.
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        inView ? start() : stop()
      },
      { threshold: 0 }
    )
    io.observe(el)
    const onVisibility = () => (document.hidden ? stop() : inView && start())
    document.addEventListener('visibilitychange', onVisibility)

    start()
    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
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
    const half = halfRef.current
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
      <motion.div
        ref={trackRef}
        style={{ x, willChange: 'transform' }}
        className="flex gap-6 w-max"
      >
        <div className="flex gap-6 shrink-0">{children}</div>
        <div className="flex gap-6 shrink-0" aria-hidden>{children}</div>
      </motion.div>
    </div>
  )
}
