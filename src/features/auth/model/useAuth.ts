"use client";

import { useMutation } from "@tanstack/react-query";
import { tokenModel } from "./token.model";
import { useAuthStore } from "./store/auth.store";
import { toast } from "sonner";
import { Tokens } from "@/shared/types/auth";
import { t } from "@/shared/config/localization";
import { authApi } from "@/features/auth/api/auth.api";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const navigate = useRouter();
  const { setUser, setAccessToken, reset } = useAuthStore();

  const handleAuthSuccess = (data: Tokens) => {
    if (!data.accessToken || !data.refreshToken || !data.user) {
      toast.error(t.auth.invalidAuth);
      return;
    }

    try {
      setAccessToken(data.accessToken);
      setUser(data.user);
      tokenModel.setRefreshToken(data.refreshToken);
      toast.success(t.auth.successLogin);
      navigate.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(t.auth.loginFailed);
      reset();
      tokenModel.removeRefreshToken();
    }
  };

  const login = useMutation({
    mutationFn: authApi.login,
    onSuccess: handleAuthSuccess,
    onError: (error: Error) => {
      toast.error(error.message || t.auth.loginFailed);
      reset();
      tokenModel.removeRefreshToken();
    },
  });

  const signup = useMutation({
    mutationFn: authApi.signup,
    onSuccess: handleAuthSuccess,
    onError: (error: Error) => {
      toast.error(error.message || t.auth.signupFailed);
      reset();
      tokenModel.removeRefreshToken();
    },
  });

  const logout = () => {
    try {
      reset();
      tokenModel.removeRefreshToken();

      toast.success(t.auth.successLogout);
      navigate.push("/auth");
    } catch (error) {
      console.error(error);
      toast.error(t.auth.loginFailed);
    }
  };

  return {
    login: login.mutate,
    signup: signup.mutate,
    logout,
    isLoading: login.isPending,
    isSigningUp: signup.isPending,
  };
};
