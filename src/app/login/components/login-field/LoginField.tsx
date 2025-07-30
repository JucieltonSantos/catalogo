import { Input } from '~/components/input/Input';
import { LoginFieldProps } from '~/domain/entities/login';

export function LoginField({ type, placeholder, error, registerProps }: LoginFieldProps) {
  return (
    <div>
      <Input type={type} placeholder={placeholder} {...registerProps} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
