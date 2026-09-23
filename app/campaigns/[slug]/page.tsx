import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { torts, tortBySlug } from '@/lib/torts'
import { TortPageClient } from './tort-page-client'

export function generateStaticParams() {
  return torts.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tort = tortBySlug(slug)
  if (!tort) return {}
  return {
    title: `${tort.name} Lawsuit Review — Free Case Evaluation`,
    description: `${tort.heroSummary} Check whether your experience may qualify — free, confidential, no obligation.`,
  }
}

export default async function TortPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!tortBySlug(slug)) notFound()
  // Pass only the slug — the Tort object holds a Lucide component (a function),
  // which can't cross the server→client boundary. The client resolves it.
  return <TortPageClient slug={slug} />
}
