import type { Metadata } from 'next'
import { DeliveryClient } from './delivery-client'

export const metadata: Metadata = {
  title: 'Delivery & Lead Distribution | The Torts Attorney - Case Delivery',
  description: 'Delivery and lead distribution for plaintiff campaigns: API integration, webhooks, SFTP delivery, CRM mapping, and secure data transfer with audit trails.',
  openGraph: {
    title: 'Delivery & Lead Distribution | The Torts Attorney - Case Delivery',
    description: 'Delivery and lead distribution for plaintiff campaigns: API integration, webhooks, SFTP delivery, CRM mapping, and secure data transfer with audit trails.',
    type: 'website',
  },
}

export default function DeliveryPage() {
  return <DeliveryClient />
}
