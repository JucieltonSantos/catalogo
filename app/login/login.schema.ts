import z from "zod";
import { STATUS_MESSAGES } from "./login.messages";

export const loginSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: STATUS_MESSAGES.form.minCarcter })
    .regex(/[A-Z]/, { message: STATUS_MESSAGES.form.upercaseLetters })
    .regex(/[a-z]/, { message: STATUS_MESSAGES.form.lowercaseLetters })
    .regex(/[0-9]/, { message: STATUS_MESSAGES.form.textNumbers })
    .regex(/[^a-zA-Z0-9]/, { message: STATUS_MESSAGES.form.textSymbols }),
});
