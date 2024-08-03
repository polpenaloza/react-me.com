import '../global.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { ReactNode } from 'react'

import { AppProviders } from '@/context/app-providers'
import { seoGenerateMetadata } from '@/core/seo-meta'
import clsx from 'clsx'
import { fonts } from '@/config/fonts'

export async function generateMetadata() {
  return seoGenerateMetadata({ title: 'polpenaloza' })
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <script defer async src='/oneko.js' type='text/javascript'></script>
      <body
        className={clsx(
          fonts,
          'min-h-screen bg-background font-inter antialiased'
        )}
      >
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
      </body>
    </html>
  )
}
