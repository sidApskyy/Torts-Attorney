// Site Configuration
export const SITE_NAME = 'The Torts Attorney'
export const SITE_TAGLINE = 'Where Better Cases Begin With Better Acquisition.'
export const SITE_DESCRIPTION = 'Campaign strategy, intake operations, qualification workflows and transparent reporting for plaintiff law firms.'

// Contact Information
export const CONTACT_EMAIL = 'TODO: CLIENT VERIFICATION'
export const CONTACT_PHONE = 'TODO: CLIENT VERIFICATION'
export const CONTACT_ADDRESS = 'TODO: CLIENT VERIFICATION'

// Social Links
export const SOCIAL_LINKS = {
  linkedin: 'TODO: CLIENT VERIFICATION',
  twitter: 'TODO: CLIENT VERIFICATION',
} as const

// Navigation
export const NAVIGATION = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Campaigns', href: '/campaign-intelligence' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Technology', href: '/technology' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
] as const

// Acquisition Lifecycle Stages
export const ACQUISITION_LIFECYCLE = [
  { id: 'strategy', name: 'Strategy', description: 'Campaign planning and media strategy' },
  { id: 'media', name: 'Media', description: 'Media buying and campaign deployment' },
  { id: 'response', name: 'Response', description: 'Lead response and initial capture' },
  { id: 'intake', name: 'Intake', description: 'Structured intake operations' },
  { id: 'qualification', name: 'Qualification', description: 'Lead qualification and screening' },
  { id: 'documentation', name: 'Documentation', description: 'Document collection and review' },
  { id: 'retainer', name: 'Retainer', description: 'Retainer workflow and completion' },
  { id: 'delivery', name: 'Delivery', description: 'Qualified case delivery' },
  { id: 'reporting', name: 'Reporting', description: 'Performance tracking and analytics' },
  { id: 'optimization', name: 'Optimization', description: 'Campaign optimization and refinement' },
] as const

// Campaign Statuses
export const CAMPAIGN_STATUS = {
  ACTIVE: 'Active',
  LIMITED: 'Limited Availability',
  FIRM_SPECIFIC: 'Firm-Specific',
  WATCHLIST: 'Watchlist',
  PAUSED: 'Paused',
  CLOSED: 'Closed',
} as const

// Insight Categories
export const INSIGHT_CATEGORIES = {
  DOCKET_INTELLIGENCE: 'Docket Intelligence',
  ACQUISITION_ECONOMICS: 'Acquisition Economics',
  INTAKE_OPERATIONS: 'Intake Operations',
  COMPLIANCE_DATA: 'Compliance & Data',
  CAMPAIGN_PLAYBOOKS: 'Campaign Playbooks',
} as const

// Editorial Status
export const EDITORIAL_STATUS = {
  DRAFT: 'Draft',
  UNDER_REVIEW: 'Under Review',
  APPROVED: 'Approved',
} as const

// Animation Durations (ms)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 800,
} as const

// Breakpoints (px)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1440,
} as const
