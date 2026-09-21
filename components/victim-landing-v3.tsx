'use client'

import { useEffect, useState, type ReactNode } from 'react'
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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GoldBeam } from '@/components/ui/gold-beam'
import { GradientText } from '@/components/ui/gradient-text'
import { cn } from '@/lib/utils'
import { submitVictimLeadForm } from '@/app/actions/lead'
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
  Loader2,
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

const fieldClass =
  'h-11 rounded-xl border-[#E4E1D8] bg-white px-3.5 text-[#202124] placeholder:text-[#9CA3AF] transition-all duration-200 hover:border-[#C6A24A]/40 focus-visible:border-[#C6A24A]/70 focus-visible:ring-[#C6A24A]/15 focus-visible:shadow-[0_0_0_3px_rgba(198,162,74,0.12)]'

// TrustedForm Certify Web SDK — injects a hidden xxTrustedFormCertUrl
// field into the form and records the session for TCPA consent proof.
// The SDK requires the form to already exist in the DOM when it loads,
// so this component mounts inside the <form> itself.
function TrustedFormLoader() {
  useEffect(() => {
    if (document.querySelector('script[data-trustedform]')) return
    const tf = document.createElement('script')
    tf.type = 'text/javascript'
    tf.async = true
    tf.dataset.trustedform = 'true'
    tf.src =
      'https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
      Date.now() +
      Math.random()
    // Ad blockers/privacy extensions block api.trustedform.com — the form
    // still submits; the lead just travels without a certificate URL.
    tf.onerror = () => {
      console.warn('TrustedForm script blocked — submitting leads without certificate')
    }
    document.body.appendChild(tf)
  }, [])
  return null
}

