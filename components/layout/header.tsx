'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useRole } from '@/components/providers/role-provider'
import { NAVIGATION } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const pathname = usePathname()
  const { role, setRole } = useRole()

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const vh = window.innerHeight

          // ScrollExpand uses scrollDistance=0.45, so expansion
          // completes at ~0.45 * viewport height of scroll
          const heroThreshold = vh * 0.45
          const pastHero = currentScrollY > heroThreshold
          const delta = currentScrollY - lastScrollY

          setIsScrolled(pastHero || !role || role === 'victim')

          // Hide on scroll down once past the top of the page;
          // show again on scroll up. Direction deltas keep it
          // from flickering on tiny scrolls.
          setIsHidden((prev) => {
            if (currentScrollY <= 80) return false
            if (delta > 5) return true
            if (delta < -10) return false
            return prev
          })

          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Also check on mount in case page loads scrolled
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [role])

  // On mobile the header must stay visible at the top of the page —
  // the hamburger is the only way to reach navigation there.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobileViewport(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isHidden) setIsMobileMenuOpen(false)
  }, [isHidden])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isMobileMenuOpen])

  // Header is always mounted — visible on page load, then isHidden
  // drives the hide-on-scroll-down / show-on-scroll-up behavior.
  const headerVisible = true

  return (
    <>
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{
        y: headerVisible
          ? (isHidden && !isMobileMenuOpen ? -120 : 0)
          : -120,
        opacity: headerVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]',
        isScrolled
          ? 'bg-[rgba(248,248,246,0.70)] backdrop-blur-[24px] border border-[rgba(198,162,74,0.12)] rounded-[18px] mx-2 mt-2 sm:mx-4 sm:mt-3 shadow-[0_8px_32px_rgba(32,33,36,0.08)]'
          : isMobileViewport && isMobileMenuOpen
            ? 'bg-[rgba(248,248,246,0.95)] backdrop-blur-[20px] border-b border-[#E4E1D8]'
            : 'bg-transparent border border-transparent',
        (!headerVisible || (isHidden && !isMobileMenuOpen)) && 'pointer-events-none'
      )}
    >
      <div className="mx-auto px-3 sm:px-6 lg:px-8">
        <div className={cn(
          'flex items-center justify-between',
          isScrolled ? 'h-14 sm:h-16 md:h-20' : 'h-16 sm:h-20 md:h-24'
        )}>
          {/* Logo — always lands on the attorney experience */}
          <Link
            href="/"
            onClick={() => {
              setRole('attorney')
              setIsMobileMenuOpen(false)
            }}
            className="flex items-center group relative"
          >
            <Image
              src="/TTA_2@4x.webp"
              alt="The Torts Attorney"
              width={160}
              height={80}
              priority
              className={cn(
                'h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-80 group-hover:scale-[1.02]',
                isScrolled ? 'h-7 sm:h-9 md:h-10' : 'h-8 sm:h-10 md:h-12'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 hover:text-[#C6A24A] relative group',
                    pathname === item.href
                      ? 'text-[#9B7830]'
                      : 'text-[#30343A]'
                  )}
                >
                  {item.name}
                  <span className={cn(
                    'absolute -bottom-1.5 left-0 h-[2px] rounded-full transition-all duration-500 ease-out',
                    'bg-gradient-to-r from-[#C6A24A] to-[#9B7830]',
                    pathname === item.href ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  )} />
                  {/* Gold dot indicator for active page */}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1.5 left-0 w-1.5 h-1.5 rounded-full bg-[#C6A24A] animate-pulse" />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Audience selector */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center p-1 rounded-full border border-[#C6A24A]/20 bg-[#E4E1D8]/30">
              <button
                type="button"
                onClick={() => setRole('attorney')}
                className={cn(
                  'px-3 py-1.5 text-xs font-semibold rounded-full transition-all',
                  role === 'attorney'
                    ? 'bg-[#C6A24A] text-white shadow-sm'
                    : 'text-[#4B5563] hover:text-[#C6A24A]'
                )}
              >
                Attorney
              </button>
              <button
                type="button"
                onClick={() => setRole('victim')}
                className={cn(
                  'px-3 py-1.5 text-xs font-semibold rounded-full transition-all',
                  role === 'victim'
                    ? 'bg-[#C6A24A] text-white shadow-sm'
                    : 'text-[#4B5563] hover:text-[#C6A24A]'
                )}
              >
                Victim
              </button>
            </div>
            {role === 'attorney' && (
              <Link href="/contact">
                <Button variant="red" size="lg" className="text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]">
                  Talk Through a Campaign
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 sm:p-3 rounded-full hover:bg-[#ECEFF2] transition-colors text-[#202124] min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] relative z-50"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-[#E4E1D8] bg-[rgba(248,248,246,0.95)] backdrop-blur-[20px] overflow-hidden rounded-b-[18px]"
          >
            <nav className="px-3 sm:px-6 py-3 space-y-1.5">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E4E1D8] mb-2">
                <button
                  type="button"
                  onClick={() => { setRole('attorney'); setIsMobileMenuOpen(false) }}
                  className={cn(
                    'py-2.5 rounded-xl text-sm font-semibold transition-colors',
                    role === 'attorney'
                      ? 'bg-[#C6A24A] text-white'
                      : 'bg-[#ECEFF2] text-[#4B5563] hover:bg-[#E4E1D8]'
                  )}
                >
                  Attorney
                </button>
                <button
                  type="button"
                  onClick={() => { setRole('victim'); setIsMobileMenuOpen(false) }}
                  className={cn(
                    'py-2.5 rounded-xl text-sm font-semibold transition-colors',
                    role === 'victim'
                      ? 'bg-[#C6A24A] text-white'
                      : 'bg-[#ECEFF2] text-[#4B5563] hover:bg-[#E4E1D8]'
                  )}
                >
                  Victim
                </button>
              </div>
              {NAVIGATION.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-sm sm:text-base font-medium transition-colors min-h-[44px] flex items-center',
                      pathname === item.href
                        ? 'bg-[#C6A24A] text-[#FFFFFF] shadow-[0_4px_14px_rgba(198,162,74,0.12)]'
                        : 'text-[#30343A] hover:bg-[#ECEFF2] hover:text-[#202124]'
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + NAVIGATION.length * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-3"
              >
                <Link href="/contact">
                  <Button variant="red" size="lg" className="w-full text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]">
                    {role === 'attorney' ? 'Talk About My Campaign' : 'Contact Us'}
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    {/* Backdrop — tap anywhere outside the menu to close.
        Sibling of the header (the header's transform would trap a fixed
        child inside its own box). z-[45] sits above the victim sticky
        CTA (z-40) and below the header (z-50). */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key="mobile-nav-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-[45] bg-[#202124]/35 backdrop-blur-[2px] md:hidden"
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
    </>
  )
}
