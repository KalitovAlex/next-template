"use client";
import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Вход</h1>
          <p className="text-default-500">
            Нет аккаунта?{" "}
            <Link href="/sign-up" className="text-primary">
              Зарегистрироваться
            </Link>
          </p>
        </CardHeader>
        <CardBody>
          <SignInForm />
        </CardBody>
      </Card>
    </div>
  );
}
