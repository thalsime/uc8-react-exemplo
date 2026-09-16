import type { Produto } from '../types/entidades';

type VarianteCartao = 'completo' | 'resumido';

interface CartaoProdutoProps {
  produto: Produto;
  limiteBaixo?: number;
  variante?: VarianteCartao;
}

export function CartaoProduto({
  produto,
  limiteBaixo = 5,
  variante = 'completo',
}: CartaoProdutoProps) {
  return (
    <article>
      <h2>{produto.nome}</h2>
      {variante === 'completo' && <p>{produto.descricao ?? 'Sem descrição'}</p>}
      <p>{produto.quantidade} em estoque</p>
      {produto.quantidade <= limiteBaixo && <p>Estoque baixo</p>}
    </article>
  );
}
