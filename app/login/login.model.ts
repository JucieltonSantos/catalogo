import { loginSchema } from "./login.schema";
import { LoginForm } from "./login.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { STATUS_MESSAGES } from "./login.messages";

export const useLoginModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data: LoginForm) => {
    setTimeout(() => {
      alert(STATUS_MESSAGES.success);
    }, 2000);
    console.log(data);
  });
  return {
    onSubmit,
    register,
    errors,
    isValid,
  };
};
