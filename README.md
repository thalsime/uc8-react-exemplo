# uc8-react-exemplo

Projeto-exemplo do **módulo 2 (React na web)** da **UC8 - Desenvolver aplicações mobile**, do
curso Técnico em Desenvolvimento de Sistemas.

É o projeto que o docente constrói junto com a turma, encontro a encontro, enquanto o assunto
é React no navegador. Não é o projeto de nenhum aluno: é a referência que acompanha as aulas
e mostra, a cada etapa, o estado esperado do código. O domínio do exemplo é controle de
estoque (produtos, categorias e movimentações). O aplicativo mobile da UC continua no
[uc8-projeto-exemplo](https://github.com/thalsime/uc8-projeto-exemplo).

## Como acompanhar a evolução

- Cada encontro que altera código recebe um commit e uma **tag `aulaN`**. A tag marca o
  código exatamente como ficou ao fim daquele encontro.
- Para ver o projeto como estava em um encontro:

  ```bash
  git checkout aula5
  ```

  Para voltar ao estado mais recente: `git checkout main`. Para listar as tags: `git tag`.
- A branch `main` sempre aponta para o estado mais recente. A evolução entra por pull
  request, um por encontro.

| Tag | Encontro | O que entrou |
|---|---|---|

## Stack

| Camada | Escolha |
|---|---|
| Ferramenta de build | Vite 8 |
| Biblioteca de interface | React 19 |
| Linguagem | TypeScript 6, com modo estrito (padrão da versão) |
| Linter | Oxlint, que vem no template |

Regra mantida da UC5: `any` é proibido, com exceção documentada em código de terceiros.

## Como rodar

Requisitos: Node.js (o material é testado nas versões 23.6, 24 e 26) e Git.

```bash
git clone https://github.com/thalsime/uc8-react-exemplo.git
cd uc8-react-exemplo
npm install
npm run dev
```

O terminal mostra o endereço, normalmente `http://localhost:5173/`.

Verificações que precisam passar antes de cada tag:

```bash
npx tsc -b
npm run build
npm run lint
```

**`npx tsc -b`, e não `npx tsc --noEmit`.** O `tsconfig.json` deste projeto não lista arquivo
nenhum: só aponta para `tsconfig.app.json` e `tsconfig.node.json`. Rodado na raiz, o
`tsc --noEmit` não verifica nada e termina sem erro mesmo com erro de tipo no código. O Vite
também não confere tipos: a página roda com o erro.

## Como o projeto foi criado

Mesmo comando do material de aula, no encontro 5:

```bash
npx create-vite@latest uc8-react-exemplo --template react-ts --no-interactive
```

A opção `--no-interactive` evita as perguntas de linter e de instalação que o `create-vite`
faz mesmo com o template informado. O `create-vite` não cria repositório Git: o `git init`
é feito à parte. Além do template, o primeiro commit traz um `.gitattributes` com
`* text=auto eol=lf`, para que o Git no Windows não marque todos os arquivos como alterados
por causa da quebra de linha.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | A página que o navegador abre, com a `div` onde o React desenha |
| `src/main.tsx` | O ponto de entrada: entrega a `div` ao React e desenha o `App` |
| `src/App.tsx` | O componente raiz |
| `src/index.css`, `src/App.css` | Estilos do template |
| `public/` | Arquivos servidos como estão, como o favicon |
| `vite.config.ts` | A configuração do Vite |
| `tsconfig.json` | Aponta para `tsconfig.app.json` (código de `src/`) e `tsconfig.node.json` (`vite.config.ts`) |
| `package.json`, `package-lock.json` | Dependências, versões exatas e scripts |
| `.oxlintrc.json` | Regras do linter |
