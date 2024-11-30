import { z } from "zod";

export const useLoginSchema = () => {
  return z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
};

export type LoginFormValues = z.infer<ReturnType<typeof useLoginSchema>>;
