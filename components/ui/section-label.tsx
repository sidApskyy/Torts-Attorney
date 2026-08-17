'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sectionMap: Record<string, string> = {
  hero: 'Hero',
  capabilities: 'Capabilities',
  problem: 'The Problem',
  'how-it-works': 'How It Works',
  lifecycle: 'Lifecycle',
  solutions: 'Solutions',
  'command-center': 'Command Center',
  'why-us': 'Why Us',
  proof: 'Proof',
  'social-proof': 'Results',
  faq: 'FAQ',
  'final-cta': 'Get Started',
}

export function SectionLabel() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const label = activeSection ? sectionMap[activeSection] : null

  return (
    <AnimatePresence mode="wait">
      {label && (
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="section-label-sticky hidden lg:block"
          aria-hidden
        >
          <div className="flex items-center gap-3 py-2">
            <div className="w-px h-12 bg-gradient-to-b from-[#C6A24A]/40 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A24A]/60">
              {label}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
