'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/contact') {
      return pathname === '/contact'
    }
    if (href === '/') {
      return pathname === '/' && !pathname.includes('/contact')
    }
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#3a5a40] flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span
            className={`font-bold text-lg leading-none transition-colors duration-300 ${
              scrolled ? 'text-[#3a5a40]' : 'text-white'
            }`}
          >
            Z&apos;s Exterior Services
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#3a5a40] ${
                isActive(link.href)
                  ? 'text-[#3a5a40]'
                  : scrolled
                  ? 'text-[#1a1a1a]'
                  : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#3a5a40] text-white text-sm font-semibold hover:bg-[#2d4731] transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              scrolled ? 'text-[#1a1a1a] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-base font-medium border-b border-gray-50 transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-[#3a5a40]'
                      : 'text-[#1a1a1a] hover:text-[#3a5a40]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#3a5a40] text-white text-sm font-semibold hover:bg-[#2d4731] transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
