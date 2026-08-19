import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Script from 'next/script'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <Script
        id={`breadcrumb-ld-${items.map(i => i.label).join('-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={index} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-[#6B7280] hover:text-[#C6A24A] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-[#C6A24A] font-medium' : 'text-[#6B7280]'}>
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-[#6B7280]/50" aria-hidden="true" />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
