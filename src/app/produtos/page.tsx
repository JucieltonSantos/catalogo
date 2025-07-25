"use client";

import { Header } from "@/components/header/header";
import { ProdutosView } from "./produtos.view";
import { useProdutosModel } from "./produtos.model";
import { ToastContainer } from "react-toastify";

export default function ProdutosPage() {
  const methods = useProdutosModel();
  return (
    <div>
      <Header />
      <ProdutosView {...methods} />
      <ToastContainer />
    </div>
  );
}
