interface CabecalhoProps {
  titulo: string;
}

export function Cabecalho({ titulo }: CabecalhoProps) {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>Produtos, categorias e movimentações</p>
    </header>
  );
}
