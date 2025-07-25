"use client";

import { Card } from "@/components/card/Card";
import { useProdutosModel } from "./produtos.model";
import { CardItem } from "@/components/card-item/CardItem";

type ProdutosViewProps = ReturnType<typeof useProdutosModel>;

export const ProdutosView = (props: ProdutosViewProps) => {
  return (
    <main className="max-w-7xl mx-auto py-8">
      <div className="mb-8 px-6 text-center">
        <h1 className="text-3xl font-bold  mb-2">Peças Automotivas</h1>
        <h2>Encontre as melhores peças para seu veículo</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 justify-center">
        {props?.listaProdutos?.map((resp, key) => {
          return (
            <Card key={key + "-" + resp}>
              <CardItem
                title={resp.title}
                imageSrc={resp.imageSrc[0]}
                price={resp.price}
                priceDescount={resp.priceDescount}
                onClick={() => {
                  window.location.href = `/produtos/${resp.id}`;
                }}
              />
            </Card>
          );
        })}
      </div>
    </main>
  );
};
