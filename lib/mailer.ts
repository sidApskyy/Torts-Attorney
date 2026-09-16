import nodemailer from 'nodemailer'

// Hostinger mailbox — sends form leads from inquiry@thetortsattorney.com.
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

export async function sendMail({ to, subject, html, replyTo }: SendMailOptions) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP_USER / SMTP_PASS are not configured')
  }

  await transporter.sendMail({
    from: `The Torts Attorney <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo,
  })
}
