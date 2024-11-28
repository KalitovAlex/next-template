import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Защищенные маршруты
const PROTECTED_ROUTES = ["/dashboard"];
// Маршруты для неавторизованных пользователей
const AUTH_ROUTES = ["/auth", "/sign-in", "/sign-up"];
// Маршрут по умолчанию для авторизованных пользователей
const DEFAULT_AUTH_REDIRECT = "/dashboard";
// Маршрут по умолчанию для неавторизованных пользователей
const DEFAULT_UNAUTH_REDIRECT = "/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const refreshToken = request.cookies.get("refreshToken");
  const isAuthenticated = !!refreshToken?.value;

  // Если пользователь на главной странице или страницах авторизации
  if (
    pathname === "/" ||
    AUTH_ROUTES.some((route) => pathname.startsWith(route))
  ) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(DEFAULT_AUTH_REDIRECT, request.url));
    }
  }

  // Если неавторизованный пользователь пытается зайти на защищенные страницы
  if (
    !isAuthenticated &&
    PROTECTED_ROUTES.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL(DEFAULT_UNAUTH_REDIRECT, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/auth/:path*",
    "/sign-in/:path*",
    "/sign-up/:path*",
    "/dashboard/:path*",
  ],
};
