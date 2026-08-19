'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rate-limiter'
import { verifyTurnstile } from '@/lib/turnstile'

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

// Simple spam detection
function detectSpam(data: ContactFormData): boolean {
  const spamKeywords = ['viagra', 'casino', 'porn', 'xxx', 'lottery', 'winner', 'free money']
  const combinedText = `${data.name} ${data.company} ${data.challenge} ${data.message}`.toLowerCase()
  
  return spamKeywords.some(keyword => combinedText.includes(keyword))
}

export async function submitContactForm(formData: FormData) {
  try {
    // Honeypot check — if filled, silently reject (bot detected)
    const honeypot = formData.get('company_website')
    if (honeypot && String(honeypot).trim() !== '') {
      return {
        success: true,
        message: 'Thank you for your inquiry. We will be in touch shortly.',
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

    // Extract form data
    const rawData = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      website: formData.get('website') as string,
      challenge: formData.get('challenge') as string,
      message: formData.get('message') as string,
    }

    // Validate with Zod
    const validatedData = contactSchema.parse(rawData)

    // Rate limiting by email
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
      subject: `New Contact Form Submission: ${validatedData.company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Website:</strong> ${validatedData.website || 'Not provided'}</p>
        <h3>Primary Challenge</h3>
        <p>${validatedData.challenge}</p>
        <h3>Message</h3>
        <p>${validatedData.message}</p>
      `,
    })

    return {
      success: true,
      message: 'Thank you for your inquiry. We will be in touch shortly.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    
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
