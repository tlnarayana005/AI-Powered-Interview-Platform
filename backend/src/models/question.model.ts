import { Schema, model, Document } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  sampleInput?: string;
  sampleOutput?: string;
  createdAt: Date;
  updatedAt: Date;
}

const questionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    tags: [{ type: String }],
    sampleInput: String,
    sampleOutput: String
  },
  { timestamps: true }
);

questionSchema.index({ difficulty: 1, tags: 1 });
export const QuestionModel = model<IQuestion>('Question', questionSchema);
