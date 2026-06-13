const pillars = [
  {
    num: '01',
    title: 'Clear Communication',
    description:
      'You always have the information you need. No guessing, no surprises, ever.',
  },
  {
    num: '02',
    title: 'Above & Beyond',
    description:
      'We go the extra mile on every single job to earn your trust and long-term loyalty.',
  },
  {
    num: '03',
    title: 'Eye for Detail',
    description:
      'Transformative results down to the last blade of grass, every single time.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#0f0f0f] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 animate-fadein">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-balance">
            Why Z&apos;s Exteriors
          </h2>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.num}
              className="flex flex-col gap-3 animate-fadein"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <span
                className="font-bold leading-none text-[#4ade80]/20 select-none"
                style={{ fontSize: 'clamp(64px, 8vw, 96px)' }}
              >
                {pillar.num}
              </span>
              <h3 className="text-[20px] font-semibold text-white -mt-2">{pillar.title}</h3>
              <p className="text-[#9ca3af] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
