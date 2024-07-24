import Pagina from "../components/template/Pagina";
import produtos from "@/data/constants/produtos";
import CardProduto from "../components/produto/CardProduto";

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-wrap gap-5 justify-center">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
