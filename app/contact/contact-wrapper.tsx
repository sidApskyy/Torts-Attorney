'use client'

import dynamic from 'next/dynamic'

const ContactClient = dynamic(() => import('./contact-client').then((m) => m.ContactClient), { ssr: false })

export function ContactClientWrapper() {
  return <ContactClient />
}
