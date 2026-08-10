import type { Metadata } from 'next'
import { CampaignStrategyClient } from './campaign-strategy-client'

export const metadata: Metadata = {
  title: 'Campaign Strategy | The Torts Attorney - Strategic Planning',
  description: 'Campaign strategy and media planning for plaintiff acquisition: capacity assessment, market analysis, and operational design aligned to your firm\'s goals.',
  openGraph: {
    title: 'Campaign Strategy | The Torts Attorney - Strategic Planning',
    description: 'Campaign strategy and media planning for plaintiff acquisition: capacity assessment, market analysis, and operational design aligned to your firm\'s goals.',
    type: 'website',
  },
}

export default function CampaignStrategyPage() {
  return <CampaignStrategyClient />
}
