"use client";

import { Button } from "@nextui-org/react";
import { useAuth } from "@/features/auth/model/useAuth";
import { useAuthStore } from "@/features/auth/model/store/auth.store";

export const DashboardPage = () => {
  const { logout } = useAuth();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="container mx-auto p-4">
      {user && (
        <div>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div className="flex gap-4">
        <Button onClick={logout} variant="solid">
          Выйти
        </Button>
      </div>
    </div>
  );
};
