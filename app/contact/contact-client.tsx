'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { z } from 'zod'
import { submitContactForm } from '../actions/contact'
import { GradientText } from '@/components/ui/gradient-text'
import { TextReveal } from '@/components/ui/text-reveal'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Turnstile } from '@/components/ui/turnstile'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  challenge: z.string().min(10, 'Please describe your primary challenge'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactClient() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    challenge: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isPending, startTransition] = useTransition()
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [turnstileToken, setTurnstileToken] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)

    // Client-side validation
    try {
      contactSchema.parse(formData)
      setErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
        error.issues.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message
          }
        })
        setErrors(fieldErrors)
      }
      return
    }

    // Server Action submission
    startTransition(async () => {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      formDataObj.append('cf-turnstile-response', turnstileToken)

      const result = await submitContactForm(formDataObj)

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message || 'Form submitted successfully' })
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          website: '',
          challenge: '',
          message: '',
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'An error occurred' })
        if (result.fieldErrors) {
          setErrors(result.fieldErrors as Partial<Record<keyof ContactFormData, string>>)
        }
      }
    })
  }

  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* Architectural grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
          {/* Ambient orbs */}
          <div className="absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none float-orb" style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.06), transparent 70%)' }} />
          <div className="absolute bottom-[5%] right-[10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full blur-[120px] pointer-events-none float-orb" style={{ background: 'radial-gradient(circle, rgba(198, 162, 74, 0.04), transparent 70%)', animationDelay: '4s' }} />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px bg-[#C6A24A]"
                />
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-[#C6A24A]">
                  Contact
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-[-0.02em]"
              >
                <GradientText animationSpeed={5}>
                  Build Your Acquisition System
                </GradientText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-[1.7] mb-8"
              >
                Let's discuss how we can build a plaintiff acquisition system tailored to your firm's goals and capacity.
              </motion.p>
            </div>
          </div>
        </section>

        <div className="section-divider-animated" />

        {/* Contact Form */}
        <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24 relative overflow-hidden">
          {/* Ambient accents */}
          <div className="absolute top-1/4 right-0 w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none float-orb" />
          <div className="absolute bottom-1/4 left-0 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '6s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16 section-heading-glow"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-[#C6A24A]">
                    Schedule a Consultation
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#C6A24A]"
                  />
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-[-0.02em] overflow-hidden">
                  <TextReveal as="span" delay={0.1}>
                    <GradientText animationSpeed={5}>
                      Schedule a Consultation
                    </GradientText>
                  </TextReveal>
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto leading-[1.7]">
                  Fill out the form below and we'll be in touch to discuss your acquisition needs.
                </p>
              </motion.div>

              <AnimatePresence>
                {submitStatus?.type === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 p-8 bg-[#F1F3F5] border border-[#C6A24A]/30 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C6A24A]/3 to-transparent pointer-events-none" />
                    <p className="text-[#202124] text-center font-medium text-lg relative">
                      {submitStatus.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {submitStatus?.type === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 p-8 bg-[#B85C5C]/10 border border-[#B85C5C]/30 rounded-2xl"
                  >
                    <p className="text-[#B85C5C] text-center font-medium text-lg">
                      {submitStatus.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
              <Card className="glass-card bg-[#F1F3F5] border-[rgba(198, 162, 74, 0.15)] p-10 md:p-12 shadow-premium-lg border-sheen relative overflow-hidden">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot field — hidden from users, catches bots */}
                  <input
                    type="text"
                    name="company_website"
                    value=""
                    onChange={() => {}}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none -z-10"
                    style={{ position: 'absolute', left: '-9999px' }}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#202124] mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus text-base"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-2 text-sm text-[#B85C5C]">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#202124] mb-3">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus text-base"
                        placeholder="Law firm name"
                      />
                      {errors.company && <p className="mt-2 text-sm text-[#B85C5C]">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#202124] mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus text-base"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-2 text-sm text-[#B85C5C]">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#202124] mb-3">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus text-base"
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="mt-2 text-sm text-[#B85C5C]">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-[#202124] mb-3">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus text-base"
                      placeholder="https://yourfirm.com"
                    />
                    {errors.website && <p className="mt-2 text-sm text-[#B85C5C]">{errors.website}</p>}
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-[#202124] mb-3">
                      Primary Acquisition Challenge *
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus resize-none text-base"
                      placeholder="Describe your primary acquisition challenge..."
                    />
                    {errors.challenge && <p className="mt-2 text-sm text-[#B85C5C]">{errors.challenge}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#202124] mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg text-[#202124] focus:outline-none focus:border-[#C6A24A] input-premium-focus resize-none text-base"
                      placeholder="Tell us more about your firm and your goals..."
                    />
                    {errors.message && <p className="mt-2 text-sm text-[#B85C5C]">{errors.message}</p>}
                  </div>

                  <div className="pt-4">
                    <MagneticButton strength={0.15} className="rounded-full w-full">
                      <Button
                        type="submit"
                        variant="red"
                        size="lg"
                        className="w-full text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]"
                        disabled={isPending}
                      >
                        {isPending ? 'Submitting...' : 'Start a Conversation'}
                      </Button>
                    </MagneticButton>
                  </div>

                  <p className="text-sm text-[#6B7280] text-center">
                    * Required fields
                  </p>

                  <Turnstile onVerify={setTurnstileToken} className="flex justify-center" />
                </form>
              </Card>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
