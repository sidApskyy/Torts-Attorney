'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  state: z.string().min(1, 'State is required'),
})

type LeadFormData = z.infer<typeof leadSchema>

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 3

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

export async function submitLeadForm(formData: FormData) {
  try {
    const rawData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      state: formData.get('state') as string,
    }

    const validatedData: LeadFormData = leadSchema.parse(rawData)

    if (!checkRateLimit(validatedData.email)) {
      return {
        success: false,
        error: 'Too many submissions. Please try again later.',
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL
    if (!notificationEmail) {
      console.error('CONTACT_NOTIFICATION_EMAIL environment variable is not set')
      return {
        success: false,
        error: 'Configuration error. Please contact support.',
      }
    }

    await resend.emails.send({
      from: 'The Torts Attorney <contact@thetortsattorney.com>',
      to: notificationEmail,
      subject: `New Lead: ${validatedData.firstName} ${validatedData.lastName}`,
      html: `
        <h2>New Hero Form Lead Submission</h2>
        <p><strong>First Name:</strong> ${validatedData.firstName}</p>
        <p><strong>Last Name:</strong> ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>State:</strong> ${validatedData.state}</p>
      `,
    })

    return {
      success: true,
      message: 'Thank you. We will be in touch shortly.',
    }
  } catch (error) {
    console.error('Lead form submission error:', error)

    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {}
      error.issues.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      })
      return {
        success: false,
        error: 'Validation error',
        fieldErrors,
      }
    }

    return {
      success: false,
      error: 'An error occurred. Please try again later.',
    }
  }
}
