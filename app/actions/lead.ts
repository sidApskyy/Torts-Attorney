'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rate-limiter'
import { verifyTurnstile } from '@/lib/turnstile'

const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  state: z.string().min(1, 'State is required'),
})

type LeadFormData = z.infer<typeof leadSchema>

// Simple spam detection
function detectSpam(data: LeadFormData): boolean {
  const spamKeywords = ['viagra', 'casino', 'porn', 'xxx', 'lottery', 'winner', 'free money']
  const combinedText = `${data.firstName} ${data.lastName} ${data.email}`.toLowerCase()
  return spamKeywords.some(keyword => combinedText.includes(keyword))
}

export async function submitLeadForm(formData: FormData) {
  try {
    // Honeypot check — if filled, silently reject (bot detected)
    const honeypot = formData.get('company_website')
    if (honeypot && String(honeypot).trim() !== '') {
      return {
        success: true,
        message: 'Thank you. We will be in touch shortly.',
      }
    }

    // Verify Turnstile CAPTCHA
    const turnstileToken = formData.get('cf-turnstile-response') as string | null
    const turnstileResult = await verifyTurnstile(turnstileToken)
    if (!turnstileResult.success) {
      return {
        success: false,
        error: 'CAPTCHA verification failed. Please try again.',
      }
    }

    const rawData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      state: formData.get('state') as string,
    }

    const validatedData: LeadFormData = leadSchema.parse(rawData)

    if (!(await checkRateLimit(validatedData.email))) {
      return {
        success: false,
        error: 'Too many submissions. Please try again later.',
      }
    }

    // Spam detection
    if (detectSpam(validatedData)) {
      return {
        success: false,
        error: 'Submission rejected. Please ensure your message is appropriate.',
      }
    }

    const fromEmail = process.env.FROM_EMAIL || 'The Torts Attorney <contact@thetortsattorney.com>'
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
      from: fromEmail,
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
