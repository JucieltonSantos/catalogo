import { loginSchema } from '~/app/login/login.schema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import z from 'zod';

export type LoginForm = z.infer<typeof loginSchema>;

export type Status = 'success';

export type LoginFormFields = {
  user: string;
  password: string;
};

export type LoginFormComponentProps = {
  onSubmit: () => void;
  register: UseFormRegister<LoginFormFields>;
  errors: FieldErrors<LoginFormFields>;
  isValid: boolean;
  loading: boolean;
};
