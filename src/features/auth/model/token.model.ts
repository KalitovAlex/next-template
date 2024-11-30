import Cookies from "js-cookie";
import { REFRESH_TOKEN_KEY } from "@/shared/constants/auth";

export const tokenModel = {
  setRefreshToken(token: string) {
    Cookies.set(REFRESH_TOKEN_KEY, token, { 
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      expires: 30, // 30 дней
    });
  },

  getRefreshToken(): string {
    return Cookies.get(REFRESH_TOKEN_KEY) || "";
  },

  removeRefreshToken() {
    Cookies.remove(REFRESH_TOKEN_KEY, { path: "/" });
  },
};
