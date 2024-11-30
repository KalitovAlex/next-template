import { NextRequest } from "next/server";
import { REFRESH_TOKEN_KEY } from "@/shared/constants/auth";

export function getRefreshTokenFromCookie(
  request: NextRequest
): string | undefined {
  const token = request.cookies.get(REFRESH_TOKEN_KEY);
  return token?.value;
}
