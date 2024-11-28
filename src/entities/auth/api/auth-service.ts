import { axiosClient } from "@/shared/api/axios-client";
import type {
  AuthResponse,
  SignInDto,
  SignUpDto,
  RefreshTokenDto,
} from "@/shared/types/auth";

export const authService = {
  async signUp(data: SignUpDto) {
    const response = await axiosClient.post<AuthResponse>(
      "/auth/sign-up",
      data
    );
    return response.data;
  },

  async signIn(data: SignInDto) {
    const response = await axiosClient.post<AuthResponse>(
      "/auth/sign-in",
      data
    );
    return response.data;
  },

  async refresh(data: RefreshTokenDto) {
    const response = await axiosClient.post<AuthResponse>(
      "/auth/refresh",
      data
    );
    return response.data;
  },
};
