'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center py-24">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a5a40]/80 border border-[#588157]/60 text-white text-sm font-medium mb-8">
          <Star className="w-4 h-4 text-[#d4a017] fill-[#d4a017]" />
          220+ Five-Star Reviews on Google
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.25)}
          className="text-white font-bold text-balance leading-tight mb-6"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          Expert Landscaping Company<br className="hidden md:block" /> in Manassas, VA
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Transforming outdoor spaces with landscaping, power washing,
          hardscaping, and more&nbsp;&mdash; done right, every time.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#3a5a40] text-white font-semibold text-base hover:bg-[#2d4731] transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#3a5a40] transition-all duration-200 hover:scale-105"
          >
            See Our Services
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </section>
  )
}
