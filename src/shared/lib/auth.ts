import Cookies from "js-cookie";

export const setStoredTokens = ({ refreshToken }: { refreshToken: string }) => {
  Cookies.set("refreshToken", refreshToken, { path: "/" });
};

export const getStoredToken = (): string => {
  return Cookies.get("refreshToken") || "";
};

export const clearStoredToken = () => {
  Cookies.remove("refreshToken", { path: "/" });
};
