'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'problem', label: 'Problem' },
  { id: 'how-it-works', label: 'Process' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'command-center', label: 'Dashboard' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'proof', label: 'Proof' },
  { id: 'social-proof', label: 'Results' },
  { id: 'faq', label: 'FAQ' },
  { id: 'final-cta', label: 'Contact' },
]

export function SectionRail() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5)

      const midPoint = window.scrollY + window.innerHeight / 2
      let bestIndex = 0
      let bestDist = Infinity

      sections.forEach((sec, index) => {
        const el = document.getElementById(sec.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const dist = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
          if (dist < bestDist) {
            bestDist = dist
            bestIndex = index
          }
        }
      })
      setActiveIndex(bestIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const el = document.getElementById(sections[index].id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
          aria-label="Section navigation"
        >
          {sections.map((sec, index) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(index)}
              className="group flex items-center gap-3 justify-end"
              aria-label={sec.label}
            >
              <span
                className={`text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeIndex === index
                    ? 'text-[#C6A24A] opacity-100'
                    : 'text-[#6B7280] opacity-0 group-hover:opacity-70'
                }`}
              >
                {sec.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-2.5 h-2.5 bg-[#C6A24A] ring-2 ring-[#C6A24A]/20'
                    : 'w-1.5 h-1.5 bg-[#C6A24A]/30 group-hover:bg-[#C6A24A]/60'
                }`}
              />
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
