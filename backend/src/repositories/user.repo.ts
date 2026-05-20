import { UserModel, IUser } from '../models/user.model';

export class UserRepository {
  async findByEmail(email: string) {
    return UserModel.findOne({ email, deletedAt: null }).lean();
  }

  async findById(id: string) {
    return UserModel.findOne({ _id: id, deletedAt: null }).lean();
  }

  async create(payload: Partial<IUser>) {
    return UserModel.create(payload);
  }

  async updateVerification(userId: string) {
    return UserModel.findByIdAndUpdate(userId, { verified: true }, { new: true });
  }

  async updatePassword(userId: string, passwordHash: string) {
    return UserModel.findByIdAndUpdate(userId, { password: passwordHash }, { new: true });
  }
}
