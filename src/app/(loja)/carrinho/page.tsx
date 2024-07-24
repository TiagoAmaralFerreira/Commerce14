"use client";
import Pagina from "@/app/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Carrinho() {
  const { numero } = useCarrinho();

  console.log(numero);

  return (
    <Pagina>
      <div>Carrinho</div>
    </Pagina>
  );
}
