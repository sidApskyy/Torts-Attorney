'use client'

import React from 'react'
import { SectionNumber } from '@/components/ui/section-number'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'

interface PageSectionProps {
  children: React.ReactNode
  className?: string
  background?: 'light' | 'muted' | 'accent'
  sectionNumber?: string
  numberPosition?: 'right' | 'left'
  showGradient?: boolean
  gradientColors?: string[]
}

const bgClasses = {
  light: 'bg-[#F8F8F6]',
  muted: 'bg-[#F5F7FA]',
  accent: 'bg-[#F1F3F5]',
}

export function PageSection({
  children,
  className = '',
  background = 'light',
  sectionNumber,
  numberPosition = 'right',
  showGradient = false,
  gradientColors = ['#C6A24A', '#F5F7FA', '#E4E1D8'],
}: PageSectionProps) {
  return (
    <section className={`relative ${bgClasses[background]} py-16 md:py-20 lg:py-24 overflow-hidden ${className}`}>
      {showGradient && <AnimatedGradientBackground colors={gradientColors} speed={20} />}
      {sectionNumber && (
        <SectionNumber
          number={sectionNumber}
          className={`top-10 ${numberPosition === 'right' ? 'right-4' : 'left-4'} text-[180px] md:text-[280px] lg:text-[340px] leading-none`}
        />
      )}
      <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
      <div
        className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb"
        style={{ animationDelay: '6s' }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  )
}
