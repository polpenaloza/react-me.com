'use client'

import './i18next.config'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from '@workspace/ui/src/ErrorBoundary'
import { ReactNode, useState } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'

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
      <ReactQueryDevtools initialIsOpen={false} position='bottom' />
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
