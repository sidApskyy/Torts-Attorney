'use server'

import { z } from 'zod'
import { checkRateLimit } from '@/lib/rate-limiter'
import { verifyTurnstile } from '@/lib/turnstile'
import { sendMail } from '@/lib/mailer'

// Escape user-supplied values before interpolating into email HTML
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

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

    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL
    if (!notificationEmail) {
      console.error('CONTACT_NOTIFICATION_EMAIL environment variable is not set')
      return {
        success: false,
        error: 'Configuration error. Please contact support.',
      }
    }

    await sendMail({
      to: notificationEmail,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission: ${esc(validatedData.company)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(validatedData.name)}</p>
        <p><strong>Company:</strong> ${esc(validatedData.company)}</p>
        <p><strong>Email:</strong> ${esc(validatedData.email)}</p>
        <p><strong>Phone:</strong> ${esc(validatedData.phone)}</p>
        <p><strong>Website:</strong> ${validatedData.website ? esc(validatedData.website) : 'Not provided'}</p>
        <h3>Primary Challenge</h3>
        <p>${esc(validatedData.challenge)}</p>
        <h3>Message</h3>
        <p>${esc(validatedData.message)}</p>
      `,
    })

    // Send auto-reply confirmation to the submitter
    await sendMail({
      to: validatedData.email,
      subject: 'We received your message — The Torts Attorney',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #C6A24A, #9B7830); display: flex; align-items: center; justify-content: center;">
              <span style="color: #FFFFFF; font-size: 22px; font-weight: 800; font-family: serif;">T</span>
            </div>
            <span style="font-size: 20px; font-weight: 700; font-family: serif; color: #202124;">The Torts Attorney</span>
          </div>
          <h1 style="font-size: 28px; font-family: serif; color: #202124; margin-bottom: 24px;">Thank you, ${esc(validatedData.name)}.</h1>
          <p style="font-size: 16px; color: #4B5563; line-height: 1.7; margin-bottom: 24px;">
            We have received your inquiry and a member of our team will be in touch with you within one business day. We review every submission carefully to understand how we can best support your firm's acquisition goals.
          </p>
          <p style="font-size: 16px; color: #4B5563; line-height: 1.7; margin-bottom: 24px;">
            If you need to reach us sooner, feel free to call us directly or reply to this email.
          </p>
          <div style="background: #F8F8F6; border-left: 4px solid #C6A24A; padding: 20px; border-radius: 8px; margin-bottom: 32px;">
            <p style="margin: 0; font-size: 15px; color: #4B5563;">
              <strong>Phone:</strong> 3025868230<br>
              <strong>Email:</strong> hello@thetortsattorney.com
            </p>
          </div>
          <p style="font-size: 14px; color: #6B7280; line-height: 1.6;">
            This is an automated confirmation. Please do not reply directly to this email with case-specific information.
          </p>
        </div>
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
