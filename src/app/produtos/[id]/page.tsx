'use client';

import { Button } from '~/components/button/button';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useProdutosModel } from '../produtos.model';
import { Header } from '~/components/header/header';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

function ProdutoDetalhe() {
  const products = useProdutosModel();
  const { id } = useParams();
  const [selectImage, setSelectImage] = useState<string>('');

  const getProductId = products.listaProdutos.find((produto) => produto.id === id);

  if (!getProductId) {
    return <div>Produto não encontrado.</div>;
  }

  const handleBuy = () => {
    toast.success('Produto adicionado ao carrinho!');
  };

  return (
    <>
      <Header />
      <main className="p-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded shadow-sm shadow-neutral-500 p-3 min-h-106">
          <div className="flex">
            <div className="flex flex-col gap-4 mt-4">
              {getProductId.imageSrc.map((img, idx) => {
                const isSelectImage = selectImage === img;
                return (
                  <div
                    key={idx}
                    className={`cursor-pointer border-1 rounded hover:scale-105 transition hover:border-blue-950 ${
                      isSelectImage ? 'border-blue-800' : 'border-gray-500'
                    } min-h-14 flex items-center justify-center`}
                    onClick={() => setSelectImage(img)}
                  >
                    <Image
                      key={idx}
                      src={img}
                      alt={`Imagem ${idx + 2}`}
                      width={100}
                      height={100}
                      className="rounded border cursor-pointer hover:scale-105 transition"
                    />
                  </div>
                );
              })}
            </div>
            <div className="ml-2">
              <Image
                src={selectImage || getProductId.imageSrc[0]}
                alt={getProductId.title}
                width={500}
                height={500}
                className="rounded-lg shadow-s0 w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{getProductId.title}</h1>

            <div className="text-gray-500 line-through">R$ {getProductId.priceDescount}</div>
            <div className="text-2xl text-green-600 font-semibold">R$ {getProductId.price}</div>

            <p className="text-gray-700">{getProductId.title}</p>

            <Button onClick={handleBuy} className="mt-4">
              Comprar
            </Button>
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
}

export default ProdutoDetalhe;
