"use client";
import useCarrinho from "@/data/hooks/useCarrinho";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho() {
  const { qtdDeItens } = useCarrinho();
  return (
    <Link href="/carrinho">
      <div className="relative">
        <div className="flex justify-center items-center absolute w-5 h-5 bg-red-600 -right-2.5 -top-2.5 rounded-full text-xs text-white">
          {qtdDeItens}
        </div>
        <IconShoppingCart size={32} stroke={1} />
      </div>
    </Link>
  );
}
