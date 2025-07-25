import { UseFormRegister } from "react-hook-form";
import { LoginForm } from "../types/login";

export interface LoginFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  registerProps: ReturnType<UseFormRegister<LoginForm>>;
}
