import Link from 'next/link'
import { NAVIGATION, SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#F1F3F5] border-t border-[#E4E1D8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#202124]">{SITE_NAME}</h3>
            <p className="text-sm text-[#4B5563] leading-[1.7]">
              Build a Smarter Plaintiff Acquisition Pipeline.
            </p>
            <div className="space-y-3 text-sm text-[#6B7280]">
              <p>{CONTACT_ADDRESS}</p>
              <p>{CONTACT_EMAIL}</p>
              <p>{CONTACT_PHONE}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-[#202124] text-sm tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#4B5563] hover:text-[#C6A24A] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-[#202124] text-sm tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm text-[#4B5563] hover:text-[#C6A24A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-sm text-[#4B5563] hover:text-[#C6A24A] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclosures"
                  className="text-sm text-[#4B5563] hover:text-[#C6A24A] transition-colors"
                >
                  Disclosures
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/cookie-policy"
                  className="text-sm text-[#4B5563] hover:text-[#C6A24A] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h4 className="font-semibold mb-6 text-[#202124] text-sm tracking-wide">Important Notice</h4>
            <p className="text-xs text-[#6B7280] leading-[1.7]">
              The Torts Attorney provides legal marketing and case-acquisition services to law firms. It is not a law firm and does not provide legal advice. All campaign information is for illustrative purposes unless otherwise verified.
            </p>
          </div>
        </div>

        <div className="border-t border-[#E4E1D8] mt-16 pt-8 text-center text-xs text-[#6B7280]">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
