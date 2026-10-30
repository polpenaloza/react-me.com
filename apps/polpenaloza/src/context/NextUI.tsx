import { NextUIProvider } from '@nextui-org/react'

export interface ProvidersProps {
  children: React.ReactNode
}

export function NextUIReactProvider({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>
}
