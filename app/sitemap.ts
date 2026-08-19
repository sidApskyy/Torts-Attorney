import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: 'solutions', priority: 0.9, changeFrequency: 'weekly' },
    { path: 'solutions/campaign-strategy', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/media-acquisition', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/lead-response', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/lead-qualification', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/documentation', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/retainer-optimization', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/delivery', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'solutions/reporting', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'how-it-works', priority: 0.9, changeFrequency: 'weekly' },
    { path: 'technology', priority: 0.9, changeFrequency: 'weekly' },
    { path: 'campaign-intelligence', priority: 0.9, changeFrequency: 'weekly' },
    { path: 'insights', priority: 0.7, changeFrequency: 'weekly' },
    { path: 'about', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'legal/privacy', priority: 0.3, changeFrequency: 'monthly' },
    { path: 'legal/terms', priority: 0.3, changeFrequency: 'monthly' },
    { path: 'legal/disclosures', priority: 0.3, changeFrequency: 'monthly' },
    { path: 'legal/cookie-policy', priority: 0.3, changeFrequency: 'monthly' },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
