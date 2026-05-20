import { InterviewModel, IInterview } from '../models/interview.model';
import { UserRepository } from '../repositories/user.repo';
import { TokenPayload } from '../types';

const userRepo = new UserRepository();

export class InterviewService {
  async create(payload: Partial<IInterview>) {
    return InterviewModel.create(payload);
  }

  async list(user: TokenPayload, pagination: { page: number; limit: number }) {
    const { page, limit } = pagination;
    const filter = user.role === 'candidate' ? { candidate: user.userId } : user.role === 'recruiter' ? { recruiter: user.userId } : {};
    const [data, total] = await Promise.all([
      InterviewModel.find(filter).skip((page - 1) * limit).limit(limit).sort({ scheduledAt: -1 }).lean(),
      InterviewModel.countDocuments(filter)
    ]);

    return { data, page, limit, total };
  }

  async getById(id: string, user: TokenPayload) {
    const interview = await InterviewModel.findById(id).lean();
    if (!interview) {
      const error = new Error('Interview not found');
      (error as any).status = 404;
      throw error;
    }
    if (user.role === 'candidate' && interview.candidate.toString() !== user.userId) {
      const error = new Error('Unauthorized');
      (error as any).status = 403;
      throw error;
    }
    return interview;
  }

  async schedule(id: string, scheduledAt: string) {
    return InterviewModel.findByIdAndUpdate(id, { scheduledAt: new Date(scheduledAt), status: 'scheduled' }, { new: true });
  }
}
