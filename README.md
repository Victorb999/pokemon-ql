# Pokémon-QL (Pokédex)

Uma Pokédex moderna construída com Next.js 14, consumindo a PokeAPI através de consultas GraphQL (Pokemon-QL). O app permite consultar informações detalhadas dos Pokémon, visualizar listagens por geração e filtrar por tipos.

## Principais Funcionalidades
- **Perfil do Pokémon**: Exibe detalhes vitais, stats, tipos e até as cadeias de evolução.
- **Listagem por Geração**: Navegue facilmente pelos Pokémon de diferentes gerações.
- **Filtro por Tipo**: Busque os monstrinhos pelas suas tipagens (Fogo, Água, Planta, etc.).

## Tecnologias e Arquitetura (Stack)
- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS (com fontes otimizadas, e.g., Londrina Solid via `next/font`)
- **Gerenciamento de Estado Global**: Jotai
- **Data Fetching / Cache de Servidor**: React Query (v3)
- **API**: GraphQL Beta PokeAPI (`https://beta.pokeapi.co/graphql/v1beta`)

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   # ou yarn, pnpm, bun install
   ```
3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.
