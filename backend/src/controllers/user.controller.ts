import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/user.repo';

const userRepo = new UserRepository();

export async function getProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userRepo.findById(req.user!.userId);
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
}

export async function updateProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await userRepo.updateVerification(req.user!.userId);
    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
}
