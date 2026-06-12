'use client'

import { motion } from 'framer-motion'
import {
  Sprout,
  Layers,
  Trash2,
  Hammer,
  Droplets,
  Wind,
  Zap,
  Lightbulb,
  Snowflake,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Sprout,
    name: 'Plant Installation',
    description:
      'Custom plant design and installation following best practices. Your landscaping will thrive for years to come.',
  },
  {
    icon: Layers,
    name: 'Mulching',
    description:
      "Suppress weeds and define garden beds with fresh mulch. Significantly enhances your yard's appearance.",
  },
  {
    icon: Trash2,
    name: 'Yard Cleanup',
    description:
      'Debris removal, trimming, and edge defining to sharpen your outdoor spaces.',
  },
  {
    icon: Hammer,
    name: 'Hardscaping',
    description:
      'Retaining walls, patios, and steps installed by experts. Complete your outdoor space.',
  },
  {
    icon: Droplets,
    name: 'Drainage',
    description:
      'Grading and drain installation to prevent water pooling on your property.',
  },
  {
    icon: Wind,
    name: 'Leaf Removal',
    description:
      'Professional fall cleanup to protect your grass and boost curb appeal.',
  },
  {
    icon: Zap,
    name: 'Power Washing',
    description:
      'Soft washing and surface cleaning to remove algae, mildew, and grime.',
  },
  {
    icon: Lightbulb,
    name: 'Permanent LED Installs',
    description:
      'Permanent holiday lighting designed and installed for stress-free seasons year after year.',
  },
  {
    icon: Snowflake,
    name: 'Snow Removal',
    description:
      'Driveways and walkways cleared to keep your property safe all winter.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-3 text-balance">
            What We Offer
          </h2>
          <p className="text-gray-500 text-lg">
            Professional exterior services for every season.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-[#3a5a40]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#3a5a40]" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-2">{service.name}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[#3a5a40] text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
