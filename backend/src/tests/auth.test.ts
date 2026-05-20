import request from 'supertest';
import express from 'express';
import authRoutes from '../routes/v1/auth.routes';

const app = express();
app.use(express.json());
app.use('/api/v1/auth', authRoutes);

describe('Auth routes', () => {
  it('should reject invalid login payload', async () => {
    const response = await request(app).post('/api/v1/auth/login').send({ email: 'invalid' });
    expect(response.status).toBe(400);
  });
});
