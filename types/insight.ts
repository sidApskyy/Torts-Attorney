import { EDITORIAL_STATUS, INSIGHT_CATEGORIES } from '@/lib/constants'

export interface Insight {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  category: keyof typeof INSIGHT_CATEGORIES
  author?: string
  reviewer?: string
  publishedDate?: string
  updatedDate?: string
  sourceList?: string[]
  relatedCampaigns?: string[]
  relatedArticles?: string[]
  seoTitle?: string
  seoDescription?: string
  ogImage?: string
  featured?: boolean
  editorialStatus?: keyof typeof EDITORIAL_STATUS
  tableOfContents?: TableOfContentItem[]
}

export interface TableOfContentItem {
  id: string
  title: string
  level: number
}

export interface InsightFilter {
  category?: string
  search?: string
}
