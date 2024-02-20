//This section is for all layout in the project!!!!!!!!!!
import { Footer } from '@/components'
import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { relative } from 'path'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
    <Navbar />
    {children}
    <Footer />
  </body>
  </html>
  )
}
