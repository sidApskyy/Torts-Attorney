'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GoldBeam } from '@/components/ui/gold-beam'
import { GradientText } from '@/components/ui/gradient-text'
import { VictimIntakeForm } from '@/components/victim-intake-form'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  ClipboardList,
  Clock,
  Droplets,
  FileText,
  Flame,
  FlaskConical,
  HeartPulse,
  Leaf,
  Lock,
  Pill,
  Scale,
  Shield,
  Sparkles,
  Syringe,
  TrendingUp,
  Users,
} from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const spring = { type: 'spring' as const, stiffness: 300, damping: 20 }

const campaigns = [
  { label: 'Depo Provera', slug: 'depo-provera', description: 'Possible brain tumor link', hot: true, icon: Syringe },
  { label: 'Ozempic & GLP-1', slug: 'ozempic-glp1', description: 'Stomach paralysis / GI injury', hot: true, icon: Pill },
  { label: 'Camp Lejeune', slug: 'camp-lejeune', description: 'Toxic water exposure', hot: true, icon: Droplets },
  { label: 'AFFF', slug: 'afff', description: 'Firefighting foam exposure', hot: false, icon: Flame },
  { label: 'Roundup', slug: 'roundup', description: 'Non-Hodgkin lymphoma', hot: false, icon: Leaf },
  { label: 'Talcum Powder', slug: 'talcum-powder', description: 'Ovarian / mesothelioma claims', hot: false, icon: Sparkles },
  { label: 'NEC', slug: 'nec-formula', description: 'Infant formula illness', hot: false, icon: Baby },
  { label: 'PFAS', slug: 'pfas', description: 'Forever chemical exposure', hot: false, icon: FlaskConical },
  { label: 'Hernia Mesh', slug: 'hernia-mesh', description: 'Chronic pain / revision', hot: false, icon: HeartPulse },
  { label: 'Other / Not sure', slug: null, description: 'Describe what happened', hot: false, icon: ClipboardList },
]

const steps = [
  {
    icon: FileText,
    title: 'Start with your details',
    copy: 'Complete a short, secure form with the basic information about your experience.',
  },
  {
    icon: Scale,
    title: 'We screen against current criteria',
    copy: 'Your submission is reviewed against the campaign\'s current qualification requirements.',
  },
  {
    icon: Users,
    title: 'A law firm reviews the fit',
    copy: 'If the information appears to match, it may be shared with a participating law firm.',
  },
  {
    icon: ArrowRight,
    title: 'You decide the next step',
    copy: 'You are not obligated to move forward. A firm may request more information or explain your options.',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'No cost to check',
    copy: 'There is no fee to find out whether your information may fit a current campaign.',
  },
  {
    icon: Clock,
    title: 'Confidential review',
    copy: 'Your information is handled according to our Privacy Policy and is only shared with disclosed recipients.',
  },
  {
    icon: Sparkles,
    title: 'No pressure',
    copy: 'You decide whether to continue after a firm explains your options.',
  },
]

const faqs = [
  {
    q: 'Is The Torts Attorney a law firm?',
    a: 'No. We provide legal marketing and case-acquisition services for plaintiff law firms. We are not a law firm and do not provide legal advice or legal representation.',
  },
  {
    q: 'Does submitting the form mean I have hired a lawyer?',
    a: 'No. Submitting information does not create an attorney-client relationship. A participating law firm decides whether it can review or accept a matter.',
  },
  {
    q: 'What happens to the information I provide?',
    a: 'Your information is handled according to our Privacy Policy and the disclosures presented with the form. It may be shared with participating law firms or other disclosed recipients for the purposes described.',
  },
  {
    q: 'Will someone contact me?',
    a: 'If your submission appears to fit the campaign criteria, you may be contacted using the methods described in the applicable disclosure and consent language.',
  },
  {
    q: 'Does completing the form guarantee that I have a case?',
    a: 'No. A form submission is not a legal determination. A participating law firm decides whether it can review or accept a matter.',
  },
  {
    q: 'Do I have to provide every detail right away?',
    a: 'The initial form should collect only the information necessary for the first screening. Additional information may be requested later.',
  },
]

