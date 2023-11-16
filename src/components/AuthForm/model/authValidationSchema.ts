import { z } from "zod";

export const authValidationSchema = z.object({
  email: z
    .string({ required_error: "Введите email" })
    .min(1, "Введите email")
    .email("Введите корректный email"),
  password: z
    .string({ required_error: "Введите пароль" })
    .min(1, "Введите пароль"),
});
