'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './flowing-menu.css'

export interface FlowingMenuItem {
  label?: string
  title: string
  description: string
}

interface FlowingMenuProps {
  items: FlowingMenuItem[]
  speed?: number
  borderColor?: string
}

function FlowingMenuItemRow({
  label,
  title,
  description,
  speed,
  borderColor,
}: FlowingMenuItem & { speed: number; borderColor: string }) {
  const itemRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeInnerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const [repetitions, setRepetitions] = useState(4)

  const animationDefaults = { duration: 0.6, ease: 'expo' as const }

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0)
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height)
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2
    const yDiff = y - y2
    return xDiff * xDiff + yDiff * yDiff
  }

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return
      const marqueeContent = marqueeInnerRef.current.querySelector('.flowing-menu__marquee-part')
      if (!marqueeContent) return
      const contentWidth = (marqueeContent as HTMLElement).offsetWidth
      const viewportWidth = window.innerWidth
      const needed = Math.ceil(viewportWidth / contentWidth) + 2
      setRepetitions(Math.max(4, needed))
    }

    calculateRepetitions()
    window.addEventListener('resize', calculateRepetitions)
    return () => window.removeEventListener('resize', calculateRepetitions)
  }, [title, description])

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return
      const marqueeContent = marqueeInnerRef.current.querySelector('.flowing-menu__marquee-part')
      if (!marqueeContent) return
      const contentWidth = (marqueeContent as HTMLElement).offsetWidth
      if (contentWidth === 0) return

      if (animationRef.current) {
        animationRef.current.kill()
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })
    }

    const timer = setTimeout(setupMarquee, 50)
    return () => {
      clearTimeout(timer)
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [title, description, repetitions, speed])

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  return (
    <div
      className="flowing-menu__item"
      ref={itemRef}
      style={{ ['--fm-border' as string]: borderColor }}
    >
      <div
        className="flowing-menu__item-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label && <span className="flowing-menu__item-num">{label}</span>}
        <span className="flowing-menu__item-title">{title}</span>
      </div>
      <div className="flowing-menu__marquee" ref={marqueeRef}>
        <div className="flowing-menu__marquee-inner-wrap">
          <div className="flowing-menu__marquee-inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="flowing-menu__marquee-part" key={idx}>
                <span className="flowing-menu__marquee-text">{description}</span>
                <div className="flowing-menu__marquee-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FlowingMenu({
  items = [],
  speed = 15,
  borderColor = 'rgba(198, 162, 74, 0.15)',
}: FlowingMenuProps) {
  return (
    <div className="flowing-menu-wrap">
      <nav className="flowing-menu">
        {items.map((item, idx) => (
          <FlowingMenuItemRow
            key={idx}
            {...item}
            speed={speed}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  )
}

export default FlowingMenu
