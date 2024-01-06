import '@/styles/globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { SessionProviders } from '@/app/_providers/Session'
import { TRPCProvider } from '@/app/_providers/Trcp'
import { fonts } from '@/app/core/fonts'
import { seoGenerateMetadata } from '@/app/core/seo-meta'

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
