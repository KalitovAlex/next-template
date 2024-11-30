"use client";

import { useInitAuth } from "@/features/auth/model/hooks/useInitAuth";

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { isLoading } = useInitAuth();

  if (isLoading) {
    return null;
  }

  return children;
}
