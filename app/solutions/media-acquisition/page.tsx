import type { Metadata } from 'next'
import { MediaAcquisitionClient } from './media-acquisition-client'

export const metadata: Metadata = {
  title: 'Media & Traffic Acquisition | The Torts Attorney - Media Buying',
  description: 'Media and traffic acquisition for plaintiff campaigns: paid search, social media, display advertising, and performance tracking with TCPA compliance.',
  openGraph: {
    title: 'Media & Traffic Acquisition | The Torts Attorney - Media Buying',
    description: 'Media and traffic acquisition for plaintiff campaigns: paid search, social media, display advertising, and performance tracking with TCPA compliance.',
    type: 'website',
  },
}

export default function MediaAcquisitionPage() {
  return <MediaAcquisitionClient />
}
