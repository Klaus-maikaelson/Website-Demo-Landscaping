import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sofia',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Z's Exterior Services | Landscaping in Manassas, VA",
  description:
    "Z's Exterior Services offers expert landscaping, power washing, hardscaping, mulching, and more in Manassas, VA and Northern Virginia. 220+ five-star reviews.",
  keywords: 'landscaping Manassas VA, lawn care Northern Virginia, hardscaping, power washing, mulching, exterior services',
  openGraph: {
    title: "Z's Exterior Services | Landscaping in Manassas, VA",
    description: 'Transforming outdoor spaces across Northern Virginia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} bg-[#0f0f0f]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
