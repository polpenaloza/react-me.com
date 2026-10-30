import './i18next.config'

import { ErrorBoundary } from '@workspace/ui/src/ErrorBoundary'
import React, { type ReactNode, useEffect } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'

import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

import { NextUIReactProvider } from './NextUI'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  const { i18n } = useTranslation()
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <NextUIReactProvider>
            <main className='text-foreground bg-background'>{children}</main>
          </NextUIReactProvider>
        </I18nextProvider>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
