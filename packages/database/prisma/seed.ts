import { PrismaClient } from '@prisma/client'

import { logger } from '../src/logger'

const prisma = new PrismaClient()
const log = logger('seed')

async function main() {
  return setTimeout(async () => {
    log('Seeding database...')
  }, 1000)
}

main()
  .catch((e) => {
    log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
