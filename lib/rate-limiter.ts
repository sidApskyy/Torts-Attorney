import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

let ratelimit: Ratelimit | null = null

function getRatelimit(): Ratelimit | null {
  if (ratelimit) return ratelimit

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!redisUrl || !redisToken) {
    return null
  }

  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    prefix: 'ratelimit:form',
    analytics: true,
  })

  return ratelimit
}

// In-memory fallback for when Redis is not configured
const memoryMap = new Map<string, { count: number; resetTime: number }>()
const WINDOW = 60 * 60 * 1000
const MAX = 3

function memoryRateLimit(identifier: string): boolean {
  const now = Date.now()
  const record = memoryMap.get(identifier)

  if (!record || now > record.resetTime) {
    memoryMap.set(identifier, { count: 1, resetTime: now + WINDOW })
    return true
  }

  if (record.count >= MAX) {
    return false
  }

  record.count++
  return true
}

export async function checkRateLimit(identifier: string): Promise<boolean> {
  const limiter = getRatelimit()

  if (!limiter) {
    return memoryRateLimit(identifier)
  }

  const { success } = await limiter.limit(identifier)
  return success
}
