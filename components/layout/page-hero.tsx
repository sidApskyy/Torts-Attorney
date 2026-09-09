'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GoldBeam } from '@/components/ui/gold-beam'

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  cta?: React.ReactNode
}

export function PageHero({ eyebrow, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden" aria-label={eyebrow ? `${eyebrow} hero` : 'Page hero'}>
      <AnimatedGradientBackground colors={['#C6A24A', '#9B7830', '#F5F7FA']} speed={16} />
      <GoldBeam position="center" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6B7280 1px, transparent 1px),
            linear-gradient(to bottom, #6B7280 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      <div
        className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb"
        style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }}
      />
      <div
        className="absolute bottom-[10%] right-[5%] w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb"
        style={{ background: 'radial-gradient(circle, rgba(32, 33, 36, 0.04), transparent 70%)', animationDelay: '4s' }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-px bg-[#C6A24A]"
              />
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">{eyebrow}</span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.div>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-[#4B5563] max-w-2xl leading-relaxed mt-6 mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {cta}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
