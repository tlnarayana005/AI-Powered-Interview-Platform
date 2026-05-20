import { Schema, model, Document, Types } from 'mongoose';

export interface IReport extends Document {
  interview: Types.ObjectId;
  candidate: Types.ObjectId;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  createdBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const reportSchema = new Schema<IReport>(
  {
    interview: { type: Schema.Types.ObjectId, ref: 'Interview', required: true },
    candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    summary: { type: String, required: true },
    strengths: [{ type: String }],
    weaknesses: [{ type: String }],
    recommendations: [{ type: String }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

reportSchema.index({ interview: 1 });
export const ReportModel = model<IReport>('Report', reportSchema);
