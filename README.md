# Finance Manager

O **Finance Manager** é um aplicativo feito com **_TypeScript_**, **_ReactJS_**, **_NextJS_** e outras tecnologias.

Ele é um abrangente gerenciador financeiro projetado para ajudar os usuários a rastrear e gerenciar suas transações financeiras com facilidade. O aplicativo oferece suporte a vários tipos de Contas e criação de Categorias, permitindo aos usuários organizar suas transações e visualizá-las por meio de diversos gráficos interativos.

Além disso, o aplicativo possui uma variedade de recursos para aprimorar a experiência do usuário, incluindo filtros personalizáveis, tabelas de transações detalhadas, componentes customizáveis e importação de histórico de transações via arquivos CSV.

Um botão _Gerar informações para teste_ está disponível para gerar informações aleatórias, permitindo visualizar o pleno funcionamento de todas as features do aplicativo.

## Instalação

Para rodar o projeto na sua máquina, siga os seguintes passos:

1. Clone o repositório:

```bash
git clone https://github.com/PabloHFR/finance-manager.git
cd finance-manager
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as seguintes variáveis em um arquivo .env.local:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Rode o projeto:

```bash
npm run dev
```

## Features

- O usuário pode visualizar seus dados com gráficos dinâmicos: em Área, Linha, Barra, Pizza, Radar e Radial.
- O usuário poderá ter uma visão geral de suas finanças, vendo Despesas, Receita e o Saldo restante em Cards na página inicial.
- O usuário poderá comparar tais dados com os dados do período anterior, com feedback em porcentagens.
- O usuário poderá criar diferentes Contas e Categorias para organizar suas transações e finanças.
- O usuário poderá adicionar novas transações por meio de um formulário com ótima UX, selecionando Categoria e Conta a qual pertençam.
- O usuário poderá filtrar todas as transações ou transações para contas específicas.
- O usuário poderá filtrar as transações nos intervalos de data que desejar.
- O usuário poderá ver todas as transações em uma tabela com filtros e ordenação (sorting).
- O usuário poderá facilmente editar informações na tabela por meio de componentes customizáveis.
- O usuário poderá selecionar uma ou mais transações e deletá-las individualmente ou em massa.
- O usuário poderá facilmente importar transações por meio de arquivos CSV.
- O usuário poderá acessar a aplicação com qualquer dispositivo eletrônico, pois o design responsivo se adapta às suas necessidades.

O deploy foi feito na plataforma Vercel.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- React
- Tailwind CSS
- Shadcn UI
- ClerkJS para a Autenticação
- PostgreSQL
- Neon para o hospedar o Banco de Dados
- Drizzle ORM
- Hono.js para a API
- React Query
- Zod
- Zustand
