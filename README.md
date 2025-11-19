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

- [Next.js](https://nextjs.org/) 13.1.1 - Framework React
- [TypeScript](https://www.typescriptlang.org/) 4.9.4 - Type safety
- [GraphQL](https://graphql.org/) - API moderna
- [Apollo Client](https://www.apollographql.com/docs/react/) - Gerenciamento de estado GraphQL
- [Material-UI](https://mui.com/) - Componentes de UI
- [Hygraph](https://hygraph.com/) - CMS Headless
- CSS Modules - Estilização modular

## 🚀 Getting Started

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Hygraph (ou outro CMS GraphQL compatível)

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Portfolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente (veja seção abaixo)

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

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
│   └── apollo.ts       # Cliente Apollo GraphQL
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
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Hygraph Documentation](https://hygraph.com/docs)

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Autor

Desenvolvido por Julio Cesar
