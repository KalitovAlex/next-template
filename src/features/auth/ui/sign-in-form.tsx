"use client";
import { useAuthStore } from "@/entities/auth/model/auth-store";
import { Form } from "@/shared/ui/Form/Form";
import { signInFields } from "@/features/auth/lib/form-fields";
import { signInSchema } from "@/features/auth/lib/schemas";
import type { SignInDto } from "@/shared/types/auth";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignInForm = () => {
  const signIn = useAuthStore((state) => state.signIn);
  const router = useRouter();

  const onSubmit = async (data: SignInDto) => {
    try {
      await signIn(data);
      toast.success("Успешная авторизация");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка авторизации");
    }
  };

  return (
    <Form
      fields={signInFields}
      schema={signInSchema}
      onSubmit={onSubmit}
      className="max-w-md mx-auto p-6 space-y-6"
    >
      <Button type="submit" color="primary" className="w-full">
        Войти
      </Button>
    </Form>
  );
};
