import '~/styles/main.css'
import 'animate.css'

import type { AppProps, AppType } from 'next/app'
import { useEffect, useState } from 'react'

import { AppProviders } from '~/context/app-providers'
import { trpc } from '~/utils/trpc'

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return <div />

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}

export default trpc.withTRPC(App)
