import '@/styles/globals.css'

import { Link } from '@nextui-org/link'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getServerAuthSession } from '@workspace/server/src/auth'

// import { LeftSidebar } from '@/components/LeftSidebar'
import { Navbar } from '@workspace/ui/src/NavBar'
import { fonts } from '@/config/fonts'
import { seoGenerateMetadata } from '@/config/seo-meta'
import { NextUIReactProvider } from '@/providers/NextUI'
import { SessionProviders } from '@/providers/Session'
import { TRPCProvider } from '@/providers/Trcp'
import { siteConfig } from '@/config/site'

export async function generateMetadata() {
  return seoGenerateMetadata({ title: 'X-Clone' })
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()

  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        className={`${fonts} bg-background min-h-screen font-sans antialiased`}
      >
        <TRPCProvider>
          <SessionProviders>
            <NextUIReactProvider
              themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
            >
              <div className='relative flex h-screen flex-col'>
                <Navbar siteConfig={siteConfig} session={session} />
                <main className='container mx-auto max-w-7xl flex-grow px-6 pt-16'>
                  {children}
                </main>
                <footer className='flex w-full items-center justify-center py-3'>
                  <Link
                    isExternal
                    className='flex items-center gap-1 text-current'
                    href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
                    title='nextui.org homepage'
                  >
                    <span className='text-default-600'>Powered by</span>
                    <p className='text-primary'>NextUI</p>
                  </Link>
                </footer>
              </div>
            </NextUIReactProvider>
          </SessionProviders>
        </TRPCProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
