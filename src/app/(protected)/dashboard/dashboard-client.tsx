"use client";
import { useAuthStore } from "@/entities/auth/model/auth-store";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function DashboardClient() {
  const { user, logout, fetchUser } = useAuthStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      fetchUser()
        .catch(() => {
          logout();
          router.push("/sign-in");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [fetchUser, router, user, logout]);

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <Skeleton className="h-8 w-1/3 rounded-lg" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-3/4 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
            <Skeleton className="h-10 w-24 rounded-lg" />
          </CardBody>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardBody>
            <p>Загрузка данных пользователя...</p>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardBody className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Личный кабинет</h1>
          <div>
            <p>Email: {user.email}</p>
            <p>
              ФИО: {user.person.lastName} {user.person.firstName}{" "}
              {user.person.patronymic}
            </p>
          </div>
          <Button color="danger" variant="flat" onClick={handleLogout}>
            Выйти
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
