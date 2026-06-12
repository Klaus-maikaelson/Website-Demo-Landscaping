import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Z's Exterior Services | Free Quote",
  description: "Get a free quote for landscaping, power washing, hardscaping, and more in Manassas, VA. Contact Z's Exterior Services today for expert exterior services.",
  keywords: 'contact Z exteriors, free quote landscaping Manassas, exterior services Northern Virginia',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
