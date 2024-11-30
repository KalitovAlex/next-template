import { z } from "zod";

export const useSignupSchema = () => {
  const personSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    patronymicName: z.string().optional(),
  });

  const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    person: personSchema,
  });

  return schema.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
};

export type SignupFormValues = z.infer<ReturnType<typeof useSignupSchema>>;
