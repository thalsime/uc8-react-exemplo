import type { Movimentacao, Produto } from './types/entidades';
import { Cabecalho } from './componentes/Cabecalho';
import { CartaoItem } from './componentes/CartaoItem';
import { CartaoMovimentacao } from './componentes/CartaoMovimentacao';
import { CartaoProduto } from './componentes/CartaoProduto';
import { Rodape } from './componentes/Rodape';

const parafuso: Produto = {
  id: 1, nome: 'Parafuso M6', categoriaId: 1, quantidade: 120,
};

const chavePhillips: Produto = {
  id: 2, nome: 'Chave Phillips', descricao: 'Ponta PH2',
  categoriaId: 2, quantidade: 0,
};

const chaveEsgotada: Produto = { ...chavePhillips, id: 3, quantidade: 0 };

const entradaChave: Movimentacao = {
  id: 1, produtoId: 2, tipo: 'entrada', quantidade: 10, data: '2026-01-10',
};

export default function App() {
  return (
    <main>
      <Cabecalho titulo="Controle de estoque" />
      <CartaoProduto produto={parafuso} limiteBaixo={200} />
      <CartaoProduto produto={chavePhillips} variante="resumido" />
      <CartaoProduto produto={chaveEsgotada} />
      <CartaoMovimentacao movimentacao={entradaChave} nomeProduto={chavePhillips.nome} />
      <CartaoItem item={chavePhillips} />
      <CartaoItem item={entradaChave} />
      <Rodape />
    </main>
  );
}
