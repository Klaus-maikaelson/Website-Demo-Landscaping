'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    name: 'Plant Installation',
    image: '/services/plant-installation.png',
    description:
      'Custom plant design and installation following best practices. Your landscaping will thrive for years to come.',
  },
  {
    name: 'Mulching',
    image: '/services/mulching.png',
    description:
      "Suppress weeds and define garden beds with fresh mulch. Significantly enhances your yard's appearance.",
  },
  {
    name: 'Yard Cleanup',
    image: '/services/yard-cleanup.png',
    description:
      'Debris removal, trimming, and edge defining to sharpen your outdoor spaces.',
  },
  {
    name: 'Hardscaping',
    image: '/services/hardscaping.png',
    description:
      'Retaining walls, patios, and steps installed by experts. Complete your outdoor space.',
  },
  {
    name: 'Drainage',
    image: '/services/drainage.png',
    description:
      'Grading and drain installation to prevent water pooling on your property.',
  },
  {
    name: 'Leaf Removal',
    image: '/services/leaf-removal.png',
    description:
      'Professional fall cleanup to protect your grass and boost curb appeal.',
  },
  {
    name: 'Power Washing',
    image: '/services/power-washing.png',
    description:
      'Soft washing and surface cleaning to remove algae, mildew, and grime.',
  },
  {
    name: 'Permanent LED Installs',
    image: '/services/led-installs.png',
    description:
      'Permanent holiday lighting designed and installed for stress-free seasons year after year.',
  },
  {
    name: 'Snow Removal',
    image: '/services/snow-removal.png',
    description:
      'Driveways and walkways cleared to keep your property safe all winter.',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0f0f0f] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 text-balance">
            What We Offer
          </h2>
          <p className="text-[#9ca3af] text-lg">
            Professional exterior services for every season.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariant}
              className="group relative h-72 rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-lg"
            >
              {/* Background photo */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-[#1a1a1a] transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 transition-colors duration-300 group-hover:from-black group-hover:via-black/70" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {service.name}
                  </h3>
                  <span className="mt-2 block h-[3px] w-12 bg-[#4ade80] rounded-full" />

                  {/* Reveal on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-48 group-hover:opacity-100">
                    <p className="text-[14px] text-gray-300 leading-relaxed pt-3">
                      {service.description}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3a5a40] text-white text-sm font-semibold hover:bg-[#2d4731] transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
