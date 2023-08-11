/**
 * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.
 * It has to be a `.js`-file to be imported there.
 */
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
})

const localEnv = envSchema.safeParse(process.env)

if (!localEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(localEnv.error.format(), null, 4)
  )
  process.exit(1)
}

export const env = localEnv.data

export default env