export function VictimLanding() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const searchParams = useSearchParams()

  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolledPast, setScrolledPast] = useState(false)
  const [formInView, setFormInView] = useState(true)
  const [extraCampaign, setExtraCampaign] = useState<string | null>(null)
  const [campaign, setCampaign] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const campaignParam = searchParams.get('campaign')
    if (campaignParam) {
      const exists = campaigns.some((c) => c.label === campaignParam)
      if (!exists) setExtraCampaign(campaignParam)
      setCampaign(campaignParam)
    }
    if (window.location.hash === '#victim-form') {
      const el = document.getElementById('victim-form')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }
  }, [searchParams])

  useEffect(() => {
    const el = document.getElementById('victim-form')
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useMotionValueEvent(scrollY, 'change', (y) => setScrolledPast(y > 560))

  const fadeUp = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease },
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.09 } },
  }

  const item = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 28, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
  }

  const handleOtherClick = () => {
    setCampaign('Other / Not sure')
    document.getElementById('victim-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const showStickyCta = scrolledPast && !formInView && !submitted

  return (
    <div className="relative overflow-hidden bg-[#F8F8F6] text-[#202124]">
      {/* Hero */}
      <section className="relative min-h-svh flex items-center pt-28 pb-20 overflow-hidden">
        <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={24} />
        <GoldBeam position="right" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <motion.span
                {...fadeUp}
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-6"
              >
                <span className="w-8 h-px bg-[#C6A24A]/60" aria-hidden />
                Free. Confidential. No obligation.
              </motion.span>
              <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-[#202124] mb-6"
              >
                See Whether Your Experience May Match a{' '}
                <GradientText animationSpeed={5}>Current Legal Review.</GradientText>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] leading-[1.7] mb-8"
              >
                If you or a family member was exposed to a product, medication, or condition that is now the subject of active litigation, a short review can help you understand whether your information may fit.
              </motion.p>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  { icon: Check, text: 'No upfront cost' },
                  { icon: Lock, text: 'Confidential' },
                  { icon: Clock, text: 'Takes about 2 minutes' },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.span
                    key={text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.4, ease }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[rgba(198,162,74,0.25)] text-sm text-[#4B5563] shadow-[0_2px_10px_rgba(32,33,36,0.04)]"
                  >
                    <Icon className="w-4 h-4 text-[#C6A24A]" />
                    {text}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <motion.a
                  href="#victim-form"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                  transition={spring}
                >
                  <Button
                    variant="red"
                    size="lg"
                    className="text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]"
                  >
                    See If This May Fit
                  </Button>
                </motion.a>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[#4B5563] hover:text-[#C6A24A] transition-colors"
                >
                  Prefer to talk? Contact our intake team
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="w-full"
            >
              <VictimIntakeForm
                campaign={campaign}
                onCampaignChange={setCampaign}
                campaignOptions={[
                  ...(extraCampaign ? [extraCampaign] : []),
                  ...campaigns.map((c) => c.label),
                ]}
                onSubmitted={() => setSubmitted(true)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active cases */}
      <section id="cases" className="py-16 md:py-24 bg-white relative scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.span
              {...fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4 text-center"
            >
              Active Reviews
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-4 text-center"
            >
              Mass Tort &amp; Class Action Cases
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg text-[#4B5563] text-center mb-12 max-w-2xl mx-auto"
            >
              Select a topic to start your review. If your situation matches the current criteria, your information may be shared with a participating law firm for follow-up.
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {campaigns.map((c, index) => {
                const Icon = c.icon
                // "Other / Not sure" has no dedicated page — it selects inline.
                const selected = c.slug === null && campaign === c.label

                const cardBody = (
                  <>
                    {/* Shine sweep on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[rgba(198,162,74,0.07)] to-transparent" />
                    </div>
                    {c.hot && !selected && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={spring}
                        className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#C6A24A]/10 text-[#C6A24A] text-xs font-bold uppercase tracking-wide"
                      >
                        <TrendingUp className="w-3 h-3" />
                        Hot
                      </motion.span>
                    )}
                    <div className="relative inline-flex mb-4">
                      {!prefersReducedMotion && !selected && (
                        <motion.span
                          aria-hidden="true"
                          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: 'easeOut',
                            delay: index * 0.4,
                          }}
                          className="absolute inset-0 rounded-xl bg-[#C6A24A]/30 pointer-events-none"
                        />
                      )}
                      <span
                        className={cn(
                          'relative inline-flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300',
                          selected
                            ? 'bg-[#C6A24A] text-white shadow-[0_6px_16px_rgba(198,162,74,0.35)]'
                            : 'bg-[#C6A24A]/10 text-[#C6A24A] group-hover:bg-[#C6A24A]/20 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_8px_20px_rgba(198,162,74,0.25)]'
                        )}
                      >
                        <motion.span
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : { y: [0, -3, 0] }
                          }
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.3,
                          }}
                          className="inline-flex"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.span>
                      </span>
                      {selected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={spring}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#202124] text-white flex items-center justify-center ring-2 ring-white"
                        >
                          <Check className="w-3 h-3" />
                        </motion.span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#202124] mb-1 pr-14">{c.label}</h3>
                    <p className="text-sm text-[#4B5563] mb-4">{c.description}</p>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                        selected ? 'text-[#9B7830]' : 'text-[#C6A24A]'
                      )}
                    >
                      {c.slug
                        ? 'Learn more & check eligibility'
                        : selected
                          ? 'Selected — continue below'
                          : 'See if this may fit'}
                      {selected ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </span>
                  </>
                )

                const cardClass = cn(
                  'text-left content-card p-5 relative rounded-2xl group transition-all duration-300 overflow-hidden hover:border-[#C6A24A]/50 hover:shadow-[0_16px_44px_rgba(198,162,74,0.16)] block h-full',
                  selected && 'border-[#C6A24A] ring-2 ring-[#C6A24A]/25 shadow-[0_12px_36px_rgba(198,162,74,0.14)]'
                )

                if (c.slug) {
                  return (
                    <motion.div
                      key={c.label}
                      variants={item}
                      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                    >
                      <Link
                        href={`/campaigns/${c.slug}`}
                        className={cardClass}
                        aria-label={`${c.label} — learn more and check eligibility`}
                      >
                        {cardBody}
                      </Link>
                    </motion.div>
                  )
                }

                return (
                  <motion.button
                    key={c.label}
                    type="button"
                    variants={item}
                    whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                    onClick={handleOtherClick}
                    aria-pressed={selected}
                    className={cardClass}
                  >
                    {cardBody}
                  </motion.button>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.span
                {...fadeUp}
                className="inline-block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4"
              >
                Simple. Fast. Results-Driven.
              </motion.span>
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124]"
              >
                What to expect after you submit
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  className="content-card p-6 h-full rounded-2xl relative"
                >
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-[#C6A24A]/40"
                    />
                  )}
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#C6A24A] mb-3">
                    Step {i + 1}
                  </span>
                  <motion.span
                    whileHover={prefersReducedMotion ? undefined : { rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C6A24A]/10 text-[#C6A24A] mb-4"
                  >
                    <step.icon className="w-5 h-5" />
                  </motion.span>
                  <h3 className="font-serif text-lg font-bold text-[#202124] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{step.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.span
              {...fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4 text-center"
            >
              Why Us
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-12 text-center"
            >
              Why start with The Torts Attorney?
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    variants={item}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    className="content-card p-6 h-full rounded-2xl"
                  >
                    <motion.span
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.12, rotate: 5 }}
                      transition={spring}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C6A24A]/10 text-[#C6A24A] mb-4"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.span>
                    <h3 className="font-serif text-lg font-bold text-[#202124] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{benefit.copy}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F1F3F5] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.span
              {...fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-4 text-center"
            >
              FAQ
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-10 text-center"
            >
              Questions people commonly ask
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <motion.div
                    key={i}
                    variants={item}
                    className={cn(
                      'bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300',
                      isOpen
                        ? 'border-[#C6A24A]/40 shadow-[0_8px_24px_rgba(198,162,74,0.10)]'
                        : 'border-[rgba(198,162,74,0.12)]'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`victim-faq-panel-${i}`}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                    >
                      <h3 className="font-serif text-lg font-bold text-[#202124] pr-4 group-hover:text-[#9B7830] transition-colors">
                        {faq.q}
                      </h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease }}
                        className={cn(
                          'shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300',
                          isOpen ? 'bg-[#C6A24A] text-white' : 'bg-[#C6A24A]/10 text-[#C6A24A]'
                        )}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`victim-faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#4B5563] leading-relaxed px-6 pb-6">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-[#202124] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <AnimatedGradientBackground colors={['#C6A24A', '#202124', '#4B5563']} speed={32} />
        </div>
        <GoldBeam position="right" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              {...fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Get Answers. Move Forward.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg text-[#E4E1D8] mb-8 max-w-2xl mx-auto"
            >
              Start with a free, confidential review. If your situation appears to match a current campaign, the next steps will be explained clearly.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#victim-form"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                transition={spring}
              >
                <Button
                  variant="red"
                  size="lg"
                  className="text-sm shadow-[0_4px_14px_rgba(198,162,74,0.2)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.28)]"
                >
                  See If This May Fit
                </Button>
              </motion.a>
              <Link
                href="/contact"
                className="text-sm font-medium text-[#E4E1D8] hover:text-white transition-colors"
              >
                Talk to an intake specialist
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pt-10 pb-24 lg:py-10 bg-[#F1F3F5]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#4B5563] text-center max-w-3xl mx-auto">
            This website is attorney advertising. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes. We are not a law firm and do not provide legal advice or legal representation.
          </p>
        </div>
      </motion.section>

      {/* Sticky mobile CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.a
            key="sticky-cta"
            href="#victim-form"
            aria-label="Jump to the review form"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            exit={{ y: '110%' }}
            transition={{ duration: 0.4, ease }}
            className="fixed bottom-0 inset-x-0 z-40 block lg:hidden"
          >
            <div className="flex items-center justify-between gap-3 bg-[#202124]/95 border-t border-[#C6A24A]/30 px-5 pr-20 pt-3.5 pb-[max(env(safe-area-inset-bottom),0.875rem)]">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white leading-tight">Free, confidential review</p>
                <p className="text-[11px] text-[#C9CDD4] leading-tight mt-0.5">
                  See if your experience may fit — about 2 min
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#B89542] to-[#D8BC72] text-white text-xs font-semibold px-4 py-2 shrink-0 shadow-[0_4px_14px_rgba(198,162,74,0.3)]">
                Start
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
