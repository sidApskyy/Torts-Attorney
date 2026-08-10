'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { NAVIGATION, SITE_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[rgba(248,248,246,0.90)] backdrop-blur-[20px] border border-[#E4E1D8] rounded-[18px] mx-4 mt-3 shadow-[0_4px_16px_rgba(32,33,36,0.05)]'
          : 'bg-transparent border border-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'flex items-center justify-between transition-all duration-500',
          isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className={cn(
              'font-serif font-bold text-[#202124] tracking-tight transition-all duration-500 group-hover:text-[#C6A24A]',
              isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
            )}>
              {SITE_NAME}
            </span>
            <span className="absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#C6A24A] to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out" />
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
                    'absolute -bottom-1.5 left-0 h-[2px] bg-[#C6A24A] transition-all duration-500 ease-out rounded-full',
                    pathname === item.href ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  )} />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="red" size="lg" className="text-sm shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]">
              Start a Conversation
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-full hover:bg-[#ECEFF2] transition-colors text-[#202124] min-h-[44px] min-w-[44px] relative z-50"
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
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
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
            className="md:hidden border-t border-[#E4E1D8] bg-[rgba(248,248,246,0.90)] backdrop-blur-[20px] overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
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
                      'block px-4 py-3 rounded-2xl text-base font-medium transition-colors min-h-[48px] flex items-center',
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
                className="pt-4"
              >
                <Button variant="red" size="lg" className="w-full shadow-[0_4px_14px_rgba(198,162,74,0.12)] hover:shadow-[0_8px_24px_rgba(198,162,74,0.18)]">
                  Start a Conversation
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
