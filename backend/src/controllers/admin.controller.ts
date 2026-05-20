import { Request, Response, NextFunction } from 'express';

export async function getAdminStats(req: Request, res: Response, next: NextFunction) {
  try {
    res.json({
      success: true,
      data: {
        activeUsers: 0,
        interviewsScheduled: 0,
        systemHealth: 'nominal'
      }
    });
  } catch (error) {
    next(error);
  }
}
