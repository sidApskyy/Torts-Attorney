import nodemailer from 'nodemailer'

// Email delivery — two transports, chosen by env:
//   RESEND_API_KEY set  → Resend HTTPS API (works on hosts that block SMTP
//                         egress, e.g. Render free tier)
//   otherwise           → Hostinger SMTP via nodemailer (local dev / VPS)
// Credentials live in .env.local (gitignored, server-only).
const port = Number(process.env.SMTP_PORT || 465)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Fail fast instead of hanging the server action when SMTP egress is blocked
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
  tls: {
    // Some local antivirus "mail shields" MITM SMTP with a self-signed cert.
    // SMTP_ALLOW_SELF_SIGNED=true relaxes verification for local dev only —
    // keep it unset in production.
    rejectUnauthorized: process.env.SMTP_ALLOW_SELF_SIGNED !== 'true',
  },
})

interface SendMailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

// Resend REST API — no SDK needed. RESEND_FROM must be a sender on a verified
// domain; until the domain is verified Resend only allows
// onboarding@resend.dev as the from address.
async function sendViaResend({ to, subject, html, replyTo }: SendMailOptions) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'The Torts Attorney <onboarding@resend.dev>',
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  })
  if (!res.ok) {
    throw new Error(`Resend API error ${res.status}: ${await res.text()}`)
  }
}

export async function sendMail(options: SendMailOptions) {
  if (process.env.RESEND_API_KEY) {
    return sendViaResend(options)
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('RESEND_API_KEY or SMTP_USER / SMTP_PASS must be configured')
  }

  await transporter.sendMail({
    from: `The Torts Attorney <${process.env.SMTP_USER}>`,
    ...options,
  })
}
