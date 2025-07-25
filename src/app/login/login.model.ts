import { loginSchema } from "./login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { STATUS_MESSAGES } from "./login.messages";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LoginForm } from "@/domain/types/login";

export const useLoginModel = () => {
  const { setToken } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const jwtFake =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data: LoginForm) => {
    setToken(jwtFake);
    toast.success(STATUS_MESSAGES.success);
    setTimeout(() => {
      setLoading(false);
      router.push("/produtos");
    }, 2000);
    console.log(data);
  });
  return {
    onSubmit,
    register,
    errors,
    isValid,
    loading,
  };
};
