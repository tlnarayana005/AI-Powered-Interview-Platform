import { Schema, model, Document, Types } from 'mongoose';

export interface IInterview extends Document {
  title: string;
  recruiter: Types.ObjectId;
  candidate: Types.ObjectId;
  round: string;
  status: 'scheduled' | 'running' | 'completed' | 'cancelled';
  scheduledAt: Date;
  questionPool: Types.ObjectId[];
  feedback?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const interviewSchema = new Schema<IInterview>(
  {
    title: { type: String, required: true },
    recruiter: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    round: { type: String, required: true },
    status: { type: String, enum: ['scheduled', 'running', 'completed', 'cancelled'], default: 'scheduled' },
    scheduledAt: { type: Date, required: true },
    questionPool: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    feedback: { type: String },
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

interviewSchema.index({ recruiter: 1, scheduledAt: 1 });
interviewSchema.index({ candidate: 1, status: 1 });

export const InterviewModel = model<IInterview>('Interview', interviewSchema);
