import type { Produto } from '../types/entidades';
import { CartaoProduto } from './CartaoProduto';

interface ListaProdutosProps {
  produtos: Produto[];
}

export function ListaProdutos({ produtos }: ListaProdutosProps) {
  if (produtos.length === 0) {
    return <p>Nenhum produto no estoque.</p>;
  }

  return (
    <section>
      {produtos.map((produto) => (
        <CartaoProduto key={produto.id} produto={produto} />
      ))}
    </section>
  );
}
