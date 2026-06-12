'use client'

import { motion } from 'framer-motion'
import { Star, Shield, CreditCard, MapPin } from 'lucide-react'

const items = [
  {
    icon: Star,
    title: '5-Star Rated on Google',
    description: 'Loved by homeowners across Northern Virginia',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully covered for your peace of mind',
  },
  {
    icon: CreditCard,
    title: 'Financing Available',
    description: 'Enjoy now, pay later with flexible plans',
  },
  {
    icon: MapPin,
    title: 'Serving Manassas & Beyond',
    description: 'Within a 15-mile radius of Manassas, VA',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-[#3a5a40]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#3a5a40]" />
                </div>
                <h3 className="text-base font-semibold text-[#1a1a1a]">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
