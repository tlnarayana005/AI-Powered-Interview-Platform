import { Schema, model, Document, Types } from 'mongoose';

export interface ISubmission extends Document {
  interview: Types.ObjectId;
  candidate: Types.ObjectId;
  language: string;
  code: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  testResults: Record<string, unknown>[];
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

const submissionSchema = new Schema<ISubmission>(
  {
    interview: { type: Schema.Types.ObjectId, ref: 'Interview', required: true },
    candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    status: { type: String, enum: ['pending', 'running', 'passed', 'failed'], default: 'pending' },
    testResults: { type: Array, default: [] },
    score: { type: Number, default: 0 }
  },
  { timestamps: true }
);

submissionSchema.index({ interview: 1, candidate: 1 });
export const SubmissionModel = model<ISubmission>('Submission', submissionSchema);
