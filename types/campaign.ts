import { CAMPAIGN_STATUS, EDITORIAL_STATUS } from '@/lib/constants'

export interface Campaign {
  id: string
  name: string
  slug: string
  category: string
  summary: string
  status: keyof typeof CAMPAIGN_STATUS
  courtType?: string
  mdlNumber?: string
  lastReviewed: string
  allegedInjuries?: string[]
  claimantProfile?: string
  commonDisqualifiers?: string[]
  requiredDocuments?: string[]
  intakeConsiderations?: string
  campaignRisks?: string[]
  sourceLinks?: string[]
  seoTitle?: string
  seoDescription?: string
  ogImage?: string
  featured?: boolean
  sortOrder?: number
  editorialStatus?: keyof typeof EDITORIAL_STATUS
}

export interface CampaignFilter {
  category?: string
  status?: string
  courtType?: string
  search?: string
}
