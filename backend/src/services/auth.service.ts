import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { UserRepository } from '../repositories/user.repo';
import { generateHash, verifyHash } from '../utils/crypto';
import { sendEmail } from '../utils/email';
import { TokenPayload } from '../types';

const userRepo = new UserRepository();

export class AuthService {
  async register(data: { fullName: string; email: string; password: string; role: string }) {
    const existing = await userRepo.findByEmail(data.email);
    if (existing) {
      const error = new Error('Email already in use');
      (error as any).status = 409;
      throw error;
    }

    const passwordHash = await generateHash(data.password);
    const user = await userRepo.create({
      fullName: data.fullName,
      email: data.email,
      password: passwordHash,
      role: data.role || 'candidate'
    });

    const verificationToken = this.createToken({ userId: user.id, email: user.email }, config.jwt.accessExpires);
    await sendEmail(user.email, 'Verify your account', `Please verify your email with this token: ${verificationToken}`);

    return { user: { id: user.id, email: user.email, role: user.role } };
  }

  async login(email: string, password: string) {
    const user = await userRepo.findByEmail(email);
    if (!user || !(await verifyHash(password, user.password))) {
      const error = new Error('Invalid credentials');
      (error as any).status = 401;
      throw error;
    }

    const accessToken = this.createToken({ userId: user.id, role: user.role }, config.jwt.accessExpires);
    const refreshToken = this.createToken({ userId: user.id, role: user.role }, config.jwt.refreshExpires, config.jwt.refreshSecret);
    return { accessToken, refreshToken };
  }

  async refreshToken(token: string) {
    try {
      const payload = jwt.verify(token, config.jwt.refreshSecret) as TokenPayload;
      const accessToken = this.createToken({ userId: payload.userId, role: payload.role }, config.jwt.accessExpires);
      return { accessToken };
    } catch (error) {
      const e = new Error('Invalid refresh token');
      (e as any).status = 401;
      throw e;
    }
  }

  async verifyEmail(token: string) {
    const payload = jwt.verify(token, config.jwt.accessSecret) as TokenPayload;
    await userRepo.updateVerification(payload.userId);
  }

  async forgotPassword(email: string) {
    const user = await userRepo.findByEmail(email);
    if (!user) return;
    const resetToken = this.createToken({ userId: user.id }, '1h');
    await sendEmail(user.email, 'Password reset', `Reset your password with this link token: ${resetToken}`);
  }

  async resetPassword(token: string, password: string) {
    const payload = jwt.verify(token, config.jwt.accessSecret) as TokenPayload;
    const passwordHash = await generateHash(password);
    await userRepo.updatePassword(payload.userId, passwordHash);
  }

  private createToken(payload: TokenPayload, expiresIn: string, secret = config.jwt.accessSecret) {
    return jwt.sign(payload, secret, { expiresIn });
  }
}
