// Analytics Event Tracking
// Documentation: All events must be documented here
// Privacy: Never send sensitive personal information, medical data, or claimant information

export type AnalyticsEvent =
  // Hero Events
  | 'hero_primary_cta_click'
  | 'hero_secondary_cta_click'
  // Lifecycle Events
  | 'lifecycle_stage_hover'
  | 'lifecycle_stage_click'
  // Solution Events
  | 'solution_card_click'
  | 'solution_page_view'
  // How It Works Events
  | 'how_it_works_stage_view'
  // Technology Events
  | 'technology_system_view'
  // Campaign Intelligence Events
  | 'campaign_intelligence_view'
  | 'campaign_intelligence_filter_change'
  // Insights Events
  | 'insights_category_filter'
  | 'insights_article_click'
  | 'insights_subscribe_click'
  // Contact Events
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'
  // Navigation Events
  | 'navigation_click'
  | 'mobile_menu_open'
  | 'mobile_menu_close'
  // Footer Events
  | 'footer_link_click'
  | 'footer_cta_click'
  // Legal Events
  | 'legal_page_view'

interface AnalyticsEventPayload {
  event: AnalyticsEvent
  properties?: Record<string, string | number | boolean>
}

// Check if analytics is enabled
const isAnalyticsEnabled = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
}

// Track event
export const trackEvent = ({ event, properties }: AnalyticsEventPayload) => {
  if (!isAnalyticsEnabled()) return

  try {
    window.gtag('event', event, {
      ...properties,
      non_interaction: true,
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

// Track page view
export const trackPageView = (url: string) => {
  if (!isAnalyticsEnabled()) return

  try {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  } catch (error) {
    console.error('Analytics page view error:', error)
  }
}

// Declare gtag on window
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}
