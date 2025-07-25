import z from 'zod';
import { STATUS_MESSAGES } from './login.messages';

export const loginSchema = z.object({
  user: z.string().min(3, { message: STATUS_MESSAGES.form.minCarcterUser }),
  password: z.string().min(8, { message: STATUS_MESSAGES.form.minCarcterPassWord }),
});
