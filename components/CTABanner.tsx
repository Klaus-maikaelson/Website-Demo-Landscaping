'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-[#3a5a40] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-white font-bold text-balance leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
        >
          Ready to Transform Your Outdoor Space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-[#a3c49a] text-lg mb-8"
        >
          Get in touch today for a free on-site consultation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#3a5a40] font-semibold text-base hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
