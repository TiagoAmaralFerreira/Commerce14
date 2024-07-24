"use client";
import useCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/Produto";
import Image from "next/image";

export interface CardProdutoProps {
  produto: Produto;
}
export default function CardProduto(props: CardProdutoProps) {
  const { nome, descricao, preco, imagem } = props.produto;
  const { addItem } = useCarrinho();
  return (
    <div className="flex flex-col w-72 justify-center bg-zinc-200">
      <div className="relative w-72 h-52">
        <Image src={imagem} alt={nome} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
        <div className="flex justify-between items-center">
          <span className="">R$ {preco.toFixed(2)}</span>
          <button
            className="border border-white rounded-full px-5 py-1 text-xs"
            onClick={() => addItem(props.produto)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
