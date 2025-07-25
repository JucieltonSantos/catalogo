"use client";

import { ToastContainer } from "react-toastify";
import { useLoginModel } from "./login.model";
import { LoginView } from "./login.view";

export default function LoginPage() {
  const methods = useLoginModel();

  return (
    <>
      <LoginView {...methods} />
      <ToastContainer />
    </>
  );
}
