import Link from 'next/link'

interface QuoteButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  className?: string
  size?: 'default' | 'small'
}

export default function QuoteButton({
  children = 'Get a Free Quote',
  variant = 'primary',
  className = '',
  size = 'default',
}: QuoteButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 hover:scale-105'

  const sizeStyles = size === 'small'
    ? 'px-5 py-2 text-sm rounded-full'
    : 'px-8 py-4 text-base rounded-full'

  const variantStyles = {
    primary: 'bg-[#3a5a40] text-white hover:bg-[#2d4731] shadow-lg',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-[#3a5a40]',
    outline: 'border-2 border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0f0f0f]',
    white: 'bg-white text-[#3a5a40] hover:bg-gray-50 shadow-lg',
  }

  return (
    <Link href="/contact" className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  )
}
