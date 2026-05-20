import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { config } from './config';
import logger from './config/logger';
import { attachSockets } from './socket';
import { errorHandler } from './middleware/error.middleware';
import apiRoutes from './routes';
import swaggerDocument from './config/swagger.json';

export async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: [config.clientUrl],
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  app.use(helmet());
  app.use(cors({ origin: config.clientUrl, credentials: true }));
  app.use(cookieParser());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(xss());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 120,
      standardHeaders: true,
      legacyHeaders: false
    })
  );

  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/api/v1', apiRoutes);
  app.use(errorHandler);

  attachSockets(io);

  await config.connectDatabase();
  await config.connectCache();

  httpServer.listen(config.port, () => {
    logger.info(`Backend running on port ${config.port}`);
  });
}
