export default function CTABanner() {
  return (
    <section className="bg-[#3a5a40] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2
          className="text-white font-bold text-balance leading-tight mb-4 animate-fadein"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
        >
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-[#a3c49a] text-lg mb-8 animate-fadein animate-delay-100">
          Get in touch today for a free on-site consultation.
        </p>
        <div className="animate-fadein animate-delay-200">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#3a5a40] font-semibold text-base hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
