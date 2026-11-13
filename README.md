# Portal Acelera — Fundação José Silveira

Portal institucional do **Programa Acelera**, iniciativa de inovação aplicada da **Fundação José Silveira (FJS)** que conecta pessoas, tecnologia e processos para transformar desafios operacionais do dia a dia em soluções digitais sustentáveis e de alto impacto humano.

---

## Sumário

- [Visão Geral](#-visão-geral)
- [Stack Tecnológica](#-stack-tecnológica)
- [Páginas e Rotas](#-páginas-e-rotas)
- [Iniciativas Documentadas](#-iniciativas-documentadas)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Design System & Tokens Visuais](#-design-system--tokens-visuais)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Padrões de Qualidade e Engenharia](#-padrões-de-qualidade-e-engenharia)

---

## Visão Geral

O **Portal Acelera** apresenta de forma transparente, editorial e orientada a dados os projetos de transformação digital, inteligência artificial, Internet das Coisas (IoT), saúde móvel e cultura *Paperless* desenvolvidos na Fundação José Silveira.

O projeto foi construído com fidelidade visual ao protótipo oficial no Figma ([Portal Acelera — Figma](https://www.figma.com/design/Qj1avfZopUndmQBPSaJwgD/Portal-Acelera)), adotando componentização modular, tipagem estrita em TypeScript e layout responsivo (*mobile-first*).

---

## Stack Tecnológica

| Categoria | Tecnologia | Versão |
| :--- | :--- | :--- |
| **Framework UI** | [React](https://react.dev/) (com React Compiler) | `^19.3.1` |
| **Build Tool & Dev Server** | [Vite](https://vite.dev/) | `^8.3.5` |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | `~7.0.2` |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) | `^4.3.3` |
| **Roteamento** | [React Router DOM](https://reactrouter.com/) | `^7.18.5` |
| **Ícones** | [Lucide React](https://lucide.dev/) | `^1.64.0` |
| **Tipografia** | [Lexend](https://fonts.google.com/specimen/Lexend) (Google Fonts) | Pesos `400`, `500`, `600`, `700` |
| **Linting** | ESLint + `typescript-eslint` | `^10.13.0` |

---

## Páginas e Rotas

A navegação é gerenciada via `react-router-dom` em [`src/App.tsx`](./src/App.tsx), contando com rotas principais e *aliases* amigáveis:

| Página | Rota Principal | Aliases Suportados | Componente de Página |
| :--- | :--- | :--- | :--- |
| **1. Home Institucional** | `/` | — | [`HomePage.tsx`](./src/pages/HomePage.tsx) |
| **2. Catálogo de Projetos** | `/projetos` | `/catalogo` | [`CatalogPage.tsx`](./src/pages/CatalogPage.tsx) |
| **3. Jô — Assistente Virtual** | `/projetos/jo-assistente-virtual` | `/jo` | [`JoPage.tsx`](./src/pages/JoPage.tsx) |
| **4. FJS Inteligente** | `/projetos/fjs-inteligente` | `/fjs-inteligente`, `/fjs` | [`FjsPage.tsx`](./src/pages/FjsPage.tsx) |
| **5. Informatização da Feira de Saúde** | `/projetos/feira-de-saude` | `/projetos/informatizacao-da-feira-de-saude`, `/feira-de-saude`, `/feira` | [`FeiraPage.tsx`](./src/pages/FeiraPage.tsx) |
| **6. Otimiza** | `/projetos/otimiza` | `/otimiza` | [`OtimizaPage.tsx`](./src/pages/OtimizaPage.tsx) |

---

## Iniciativas Documentadas

1. **Jô — Assistente Virtual (`IBIT`)**
   - Inteligência artificial para consulta rápida de informações institucionais e dúvidas frequentes.
   - **Indicadores:** `1.774` perguntas/semana, `5s` de tempo médio para perguntas simples e `10,15s` para consultas complexas.
2. **FJS Inteligente (`IoT & Monitoramento`)**
   - Monitoramento contínuo em tempo real de temperatura e umidade em equipamentos críticos.
   - **Indicadores:** `13` sensores distribuídos em 4 locais (Laboratório de Hematologia, Nutrição, Farmácia IBIT e Sala Ruy Simões), `2` conversores, `6` treinamentos, `+30` pessoas impactadas e `3` setores modernizados.
3. **Informatização da Feira de Saúde (`Programa Saúde e Cidadania — PSC`)**
   - Digitalização completa do fluxo de atendimento móvel com integração ao sistema MV e redução do uso de papel.
   - **Indicadores:** `39.661` atendimentos informatizados, `9.914` pacientes atendidos, `+15 mil` procedimentos realizados, `-76%` no consumo de papel (`29` para `7` resmas/mês) e `-43%` no tempo de preenchimento (`5 min` a menos por paciente).
4. **Otimiza (`Transformação Digital — RH e Viagens`)**
   - Digitalização de Movimentações de Pessoal (MPs) e Solicitações de Viagem via Fluig em todas as unidades próprias.
   - **Indicadores:** `7.521` MPs/ano, `30.084` folhas economizadas/ano (`3` árvores preservadas/ano), `-80%` de páginas por solicitação de viagem (`5 páginas` para `1 página`), `25` setores atendidos, `+120` pessoas impactadas e `14` treinamentos realizados.

---

## Arquitetura do Projeto

```text
portal-acelera/
├── public/
│   └── images/                  # Ativos fotográficos, ícones e logotipos institucionais
├── src/
│   ├── components/
│   │   ├── home/                # Seções da Home + Header e Footer institucionais globais
│   │   ├── catalog/             # Seções e cartões detalhados do Catálogo de Projetos
│   │   ├── jo/                  # Seções modulares da página "Jô — Assistente Virtual"
│   │   ├── fjs/                 # Seções modulares da página "FJS Inteligente"
│   │   ├── feira/               # Seções modulares da página "Informatização da Feira de Saúde"
│   │   └── otimiza/             # Seções modulares da página "Otimiza"
│   ├── data/
│   │   ├── homeData.ts          # Dados tipados da Home
│   │   ├── catalogData.ts       # Dados tipados do Catálogo de Projetos
│   │   ├── joData.ts            # Dados tipados da página Jô
│   │   ├── fjsData.ts           # Dados tipados da página FJS Inteligente
│   │   ├── feiraData.ts         # Dados tipados da página Feira de Saúde
│   │   └── otimizaData.ts       # Dados tipados da página Otimiza
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CatalogPage.tsx
│   │   ├── JoPage.tsx
│   │   ├── FjsPage.tsx
│   │   ├── FeiraPage.tsx
│   │   └── OtimizaPage.tsx
│   ├── types/
│   │   ├── home.ts
│   │   ├── catalog.ts
│   │   ├── jo.ts
│   │   ├── fjs.ts
│   │   ├── feira.ts
│   │   └── otimiza.ts
│   ├── App.tsx                  # Configuração central de rotas (BrowserRouter)
│   ├── index.css                # Importação do Tailwind CSS v4 e tokens globais de fonte
│   └── main.tsx                 # Ponto de entrada da aplicação React
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Design System & Tokens Visuais

| Token | Hex / Valor | Aplicação Principal |
| :--- | :--- | :--- |
| **Burgundy Primary** | `#511B35` | Títulos principais, painéis institucionais escuros e *overlays* |
| **Magenta Accent** | `#B84469` | Botões de ação (CTA), *eyebrows*, destaques de métricas e links ativos |
| **Pink Soft Accent** | `#E8A0B8` | *Eyebrows* e legendas sobre fundos bordô escuros |
| **Surface Rose Light** | `#F7EEF2` / `#FAF2F5` | Seções editoriais alternadas, cabeçalhos claros e cartões de apoio |
| **Sustainability Teal** | `#2A7A5F` / `#1E6B5B` | Indicadores ESG, cultura *Paperless*, barras de progresso e selos ambientais |
| **Surface Mint Light** | `#EDF6F2` / `#EDF5F3` | Seções de sustentabilidade e comparativos de redução de papel |
| **Neutral Text** | `#322D30` / `#62595E` | Texto corrido, descrições técnicas e subtítulos |
| **Border Hairline** | `#E4D9DE` / `#E3D9DE` | Divisores de seção, bordas de cartões e tabelas |

---

## Como Executar o Projeto

### Pré-requisitos
- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar servidor de desenvolvimento
```bash
npm run dev
```
O servidor será iniciado (por padrão em `http://localhost:5173`) com *Hot Module Replacement (HMR)*.

### 3. Gerar build de produção
```bash
npm run build
```
Executa a checagem estrita de tipos (`tsc -b`) seguida pelo empacotamento otimizado do Vite (`vite build`) na pasta `dist/`.

### 4. Visualizar build de produção localmente
```bash
npm run preview
```

### 5. Executar verificação de código (Lint)
```bash
npm run lint
```

---

## Padrões de Qualidade e Engenharia

- **Zero `any`**: Todos os componentes, propriedades e coleções de dados possuem interfaces explícitas em `src/types/`.
- **Semântica HTML & Acessibilidade**: Uso consistente de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, atributos `aria-labelledby`, `aria-current="page"` em *breadcrumbs* e `role="progressbar"` em gráficos comparativos.
- **Mobile-First & Responsividade**: Layouts fluidos adaptados desde telas de smartphones (`320px+`) até monitores desktop (`1440px+`), preservando a hierarquia tipográfica e o grid institucional do Figma.
- **Modularidade**: Separação clara entre apresentação (`src/components/`), composição de página (`src/pages/`), contratos de tipos (`src/types/`) e camada de dados (`src/data/`).
