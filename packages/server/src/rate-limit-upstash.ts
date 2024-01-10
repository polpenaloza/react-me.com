import 'isomorphic-fetch' // keep this for @upstash/redis

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redisUrl = process.env.UPSTASH_REDIS_REST_URL as string
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN as string

const redis = new Redis({
  url: redisUrl,
  token: redisToken,
})

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(60, '1 m'),
  analytics: true,
})
