"use client";
import { SignUpForm } from "@/features/auth/ui/sign-up-form";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Регистрация</h1>
          <p className="text-default-500">
            Уже есть аккаунт?{" "}
            <Link href="/sign-in" className="text-primary">
              Войти
            </Link>
          </p>
        </CardHeader>
        <CardBody>
          <SignUpForm />
        </CardBody>
      </Card>
    </div>
  );
}
