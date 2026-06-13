'use client'

import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ken Burns zooming background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a5a40]/80 border border-[#588157]/60 text-white text-sm font-medium mb-8 animate-fadein animate-delay-100">
          <Star className="w-4 h-4 text-[#d4a017] fill-[#d4a017]" />
          220+ Five-Star Reviews on Google
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold text-balance leading-tight mb-6 animate-fadein animate-delay-200"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          Expert Landscaping Company<br className="hidden md:block" /> in Manassas, VA
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fadein animate-delay-300">
          Transforming outdoor spaces with landscaping, power washing,
          hardscaping, and more&nbsp;&mdash; done right, every time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadein animate-delay-400">
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
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  )
}
