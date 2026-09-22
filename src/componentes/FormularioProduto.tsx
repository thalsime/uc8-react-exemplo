import { useState } from 'react';
import type { Produto } from '../types/entidades';

// Categoria fixa por enquanto.
const CATEGORIA_PADRAO = 1;

interface FormularioProdutoProps {
  aoEnviar: (produto: Produto) => void;
}

export function FormularioProduto({ aoEnviar }: FormularioProdutoProps) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  function tratarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    aoEnviar({
      id: Date.now(),
      nome,
      descricao: descricao === '' ? undefined : descricao,
      categoriaId: CATEGORIA_PADRAO,
      quantidade,
    });
  }

  return (
    <form onSubmit={tratarEnvio}>
      <label>
        Nome
        <input value={nome} onChange={(evento) => setNome(evento.target.value)} />
      </label>
      <label>
        Descrição
        <input value={descricao} onChange={(evento) => setDescricao(evento.target.value)} />
      </label>
      <label>
        Quantidade
        <input
          type="number"
          value={quantidade}
          onChange={(evento) => setQuantidade(Number(evento.target.value))}
        />
      </label>
      <button type="submit">Aplicar ao cartão</button>
    </form>
  );
}
