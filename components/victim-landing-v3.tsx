'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GoldBeam } from '@/components/ui/gold-beam'
import { cn } from '@/lib/utils'
import {
  Check,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  FileText,
  Scale,
  Users,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
} from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const spring = { type: 'spring' as const, stiffness: 300, damping: 20 }

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const popIn = {
  initial: { opacity: 0, scale: 0.96, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -10 },
  transition: { duration: 0.35, ease },
}

const campaigns = [
  { label: 'Depo Provera', description: 'Possible brain tumor link', hot: true },
  { label: 'Ozempic & GLP-1', description: 'Stomach paralysis / GI injury', hot: true },
  { label: 'Camp Lejeune', description: 'Toxic water exposure', hot: true },
  { label: 'AFFF', description: 'Firefighting foam exposure', hot: false },
  { label: 'Roundup', description: 'Non-Hodgkin lymphoma', hot: false },
  { label: 'Talcum Powder', description: 'Ovarian / mesothelioma claims', hot: false },
  { label: 'NEC', description: 'Infant formula illness', hot: false },
  { label: 'PFAS', description: 'Forever chemical exposure', hot: false },
  { label: 'Hernia Mesh', description: 'Chronic pain / revision', hot: false },
  { label: 'Other / Not sure', description: 'Describe what happened', hot: false },
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
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash === '#victim-form') {
      const el = document.getElementById('victim-form')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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

  const handleCampaignClick = (label: string) => {
    setForm((prev) => ({ ...prev, campaign: label }))
    const el = document.getElementById('victim-form')
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative overflow-hidden bg-[#F8F8F6] text-[#202124]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={24} />
        <GoldBeam position="right" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <motion.span
                {...fadeUp}
                className="inline-block text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-6"
              >
                Free. Confidential. No obligation.
              </motion.span>
              <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-[#202124] mb-6"
              >
                See Whether Your Experience May Match a Current Legal Review.
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
                {['No upfront cost', 'Confidential', 'No pressure'].map((pill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.4, ease }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[rgba(198,162,74,0.2)] text-sm text-[#4B5563] cursor-default"
                  >
                    <Check className="w-4 h-4 text-[#C6A24A]" />
                    {pill}
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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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
              initial={{ opacity: 0, x: 40, rotateY: -8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="w-full [perspective:1200px]"
            >
              <motion.div
                id="victim-form"
                whileHover={{ y: -6, rotateX: 1 }}
                transition={spring}
                className="bg-white/80 backdrop-blur-[24px] rounded-3xl p-6 md:p-8 border border-[rgba(198,162,74,0.15)] shadow-[0_12px_48px_rgba(32,33,36,0.08)] [transform-style:preserve-3d]"
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      {...popIn}
                      className="space-y-4"
                    >
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-2">
                        Begin Your Secure Review
                      </h2>
                      <p className="text-[#4B5563] text-sm mb-6">
                        Complete the form below. A case specialist may follow up if your information appears to fit.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <motion.div className="group" whileFocus={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Input required placeholder="First name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(198,162,74,0.15)]" />
                          </motion.div>
                          <motion.div whileFocus={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Input required placeholder="Last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(198,162,74,0.15)]" />
                          </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <motion.div whileFocus={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(198,162,74,0.15)]" />
                          </motion.div>
                          <motion.div whileFocus={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(198,162,74,0.15)]" />
                          </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <motion.div whileFocus={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Input required placeholder="ZIP code" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} className="bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(198,162,74,0.15)]" />
                          </motion.div>
                          <div className="relative transition-all duration-200 focus-within:shadow-[0_0_0_3px_rgba(198,162,74,0.15)] rounded-md bg-white">
                            <select
                              required
                              value={form.campaign}
                              onChange={(e) => setForm({ ...form, campaign: e.target.value })}
                              className="w-full h-10 px-3 rounded-md border border-[#E4E1D8] bg-white text-[#202124] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#C6A24A] focus:border-transparent"
                            >
                              <option value="" disabled>Select a campaign</option>
                              {campaigns.map((c) => (
                                <option key={c.label} value={c.label}>{c.label}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
                          </div>
                        </div>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <Textarea
                            placeholder="Briefly describe what happened (optional)"
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                            className="min-h-[100px] bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(198,162,74,0.15)]"
                          />
                        </motion.div>
                        <label className="flex items-start gap-3 text-sm text-[#4B5563] cursor-pointer group">
                          <input
                            required
                            type="checkbox"
                            checked={form.consent}
                            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                            className="mt-1 w-4 h-4 rounded border-[#C6A24A]/30 text-[#C6A24A] focus:ring-[#C6A24A] transition-all"
                          />
                          <span>
                            I agree to the{' '}
                            <Link href="/legal/privacy" className="underline text-[#C6A24A] hover:text-[#202124]">Privacy Policy</Link>
                            {' '}and consent to be contacted. Submitting this form does not create an attorney-client relationship.
                          </span>
                        </label>
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={spring}>
                          <Button
                            type="submit"
                            variant="red"
                            size="lg"
                            className="w-full text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]"
                          >
                            See If This May Fit
                          </Button>
                        </motion.div>
                        <p className="text-xs text-[#4B5563] text-center">
                          Your information is handled according to our Privacy Policy and the disclosures presented with this form.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      {...popIn}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ ...spring, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-[#C6A24A]/10 flex items-center justify-center mx-auto mb-6 text-[#C6A24A]"
                      >
                        <Check className="w-8 h-8" />
                      </motion.div>
                      <h2 className="font-serif text-3xl font-bold text-[#202124] mb-4">Thanks. Your information has been received.</h2>
                      <p className="text-[#4B5563] leading-relaxed mb-4">
                        Your submission may be reviewed against the current campaign criteria. If the information appears to fit, you may be contacted using the methods described in the applicable disclosure and consent language.
                      </p>
                      <p className="text-sm text-[#4B5563]">
                        Submitting this form does not guarantee legal representation or acceptance of a claim.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active cases */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-4 text-center"
            >
              Mass Tort & Class Action Cases
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
              {campaigns.map((campaign) => (
                <motion.button
                  key={campaign.label}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 18px 40px rgba(198,162,74,0.12)' }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleCampaignClick(campaign.label)}
                  className="text-left content-card p-5 relative transition-colors rounded-2xl"
                >
                  {campaign.hot && (
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
                  <h3 className="font-serif text-lg font-bold text-[#202124] mb-1 pr-16">{campaign.label}</h3>
                  <p className="text-sm text-[#4B5563] mb-4">{campaign.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C6A24A] group">
                    See if this may fit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              ))}
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 18px 40px rgba(198,162,74,0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  className="content-card p-6 h-full rounded-2xl cursor-default"
                >
                  <motion.span
                    whileHover={{ rotate: [0, -8, 8, 0] }}
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
            <motion.h2
              {...fadeUp}
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
                    whileHover={{ y: -8, scale: 1.02, boxShadow: '0 18px 40px rgba(198,162,74,0.12)' }}
                    whileTap={{ scale: 0.98 }}
                    className="content-card p-6 h-full rounded-2xl cursor-default"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: 5 }}
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
            <motion.h2
              {...fadeUp}
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
                      'bg-white rounded-2xl border border-[rgba(198,162,74,0.12)] shadow-sm overflow-hidden transition-shadow duration-300',
                      isOpen ? 'shadow-[0_8px_24px_rgba(198,162,74,0.08)]' : ''
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                    >
                      <h3 className="font-serif text-lg font-bold text-[#202124] pr-4">{faq.q}</h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="shrink-0 w-8 h-8 rounded-full bg-[#C6A24A]/10 text-[#C6A24A] flex items-center justify-center"
                      >
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
        className="py-10 bg-[#F1F3F5]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#4B5563] text-center max-w-3xl mx-auto">
            This website is attorney advertising. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes. We are not a law firm and do not provide legal advice or legal representation.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
