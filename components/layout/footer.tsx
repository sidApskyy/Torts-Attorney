'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAVIGATION, SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1F] border-t border-[rgba(198,162,74,0.15)] relative overflow-hidden">
      {/* Gold top-border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A24A]/40 to-transparent" />
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[150px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        {/* Value proposition banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Monogram with pulsing glow */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C6A24A] to-[#9B7830] flex items-center justify-center flex-shrink-0 monogram-glow">
                <span className="font-serif text-2xl font-bold text-white">T</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">{SITE_NAME}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] mt-1">Where Better Cases Begin With Better Acquisition.</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6A24A] text-white text-sm font-semibold hover:bg-[#9B7830] transition-colors duration-300">
              Talk Through a Campaign
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
        >
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">{SITE_NAME}</h3>
            <p className="text-sm text-[rgba(255,255,255,0.5)] leading-[1.7]">
              Where Better Cases Begin With Better Acquisition.
            </p>
            <div className="space-y-3 text-sm text-[rgba(255,255,255,0.4)]">
              <p>{CONTACT_ADDRESS}</p>
              <p><a href={`mailto:${CONTACT_EMAIL}`} className="footer-link">{CONTACT_EMAIL}</a></p>
              <p><a href={`tel:${CONTACT_PHONE}`} className="footer-link">{CONTACT_PHONE}</a></p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="footer-link text-sm text-[rgba(255,255,255,0.5)] hover:text-[#C6A24A] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/legal/privacy"
                  className="footer-link text-sm text-[rgba(255,255,255,0.5)] hover:text-[#C6A24A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="footer-link text-sm text-[rgba(255,255,255,0.5)] hover:text-[#C6A24A] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclosures"
                  className="footer-link text-sm text-[rgba(255,255,255,0.5)] hover:text-[#C6A24A] transition-colors"
                >
                  Disclosures
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/cookie-policy"
                  className="footer-link text-sm text-[rgba(255,255,255,0.5)] hover:text-[#C6A24A] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm tracking-wide">Important Notice</h4>
            <p className="text-xs text-[rgba(255,255,255,0.35)] leading-[1.7]">
              We provide legal marketing and case-acquisition services for plaintiff law firms and campaign partners. We are not a law firm and do not provide legal advice or legal representation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-t border-[rgba(255,255,255,0.08)] mt-16 pt-8 text-center text-xs text-[rgba(255,255,255,0.3)]"
        >
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
