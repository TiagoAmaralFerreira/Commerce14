export interface ProviderCarrinhoProps {
  children: React.ReactNode;
}

export function ProvedorCarrinho(props: ProviderCarrinhoProps) {
  return <div className="border border-red-300">{props.children}</div>;
}
