'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAVIGATION, SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SOCIAL_LINKS } from '@/lib/constants'

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
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.4)] hover:text-[#C6A24A] hover:border-[#C6A24A]/40 transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.4)] hover:text-[#C6A24A] hover:border-[#C6A24A]/40 transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
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
