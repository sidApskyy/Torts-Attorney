'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ta-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('ta-cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('ta-cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[60]"
        >
          <div className="bg-[#1A1A1F] border border-[#C6A24A]/20 rounded-2xl shadow-[0_20px_60px_-15px_rgba(32,33,36,0.3)] backdrop-blur-xl overflow-hidden">
            {/* Gold top accent */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C6A24A] to-transparent" />
            <div className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#C6A24A]/15 flex items-center justify-center flex-shrink-0 border border-[#C6A24A]/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#C6A24A]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white mb-2">
                    Cookie Preferences
                  </h3>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] leading-[1.6]">
                    We use cookies to improve your experience and analyze site traffic. You can accept or decline non-essential cookies. Read our{' '}
                    <Link href="/legal/cookie-policy" className="text-[#C6A24A] hover:text-[#9B7830] underline underline-offset-2">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#C6A24A] text-white text-sm font-semibold hover:bg-[#9B7830] transition-colors duration-300"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] text-sm font-medium hover:border-[#C6A24A]/30 hover:text-white transition-all duration-300"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
