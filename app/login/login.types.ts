import z from "zod";
import { loginSchema } from "./login.schema";

export type LoginForm = z.infer<typeof loginSchema>;

export type Status = 'success'