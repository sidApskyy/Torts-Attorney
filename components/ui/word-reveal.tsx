'use client'

import { useRef, type ElementType } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WordRevealProps {
  text: string
  className?: string
  as?: ElementType
  delay?: number
  stagger?: number
}

export function WordReveal({
  text,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  stagger = 0.04,
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (prefersReducedMotion) {
    return (
      <Tag ref={ref} className={className}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={cn('inline', className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-reveal"
          style={{
            transitionDelay: `${delay + i * stagger}s`,
          }}
        >
          <span
            className={inView ? 'in-view-word' : ''}
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(100%)',
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}s`,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}
