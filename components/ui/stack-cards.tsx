'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'

interface StackCardItem {
  id: string
  content: ReactNode
}

interface StackCardsProps {
  items: StackCardItem[]
  className?: string
}

export function StackCards({ items, className = '' }: StackCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const idx = Math.min(items.length - 1, Math.floor(latest * items.length))
    setActiveIndex(idx)
  })

  return (
    <div className="flex gap-4 md:gap-10">
      {/* Progress rail */}
      <div className="sticky top-28 md:top-32 self-start h-[calc(100vh-12rem)] flex flex-col justify-center hidden md:flex z-10">
        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-3 transition-all duration-500"
              style={{
                opacity: index === activeIndex ? 1 : 0.3,
              }}
            >
              <div
                className="w-1 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: index === activeIndex ? '#C6A24A' : '#9CA3AF',
                  height: index === activeIndex ? '44px' : '16px',
                }}
              />
              <span
                className="text-xs font-medium transition-all duration-500 whitespace-nowrap"
                style={{
                  color: index === activeIndex ? '#202124' : '#6B7280',
                  fontSize: index === activeIndex ? '13px' : '11px',
                  fontWeight: index === activeIndex ? 700 : 500,
                }}
              >
                {item.id}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards container */}
      <div
        ref={containerRef}
        className={`relative flex-1 ${className}`}
        style={{ height: `${items.length * 45}vh` }}
      >
        {items.map((item, index) => (
          <StackCardItemWrapper
            key={item.id}
            item={item}
            index={index}
            total={items.length}
            scrollYProgress={smoothProgress}
          />
        ))}
      </div>
    </div>
  )
}

function StackCardItemWrapper({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: StackCardItem
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const isLast = index === total - 1
  const isEven = index % 2 === 0

  // Segment boundaries for this card
  const enterStart = Math.max(0, (index - 1) / total)
  const enterEnd = index / total
  const recedeStart = index / total
  const recedeEnd = (index + 1) / total

  // Entrance: slide in from alternating sides + 3D tilt
  const slideIn = useTransform(
    scrollYProgress,
    [enterStart, enterEnd],
    isEven ? [80, 0] : [-80, 0]
  )
  const enterRotateY = useTransform(
    scrollYProgress,
    [enterStart, enterEnd],
    isEven ? [15, 0] : [-15, 0]
  )

  // Recede: scale down + fade + blur + tilt back
  const scale = useTransform(
    scrollYProgress,
    [recedeStart, recedeEnd],
    isLast ? [1, 1] : [1, 0.82]
  )
  const y = useTransform(
    scrollYProgress,
    [recedeStart, recedeEnd],
    isLast ? [0, 0] : [0, -40]
  )
  const recedeRotateX = useTransform(
    scrollYProgress,
    [recedeStart, recedeEnd],
    isLast ? [0, 0] : [0, 10]
  )

  // Combine blur from entrance and recede phases
  const blurFilter = useTransform(
    scrollYProgress,
    [enterStart, enterEnd, recedeStart, recedeEnd],
    ['8px', '0px', '0px', isLast ? '0px' : '6px']
  )

  // Combined opacity — entrance fade-in then recede fade-out
  const combinedOpacity = useTransform(
    scrollYProgress,
    [enterStart, enterEnd, recedeStart, recedeEnd],
    [0, 1, 1, isLast ? 1 : 0.35]
  )

  return (
    <motion.div
      style={{
        scale,
        y,
        opacity: combinedOpacity,
        x: slideIn,
        rotateY: enterRotateY,
        rotateX: recedeRotateX,
        filter: blurFilter,
        top: '5rem',
        zIndex: index,
        height: '45vh',
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
      className="sticky flex items-center justify-center"
    >
      {item.content}
    </motion.div>
  )
}
