"use client";

import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/features/auth/api/auth.api";
import { useAuthStore } from "../store/auth.store";
import { tokenModel } from "../token.model";
import { useRouter } from "next/navigation";

export const useInitAuth = () => {
  const { setUser, setAccessToken, reset } = useAuthStore();
  const navigate = useRouter();

  return useQuery({
    queryKey: ["init-auth"],
    queryFn: async () => {
      const refreshToken = tokenModel.getRefreshToken();
      
      if (!refreshToken) {
        return null;
      }

      try {
        // Обновляем токены
        const tokens = await authApi.refresh(refreshToken);
        setAccessToken(tokens.accessToken);
        
        // Получаем актуальные данные пользователя
        const user = await authApi.getSelf();
        setUser(user);
        
        return user;
      } catch (error) {
        console.error("Failed to initialize auth:", error);
        reset();
        tokenModel.removeRefreshToken();
        navigate.push("/auth");
        return null;
      }
    },
    retry: false,
  });
}; 