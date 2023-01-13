import '~/styles/main.css'

import type { AppProps, AppType } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { AppProviders } from '~/context/app-providers'
import { trpc } from '~/utils/trpc'

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    router.events.on('routeChangeError', () => setLoading(false))
    router.events.on('routeChangeStart', () => setLoading(false))
    router.events.on('routeChangeComplete', () => setLoading(true))

    return () => {
      router.events.off('routeChangeError', () => setLoading(false))
      router.events.off('routeChangeStart', () => setLoading(false))
      router.events.off('routeChangeComplete', () => setLoading(true))
    }
  }, [router.events])

  if (!isHydrated) return <div />

  return (
    <AppProviders>
      <Component {...pageProps} isLoading={loading} />
    </AppProviders>
  )
}

export default trpc.withTRPC(App)
