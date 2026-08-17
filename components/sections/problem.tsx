'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'

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

  // GPU-accelerated opacity crossfade for background gradients (avoids repaint)
  const bgLayer1Opacity = useTransform(sectionProgress, [0, 0.4, 0.6], [1, 0.5, 0])
  const bgLayer2Opacity = useTransform(sectionProgress, [0.3, 0.5, 0.7], [0, 1, 0.5])
  const bgLayer3Opacity = useTransform(sectionProgress, [0.6, 0.8, 1], [0, 0.5, 1])

  return (
    <section ref={sectionRef} className="bg-[#1A1A1F] py-24 md:py-32 lg:py-40 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Ambient gradient — opacity crossfade between 3 static layers (GPU-accelerated) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(198, 162, 74, 0.08), transparent 50%)',
            opacity: prefersReducedMotion ? 1 : bgLayer1Opacity,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 80% 50%, rgba(198, 162, 74, 0.10), transparent 50%)',
            opacity: prefersReducedMotion ? 0 : bgLayer2Opacity,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.04), transparent 50%)',
            opacity: prefersReducedMotion ? 0 : bgLayer3Opacity,
          }}
        />
      </div>

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A]/30 to-transparent pointer-events-none" />

      {/* Floating gold dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="gold-dust-particle"
            style={{
              left: `${5 + i * 6.5}%`,
              bottom: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${7 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* ── HEADING: Asymmetric layout — left-aligned heading, image on right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 md:mb-28 items-center">
            {/* Left — heading (7 cols) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px bg-[#C6A24A]"
                />
                <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                  The Form Is Only the Beginning
                </span>
              </motion.div>

              <TextReveal
                as="h2"
                id="problem-heading"
                delay={0.2}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] text-left"
              >
                <GradientText animationSpeed={5}>
                  A lead is only valuable if the next steps hold up.
                </GradientText>
              </TextReveal>

              <motion.p
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, letterSpacing: '0.3em', filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, letterSpacing: '0em', filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-2xl leading-[1.7] text-left"
              >
                A campaign can generate responses and still underperform. The real questions begin after the form is submitted: Was the prospect contacted quickly? Did the intake team ask the right questions? Was the record actually qualified? Were missing documents followed up on? Did the opportunity reach the right law firm?
              </motion.p>
            </div>

            {/* Right — architectural image (5 cols) */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full overflow-hidden rounded-3xl group"
                style={{ aspectRatio: '4/5' }}
              >
                <motion.div
                  style={{ y: prefersReducedMotion ? 0 : useTransform(sectionProgress, [0, 1], ['-3%', '3%']) }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/image 1.png"
                    alt="Classical courthouse columns at dusk"
                    fill
                    sizes="(max-width: 1024px) 0px, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                  />
                </motion.div>
                {/* Gold tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1F]/60 via-transparent to-[#C6A24A]/10 pointer-events-none" />
                {/* Subtle inner border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-[#C6A24A]/20 pointer-events-none" />
              </motion.div>
            </div>
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
                  className="flex items-center gap-3 sm:gap-4 md:gap-6 group"
                >
                  {/* Stage label — slides in from left */}
                  <div className="w-20 sm:w-36 md:w-48 flex-shrink-0">
                    <motion.p
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                      className="text-xs sm:text-sm md:text-base font-medium text-[rgba(255,255,255,0.85)] transition-colors group-hover:text-[#C6A24A]"
                    >
                      {stage.label}
                    </motion.p>
                  </div>

                  {/* Bar — width fill with number inside */}
                  <div className="flex-1 bg-[rgba(255,255,255,0.06)] rounded-[12px] h-10 sm:h-12 md:h-14 relative overflow-hidden">
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
                        className="text-xs sm:text-sm md:text-base font-semibold text-[#202124] drop-shadow-sm tabular-nums relative z-10 whitespace-nowrap"
                      >
                        {stage.value}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Percentage + drop-off — fade in from right */}
                  <div className="w-16 sm:w-24 md:w-32 flex-shrink-0 text-right flex flex-col items-end">
                    <motion.p
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
                      className="text-xs sm:text-sm md:text-base font-medium text-[rgba(255,255,255,0.85)] tabular-nums"
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
              <div className="w-20 sm:w-36 md:w-48 flex-shrink-0" />
              <div className="flex-1 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#C6A24A]/40 to-[#C6A24A]/10" />
                <span className="text-base sm:text-lg md:text-xl font-semibold text-[#C6A24A] tabular-nums whitespace-nowrap">
                  84% of leads never become retainers
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-[#C6A24A]/40 to-[#C6A24A]/10" />
              </div>
              <div className="w-16 sm:w-24 md:w-32 flex-shrink-0" />
            </motion.div>

            {/* Disclosure */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-10 text-center text-sm text-[rgba(255,255,255,0.35)] italic"
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
              <div className="max-w-4xl mx-auto p-10 md:p-16 relative overflow-hidden rounded-2xl border border-[rgba(198,162,74,0.15)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm">
                {/* Accent bar — scroll-driven grow from top */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#C6A24A] to-[#9B7830] origin-top"
                  style={{ scaleY: prefersReducedMotion ? 1 : accentBarScaleY }}
                />

                {/* Subtle static gradient sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/5 to-transparent pointer-events-none" />

                {/* Text — scroll-driven clip-path wipe reveal */}
                <motion.p
                  style={{
                    clipPath: prefersReducedMotion ? 'inset(0 0 0 0)' : insightClipPath,
                  }}
                  className="font-serif text-2xl md:text-3xl text-[rgba(255,255,255,0.9)] leading-[1.4] tracking-[-0.01em] relative"
                >
                  That is where we put our attention:{' '}
                  <span className="text-[#C6A24A] italic font-medium">what happens after the response.</span>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
