'use client'

import { Leaf, Phone, Mail, MapPin, Clock, Users, Camera } from 'lucide-react'

const serviceLinks = [
  'Plant Installation',
  'Mulching',
  'Yard Cleanup',
  'Hardscaping',
  'Drainage',
  'Leaf Removal',
  'Power Washing',
  'LED Installs',
  'Snow Removal',
]

const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Get a Free Quote', href: '#contact' },
]

// Simple Google icon as SVG since lucide doesn't have it
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3a5a40] flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-white leading-none">
                Z&apos;s Exterior Services
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Manassas-based, family-run exterior services for Northern Virginia.
            </p>
            <div className="flex gap-2 mt-1">
              {[
                { Icon: Users, label: 'Facebook' },
                { Icon: Camera, label: 'Instagram' },
                { Icon: GoogleIcon, label: 'Google' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#2d2d2d] flex items-center justify-center text-gray-400 hover:bg-[#3a5a40] hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-[#588157] text-xs font-semibold uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-gray-400 text-sm hover:text-white hover:underline decoration-[#3a5a40] underline-offset-2 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-[#588157] text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white hover:underline decoration-[#3a5a40] underline-offset-2 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-[#588157] text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+15712795452"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-[#3a5a40] flex-shrink-0" />
                  (571) 279-5452
                </a>
              </li>
              <li>
                <a
                  href="mailto:zsexteriors@gmail.com"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-[#3a5a40] flex-shrink-0" />
                  zsexteriors@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#3a5a40] flex-shrink-0 mt-0.5" />
                <span>Manassas, VA &mdash; Northern Virginia</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-[#3a5a40] flex-shrink-0 mt-0.5" />
                <span>Mon&ndash;Fri: 8:00 AM &ndash; 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2d2d2d]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; 2026 Z&apos;s Exterior Services LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 text-xs hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
