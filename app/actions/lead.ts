'use server'

import { z } from 'zod'
import { checkRateLimit } from '@/lib/rate-limiter'
import { verifyTurnstile } from '@/lib/turnstile'
import { sendMail } from '@/lib/mailer'

const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  state: z.string().min(1, 'State is required'),
})

type LeadFormData = z.infer<typeof leadSchema>

const victimLeadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  zip: z.string().min(3, 'ZIP code is required').max(10),
  campaign: z.string().min(1, 'Please select a campaign'),
  notes: z.string().max(2000).optional(),
  trustedFormCertUrl: z.string().url().optional().or(z.literal('')),
})

type VictimLeadData = z.infer<typeof victimLeadSchema>

// Escape user-supplied values before interpolating into email HTML
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// TrustedForm certificate claiming — retains the cert in your ActiveProspect
// account. No-ops until TRUSTEDFORM_API_KEY is set; cert URLs still flow
// through to the lead email either way.
async function claimTrustedFormCert(certUrl: string, reference: string) {
  const apiKey = process.env.TRUSTEDFORM_API_KEY
  if (!apiKey || !certUrl) return
  // Only POST to genuine cert URLs — the API key travels in the
  // Authorization header, so a bogus URL would leak credentials
  if (!certUrl.startsWith('https://cert.trustedform.com')) return
  try {
    const res = await fetch(certUrl, {
      method: 'POST',
      headers: {
        // TrustedForm auth: username 'API', API key as the password
        Authorization: `Basic ${Buffer.from(`API:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        reference,
        vendor: 'The Torts Attorney',
      }),
    })
    if (!res.ok) {
      console.error('TrustedForm claim failed:', res.status, await res.text())
    }
  } catch (err) {
    console.error('TrustedForm claim error:', err)
  }
}

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
      subject: `New Lead: ${esc(validatedData.firstName)} ${esc(validatedData.lastName)}`,
      html: `
        <h2>New Hero Form Lead Submission</h2>
        <p><strong>First Name:</strong> ${esc(validatedData.firstName)}</p>
        <p><strong>Last Name:</strong> ${esc(validatedData.lastName)}</p>
        <p><strong>Email:</strong> ${esc(validatedData.email)}</p>
        <p><strong>Phone:</strong> ${esc(validatedData.phone)}</p>
        <p><strong>State:</strong> ${esc(validatedData.state)}</p>
      `,
    })

    // Send auto-reply confirmation to the lead
    await sendMail({
      to: validatedData.email,
      subject: 'We received your request — The Torts Attorney',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #C6A24A, #9B7830); display: flex; align-items: center; justify-content: center;">
              <span style="color: #FFFFFF; font-size: 22px; font-weight: 800; font-family: serif;">T</span>
            </div>
            <span style="font-size: 20px; font-weight: 700; font-family: serif; color: #202124;">The Torts Attorney</span>
          </div>
          <h1 style="font-size: 28px; font-family: serif; color: #202124; margin-bottom: 24px;">Thank you, ${validatedData.firstName}.</h1>
          <p style="font-size: 16px; color: #4B5563; line-height: 1.7; margin-bottom: 24px;">
            We have received your request and a member of our team will be in touch with you within one business day to discuss how we can help your firm build a smarter plaintiff acquisition pipeline.
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

export async function submitVictimLeadForm(formData: FormData) {
  try {
    // Honeypot check — if filled, silently reject (bot detected)
    const honeypot = formData.get('company_website')
    if (honeypot && String(honeypot).trim() !== '') {
      return {
        success: true,
        message: 'Thank you. We will be in touch shortly.',
      }
    }

    // Verify Turnstile CAPTCHA (skipped when TURNSTILE_SECRET_KEY is unset)
    const turnstileToken = formData.get('cf-turnstile-response') as string | null
    const turnstileResult = await verifyTurnstile(turnstileToken)
    if (!turnstileResult.success) {
      return {
        success: false,
        error: 'CAPTCHA verification failed. Please try again.',
      }
    }

    // Consent checkbox is required — enforce it server-side too
    const consent = formData.get('consent')
    if (consent !== 'true' && consent !== 'on') {
      return {
        success: false,
        error: 'Please agree to be contacted before submitting.',
      }
    }

    const rawData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      zip: formData.get('zip') as string,
      campaign: formData.get('campaign') as string,
      notes: (formData.get('notes') as string) || undefined,
      trustedFormCertUrl: (formData.get('trustedFormCertUrl') as string) || undefined,
    }

    const validatedData: VictimLeadData = victimLeadSchema.parse(rawData)

    if (!(await checkRateLimit(validatedData.email))) {
      return {
        success: false,
        error: 'Too many submissions. Please try again later.',
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

    const certUrl = validatedData.trustedFormCertUrl
    const certRow = certUrl
      ? `<p><strong>TrustedForm Certificate:</strong> <a href="${esc(certUrl)}">${esc(certUrl)}</a></p>`
      : ''

    // Claim the cert into the TrustedForm account (no-op without API key)
    if (certUrl) {
      await claimTrustedFormCert(
        certUrl,
        `victim-lead:${validatedData.email}`
      )
    }

    await sendMail({
      to: notificationEmail,
      replyTo: validatedData.email,
      subject: `New Victim Lead: ${esc(validatedData.firstName)} ${esc(validatedData.lastName)} — ${esc(validatedData.campaign)}`,
      html: `
        <h2>New Victim Form Lead</h2>
        <p><strong>First Name:</strong> ${esc(validatedData.firstName)}</p>
        <p><strong>Last Name:</strong> ${esc(validatedData.lastName)}</p>
        <p><strong>Email:</strong> ${esc(validatedData.email)}</p>
        <p><strong>Phone:</strong> ${esc(validatedData.phone)}</p>
        <p><strong>ZIP:</strong> ${esc(validatedData.zip)}</p>
        <p><strong>Campaign:</strong> ${esc(validatedData.campaign)}</p>
        <p><strong>What happened:</strong> ${validatedData.notes ? esc(validatedData.notes) : '—'}</p>
        <p><strong>Consent:</strong> Agreed to contact (TCPA consent text accepted)</p>
        ${certRow}
      `,
    })

    // Confirmation to the claimant
    await sendMail({
      to: validatedData.email,
      subject: 'We received your request — The Torts Attorney',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 28px; font-family: serif; color: #202124; margin-bottom: 24px;">Thank you, ${esc(validatedData.firstName)}.</h1>
          <p style="font-size: 16px; color: #4B5563; line-height: 1.7; margin-bottom: 24px;">
            We have received your request regarding <strong>${esc(validatedData.campaign)}</strong>. If your submission appears to fit the current campaign criteria, a member of our team or a participating law firm may contact you.
          </p>
          <p style="font-size: 14px; color: #6B7280; line-height: 1.6;">
            This is an automated confirmation. Submitting the form does not create an attorney-client relationship, and nothing here is legal advice.
          </p>
        </div>
      `,
    })

    return {
      success: true,
      message: 'Thank you. We will be in touch shortly.',
    }
  } catch (error) {
    console.error('Victim lead form submission error:', error)

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
