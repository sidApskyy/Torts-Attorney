'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js'
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('ta-cookie-consent')
      setConsented(consent === 'accepted')
    }

    checkConsent()
    window.addEventListener('storage', checkConsent)
    const interval = setInterval(checkConsent, 1000)

    return () => {
      window.removeEventListener('storage', checkConsent)
      clearInterval(interval)
    }
  }, [])

  if (!domain || !consented) return null

  return (
    <Script
      defer
      data-domain={domain}
      src={src}
      strategy="afterInteractive"
    />
  )
}
