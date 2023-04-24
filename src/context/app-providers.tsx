// import translation catalog
import './i18next.config'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { localhost, mainnet } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'

const { provider, webSocketProvider } = configureChains(
  [
    {
      ...localhost,
      ...{
        nativeCurrency: {
          decimals: 18,
          name: 'Ether',
          symbol: 'ETH',
        },
        id: 31337,
        chainId: 31337,
      },
    },
    mainnet,
  ],
  [publicProvider()]
)

const connector = new MetaMaskConnector({
  options: {
    shimDisconnect: false,
  },
})

const client = createClient({
  autoConnect: true,
  connectors: [connector],
  provider,
  webSocketProvider,
})

import { ErrorBoundary } from '~/components/ErrorBoundary'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  // ensures that data is not shared between users
  // ref: https://react-query.tanstack.com/guides/ssr
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 20,
            cacheTime: 5 * 60 * 1000,
            retry: 0,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
            refetchInterval: false,
            refetchIntervalInBackground: false,
            refetchOnMount: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: false,
          },
        },
      })
  )
  const { i18n } = useTranslation()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <ErrorBoundary>
        <WagmiConfig client={client}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </WagmiConfig>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
