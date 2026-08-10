'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { ScrollExpand } from '@/components/ui/scroll-expand'
import { MoltenMetal } from '@/components/ui/molten-metal'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section aria-labelledby="hero-heading" className="relative bg-[#F8F8F6]">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)' }}
        />
        <div
          className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full blur-[120px]"
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
            <MoltenMetal
              color1="#F5F7FA"
              color2="#C6A24A"
              color3="#FFFFFF"
              speed={0.45}
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
              opacity={0.9}
            />
          }
          scrollHint="Scroll"
          startWidth={70}
          startHeight={80}
          startRadius={24}
          endRadius={0}
          mediaZoom={1.2}
          scrollDistance={0.8}
          holdDistance={0.25}
          smoothing={0.08}
          overlayScrim={0.88}
          useWindowScroll
          className="scroll-expand-hero"
        >
          {/* Overlay — only the essential hero message */}
          <div className="max-w-2xl mx-auto px-6 sm:px-8 relative" style={{ textShadow: '0 2px 24px rgba(32,33,36,0.5)' }}>
            {/* Dedicated text backdrop — guarantees readability over any shader state */}
            <div className="absolute inset-0 -mx-8 -my-6 rounded-[24px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 50% 40% at center, rgba(248,248,246,0.72) 0%, rgba(248,248,246,0.3) 55%, transparent 100%)',
              }}
            />
            <div className="relative">
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-[#202124] font-medium tracking-[0.2em] uppercase mb-8"
              style={{ opacity: 0.85 }}
            >
              Smarter Case Acquisition Starts Here
            </motion.p>

            <motion.h2
              id="hero-heading"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] leading-[1.1] tracking-[-0.02em] mb-10"
            >
              Every Stage. Every Metric.<br />
              <span className="text-[#C6A24A]">Every Signed Retainer.</span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-[1.8] mb-12 max-w-xl mx-auto"
              style={{ opacity: 0.92 }}
            >
              We build and operate plaintiff acquisition systems — from strategy and media through intake, qualification, retainer, delivery, and reporting.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="red" size="lg" className="text-base">
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" className="text-base border-[#E4E1D8] text-[#202124] hover:bg-[rgba(32,33,36,0.95)] hover:border-[#C6A24A]/50 hover:text-[#9B7830]">
                Explore the Acquisition System
              </Button>
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
              className="text-center sm:text-left"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-[#202124] tabular-nums mb-2">
                <AnimatedCounter value={9712} duration={2} />
              </p>
              <p className="text-sm text-[#4B5563]">Pipeline Volume</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center sm:text-left"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-[#C6A24A] tabular-nums mb-2">
                <AnimatedCounter value={16} duration={2} format="percent" />
              </p>
              <p className="text-sm text-[#4B5563]">Retainer Rate</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center sm:text-left"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-[#202124] tabular-nums mb-2">
                <AnimatedCounter value={10} duration={2} />
              </p>
              <p className="text-sm text-[#4B5563]">Lifecycle Stages</p>
            </motion.div>
          </div>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs text-[#6B7280] max-w-lg leading-[1.7] mt-10 mx-auto sm:mx-0 text-center sm:text-left"
          >
            The Torts Attorney provides legal marketing and case-acquisition services to law firms. It is not a law firm and does not provide legal advice.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
