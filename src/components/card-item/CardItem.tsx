import Image from "next/image";

interface CardItemProps {
  title?: string;
  price?: string;
  priceDescount?: string;
  imageSrc?: string;
  onClick?: () => void;
}

export function CardItem({
  title,
  price,
  imageSrc,
  priceDescount,
  onClick
}: CardItemProps) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-[200px] h-[200px]">
          <Image
            fill
            className="object-cover"
            src={imageSrc || "#"}
            alt="Velas de carro"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-col">
          <span className="text-[12px] text-gray-500 line-through">
            {priceDescount}
          </span>
          <span className="text-lg font-bold text-green-600">{price}</span>
          <span className="text-[11px] font-bold text-green-600">
            Frete Grátis
          </span>
        </div>
        <h2 className="text-[12px] text-gray-800 mb-2">{title}</h2>
      </div>
    </div>
  );
}
