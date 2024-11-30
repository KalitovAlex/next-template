import { axiosClient } from "@/shared/api/axios-client";
import { ENDPOINTS } from "@/shared/constants/api";
import type { Tokens } from "@/shared/types/auth";
import { SignupFormValues } from "@/features/auth/model/hooks/useSignupSchema";
import { LoginFormValues } from "@/features/auth/model/hooks/useLoginSchema";

export const authApi = {
  async login(credentials: LoginFormValues): Promise<Tokens> {
    const { data } = await axiosClient.post<Tokens>(
      ENDPOINTS.LOGIN,
      credentials
    );
    return data;
  },

  async signup(formData: SignupFormValues): Promise<Tokens> {
    const { data } = await axiosClient.post<Tokens>(ENDPOINTS.SIGNUP, formData);
    return data;
  },

  async refresh(refreshToken: string): Promise<Tokens> {
    const { data } = await axiosClient.post<Tokens>(ENDPOINTS.REFRESH, {
      refreshToken,
    });
    return data;
  },
};
