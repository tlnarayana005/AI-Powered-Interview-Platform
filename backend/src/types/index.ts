export interface TokenPayload {
  userId: string;
  role: 'candidate' | 'recruiter' | 'admin';
  email?: string;
}
