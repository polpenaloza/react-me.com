'use client'

import './i18next.config'

import { ErrorBoundary } from '@workspace/ui/src/ErrorBoundary'
import { ReactNode } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  const { i18n } = useTranslation()

  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ErrorBoundary>
  )
}
