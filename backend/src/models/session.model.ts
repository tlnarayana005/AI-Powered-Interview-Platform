import { Schema, model, Document, Types } from 'mongoose';

export interface ISession extends Document {
  user: Types.ObjectId;
  refreshToken: string;
  ipAddress: string;
  userAgent: string;
  expiresAt: Date;
  createdAt: Date;
}

const sessionSchema = new Schema<ISession>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    refreshToken: { type: String, required: true },
    ipAddress: String,
    userAgent: String,
    expiresAt: { type: Date, required: true }
  },
  { timestamps: true }
);

sessionSchema.index({ user: 1, expiresAt: 1 });
export const SessionModel = model<ISession>('Session', sessionSchema);
