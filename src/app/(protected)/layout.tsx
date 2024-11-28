"use client";
import { useAuthStore } from "@/entities/auth/model/auth-store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, fetchUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      fetchUser().catch(() => {
        router.push("/auth");
      });
    }
  }, [fetchUser, router, user]);

  return <>{children}</>;
}
