import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
});

export const signUpSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
  person: z.object({
    firstName: z.string().min(2, "Минимум 2 символа"),
    lastName: z.string().min(2, "Минимум 2 символа"),
    patronymic: z.string().optional(),
  }),
});
