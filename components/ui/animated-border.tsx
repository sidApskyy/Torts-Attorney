'use client'

import { ReactNode } from 'react'

interface AnimatedBorderProps {
  children: ReactNode
  className?: string
  borderRadius?: string
}

export function AnimatedBorder({ children, className = '', borderRadius = '20px' }: AnimatedBorderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ borderRadius }}
    >
      {/* Animated conic gradient border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          padding: '1px',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(198, 162, 74, 0.4) 60deg, transparent 120deg, transparent 240deg, rgba(198, 162, 74, 0.4) 300deg, transparent 360deg)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'border-rotate 4s linear infinite',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
