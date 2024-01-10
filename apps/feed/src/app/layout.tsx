import '@/styles/globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { fonts } from '@/core/fonts'
import { seoGenerateMetadata } from '@/core/seo-meta'
import { SessionProviders } from '@/providers/Session'
import { TRPCProvider } from '@/providers/Trcp'

export async function generateMetadata() {
  return seoGenerateMetadata({ title: 'X-Clone' })
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${fonts} font-sans`}>
        <TRPCProvider>
          <SessionProviders>{children}</SessionProviders>
        </TRPCProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
