import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neev\'s Birthday',
  description: 'A beautiful and modern web application built with Next.js and Tailwind CSS For Neev\'s Birthday Celebration',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Three.js'],
  authors: [{ name: 'Neev' }],
  creator: 'Neev',
  publisher: 'Neev',
  metadataBase: new URL('https://neev.app'),
  openGraph: {
    title: 'Neev\'s Birthday',
    description: 'A beautiful and modern web application built with Next.js and Tailwind CSS',
    type: 'website',
    locale: 'en_US',
    siteName: 'Neev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neev\'s Birthday',
    description: 'A beautiful and modern web application built with Next.js and Tailwind CSS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
