import mongoose from 'mongoose';
import { createClient } from 'redis';

const {
  PORT,
  NODE_ENV,
  MONGO_URI,
  REDIS_URL,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  JWT_ACCESS_EXPIRES,
  JWT_REFRESH_EXPIRES,
  OPENAI_API_KEY,
  CLIENT_URL
} = process.env;

if (!MONGO_URI || !REDIS_URL || !JWT_ACCESS_SECRET || !JWT_REFRESH_SECRET || !OPENAI_API_KEY || !CLIENT_URL) {
  throw new Error('Missing required environment variables');
}

const redisClient = createClient({ url: REDIS_URL });

export const config = {
  port: Number(PORT ?? 5000),
  env: NODE_ENV ?? 'development',
  mongoUri: MONGO_URI,
  jwt: {
    accessSecret: JWT_ACCESS_SECRET,
    refreshSecret: JWT_REFRESH_SECRET,
    accessExpires: JWT_ACCESS_EXPIRES ?? '15m',
    refreshExpires: JWT_REFRESH_EXPIRES ?? '30d'
  },
  openaiKey: OPENAI_API_KEY,
  clientUrl: CLIENT_URL,
  redisClient,
  async connectDatabase() {
    await mongoose.connect(this.mongoUri, { autoIndex: this.env !== 'production' });
  },
  async connectCache() {
    await redisClient.connect();
  }
};
