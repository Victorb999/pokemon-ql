# Possíveis Melhorias para o Pokémon-QL

Baseado na arquitetura atual do projeto, listamos alguns pontos de evolução técnica, refatoração de design e melhorias de usabilidade:

## 1. Upgrade e Modernização das Ferramentas
- **Migração do React Query (`v3`) para o TanStack Query (`v5`)**: O `@tanstack/react-query` introduz vantagens expressivas para o SSR no App Router, pacotes mais leves e funções de hook ainda mais limpas. Atualmente consta no package.json v3.39.

## 2. Abstração e Tipagem de GraphQL (+ CodeGen)
- **GraphQL Code Generator**: No momento, existem requisições usando o `fetch` nativo no qual "strings gigantes" de query GraphQL são injetadas (ex: `src/services/requestPokemon.ts`). Usar uma ferramenta como *GraphQL Code Generator* ao lado de um mini-client (como `graphql-request`) automatiza a tipagem inteira do schema (sem a necessidade do arquivo imenso tipado a mão `src/types/types.ts`).

## 3. SEO Avançado (Metadados Dinâmicos)
- **Next.js Generate Metadata**: Se o projeto busca ter a sua pokedex "compartilhável e perfeitamente indexada", pode-se usar a nova API de metadados dinâmicos na tela `/pokemon/[id]`. Isso garantirá que, ao colar o link em redes sociais, ele venha rico com a imagem do Pokémon, nome e descrição na open graph picture.

## 4. Performance Interativa Limitadora
- **Abraçando Server Components (RSC) + `<Suspense />`**: Várias das consultas do React Query hoje parecem acionadas exclusivamente em Client-components. Usar as novas Features do React dentro do NextJS pode mitigar tempo de carregamento de JS, injetando esqueleto interativo na pré-renderização de algumas buscas de pokémons.

## 5. Implementação de Testes
- **Testes Unitários:** Falta uma base sólida de testes explorando Vitest e Testing Library para bater diretamente nos services da API e funções Helper.
- **E2E e Fluxo:** Criar testes end-to-end (usando Cypress ou Playwright) validando todo o pipeline do usuário (Ex: abrir app -> Buscar bulbasaur por geração -> checar stats -> interagir com a type chart).

## 6. Tratamentos Granulares de Erro
- **Limites de Erro (Error Boundaries):** Substituir o fallback básico (aquele block de `throw new Error("Ops...")`) pelas features de `error.tsx` e `not-found.tsx` do Next.js. Devolve pro usuário interatividade rápida em caso de timeout em vez de uma tela em crash catastrófico, facilitando o botão ("Tentar novamente").

## 7. Otimização de Assets
- **Image Loader nativo (`next/image`)**: Garantir que todos as sprites e arts visuais recebidas de backends hospedados (ex: imagens do GitHub Raw na API) sejam devidamente parseadas sem quebrar Layout Shift no cache local via component do app framework.
