'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursorClassName?: string
  onComplete?: () => void
}

export function TypingText({
  text,
  speed = 45,
  delay = 0,
  className = '',
  cursorClassName = '',
  onComplete,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text)
      setDone(true)
      onComplete?.()
      return
    }

    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay, prefersReducedMotion, text, onComplete])

  useEffect(() => {
    if (!started || prefersReducedMotion) return

    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setDone(true)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [started, speed, text, prefersReducedMotion, onComplete])

  return (
    <span className={className}>
      {displayed}
      {!done && !prefersReducedMotion && (
        <span
          className={`inline-block w-[2px] h-[1em] ml-1 align-middle bg-[#C6A24A] ${cursorClassName}`}
          style={{ animation: 'blink 0.8s step-end infinite' }}
        />
      )}
    </span>
  )
}
