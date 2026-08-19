import type { Metadata } from 'next'
import { ContactClientWrapper } from './contact-wrapper'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact | The Torts Attorney - Build Your Acquisition System',
  description: 'Contact The Torts Attorney to discuss plaintiff acquisition systems for your law firm. Schedule a consultation for campaign strategy and intake operations.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | The Torts Attorney - Build Your Acquisition System',
    description: 'Contact The Torts Attorney to discuss plaintiff acquisition systems for your law firm. Schedule a consultation for campaign strategy and intake operations.',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactClientWrapper />
}
