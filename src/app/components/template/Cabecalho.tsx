import Carrinho from "./Carrinho";
import Logo from "./Logo";

export interface CabecalhoProps {
  title?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <header className="flex justify-between items-center bg-[#003F62] h-20 px-10">
      <Logo />
      <Carrinho />
    </header>
  );
}
