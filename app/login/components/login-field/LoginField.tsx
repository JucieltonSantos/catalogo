import { Input } from "@/components/input/Input";
import { UseFormRegister } from "react-hook-form";
import { LoginForm } from "../../login.types";

interface LoginFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  registerProps: ReturnType<UseFormRegister<LoginForm>>;
}

export function LoginField({
  type,
  placeholder,
  error,
  registerProps,
}: LoginFieldProps) {
  return (
    <div>
      <Input type={type} placeholder={placeholder} {...registerProps} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
