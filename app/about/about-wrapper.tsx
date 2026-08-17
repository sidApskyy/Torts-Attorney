'use client'

import dynamic from 'next/dynamic'

const AboutClient = dynamic(() => import('./about-client').then((m) => m.AboutClient), { ssr: false })

export function AboutClientWrapper() {
  return <AboutClient />
}
