"use client";
import { createContext, useState } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";

interface ContextoCarrinhoProps {
  itens: ItemCarrinho[];
  qtdDeItens: number;
  addItem: (item: Produto) => void;
  rmItem: (item: Produto) => void;
}

interface ProviderCarrinhoProps {
  children: React.ReactNode;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: ProviderCarrinhoProps) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  const rmItem = (item: Produto) => {
    console.log(item);
    const indice = itens.findIndex((i) => {
      console.log(i);
      return i.produto.id === item.id;
    });

    console.log(indice);

    if (indice === -1) {
      setItens([...itens, { produto: item, quantidade: 1 }]);
    } else {
      const novosItens = [...itens];
      novosItens[indice].quantidade++;
      setItens(novosItens);
    }
  };

  const addItem = (item: Produto) => {
    console.log(item);
    const indice = itens.findIndex((i) => {
      console.log(i);
      return i.produto.id === item.id;
    });

    console.log(indice);

    if (indice === -1) {
      setItens([...itens, { produto: item, quantidade: 1 }]);
    } else {
      const novosItens = [...itens];
      novosItens[indice].quantidade++;
      setItens(novosItens);
    }
  };

  return (
    <ContextoCarrinho.Provider
      value={{
        itens: itens,
        addItem,
        rmItem,
        get qtdDeItens() {
          return itens.reduce((total, item) => total + item.quantidade, 0);
        },
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  );
}

export default ContextoCarrinho;
