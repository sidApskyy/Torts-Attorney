'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { GoldBeam } from '@/components/ui/gold-beam'
import { Check, ChevronDown } from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease },
}

const campaigns = [
  'Camp Lejeune',
  'AFFF',
  'Roundup',
  'Ozempic',
  'NEC',
  'Depo Provera',
  'PFAS',
  'Hernia Mesh',
  'Talcum Powder',
  'Other / Not sure',
]

const steps = [
  {
    title: 'Your information is received',
    copy: 'Your responses are captured with the campaign information associated with the form.',
  },
  {
    title: 'The information is screened',
    copy: 'The submission is checked against the campaign\'s current criteria.',
  },
  {
    title: 'A follow-up may occur',
    copy: 'If the information appears to fit, you may be contacted using the methods described in the applicable disclosure and consent language.',
  },
  {
    title: 'A participating law firm may review',
    copy: 'If appropriate, your information may be shared with a participating law firm or other disclosed recipient.',
  },
  {
    title: 'The law firm decides next steps',
    copy: 'A law firm may request additional information, decline the matter or determine whether it can provide representation.',
  },
]

const faqs = [
  {
    q: 'Is The Torts Attorney a law firm?',
    a: 'No. We provide legal marketing and case-acquisition services. We are not a law firm and do not provide legal advice or legal representation.',
  },
  {
    q: 'Does submitting the form mean I have hired a lawyer?',
    a: 'No. Submitting information does not create an attorney-client relationship.',
  },
  {
    q: 'What happens to the information I provide?',
    a: 'Your information is handled according to the applicable privacy policy and the disclosures presented with the form. It may be shared with participating law firms or other disclosed recipients for the purposes described.',
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
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative overflow-hidden bg-[#F8F8F6] text-[#202124]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center py-24 md:py-32 overflow-hidden">
        <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={24} />
        <GoldBeam position="right" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              {...fadeUp}
              className="inline-block text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#C6A24A] mb-6"
            >
              Information
            </motion.span>
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.02em] text-[#202124] mb-6"
            >
              Questions About a Possible Legal Claim?
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg md:text-xl text-[#4B5563] leading-[1.7] mb-8 max-w-2xl"
            >
              You may have questions about what happened, whether your situation fits the current criteria and what options may be available. Answer a few questions to see whether you may qualify for a follow-up with a participating law firm.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="#victim-form">
                <Button variant="red" size="lg" className="text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]">
                  See If This May Fit
                </Button>
              </a>
              <span className="text-sm text-[#4B5563]">
                It only takes a few minutes to provide the basic information needed for an initial screening.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-8 text-center"
            >
              You deserve to know what happens next.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg md:text-xl text-[#4B5563] leading-[1.8] text-center"
            >
              We know that sharing personal information about an injury or possible legal claim can feel uncomfortable. That is why the process should be clear. You will be asked for information relevant to the campaign. Your responses may be reviewed against the campaign&apos;s criteria. If your information appears to fit, it may be shared with a participating law firm or other disclosed recipient for follow-up. Submitting information does not create an attorney-client relationship and does not guarantee that a law firm will accept a case.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who may qualify */}
      <section className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-6 text-center"
            >
              Who may qualify?
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg text-[#4B5563] text-center mb-10 max-w-2xl mx-auto"
            >
              You may be a potential fit if you:
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                'Used or were exposed to a product or condition covered by a campaign',
                'Experienced a relevant condition or injury',
                'Were exposed during the relevant period',
                'Meet applicable age or geographic criteria',
                'Are not excluded by the campaign\'s current criteria',
              ].map((item, i) => (
                <div key={i} className="content-card p-5 flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#C6A24A]/10 flex items-center justify-center text-[#C6A24A]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-[#4B5563] leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-sm text-[#4B5563] text-center mt-8 max-w-2xl mx-auto"
            >
              These examples are general information only. Actual eligibility depends on the current campaign criteria and review by the participating law firm.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-12 text-center"
            >
              What happens after you submit?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                  className="content-card p-6 h-full"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#C6A24A]/10 text-[#C6A24A] font-serif text-sm font-bold mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#202124] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{step.copy}</p>
                </motion.div>
              ))}
            </div>
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
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                  className="bg-white rounded-2xl p-6 border border-[rgba(198,162,74,0.12)] shadow-sm"
                >
                  <h3 className="font-serif text-lg font-bold text-[#202124] mb-3">{faq.q}</h3>
                  <p className="text-[#4B5563] leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form / Final CTA */}
      <section id="victim-form" className="py-16 md:py-24 bg-[#F8F8F6] relative overflow-hidden">
        <AnimatedGradientBackground colors={['#C6A24A', '#F5F7FA', '#E4E1D8']} speed={28} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-[24px] rounded-3xl p-8 md:p-12 border border-[rgba(198,162,74,0.15)] shadow-[0_8px_40px_rgba(32,33,36,0.06)]">
            {!submitted ? (
              <>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#202124] mb-4 text-center">
                  Ready to see whether you may qualify?
                </h2>
                <p className="text-[#4B5563] text-center mb-8">
                  Start with the basic information. If your situation appears to fit the current campaign criteria, the next step can be explained to you clearly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input required placeholder="First name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="bg-white" />
                    <Input required placeholder="Last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="bg-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-white" />
                    <Input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input required placeholder="ZIP code" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} className="bg-white" />
                    <div className="relative">
                      <select
                        required
                        value={form.campaign}
                        onChange={(e) => setForm({ ...form, campaign: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-[#E4E1D8] bg-white text-[#202124] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#C6A24A] focus:border-transparent"
                      >
                        <option value="" disabled>Select a campaign</option>
                        {campaigns.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
                    </div>
                  </div>
                  <Textarea
                    placeholder="Briefly describe what happened (optional)"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="min-h-[120px] bg-white"
                  />
                  <label className="flex items-start gap-3 text-sm text-[#4B5563]">
                    <input
                      required
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-[#C6A24A]/30 text-[#C6A24A] focus:ring-[#C6A24A]"
                    />
                    <span>
                      I agree to the Privacy Policy and consent to be contacted about a possible case review. Submitting this form does not create an attorney-client relationship.
                    </span>
                  </label>
                  <div className="pt-2">
                    <Button type="submit" variant="red" size="lg" className="w-full text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]">
                      See If This May Fit
                    </Button>
                    <p className="text-xs text-[#4B5563] text-center mt-4">
                      Your information is handled according to our Privacy Policy and the disclosures presented with this form. Please review them before submitting.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#C6A24A]/10 flex items-center justify-center mx-auto mb-6 text-[#C6A24A]">
                  <Check className="w-8 h-8" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#202124] mb-4">Thanks. Your information has been received.</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  Your submission may be reviewed against the current campaign criteria. If the information appears to fit, you may be contacted using the methods described in the applicable disclosure and consent language.
                </p>
                <p className="text-sm text-[#4B5563]">
                  Submitting this form does not guarantee legal representation or acceptance of a claim.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final disclaimer */}
      <section className="py-10 bg-[#F1F3F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#4B5563] text-center max-w-3xl mx-auto">
            Information on this page is for general informational and marketing purposes and is not legal advice. We are not a law firm. No attorney-client relationship is created by submitting this form.
          </p>
        </div>
      </section>
    </div>
  )
}
