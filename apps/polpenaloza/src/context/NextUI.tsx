'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export interface ProvidersProps {
  children: React.ReactNode
}

export function NextUIReactProvider({ children }: ProvidersProps) {
  const router = useRouter()

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
}
