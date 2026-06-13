import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#0f0f0f] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