const campaigns = [
  { label: 'Depo Provera', description: 'Possible brain tumor link', hot: true, icon: Syringe },
  { label: 'Ozempic & GLP-1', description: 'Stomach paralysis / GI injury', hot: true, icon: Pill },
  { label: 'Camp Lejeune', description: 'Toxic water exposure', hot: true, icon: Droplets },
  { label: 'AFFF', description: 'Firefighting foam exposure', hot: false, icon: Flame },
  { label: 'Roundup', description: 'Non-Hodgkin lymphoma', hot: false, icon: Leaf },
  { label: 'Talcum Powder', description: 'Ovarian / mesothelioma claims', hot: false, icon: Sparkles },
  { label: 'NEC', description: 'Infant formula illness', hot: false, icon: Baby },
  { label: 'PFAS', description: 'Forever chemical exposure', hot: false, icon: FlaskConical },
  { label: 'Hernia Mesh', description: 'Chronic pain / revision', hot: false, icon: HeartPulse },
  { label: 'Other / Not sure', description: 'Describe what happened', hot: false, icon: ClipboardList },
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

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold tracking-wide text-[#4B5563]"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export function VictimLanding() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const searchParams = useSearchParams()

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolledPast, setScrolledPast] = useState(false)
  const [formInView, setFormInView] = useState(true)
  const [extraCampaign, setExtraCampaign] = useState<string | null>(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zip: '',
    campaign: '',
    notes: '',
    consent: false,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const campaignParam = searchParams.get('campaign')
    if (campaignParam) {
      const exists = campaigns.some((c) => c.label === campaignParam)
      if (!exists) setExtraCampaign(campaignParam)
      setForm((prev) => ({ ...prev, campaign: campaignParam }))
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
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  }

  const popIn = {
    initial: { opacity: 0, scale: 0.96, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: -10 },
    transition: { duration: 0.35, ease },
  }

  const handleCampaignClick = (label: string) => {
    setForm((prev) => ({ ...prev, campaign: label }))
    document.getElementById('victim-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return
    setSubmitError(null)

    const fd = new FormData(e.currentTarget)
    // Checkbox is controlled — sync it into the payload explicitly
    fd.set('consent', String(form.consent))
    // TrustedForm injects this hidden field after page load — read it at
    // submit time so the certificate URL travels with the lead
    fd.set(
      'trustedFormCertUrl',
      document.querySelector<HTMLInputElement>('input[name="xxTrustedFormCertUrl"]')?.value ?? ''
    )

    setSubmitting(true)
    const result = await submitVictimLeadForm(fd)
    setSubmitting(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setSubmitError(result.error ?? 'Something went wrong. Please try again.')
    }
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
              <div
                id="victim-form"
                className="relative scroll-mt-28 bg-white/85 backdrop-blur-[24px] rounded-3xl p-6 md:p-8 border border-[rgba(198,162,74,0.18)] shadow-[0_12px_48px_rgba(32,33,36,0.10)] overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent"
                />
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" {...popIn}>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-2">
                        Begin Your Secure Review
                      </h2>
                      <p className="text-[#4B5563] text-sm mb-5">
                        Complete the form below. A case specialist may follow up if your information appears to fit.
                      </p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4B5563] pb-5 mb-5 border-b border-[#E4E1D8]">
                        <span className="inline-flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-[#C6A24A]" />
                          Secure &amp; confidential
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#C6A24A]" />
                          About 2 minutes
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#C6A24A]" />
                          No obligation
                        </span>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4" data-tf-element-role="offer">
                        <TrustedFormLoader />
                        {/* Honeypot — bots fill it, humans never see it */}
                        <input
                          type="text"
                          name="company_website"
                          tabIndex={-1}
                          autoComplete="off"
                          className="absolute -left-[9999px] h-0 w-0 opacity-0"
                          aria-hidden="true"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Field id="vf-first-name" label="First name">
                            <Input
                              id="vf-first-name"
                              name="firstName"
                              required
                              autoComplete="given-name"
                              enterKeyHint="next"
                              placeholder="Jane"
                              value={form.firstName}
                              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                              className={fieldClass}
                            />
                          </Field>
                          <Field id="vf-last-name" label="Last name">
                            <Input
                              id="vf-last-name"
                              name="lastName"
                              required
                              autoComplete="family-name"
                              enterKeyHint="next"
                              placeholder="Doe"
                              value={form.lastName}
                              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                              className={fieldClass}
                            />
                          </Field>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Field id="vf-phone" label="Phone number">
                            <Input
                              id="vf-phone"
                              name="phone"
                              required
                              type="tel"
                              autoComplete="tel"
                              enterKeyHint="next"
                              placeholder="(555) 555-5555"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className={fieldClass}
                            />
                          </Field>
                          <Field id="vf-email" label="Email address">
                            <Input
                              id="vf-email"
                              name="email"
                              required
                              type="email"
                              autoComplete="email"
                              enterKeyHint="next"
                              placeholder="you@example.com"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className={fieldClass}
                            />
                          </Field>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Field id="vf-zip" label="ZIP code">
                            <Input
                              id="vf-zip"
                              name="zip"
                              required
                              autoComplete="postal-code"
                              inputMode="numeric"
                              enterKeyHint="next"
                              placeholder="12345"
                              value={form.zip}
                              onChange={(e) => setForm({ ...form, zip: e.target.value })}
                              className={fieldClass}
                            />
                          </Field>
                          <Field id="vf-campaign" label="Campaign or topic">
                            <div className="relative">
                              <select
                                id="vf-campaign"
                                name="campaign"
                                required
                                value={form.campaign}
                                onChange={(e) => setForm({ ...form, campaign: e.target.value })}
                                className={cn(
                                  fieldClass,
                                  'w-full appearance-none pr-10 cursor-pointer',
                                  !form.campaign && 'text-[#9CA3AF]'
                                )}
                              >
                                <option value="" disabled>Select a campaign</option>
                                {extraCampaign && (
                                  <option key={extraCampaign} value={extraCampaign}>{extraCampaign}</option>
                                )}
                                {campaigns.map((c) => (
                                  <option key={c.label} value={c.label}>{c.label}</option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
                            </div>
                          </Field>
                        </div>
                        <Field id="vf-notes" label="What happened (optional)">
                          <Textarea
                            id="vf-notes"
                            name="notes"
                            enterKeyHint="done"
                            placeholder="Briefly describe what happened"
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                            className={cn(fieldClass, 'min-h-[96px] py-2.5 h-auto')}
                          />
                        </Field>
                        <label
                          data-tf-element-role="consent-language"
                          className="flex items-start gap-3 cursor-pointer group rounded-xl border border-[#E4E1D8] bg-[#F8F8F6]/70 p-3.5 transition-colors duration-200 hover:border-[#C6A24A]/50 has-checked:border-[#C6A24A]/60 has-checked:bg-[#C6A24A]/[0.06]"
                        >
                          <input
                            required
                            type="checkbox"
                            checked={form.consent}
                            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                            data-tf-element-role="consent-opt-in"
                            className="mt-0.5 w-4 h-4 shrink-0 accent-[#C6A24A] cursor-pointer"
                          />
                          <span className="text-xs leading-relaxed text-[#4B5563]">
                            By checking the box, you agree to be contacted about your potential case or promotional legal offers sent by or on behalf of{' '}
                            <span data-tf-element-role="consent-advertiser-name" className="font-semibold text-[#202124]">The Torts Attorney</span>, Tortlinks and/or participating law firms. You may receive live calls, automated calls, emails or text messages even if you are on a national or state &ldquo;Do Not Call&rdquo; list. This includes contact even if you are on a Do Not Call registry. Consent is not a condition of any purchase. Contact may include automated dialing or prerecorded messages.
                          </span>
                        </label>
                        {submitError && (
                          <p
                            role="alert"
                            className="text-sm text-[#B85C5C] bg-[#B85C5C]/10 border border-[#B85C5C]/30 rounded-xl px-3.5 py-2.5"
                          >
                            {submitError}
                          </p>
                        )}
                        <motion.div
                          whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
                          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                          transition={spring}
                        >
                          <Button
                            type="submit"
                            variant="red"
                            size="lg"
                            disabled={submitting}
                            data-tf-element-role="submit"
                            className="w-full text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]"
                          >
                            {submitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Submitting…
                              </>
                            ) : (
                              'See If This May Fit'
                            )}
                          </Button>
                        </motion.div>
                        <p className="text-xs text-[#4B5563] text-center">
                          Your information is handled according to our Privacy Policy and the disclosures presented with this form.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" {...popIn} className="text-center py-6">
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ...spring, delay: 0.05 }}
                        className="w-20 h-20 rounded-full bg-[#C6A24A]/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <svg viewBox="0 0 52 52" className="w-11 h-11" aria-hidden>
                          <motion.circle
                            cx="26"
                            cy="26"
                            r="23"
                            fill="none"
                            stroke="#C6A24A"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, ease }}
                          />
                          <motion.path
                            d="M15 27l7 7 15-15"
                            fill="none"
                            stroke="#C6A24A"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 0.45, ease }}
                          />
                        </svg>
                      </motion.div>
                      <h2 className="font-serif text-3xl font-bold text-[#202124] mb-4">Thanks. Your information has been received.</h2>
                      <p className="text-[#4B5563] leading-relaxed mb-6">
                        Your submission may be reviewed against the current campaign criteria. If the information appears to fit, you may be contacted using the methods described in the applicable disclosure and consent language.
                      </p>
                      <ul className="text-left space-y-3 mb-6 max-w-sm mx-auto">
                        {[
                          'Your information is reviewed against current campaign criteria.',
                          'If it appears to fit, a participating law firm may follow up.',
                          'You decide whether to move forward — no obligation.',
                        ].map((text, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#4B5563]">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#C6A24A]/10 text-[#C6A24A] flex items-center justify-center shrink-0 text-[10px] font-bold">
                              {i + 1}
                            </span>
                            {text}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-[#4B5563]">
                        Submitting this form does not guarantee legal representation or acceptance of a claim.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active cases */}
      <section className="py-16 md:py-24 bg-white relative">
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
              {campaigns.map((campaign) => {
                const selected = form.campaign === campaign.label
                const Icon = campaign.icon
                return (
                  <motion.button
                    key={campaign.label}
                    type="button"
                    variants={item}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                    onClick={() => handleCampaignClick(campaign.label)}
                    aria-pressed={selected}
                    className={cn(
                      'text-left content-card p-5 relative rounded-2xl group transition-all duration-300',
                      selected && 'border-[#C6A24A] ring-2 ring-[#C6A24A]/25 shadow-[0_12px_36px_rgba(198,162,74,0.14)]'
                    )}
                  >
                    {campaign.hot && !selected && (
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
                      <span
                        className={cn(
                          'inline-flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-300',
                          selected
                            ? 'bg-[#C6A24A] text-white shadow-[0_6px_16px_rgba(198,162,74,0.35)]'
                            : 'bg-[#C6A24A]/10 text-[#C6A24A]'
                        )}
                      >
                        <Icon className="w-5 h-5" />
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
                    <h3 className="font-serif text-lg font-bold text-[#202124] mb-1 pr-14">{campaign.label}</h3>
                    <p className="text-sm text-[#4B5563] mb-4">{campaign.description}</p>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                        selected ? 'text-[#9B7830]' : 'text-[#C6A24A]'
                      )}
                    >
                      {selected ? 'Selected — continue below' : 'See if this may fit'}
                      {selected ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </span>
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
            <div className="flex items-center justify-between gap-3 bg-[#202124]/95 backdrop-blur-md border-t border-[#C6A24A]/30 px-5 pr-20 pt-3.5 pb-[max(env(safe-area-inset-bottom),0.875rem)]">
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
