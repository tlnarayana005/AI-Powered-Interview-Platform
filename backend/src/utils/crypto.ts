import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export function generateHash(payload: string) {
  return bcrypt.hash(payload, SALT_ROUNDS);
}

export function verifyHash(payload: string, hash: string) {
  return bcrypt.compare(payload, hash);
}
