import './i18next.config'

import { ErrorBoundary } from '@workspace/ui/src/ErrorBoundary'
import React, { type ReactNode, useEffect } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'

import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

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
          <main className='bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100'>
            {children}
          </main>
        </I18nextProvider>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
