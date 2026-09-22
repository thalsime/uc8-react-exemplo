import { useEffect, useState } from 'react';
import type { Movimentacao, Produto } from './types/entidades';
import { Cabecalho } from './componentes/Cabecalho';
import { CartaoItem } from './componentes/CartaoItem';
import { CartaoMovimentacao } from './componentes/CartaoMovimentacao';
import { FormularioProduto } from './componentes/FormularioProduto';
import { ListaProdutos } from './componentes/ListaProdutos';
import { Rodape } from './componentes/Rodape';
import { carregarProdutos } from './servicos/produtos';

const chavePhillips: Produto = {
  id: 2, nome: 'Chave Phillips', descricao: 'Ponta PH2',
  categoriaId: 2, quantidade: 0,
};

const entradaChave: Movimentacao = {
  id: 1, produtoId: 2, tipo: 'entrada', quantidade: 10, data: '2026-01-10',
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarProdutos().then((resultado) => {
      setProdutos(resultado);
      setCarregando(false);
    });
  }, []);

  if (carregando) {
    return <p>Carregando o estoque...</p>;
  }

  return (
    <main>
      <Cabecalho titulo="Controle de estoque" />
      <FormularioProduto aoEnviar={(novo) => setProdutos([...produtos, novo])} />
      <ListaProdutos produtos={produtos} />
      <CartaoMovimentacao movimentacao={entradaChave} nomeProduto={chavePhillips.nome} />
      <CartaoItem item={chavePhillips} />
      <CartaoItem item={entradaChave} />
      <Rodape />
    </main>
  );
}
