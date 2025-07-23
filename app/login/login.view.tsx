import { Card } from "@/components/card/Card";
import { LoginFormComponent } from "./components/login-form/LoginForm";
import { useLoginModel } from "./login.model";
import { CardContent } from "@/components/card-content/CardContent";

type LoginViewProps = ReturnType<typeof useLoginModel>;

export const LoginView = (props: LoginViewProps) => {
  const { errors, isValid, loading, onSubmit, register } = props;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <LoginFormComponent
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            isValid={isValid}
            loading={loading}
          />
        </CardContent>
      </Card>
    </div>
  );
};
