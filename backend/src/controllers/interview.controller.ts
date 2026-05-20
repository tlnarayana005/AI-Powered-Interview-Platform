import { Request, Response, NextFunction } from 'express';
import { InterviewService } from '../services/interview.service';

const interviewService = new InterviewService();

export async function createInterview(req: Request, res: Response, next: NextFunction) {
  try {
    const interview = await interviewService.create({ ...req.body, recruiter: req.user.id });
    res.status(201).json({ success: true, data: interview });
  } catch (error) {
    next(error);
  }
}

export async function listInterviews(req: Request, res: Response, next: NextFunction) {
  try {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 20);
    const interviews = await interviewService.list(req.user, { page, limit });
    res.json({ success: true, ...interviews });
  } catch (error) {
    next(error);
  }
}

export async function getInterviewById(req: Request, res: Response, next: NextFunction) {
  try {
    const interview = await interviewService.getById(req.params.id, req.user);
    res.json({ success: true, data: interview });
  } catch (error) {
    next(error);
  }
}

export async function scheduleInterview(req: Request, res: Response, next: NextFunction) {
  try {
    const interview = await interviewService.schedule(req.params.id, req.body.scheduledAt);
    res.json({ success: true, data: interview });
  } catch (error) {
    next(error);
  }
}
