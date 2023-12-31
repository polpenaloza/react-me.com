import '../global.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { AppProviders } from '@/context/app-providers'
import { seoGenerateMetadata } from '@/core/seo-meta'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  return seoGenerateMetadata({ title: 'polpenaloza' })
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <script defer async src='/oneko.js' type='text/javascript'></script>
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
      </body>
    </html>
  )
}
