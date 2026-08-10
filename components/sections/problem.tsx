'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const funnelStages = [
  { label: 'Initial Responses', value: '10,000', width: '100%', color: '#D8BC72', dropOff: 0 },
  { label: 'Qualified Contacts', value: '7,200', width: '72%', color: '#C6A24A', dropOff: 28 },
  { label: 'Intake Completed', value: '4,320', width: '43%', color: '#B89542', dropOff: 40 },
  { label: 'Documentation Received', value: '2,592', width: '26%', color: '#9B7830', dropOff: 40 },
  { label: 'Retainer Signed', value: '1,555', width: '16%', color: '#8B6B2A', dropOff: 40 },
]

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const insightRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: insightProgress } = useScroll({
    target: insightRef,
    offset: ['start end', 'end start'],
  })

  // Section-level scroll transforms
  const insightRotateX = useTransform(insightProgress, [0, 0.4], [12, 0])
  const insightOpacity = useTransform(insightProgress, [0, 0.3], [0, 1])
  const insightClipPath = useTransform(
    insightProgress,
    [0.1, 0.5],
    ['inset(0 100% 0 0)', 'inset(0 0 0 0)']
  )
  const accentBarScaleY = useTransform(insightProgress, [0.1, 0.5], [0, 1])

  return (
    <section ref={sectionRef} className="bg-[#F8F8F6] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="problem-heading">
      {/* Ambient gradient that drifts with scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            sectionProgress,
            [0, 0.5, 1],
            [
              'radial-gradient(circle at 20% 30%, rgba(198, 162, 74, 0.04), transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(198, 162, 74, 0.06), transparent 50%)',
              'radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.8), transparent 50%)',
            ]
          ),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ── HEADING: clip-path curtain wipe + letter-spacing collapse ── */}
          <div className="text-center mb-20 md:mb-28 section-heading-glow">
            {/* Eyebrow — slides in from left with a trailing line */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A]">
                The Problem with Lead Volume
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#C6A24A]"
              />
            </motion.div>

            {/* Heading — clip-path curtain wipe from left */}
            <motion.h2
              id="problem-heading"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden"
            >
              Lead Volume Isn't the{' '}
              <span className="text-[#C6A24A] italic">Finish Line</span>
            </motion.h2>

            {/* Subtitle — letter-spacing collapse from wide to normal */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, letterSpacing: '0.3em', filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, letterSpacing: '0em', filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]"
            >
              Acquisition performance depends on what happens after the initial response. The real opportunity—or loss—occurs in the stages that follow.
            </motion.p>
          </div>

          {/* ── FUNNEL: 3D perspective cascade with blur-to-focus numbers ── */}
          <div
            className="relative mb-20"
            style={{ perspective: '1200px' }}
          >
            <div className="space-y-2">
              {funnelStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? { opacity: 1, rotateX: 0, y: 0 } : { opacity: 0, rotateX: -25, y: 30 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top' }}
                  className="flex items-center gap-4 md:gap-6 group"
                >
                  {/* Stage label — slides in from left */}
                  <div className="w-36 md:w-48 flex-shrink-0">
                    <motion.p
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                      className="text-sm md:text-base font-medium text-[#202124] transition-colors group-hover:text-[#C6A24A]"
                    >
                      {stage.label}
                    </motion.p>
                  </div>

                  {/* Bar — width fill with number inside */}
                  <div className="flex-1 bg-[#F1F3F5] rounded-[12px] h-12 md:h-14 relative overflow-hidden">
                    <motion.div
                      initial={prefersReducedMotion ? { width: '100%' } : { width: 0 }}
                      whileInView={{ width: stage.width }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      style={{ backgroundColor: stage.color }}
                      className="h-full rounded-[12px] shimmer-sweep relative overflow-hidden flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-[12px]" />
                      {/* Value — blur-to-focus, inside the fill bar */}
                      <motion.span
                        initial={prefersReducedMotion ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(12px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm md:text-base font-semibold text-[#202124] drop-shadow-sm tabular-nums relative z-10 whitespace-nowrap"
                      >
                        {stage.value}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Percentage + drop-off — fade in from right */}
                  <div className="w-24 md:w-32 flex-shrink-0 text-right flex flex-col items-end">
                    <motion.p
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
                      className="text-sm md:text-base font-medium text-[#202124] tabular-nums"
                    >
                      {stage.width}
                    </motion.p>
                    {stage.dropOff > 0 && (
                      <motion.span
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ delay: 0.65 + index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs text-[#C6A24A] font-medium tabular-nums"
                      >
                        −{stage.dropOff}%
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total loss indicator — draws in from left */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex items-center gap-4 md:gap-6"
            >
              <div className="w-36 md:w-48 flex-shrink-0" />
              <div className="flex-1 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#C6A24A]/40 to-[#C6A24A]/10" />
                <span className="text-xs font-medium text-[#C6A24A] tabular-nums whitespace-nowrap">
                  84% of leads never become retainers
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-[#C6A24A]/40 to-[#C6A24A]/10" />
              </div>
              <div className="w-24 md:w-32 flex-shrink-0" />
            </motion.div>

            {/* Disclosure */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-10 text-center text-xs text-[#6B7280] italic"
            >
              Illustrative sample data — not actual company performance
            </motion.p>
          </div>

          {/* ── INSIGHT: 3D perspective tilt + scroll-driven clip-path text reveal ── */}
          <div ref={insightRef} className="mt-24" style={{ perspective: '1000px' }}>
            <motion.div
              style={{
                rotateX: prefersReducedMotion ? 0 : insightRotateX,
                opacity: prefersReducedMotion ? 1 : insightOpacity,
                transformStyle: 'preserve-3d',
                transformOrigin: 'center bottom',
              }}
            >
              <div className="max-w-4xl mx-auto content-card-accent p-10 md:p-16 relative overflow-hidden">
                {/* Accent bar — scroll-driven grow from top */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830] origin-top"
                  style={{ scaleY: prefersReducedMotion ? 1 : accentBarScaleY }}
                />

                {/* Subtle static gradient sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/2 to-transparent pointer-events-none" />

                {/* Text — scroll-driven clip-path wipe reveal */}
                <motion.p
                  style={{
                    clipPath: prefersReducedMotion ? 'inset(0 0 0 0)' : insightClipPath,
                  }}
                  className="font-serif text-2xl md:text-3xl text-[#202124] leading-[1.4] tracking-[-0.01em] relative"
                >
                  Most agencies focus on the top of the funnel. We focus on what happens after the lead arrives—because{' '}
                  <span className="text-[#C6A24A] italic font-medium">that's where cases are won or lost.</span>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
