import type { Movimentacao, Produto } from '../types/entidades';

export function ehProduto(item: Produto | Movimentacao): item is Produto {
  return 'nome' in item;
}
