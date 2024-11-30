import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRefreshTokenFromCookie } from "@/shared/lib/middleware-auth";

export function middleware(request: NextRequest) {
  const refreshToken = getRefreshTokenFromCookie(request);
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth") || 
                    request.nextUrl.pathname.startsWith("/register");
  const isProtectedPage = request.nextUrl.pathname.startsWith("/dashboard");

  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!refreshToken && isProtectedPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    if (refreshToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 