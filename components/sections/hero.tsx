'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RollingCounter } from '@/components/ui/rolling-counter'
import { ScrollExpand } from '@/components/ui/scroll-expand'
import { MoltenMetal } from '@/components/ui/molten-metal'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { GradientText } from '@/components/ui/gradient-text'
import { ProgressRing } from '@/components/ui/progress-ring'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section aria-labelledby="hero-heading" className="relative bg-[#F8F8F6]">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[80px] sm:blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)' }}
        />
        <div
          className="absolute bottom-[5%] right-[10%] w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.08), transparent 70%)' }}
        />
      </div>

      {/* Architectural grid overlay */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(32, 33, 36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 33, 36,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* ── ScrollExpand hero ── */}
      <div className="relative z-[2]">
        <ScrollExpand
          mediaContent={
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
              <img
                src="/background hero.png"
                alt="Lady Justice with columns and law book"
                draggable={false}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
              <MoltenMetal
                color1="#F5F7FA"
                color2="#C6A24A"
                color3="#FFFFFF"
                speed={0.3}
                scale={5}
                detail={4}
                glow={2.2}
                coreSize={0.14}
                swirl={1.5}
                fold={-0.3}
                blackPoint={0.04}
                brightness={1.6}
                colorMode="molten"
                grain={true}
                grainIntensity={0.03}
                mouseInteraction={true}
                mouseStrength={0.35}
                opacity={0.85}
                className="molten-overlay"
              />
            </div>
          }
          scrollHint="Scroll"
          startWidth={55}
          startHeight={80}
          startRadius={24}
          endRadius={0}
          mediaZoom={1.2}
          scrollDistance={0.45}
          holdDistance={0.15}
          smoothing={0}
          overlayScrim={0.88}
          useWindowScroll
          className="scroll-expand-hero"
        >
          {/* Overlay — only the essential hero message */}
          <div className="max-w-2xl mx-auto px-4 sm:px-8 relative" style={{ textShadow: '0 2px 24px rgba(32,33,36,0.5)' }}>
            {/* Dedicated text backdrop — guarantees readability over any shader state */}
            <div className="absolute inset-0 -mx-4 -my-6 sm:-mx-8 rounded-[24px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 50% 40% at center, rgba(248,248,246,0.72) 0%, rgba(248,248,246,0.3) 55%, transparent 100%)',
              }}
            />
            <div className="relative">
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-[#202124] font-medium tracking-[0.2em] uppercase mb-4 sm:mb-5 lg:mb-7"
              style={{ opacity: 0.85 }}
            >
              PLAINTIFF ACQUISITION, BUILT AROUND THE WAY YOUR FIRM WORKS
            </motion.p>

            <motion.h2
              id="hero-heading"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-6 lg:mb-8"
            >
              <GradientText animationSpeed={5}>
                Bring More of the Right<br />
                Opportunities to Your Firm.
              </GradientText>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-[1.7] mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto"
              style={{ opacity: 0.92 }}
            >
              We help mass tort and personal injury firms plan, launch, qualify and track plaintiff-acquisition campaigns — from the first response through intake, retainer workflow and law-firm delivery.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <MagneticButton strength={0.25} className="rounded-full">
                  <Button variant="red" size="lg" className="text-base">
                    Talk Through a Campaign
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/campaign-intelligence">
                <MagneticButton strength={0.25} className="rounded-full">
                  <Button variant="outline" size="lg" className="text-base border-[#E4E1D8] text-[#202124] hover:bg-[rgba(32,33,36,0.95)] hover:border-[#C6A24A]/50 hover:text-[#9B7830]">
                    See Current Campaigns
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
            </div>
          </div>
        </ScrollExpand>
      </div>

      {/* ── Stats strip — sits below the ScrollExpand, clean and spacious ── */}
      <div className="relative z-[3] bg-[#F8F8F6] border-t border-[#E4E1D8]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <ProgressRing value={97} max={100} size={110} strokeWidth={3} delay={0.2}>
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#202124] tabular-nums">
                  <RollingCounter value={9712} duration={3.5} />
                </p>
              </ProgressRing>
              <p className="text-base md:text-lg text-[#4B5563] mt-3">Responses Processed</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <ProgressRing value={16} max={100} size={110} strokeWidth={3} delay={0.4} color="#C6A24A">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#C6A24A] tabular-nums">
                  <RollingCounter value={16} duration={3.5} format="percent" />
                </p>
              </ProgressRing>
              <p className="text-base md:text-lg text-[#4B5563] mt-3">Retainer Completion Rate</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <ProgressRing value={100} max={100} size={110} strokeWidth={3} delay={0.6}>
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#202124] tabular-nums">
                  <RollingCounter value={10} duration={3.5} />
                </p>
              </ProgressRing>
              <p className="text-base md:text-lg text-[#4B5563] mt-3">Pipeline Stages Tracked</p>
            </motion.div>
          </div>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-[#6B7280] max-w-lg leading-[1.7] mt-10 mx-auto sm:mx-0 text-center sm:text-left"
          >
            The Torts Attorney provides legal marketing and case-acquisition services. We are not a law firm and do not provide legal advice or legal representation.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
