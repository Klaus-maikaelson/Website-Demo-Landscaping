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
    <section className="bg-[#1a1a1a] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col gap-4 border-l-2 border-[#4ade80] bg-[#0f0f0f] rounded-r-xl pl-6 pr-5 py-8 animate-fadein"
                style={{ animationDelay: `${index * 0}.${index * 0.1 + 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-[#4ade80]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#4ade80]" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
