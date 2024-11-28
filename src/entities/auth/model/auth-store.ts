import { create } from "zustand";
import { authService } from "../api/auth-service";
import { userService } from "@/entities/user/api/user-service";
import { setStoredTokens, clearStoredToken } from "@/shared/lib/auth";
import type { User, SignInDto, SignUpDto } from "@/shared/types/auth";

interface AuthState {
  user: User | null;
  signIn: (data: SignInDto) => Promise<void>;
  signUp: (data: SignUpDto) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  signIn: async (data) => {
    const { refreshToken } = await authService.signIn(data);
    setStoredTokens({ refreshToken });
    const user = await userService.getMe();
    set({ user });
  },

  signUp: async (data) => {
    const { refreshToken } = await authService.signUp(data);
    setStoredTokens({ refreshToken });
    const user = await userService.getMe();
    set({ user });
  },

  logout: () => {
    clearStoredToken();
    set({ user: null });
  },

  fetchUser: async () => {
    const user = await userService.getMe();
    set({ user });
  },
}));
