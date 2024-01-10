import { cookies } from 'next/headers'

import { TRPCReactProvider } from '@/trpc/react'

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider cookies={cookies().toString()}>
      {children}
    </TRPCReactProvider>
  )
}
