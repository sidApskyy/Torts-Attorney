'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MoltenMetal } from '@/components/ui/molten-metal'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { VictimIntakeForm } from '@/components/victim-intake-form'
import { Button } from '@/components/ui/button'
import { tortBySlug } from '@/lib/torts'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  FileWarning,
  Lock,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const spring = { type: 'spring' as const, stiffness: 300, damping: 20 }

export function TortPageClient({ slug }: { slug: string }) {
  const prefersReducedMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  // Server page already validated the slug via notFound()
  const tort = tortBySlug(slug)!
  const Icon = tort.icon

  const fadeUp = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease },
  }

  const scrollToForm = () => {
    document.getElementById('case-review')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="bg-[#F8F8F6] text-[#202124]">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Molten metal shader — same cinematic backdrop as the other heroes */}
        <div className="absolute inset-0" aria-hidden>
          <MoltenMetal
            color1="#0A0A0A"
            color2="#1A1A1F"
            color3="#000000"
            speed={0.25}
            scale={4}
            detail={5}
            glow={1.2}
            coreSize={0.18}
            swirl={1.2}
            fold={-0.4}
            blackPoint={0.15}
            brightness={0.9}
            colorMode="molten"
            grain={true}
            grainIntensity={0.02}
            mouseInteraction={true}
            mouseStrength={0.3}
            opacity={0.9}
            className="absolute inset-0"
          />
          {/* Cream wash for readability */}
          <div className="absolute inset-0 bg-[rgba(248,248,246,0.55)]" />
        </div>

        {/* Ambient floating orbs */}
        <div
          aria-hidden
          className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb"
          style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.10), transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute bottom-[10%] right-[5%] w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb"
          style={{ background: 'radial-gradient(circle, rgba(32, 33, 36, 0.06), transparent 70%)', animationDelay: '4s' }}
        />
        {/* Radial backdrop behind text for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 45%, rgba(248,248,246,0.55) 0%, rgba(248,248,246,0.25) 45%, transparent 75%)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <Link
                href="/#cases"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4B5563] hover:text-[#C6A24A] transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                All active reviews
              </Link>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C6A24A]/10 text-[#C6A24A] border border-[#C6A24A]/20 shadow-[0_8px_20px_rgba(198,162,74,0.15)]">
                {!prefersReducedMotion && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-2xl bg-[#C6A24A]/30 pointer-events-none"
                  />
                )}
                <Icon className="w-7 h-7 relative" />
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#9B7830] bg-[#C6A24A]/10 border border-[#C6A24A]/20 rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A24A] animate-pulse" />
                Active Litigation Review
              </span>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-[#202124] mb-5"
            >
              {tort.name}{' '}
              <GradientText animationSpeed={5}>Lawsuit Review</GradientText>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-lg md:text-xl text-[#4B5563] leading-[1.7] mb-8 max-w-3xl"
            >
              {tort.heroSummary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: Check, text: 'Free case review' },
                { icon: Lock, text: 'Confidential' },
                { icon: Clock, text: 'About 2 minutes' },
              ].map(({ icon: PillIcon, text }, i) => (
                <motion.span
                  key={text}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[rgba(198,162,74,0.25)] text-sm text-[#4B5563] shadow-[0_2px_10px_rgba(32,33,36,0.04)]"
                >
                  <PillIcon className="w-4 h-4 text-[#C6A24A]" />
                  {text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                transition={spring}
              >
                <Button
                  variant="red"
                  size="lg"
                  onClick={scrollToForm}
                  className="text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]"
                >
                  Start Your Free Review
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <span className="text-sm text-[#6B7280]">
                No upfront cost — you decide whether to move forward.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Gold accent edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A]/40 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.span
              {...fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
            >
              Overview
            </motion.span>
            <TextReveal
              as="h2"
              delay={0.05}
              className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-8"
            >
              What is the {tort.name} litigation about?
            </TextReveal>
            <div className="space-y-5 relative">
              {/* Growing accent line beside the paragraphs */}
              <motion.div
                aria-hidden
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease }}
                className="absolute -left-4 md:-left-6 top-1 bottom-1 w-0.5 bg-gradient-to-b from-[#C6A24A] via-[#C6A24A]/40 to-transparent origin-top"
              />
              {tort.overview.map((para, i) => (
                <motion.p
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.06 }}
                  className="text-[#4B5563] text-lg leading-[1.8] pl-2 md:pl-4"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALLEGATIONS + STATUS ─────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#1A1A1F] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 20% 20%, rgba(198,162,74,0.08), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(198,162,74,0.05), transparent 55%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <motion.span
                {...fadeUp}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
              >
                <FileWarning className="w-4 h-4" />
                The Claims
              </motion.span>
              <TextReveal
                as="h2"
                delay={0.05}
                className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white"
              >
                What the lawsuits allege
              </TextReveal>
              <ul className="space-y-4">
                {tort.allegations.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease }}
                    whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                    className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:border-[#C6A24A]/30 hover:bg-white/[0.06] transition-colors duration-300"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[#C6A24A]/15 text-[#C6A24A] flex items-center justify-center shrink-0">
                      <Scale className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[rgba(255,255,255,0.75)] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.span
                {...fadeUp}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
              >
                <Clock className="w-4 h-4" />
                Where Things Stand
              </motion.span>
              <TextReveal
                as="h2"
                delay={0.05}
                className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white"
              >
                Current litigation status
              </TextReveal>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.15, ease }}
                className="rounded-2xl border border-[#C6A24A]/25 bg-[#C6A24A]/[0.06] p-6 md:p-8 relative overflow-hidden"
              >
                <motion.div
                  aria-hidden
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: [0.4, 0.8, 0.4] }
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent"
                />
                <p className="text-[rgba(255,255,255,0.8)] leading-[1.8] mb-6">{tort.status}</p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6A24A] hover:text-[#D8BC72] transition-colors group"
                >
                  Check if your experience may fit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY + INJURIES ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <motion.span
                {...fadeUp}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
              >
                <ShieldCheck className="w-4 h-4" />
                Eligibility
              </motion.span>
              <TextReveal
                as="h2"
                delay={0.05}
                className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-8"
              >
                Who may qualify
              </TextReveal>
              <ul className="space-y-3.5">
                {tort.eligibility.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      initial={prefersReducedMotion ? undefined : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ ...spring, delay: 0.15 + i * 0.07 }}
                      className="mt-0.5 w-6 h-6 rounded-full bg-[#C6A24A]/12 text-[#9B7830] flex items-center justify-center shrink-0"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </motion.span>
                    <span className="text-[#4B5563] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.35 }}
                className="text-sm text-[#6B7280] mt-6 leading-relaxed"
              >
                Qualification criteria change as litigation develops. The only way to know whether
                your experience may fit the current criteria is a review.
              </motion.p>
            </div>

            <div>
              <motion.span
                {...fadeUp}
                className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
              >
                Injuries &amp; Conditions
              </motion.span>
              <TextReveal
                as="h2"
                delay={0.05}
                className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-8"
              >
                Conditions being evaluated
              </TextReveal>
              <div className="flex flex-wrap gap-2.5">
                {tort.injuries.map((injury, i) => (
                  <motion.span
                    key={injury}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, delay: i * 0.05, ease }}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E4E1D8] text-sm text-[#4B5563] shadow-[0_2px_8px_rgba(32,33,36,0.04)] hover:border-[#C6A24A]/40 hover:text-[#9B7830] transition-colors cursor-default"
                  >
                    {injury}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.span
              {...fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4 text-center"
            >
              Common Questions
            </motion.span>
            <TextReveal
              as="h2"
              delay={0.05}
              className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-10 text-center"
            >
              {tort.name} FAQ
            </TextReveal>
            <div className="space-y-3">
              {tort.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.05 + i * 0.05 }}
                  className={cn(
                    'content-card rounded-2xl overflow-hidden transition-colors duration-300',
                    openFaq === i && 'border-[#C6A24A]/40'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                  >
                    <span className="font-semibold text-[#202124] group-hover:text-[#9B7830] transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-[#C6A24A] shrink-0 transition-transform duration-300',
                        openFaq === i && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[#4B5563] leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTAKE FORM ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F8F8F6] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(198,162,74,0.10), transparent 70%)' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4">
                Free &amp; Confidential
              </span>
              <TextReveal
                as="h2"
                delay={0.05}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-4"
              >
                Start Your {tort.name} Review
              </TextReveal>
              <p className="text-lg text-[#4B5563] max-w-xl mx-auto">
                The {tort.shortLabel} campaign is pre-selected below. Tell us what happened — a
                specialist will review whether your information may fit the current criteria.
              </p>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <VictimIntakeForm
                id="case-review"
                campaign={tort.shortLabel}
                lockedCampaign={tort.shortLabel}
                heading="Check Whether You May Qualify"
                subheading={`You are reviewing: ${tort.name}. Complete the form — a case specialist may follow up if your information appears to fit.`}
              />
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="text-xs text-[#6B7280] text-center mt-8 leading-relaxed max-w-xl mx-auto"
            >
              Attorney advertising. The Torts Attorney provides legal marketing and case-acquisition
              services and is not a law firm. Submitting this form does not create an
              attorney-client relationship and does not guarantee review, acceptance, or any outcome.
              Prior results do not guarantee similar outcomes.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}
