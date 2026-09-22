import type { Produto } from '../types/entidades';

export const produtos: Produto[] = [
  { id: 1, nome: 'Parafuso M6', categoriaId: 1, quantidade: 120 },
  { id: 2, nome: 'Chave Phillips', descricao: 'Ponta PH2', categoriaId: 2, quantidade: 0 },
  { id: 3, nome: 'Chave Phillips', descricao: 'Ponta PH2', categoriaId: 2, quantidade: 0 },
];

export function carregarProdutos(): Promise<Produto[]> {
  return new Promise((resolver) => {
    setTimeout(() => resolver(produtos), 800);
  });
}
