import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Automation Platform - Streamline Your Business',
  description: 'Transform your business with our AI-powered automation platform. Increase efficiency, reduce costs, and scale your operations.',
  keywords: 'AI, automation, SaaS, business, efficiency, machine learning',
  authors: [{ name: 'AI Automation Platform' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
