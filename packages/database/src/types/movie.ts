import type { Account } from '@prisma/client'

export type AccountMap = {
  [key: string]: Account
}

export type { Account }
