import { LoginFormComponentProps } from '@/domain/types/login';
import { LoginField } from '../login-field/LoginField';
import { Button } from '@/components/button/button';

export function LoginFormComponent({
  onSubmit,
  register,
  errors,
  isValid,
  loading,
}: LoginFormComponentProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <LoginField
        label="User"
        type="text"
        placeholder="Usuário"
        error={errors.user?.message}
        registerProps={register('user')}
      />

      <LoginField
        label="Senha"
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
        registerProps={register('password')}
      />

      <Button type="submit" className="w-full" disabled={!isValid || loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  );
}
