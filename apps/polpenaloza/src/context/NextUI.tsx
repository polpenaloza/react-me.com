'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export interface ProvidersProps {
  children: React.ReactNode
}

export function NextUIReactProvider({ children }: ProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
