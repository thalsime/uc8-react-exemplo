import type { Movimentacao, Produto } from '../types/entidades';
import { ehProduto } from '../utils/guardas';
import { CartaoMovimentacao } from './CartaoMovimentacao';
import { CartaoProduto } from './CartaoProduto';

interface CartaoItemProps {
  item: Produto | Movimentacao;
}

export function CartaoItem({ item }: CartaoItemProps) {
  if (ehProduto(item)) {
    return <CartaoProduto produto={item} />;
  }
  return <CartaoMovimentacao movimentacao={item} nomeProduto={`Produto ${item.produtoId}`} />;
}
