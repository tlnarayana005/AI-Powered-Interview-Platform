import { config } from '../config';

export const redis = config.redisClient;

export async function setCache(key: string, value: unknown, ttlSeconds = 300) {
  await redis.set(key, JSON.stringify(value), { EX: ttlSeconds });
}

export async function getCache<T>(key: string): Promise<T | null> {
  const cached = await redis.get(key);
  return cached ? (JSON.parse(cached) as T) : null;
}
