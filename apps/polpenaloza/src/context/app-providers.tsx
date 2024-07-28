'use client'

import './i18next.config'

import { ErrorBoundary } from '@workspace/ui/src/ErrorBoundary'
import { ReactNode } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { NextUIReactProvider } from './NextUI'
import React from 'react'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  const { i18n } = useTranslation()

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <NextUIReactProvider>{children}</NextUIReactProvider>
        </I18nextProvider>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
