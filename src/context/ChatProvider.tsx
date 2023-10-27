'use client'

import * as Ably from 'ably'
import { AblyProvider } from 'ably/react'

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const client = new Ably.Realtime.Promise({
    clientId: 'client-polpenaloza',
    authUrl: '/api/ably',
    authMethod: 'POST',
  })

  return <AblyProvider client={client}>{children}</AblyProvider>
}
