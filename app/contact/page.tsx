'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  'Plant Installation',
  'Mulching',
  'Yard Cleanup',
  'Hardscaping',
  'Drainage',
  'Leaf Removal',
  'Power Washing',
  'Permanent LED Installs',
  'Snow Removal',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      address: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  })

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance"
          >
            Contact Us
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ready to transform your outdoor space? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-3"
            >
              {isSuccess ? (
                <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#4ade80]/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Quote Request Sent!</h2>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We&apos;ll review your request and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 rounded-full bg-[#3a5a40] text-white font-semibold hover:bg-[#2d4731] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-white text-sm font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border ${
                        errors.fullName ? 'border-red-400' : 'border-[#2d2d2d]'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80] transition-colors`}
                      placeholder="John Smith"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border ${
                        errors.email ? 'border-red-400' : 'border-[#2d2d2d]'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80] transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border ${
                        errors.phone ? 'border-red-400' : 'border-[#2d2d2d]'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80] transition-colors`}
                      placeholder="(571) 279-5452"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label htmlFor="service" className="block text-white text-sm font-medium mb-2">
                      Service Needed <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border ${
                        errors.service ? 'border-red-400' : 'border-[#2d2d2d]'
                      } text-white focus:outline-none focus:border-[#4ade80] transition-colors appearance-none cursor-pointer`}
                    >
                      <option value="" className="text-gray-500">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                    )}
                  </div>

                  {/* Property Address */}
                  <div>
                    <label htmlFor="address" className="block text-white text-sm font-medium mb-2">
                      Property Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border ${
                        errors.address ? 'border-red-400' : 'border-[#2d2d2d]'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80] transition-colors`}
                      placeholder="123 Main St, Manassas, VA 20110"
                    />
                    {errors.address && (
                      <p className="text-red-400 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      Message <span className="text-gray-500">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2d2d2d] text-white placeholder-gray-500 focus:outline-none focus:border-[#4ade80] transition-colors resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#3a5a40] text-white font-semibold text-base hover:bg-[#2d4731] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Phone */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+15712795452" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                      (571) 279-5452
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:zsexteriors@gmail.com" className="text-gray-400 hover:text-[#4ade80] transition-colors">
                      zsexteriors@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-400">
                      Within a 15-mile radius of Manassas, VA<br />
                      Serving all of Northern Virginia
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday – Friday<br />
                      8:00 AM – 7:00 PM
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Weekends by appointment
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
