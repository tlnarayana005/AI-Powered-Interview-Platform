import { create } from 'zustand';

interface UserState {
  accessToken?: string;
  user?: { id: string; fullName: string; email: string; role: string };
  setAuth: (token: string, user: UserState['user']) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<UserState>((set) => ({
  accessToken: undefined,
  user: undefined,
  setAuth: (accessToken, user) => set({ accessToken, user }),
  clearAuth: () => set({ accessToken: undefined, user: undefined })
}));
