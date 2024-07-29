import '../global.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { AppProviders } from '@/context/app-providers'
import { seoGenerateMetadata } from '@/core/seo-meta'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  return seoGenerateMetadata({ title: 'polpenaloza' })
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <script defer async src='/oneko.js' type='text/javascript'></script>
      <body
        className={clsx(
          'min-h-screen bg-background font-inter antialiased',
          inter.className,
        )}
      >
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
      </body>
    </html>
  )
}
