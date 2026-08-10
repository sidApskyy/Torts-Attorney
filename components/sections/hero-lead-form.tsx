'use client'

import { useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { submitLeadForm } from '@/app/actions/lead'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  state: z.string().min(1, 'State is required'),
})

type LeadFormData = z.infer<typeof leadSchema>

export function HeroLeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({})
  const [isPending, startTransition] = useTransition()
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof LeadFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)

    try {
      leadSchema.parse(formData)
      setErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {}
        error.issues.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof LeadFormData] = err.message
          }
        })
        setErrors(fieldErrors)
      }
      return
    }

    startTransition(async () => {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await submitLeadForm(formDataObj)

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message || 'Submitted successfully' })
        setFormData({ firstName: '', lastName: '', email: '', phone: '', state: '' })
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'An error occurred' })
        if (result.fieldErrors) {
          setErrors(result.fieldErrors as Partial<Record<keyof LeadFormData, string>>)
        }
      }
    })
  }

  return (
    <div className="relative glass-card p-6 md:p-8">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px] bg-gradient-to-r from-[#C6A24A] to-[#9B7830] opacity-80" />

      <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-2">
        Get Started Today
      </h2>
      <p className="text-sm md:text-base text-[#4B5563] mb-6">
        Tell us about your firm and we&apos;ll be in touch shortly.
      </p>

      {submitStatus?.type === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-[18px]"
        >
          <p className="text-[#202124] text-sm font-medium">{submitStatus.message}</p>
        </motion.div>
      )}

      {submitStatus?.type === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#B85C5C]/10 border border-[#B85C5C]/30 rounded-[18px]"
        >
          <p className="text-[#B85C5C] text-sm font-medium">{submitStatus.message}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[#202124] mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-[18px] text-[#202124] text-sm focus:outline-none focus:border-[#C6A24A] input-premium-focus"
              placeholder="John"
            />
            {errors.firstName && <p className="mt-1.5 text-xs text-[#B85C5C]">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[#202124] mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-[18px] text-[#202124] text-sm focus:outline-none focus:border-[#C6A24A] input-premium-focus"
              placeholder="Doe"
            />
            {errors.lastName && <p className="mt-1.5 text-xs text-[#B85C5C]">{errors.lastName}</p>}
          </div>
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#202124] mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-[18px] text-[#202124] text-sm focus:outline-none focus:border-[#C6A24A] input-premium-focus"
              placeholder="you@lawfirm.com"
            />
            {errors.email && <p className="mt-1.5 text-xs text-[#B85C5C]">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#202124] mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-[18px] text-[#202124] text-sm focus:outline-none focus:border-[#C6A24A] input-premium-focus"
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="mt-1.5 text-xs text-[#B85C5C]">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-[#202124] mb-2">
              State *
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F1F3F5] border border-[rgba(32, 33, 36,0.28)] rounded-[18px] text-[#202124] text-sm focus:outline-none focus:border-[#C6A24A] input-premium-focus"
            >
              <option value="">Select state</option>
              {US_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <p className="mt-1.5 text-xs text-[#B85C5C]">{errors.state}</p>}
          </div>
        </div>

        <Button
          type="submit"
          variant="red"
          size="lg"
          className="w-full text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]"
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  )
}
