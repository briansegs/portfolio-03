import './globals.css'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import ParticlePreloader from '@/components/ParticlePreloader'
import { Toaster } from '@/components/ui/toaster'

import { Mulish, Crimson_Text as crimsonTextFont } from 'next/font/google'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900', '1000'],
  display: 'swap',
  variable: '--font-primary',
  adjustFontFallback: true,
})

const crimson = crimsonTextFont({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-secondary',
  adjustFontFallback: true,
})

export const metadata = {
  title: 'Brian Segers Portfolio',
  description: 'Front-end web development portfolio for Brian Segers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${crimson.variable}`}>
      <body className="relative font-secondary">
        <Toaster />
        <ParticlePreloader />
        <Nav className="absolute z-10 w-full padding-x py-8" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
