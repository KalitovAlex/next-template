import { useLocale } from "@/shared/hooks/useLocale";
import { z } from "zod";

export const useSignupSchema = () => {
  const { t } = useLocale();

  const personSchema = z.object({
    firstName: z.string().min(1, t.auth.validation.firstNameRequired),
    lastName: z.string().min(1, t.auth.validation.lastNameRequired),
    patronymicName: z.string().optional(),
  });

  const schema = z.object({
    email: z.string().email(t.auth.validation.emailInvalid),
    password: z
      .string()
      .min(6, t.auth.validation.passwordMin.replace("{{min}}", "6")),
    confirmPassword: z.string(),
    person: personSchema,
  });

  return schema.refine((data) => data.password === data.confirmPassword, {
    message: t.auth.validation.passwordsDoNotMatch,
    path: ["confirmPassword"],
  });
};

export type SignupFormValues = z.infer<ReturnType<typeof useSignupSchema>>;
