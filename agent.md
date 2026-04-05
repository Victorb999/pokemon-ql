# Documentação de Arquitetura (Para Agentes/Desenvolvedores)

## Estrutura de Diretórios
A arquitetura do projeto `pokemon-ql` busca separar responsabilidades entre apresentação, lógica de requisição e gerenciamento de estado global, organizado essencialmente na pasta `src/`:

- `app/`: Contém as rotas do Next.js App Router (Páginas como `/`, `/generation`, `/pokemon`, `/type`). Também expõe o layout global contendo os Providers (`Jotai` e `ReactQueryProvider`).
- `components/`: Componentes visuais puramente de apresentação (ex: botões, inputs, abas, barras de stat).
- `containers/`: Componentes de nível superior que agrupam lógica e estado antes de passarem pros componentes puramente visuais, conectando dados obtidos a partir dos serviços.
- `providers/`: Envelopa os contextos globais como a configuração do cliente React Query.
- `services/`: Contém a camada de requisição (GraphQL via Fetch API nativo). Todas as consultas (queries) são tratadas como strings usando a API v1beta da PokeAPI.
- `store/`: Concentra a criação e administração de atoms usando o Jotai (para estado rápido da interface que não precisa de cache persistente complexo).
- `types/`: Tipagens TypeScript globais (ex: tipos que representam o retorno da API GraphQL, Stats, Abilities, etc.).

## Padrões de Design
1. **Container vs Component**: Ao separar a apresentação visual (components) da inteligência/composição (containers), o código ganha manutenibilidade.
2. **Server-State via React Query**: Tudo que envolve API fica a cargo do React Query para propiciar caching nativo, refetch e states de loading; enquanto o Jotai toma conta unicamente do que for "UI State" cliente.
3. **App Router e Context Providers**: Para a adoção do v14, usamos as pastas do App router contendo uma fundação server components, mas encapsulamos providers cruciais no app tree usando hooks ("use client") para disponibilizar query e stores aos components e containers descendentes.
