import type { Movimentacao } from '../types/entidades';

interface CartaoMovimentacaoProps {
  movimentacao: Movimentacao;
  nomeProduto: string;
}

export function CartaoMovimentacao({
  movimentacao,
  nomeProduto,
}: CartaoMovimentacaoProps) {
  return (
    <article>
      <h2>
        {movimentacao.tipo === 'entrada' ? 'Entrada' : 'Saída'}: {nomeProduto}
      </h2>
      <p>{movimentacao.quantidade} unidades</p>
    </article>
  );
}
