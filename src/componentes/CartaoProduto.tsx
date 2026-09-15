import type { Produto } from '../types/entidades';

const produto: Produto = {
  id: 2, nome: 'Chave Phillips', descricao: 'Ponta PH2',
  categoriaId: 2, quantidade: 0,
};

export function CartaoProduto() {
  return (
    <article>
      <h2>{produto.nome}</h2>
      <p>{produto.descricao ?? 'Sem descrição'}</p>
      <p>{produto.quantidade} em estoque</p>
    </article>
  );
}
