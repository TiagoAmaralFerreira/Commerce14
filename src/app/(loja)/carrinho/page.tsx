"use client";
import AreaItemCarrinho from "@/app/components/carrinho/AreaItemCarrinho";
import Pagina from "@/app/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Carrinho() {
  const { itens, addItem, rmItem } = useCarrinho();

  console.log(itens);

  return (
    <Pagina>
      <div className="flex flex-col gap-5">
        {itens.map((item, key) => (
          <AreaItemCarrinho
            key={key}
            item={item}
            adicionar={(item) => addItem(item.produto)}
            remover={(item) => rmItem(item.produto)}
          />
        ))}
      </div>
    </Pagina>
  );
}
