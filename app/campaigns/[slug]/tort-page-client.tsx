'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GoldBeam } from '@/components/ui/gold-beam'
import { GradientText } from '@/components/ui/gradient-text'
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
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={24} />
        <GoldBeam position="right" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <Link
                href="/#cases"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4B5563] hover:text-[#C6A24A] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                All active reviews
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C6A24A]/10 text-[#C6A24A] border border-[#C6A24A]/20 shadow-[0_8px_20px_rgba(198,162,74,0.15)]">
                <Icon className="w-7 h-7" />
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#9B7830] bg-[#C6A24A]/10 border border-[#C6A24A]/20 rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A24A] animate-pulse" />
                Active Litigation Review
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-[#202124] mb-5"
            >
              {tort.name}{' '}
              <GradientText animationSpeed={5}>Lawsuit Review</GradientText>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="text-lg md:text-xl text-[#4B5563] leading-[1.7] mb-8 max-w-3xl"
            >
              {tort.heroSummary}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: Check, text: 'Free case review' },
                { icon: Lock, text: 'Confidential' },
                { icon: Clock, text: 'About 2 minutes' },
              ].map(({ icon: PillIcon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[rgba(198,162,74,0.25)] text-sm text-[#4B5563] shadow-[0_2px_10px_rgba(32,33,36,0.04)]"
                >
                  <PillIcon className="w-4 h-4 text-[#C6A24A]" />
                  {text}
                </span>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
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
              <span className="text-sm text-[#6B7280]">
                No upfront cost — you decide whether to move forward.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.span
              {...fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
            >
              Overview
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-8"
            >
              What is the {tort.name} litigation about?
            </motion.h2>
            <div className="space-y-5">
              {tort.overview.map((para, i) => (
                <motion.p
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.05 }}
                  className="text-[#4B5563] text-lg leading-[1.8]"
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
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-serif text-3xl md:text-4xl font-bold mb-8"
              >
                What the lawsuits allege
              </motion.h2>
              <ul className="space-y-4">
                {tort.allegations.map((item, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.06 }}
                    className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-4"
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
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-serif text-3xl md:text-4xl font-bold mb-8"
              >
                Current litigation status
              </motion.h2>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="rounded-2xl border border-[#C6A24A]/25 bg-[#C6A24A]/[0.06] p-6 md:p-8"
              >
                <p className="text-[rgba(255,255,255,0.8)] leading-[1.8] mb-6">{tort.status}</p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6A24A] hover:text-[#D8BC72] transition-colors"
                >
                  Check if your experience may fit
                  <ArrowRight className="w-4 h-4" />
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
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-8"
              >
                Who may qualify
              </motion.h2>
              <ul className="space-y-3.5">
                {tort.eligibility.map((item, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[#C6A24A]/12 text-[#9B7830] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[#4B5563] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
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
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-8"
              >
                Conditions being evaluated
              </motion.h2>
              <div className="flex flex-wrap gap-2.5">
                {tort.injuries.map((injury, i) => (
                  <motion.span
                    key={injury}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.04 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E4E1D8] text-sm text-[#4B5563] shadow-[0_2px_8px_rgba(32,33,36,0.04)]"
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
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-10 text-center"
            >
              {tort.name} FAQ
            </motion.h2>
            <div className="space-y-3">
              {tort.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.05 + i * 0.05 }}
                  className="content-card rounded-2xl overflow-hidden"
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
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[#4B5563] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
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
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-4">
                Start Your {tort.name} Review
              </h2>
              <p className="text-lg text-[#4B5563] max-w-xl mx-auto">
                The {tort.shortLabel} campaign is pre-selected below. Tell us what happened — a
                specialist will review whether your information may fit the current criteria.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
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
