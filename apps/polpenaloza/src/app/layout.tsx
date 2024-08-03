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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        <script defer async src='/oneko.js' type='text/javascript' />
      </head>
      <body
        className={clsx(
          'min-h-screen font-inter antialiased',
          fonts
        )}
      >
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
      </body>
    </html>
  )
}
