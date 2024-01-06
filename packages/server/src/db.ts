import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

import { env } from './env.js'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  }).$extends(withAccelerate())

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = db
