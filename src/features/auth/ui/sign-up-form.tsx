"use client";
import { useAuthStore } from "@/entities/auth/model/auth-store";
import { Form } from "@/shared/ui/Form/Form";
import { signUpFields } from "../lib/form-fields";
import { signUpSchema } from "../lib/schemas";
import type { SignUpDto } from "@/shared/types/auth";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignUpForm = () => {
  const signUp = useAuthStore((state) => state.signUp);
  const router = useRouter();

  const onSubmit = async (data: SignUpDto) => {
    try {
      await signUp(data);
      toast.success("Успешная регистрация");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Ошибка регистрации");
    }
  };

  return (
    <Form
      fields={signUpFields}
      schema={signUpSchema}
      onSubmit={onSubmit}
      className="max-w-md mx-auto p-6 space-y-6"
    >
      <Button type="submit" color="primary" className="w-full">
        Зарегистрироваться
      </Button>
    </Form>
  );
}; 