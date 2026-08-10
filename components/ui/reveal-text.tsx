'use client'

import { motion } from 'framer-motion'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  highlightWords?: string[]
  highlightClassName?: string
}

export function RevealText({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  highlightWords = [],
  highlightClassName = '',
}: RevealTextProps) {
  const words = text.split(' ')

  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(word.toLowerCase())
        return (
          <span key={index} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: delay + index * stagger,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: 'inline-block' }}
              className={isHighlighted ? highlightClassName : ''}
            >
              {word}
              {index < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
