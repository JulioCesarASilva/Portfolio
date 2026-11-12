# Portfólio Pessoal

Um portfólio pessoal moderno e interativo desenvolvido com [Next.js](https://nextjs.org/), TypeScript e GraphQL. Apresenta habilidades, projetos e trajetória profissional de forma elegante e responsiva, com animações suaves e design contemporâneo.

## 🎨 Sobre o Projeto

Este portfólio foi desenvolvido para apresentar minha trajetória profissional, projetos e habilidades técnicas de forma moderna e interativa. O site possui múltiplas seções incluindo apresentação com animações, sobre, tecnologias, trajetória profissional, galeria de projetos com páginas detalhadas e seção de contato.

### ✨ Características

- **Design Moderno e Responsivo**: Interface limpa que se adapta a qualquer dispositivo
- **Animações Interativas**: Efeitos de partículas e transições suaves
- **Performance Otimizada**: Server-Side Rendering (SSR) e Incremental Static Regeneration (ISR)
- **SEO Otimizado**: Meta tags completas para compartilhamento em redes sociais
- **CMS Headless**: Integração com Hygraph para gerenciamento de conteúdo
- **Type Safety**: Desenvolvido completamente em TypeScript

### 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) 16.4.3 - Framework React
- [TypeScript](https://www.typescriptlang.org/) 5.9 - Type safety
- [GraphQL](https://graphql.org/) - API moderna
- React 19 - Componentes e hooks
- Canvas 2D - Fundo de partículas sem biblioteca de animação
- HTML e CSS Modules - Timeline e ícones SVG locais
- react-markdown + rehype-raw + rehype-sanitize - Conteúdo do CMS sanitizado
- [Hygraph](https://hygraph.com/) - CMS Headless
- CSS Modules - Estilização modular

## 🚀 Getting Started

### Pré-requisitos

- Node.js 22.13+
- Yarn 1.22.22 (lockfile versionado)
- Conta no Hygraph (ou outro CMS GraphQL compatível)

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd Portfolio
```

2. Instale as dependências:

```bash
yarn install --frozen-lockfile
```

3. Opcionalmente, copie `.env.example` para `.env.local` e ajuste `HYGRAPH_API_URL`. O endpoint público original é usado por padrão.

4. Execute o servidor de desenvolvimento:

```bash
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `yarn lint` - Executa ESLint
- `yarn typecheck` - Verifica TypeScript
- `yarn test` - Testa sanitização do CMS e tratamento de erros GraphQL
- `yarn format` - Formata o projeto com Prettier
- `yarn format:check` - Confere a formatação
- `yarn audit` - Consulta vulnerabilidades conhecidas

## 📁 Estrutura do Projeto

```
Portfolio/
├── Components/          # Componentes React reutilizáveis
│   ├── Header/         # Cabeçalho com navegação
│   ├── Footer/         # Rodapé
│   ├── Sections/       # Seções da página principal
│   ├── Projeto/        # Componente de card de projeto
│   └── ...
├── pages/              # Páginas do Next.js
│   ├── index.tsx       # Página principal
│   ├── project/        # Páginas dinâmicas de projetos
│   └── api/            # API routes
├── styles/             # Estilos CSS Modules
├── lib/                # Configurações e utilitários
│   └── graphql.ts      # Consultas GraphQL com fetch nativo
├── gql/                # Queries GraphQL
├── types/              # Definições TypeScript
└── public/             # Arquivos estáticos
```

## 📝 Funcionalidades

### Seções do Portfólio

1. **Início**: Apresentação com animações de partículas e texto dinâmico
2. **Sobre**: Biografia e informações pessoais
3. **Tecnologias**: Carrossel infinito com tecnologias dominadas
4. **Trajetória**: Timeline interativa da experiência profissional
5. **Projetos**: Galeria de projetos com páginas detalhadas individuais
6. **Contato**: Links para redes sociais e formas de contato

### Páginas Dinâmicas

- Cada projeto possui uma página individual (`/project/[slug]`)
- Páginas geradas estaticamente com ISR para melhor performance
- SEO otimizado com meta tags Open Graph e Twitter Cards

## 🚀 Deploy

### Deploy na Vercel

A forma mais fácil de fazer deploy é usando a [Vercel Platform](https://vercel.com/new):

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

O projeto também pode ser deployado em outras plataformas que suportam Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Recursos e Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Hygraph Documentation](https://hygraph.com/docs)

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Autor

Desenvolvido por Julio Cesar

## Manutenção

Partículas usam Canvas com limite de 100 pontos e densidade ajustada à tela. A animação pausa fora da tela e em abas ocultas. A preferência por movimento reduzido também desativa digitação e carrossel animados.

As consultas ao CMS usam `fetch` no servidor, com timeout de 10 segundos e sem cache compartilhado. A página inicial mantém SSR e os projetos mantêm ISR de 60 segundos. HTML e Markdown passam pela mesma sanitização antes de renderizar; scripts, handlers, estilos inline e protocolos inseguros são removidos.

O ESLint usa plugins específicos de Next e React Hooks, sem o conjunto legado de plugins de importação. A resolução de `minimatch` força a linha corrigida 11 (GHSA-g3hv-75wg-m249), que mantém os exports usados pelo ESLint e TypeScript ESLint. Reavalie essa resolução ao atualizar essas ferramentas.

### Domínio e SEO

Configure `NEXT_PUBLIC_SITE_URL` no ambiente de produção com o domínio público definitivo
(por exemplo, `https://seu-dominio.com`). Reinicie ou faça um novo deploy após a alteração.
Essa variável define as URLs canônicas, o endereço Open Graph e o domínio do sitemap.
Sem ela, as páginas mantêm títulos e descrições, mas omitem URLs canônicas e o sitemap
retorna HTTP 503 para evitar publicar um domínio incorreto.

O sitemap em `/sitemap.xml` inclui a home, `/projetos` e os projetos publicados no Hygraph.
O `/robots.txt` informa seu endereço. Após o deploy, envie o sitemap ao Google Search Console.
