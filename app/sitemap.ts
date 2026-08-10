import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'solutions',
    'solutions/campaign-strategy',
    'solutions/media-acquisition',
    'solutions/lead-response',
    'solutions/lead-qualification',
    'solutions/documentation',
    'solutions/retainer-optimization',
    'solutions/delivery',
    'solutions/reporting',
    'how-it-works',
    'technology',
    'campaign-intelligence',
    'insights',
    'about',
    'contact',
    'legal/privacy',
    'legal/terms',
    'legal/disclosures',
    'legal/cookie-policy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
