'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { submitContactForm } from '../actions/contact'

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
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm md:text-base font-medium tracking-widest uppercase text-[#C6A24A] mb-4"
              >
                Contact
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Build Your Acquisition System
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Let's discuss how we can build a plaintiff acquisition system tailored to your firm's goals and capacity.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-[#F5F7FA] py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-6">
                  Schedule a Consultation
                </h2>
                <p className="text-lg md:text-xl text-[#4B5563]">
                  Fill out the form below and we'll be in touch to discuss your acquisition needs.
                </p>
              </motion.div>

              {submitStatus?.type === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-10 p-8 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-lg"
                >
                  <p className="text-[#202124] text-center font-medium text-lg">
                    {submitStatus.message}
                  </p>
                </motion.div>
              )}

              {submitStatus?.type === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-10 p-8 bg-[#B85C5C]/10 border border-[#B85C5C]/30 rounded-lg"
                >
                  <p className="text-[#B85C5C] text-center font-medium text-lg">
                    {submitStatus.message}
                  </p>
                </motion.div>
              )}

              <Card className="bg-[#F1F3F5] border-[rgba(32, 33, 36,0.28)] p-10 md:p-12 shadow-premium-lg border-sheen">
                <form onSubmit={handleSubmit} className="space-y-8">
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
                    <Button
                      type="submit"
                      variant="red"
                      size="lg"
                      className="w-full text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]"
                      disabled={isPending}
                    >
                      {isPending ? 'Submitting...' : 'Start a Conversation'}
                    </Button>
                  </div>

                  <p className="text-sm text-[#6B7280] text-center">
                    * Required fields
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
    </main>
  )
}
