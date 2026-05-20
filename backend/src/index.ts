import dotEnv from 'dotenv';
import { startServer } from './app';

dotEnv.config();

startServer().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Server startup failed:', error);
  process.exit(1);
});
