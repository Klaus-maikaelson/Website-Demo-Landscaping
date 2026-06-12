'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: "Z's did an incredible job on our backyard. Professional, on time, and results beyond what we expected.",
    name: 'James R.',
    city: 'Manassas, VA',
  },
  {
    text: 'Best landscaping company in the area. They completely transformed our front yard. Highly recommend!',
    name: 'Sarah M.',
    city: 'Bristow, VA',
  },
  {
    text: "From mulching to hardscaping, Z's handles it all. Communication was excellent throughout the whole project.",
    name: 'David K.',
    city: 'Gainesville, VA',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#d4a017] text-[#d4a017]" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f5f5f5] py-16 md:py-24">
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
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <Stars />
              <p className="text-gray-600 italic leading-relaxed flex-1 text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-semibold text-[#1a1a1a] text-sm">{review.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{review.city}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review count CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-4xl font-bold text-[#1a1a1a] mb-1">220+ Five-Star Reviews</p>
          <p className="text-gray-500 mb-6">Consistently rated 5 stars on Google</p>
          <a
            href="https://www.google.com/maps/search/Z's+Exterior+Services+Manassas+VA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#3a5a40] text-[#3a5a40] font-semibold text-sm hover:bg-[#3a5a40] hover:text-white transition-all duration-200"
          >
            Read All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
