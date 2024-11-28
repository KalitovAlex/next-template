import { axiosClient } from "@/shared/api/axios-client";
import { ENDPOINTS } from "@/shared/constants/api";
import type { LoginFormValues } from "../model/hooks/useLoginSchema";
import type { SignupFormValues } from "../model/hooks/useSignupSchema";
import type { Tokens } from "@/shared/types/auth";

export const authApi = {
  async login(credentials: LoginFormValues): Promise<Tokens> {
    const { data } = await axiosClient.post<Tokens>(ENDPOINTS.LOGIN, credentials);
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
