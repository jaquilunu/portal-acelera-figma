import type {
  CulturePrincipleCard,
  FeaturedProject,
  HeroSlide,
  ImpactProjectCard,
  ImpactTabCategory,
  MagazineThemeItem,
  MilestoneCardItem,
  MpBottomEconomyCard,
  MpFilterOption,
  MpTopIndicatorCard,
  NavItem,
  PillarItem,
  SecondaryProjectSummary,
  TaskRelationColumn,
  TeamPhotoItem,
  WorkingJourneyStep,
} from '../types/home'

export const ACELERA_FORM_URL = 'https://ummen.se/o9q8au'

export const NAV_ITEMS: NavItem[] = [
  { id: 'sobre', label: 'Sobre', href: '/#sobre' },
  { id: 'projetos', label: 'Projetos', href: '/projetos' },
  { id: 'impacto', label: 'Impacto', href: '/#impacto' },
  { id: 'comunicacao', label: 'Comunicação', href: '/#comunicacao' },
  { id: 'equipe', label: 'Equipe', href: '/#equipe' },
]

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-01',
    slideNumber: '01',
    label: 'Equipe Acelera',
    eyebrow: 'PROGRAMA DE INOVAÇÃO INSTITUCIONAL',
    title: 'Inovação que transforma a FJS.',
    description:
      'Problemas reais do dia a dia da FJS viram soluções digitais — conectando pessoas, tecnologia e processos.',
    image: '/images/hero-slide-01.png',
    imageAlt: 'Equipe do Programa Acelera reunida na Fundação José Silveira',
    primaryCtaText: 'Ver os projetos',
    primaryCtaHref: '/projetos',
    secondaryCtaText: 'Ver resultados',
    secondaryCtaHref: '/#impacto',
  },
  {
    id: 'slide-02',
    slideNumber: '02',
    label: 'Jô Assistente Virtual',
    eyebrow: 'PROGRAMA DE INOVAÇÃO INSTITUCIONAL',
    title: 'Inovação que transforma a FJS.',
    description:
      'Problemas reais do dia a dia da FJS viram soluções digitais — conectando pessoas, tecnologia e processos.',
    image: '/images/hero-slide-02.png',
    imageAlt: 'Apresentação da Jô Assistente Virtual e Experiência do Cliente',
    primaryCtaText: 'Conhecer a Jô',
    primaryCtaHref: '/projetos/jo-assistente-virtual',
    secondaryCtaText: 'Ver resultados',
    secondaryCtaHref: '/#impacto',
  },
  {
    id: 'slide-03',
    slideNumber: '03',
    label: 'FJS Inteligente',
    eyebrow: 'PROGRAMA DE INOVAÇÃO INSTITUCIONAL',
    title: 'Inovação que transforma a FJS.',
    description:
      'Problemas reais do dia a dia da FJS viram soluções digitais — conectando pessoas, tecnologia e processos.',
    image: '/images/hero-slide-03.png',
    imageAlt: 'Reunião institucional do projeto FJS Inteligente',
    primaryCtaText: 'FJS Inteligente',
    primaryCtaHref: '/projetos/fjs-inteligente',
    secondaryCtaText: 'Ver resultados',
    secondaryCtaHref: '/#impacto',
  },
  {
    id: 'slide-04',
    slideNumber: '04',
    label: 'Sprints e Colaboração',
    eyebrow: 'PROGRAMA DE INOVAÇÃO INSTITUCIONAL',
    title: 'Inovação que transforma a FJS.',
    description:
      'Problemas reais do dia a dia da FJS viram soluções digitais — conectando pessoas, tecnologia e processos.',
    image: '/images/sprint-junho.jpg',
    imageAlt: 'Sprint de inovação com times multidisciplinares na FJS',
    primaryCtaText: 'Chamar o Acelera',
    primaryCtaHref: ACELERA_FORM_URL,
    secondaryCtaText: 'Ver os projetos',
    secondaryCtaHref: '/projetos',
  },
]

export const ABOUT_PILLARS: PillarItem[] = [
  {
    id: 'pilar-1',
    text: 'Pesquisa aplicada e inovação institucional;',
  },
  {
    id: 'pilar-2',
    text: 'Práticas sustentáveis e redução de resíduos;',
  },
  {
    id: 'pilar-3',
    text: 'Colaboração entre áreas e times;',
  },
]

export const WORKING_JOURNEY_STEPS: WorkingJourneyStep[] = [
  {
    id: 'journey-01',
    stepNumber: '01',
    title: 'Escutar o problema',
    description: 'Desafios reais identificados junto às áreas da Fundação.',
    accentColor: 'magenta',
  },
  {
    id: 'journey-02',
    stepNumber: '02',
    title: 'Construir em parceria',
    description: 'Pessoas, tecnologia e processos conectados no desenvolvimento.',
    accentColor: 'teal',
  },
  {
    id: 'journey-03',
    stepNumber: '03',
    title: 'Entregar e acompanhar',
    description: 'Modernização e acompanhamento dos indicadores após entrega.',
    accentColor: 'magenta',
  },
]

export const IMPACT_TABS: ImpactTabCategory[] = [
  'Todos',
  'Feira de Saúde',
  'FJS Inteligente & IA',
  'Gestão de Pessoas',
]

export const IMPACT_CARDS: ImpactProjectCard[] = [
  {
    id: 'card-jo',
    category: 'FJS Inteligente & IA',
    tag: 'Inteligência Artificial',
    title: 'Jô — Assistente Virtual',
    problem: 'Respostas rápidas para perguntas frequentes.',
    benefitPrefix: 'Respostas simples:',
    benefitHighlight: ' 5s',
    benefitSuffix: ' · complexas: 10,15s.',
    keyMetricValue: '1.774 perguntas/semana',
    keyMetricSubtitle: 'Jô — Assistente Virtual',
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/jo-assistente-virtual',
  },
  {
    id: 'card-fjs',
    category: 'FJS Inteligente & IA',
    tag: 'Monitoramento Inteligente',
    title: 'FJS Inteligente & IA',
    problem: 'Monitoramento de equipamentos.',
    benefitText: '6 treinamentos, +30 pessoas e 3 setores modernizados.',
    keyMetricValue: '13 sensores',
    keyMetricSubtitle: 'FJS Inteligente & IA',
    keyMetricIcon: '/images/thermometer.gif',
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/fjs-inteligente',
  },
  {
    id: 'card-feira',
    category: 'Feira de Saúde',
    tag: 'Saúde e Atendimento',
    title: 'Feira de Saúde',
    problem: 'Preenchimento manual de fichas.',
    benefitText: '-43% no tempo de preenchimento por paciente.',
    keyMetricValue: '39.661 atendimentos',
    keyMetricSubtitle: 'Feira de Saúde',
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/feira-de-saude',
  },
  {
    id: 'card-otimiza',
    category: 'Gestão de Pessoas',
    tag: 'Gestão de Pessoas',
    title: 'Otimiza',
    problem: 'Viagens com papel e folhas impressas.',
    benefitText: '-80% de folhas por viagem.',
    keyMetricValue: '30.084 folhas/ano',
    keyMetricSubtitle: 'Otimiza',
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/otimiza',
  },
]

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'featured-jo',
    image: '/images/project-jo.png',
    imageAlt: 'Colaboradores interagindo no contexto do projeto Jô — Assistente Virtual',
    eyebrow: 'Inteligência artificial',
    title: 'Jô — Assistente Virtual',
    problem: 'Acesso à informação.',
    benefitArrowLayout: {
      before: '30s',
      after: '10s nas respostas.',
    },
    differential: 'Consulta com IA.',
    metricsSummary: '1.774 perguntas/semana · 50+ documentos · 5s simples / 10,15s complexas',
    accessLinks: ['Resultados', 'Stakeholders', 'MPs', 'Entregas'],
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/jo-assistente-virtual',
    captionNote: 'Contexto institucional. Fotografia não representa a interface da Jô.',
  },
  {
    id: 'featured-fjs',
    image: '/images/project-fjs-inteligente.png',
    imageAlt: 'Apresentação técnica do projeto FJS Inteligente',
    eyebrow: 'Monitoramento inteligente',
    title: 'FJS Inteligente',
    problem: 'Conservar produtos.',
    benefitText: '13 sensores instalados em áreas críticas.',
    differential: 'Sensores em quatro locais.',
    metricsSummary: '277,32 mil registros · 13 sensores · 6 treinamentos realizados',
    accessLinks: ['Resultados', 'Stakeholders', 'MPs', 'Entregas'],
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/fjs-inteligente',
    captionNote: 'Registro de apresentação — tela COMPRAS DO DATACENTER. Fotografia contextual.',
  },
]

export const SECONDARY_FEATURED_PROJECTS: SecondaryProjectSummary[] = [
  {
    id: 'sec-feira',
    image: '/images/feira-saude.png',
    imageAlt: 'Informatização da Feira de Saúde',
    eyebrow: 'Saúde e atendimento',
    title: 'Informatização da Feira de Saúde',
    problem: 'Atendimentos digitais.',
    benefit: '39.661 atendimentos.',
    metricsSummary: '100% informatizada · -43% no tempo de preenchimento',
    subtitle: 'Feira de Saúde — Programa Saúde e Cidadania',
    accessLinks: ['Resultados', 'Stakeholders', 'MPs', 'Entregas'],
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/feira-de-saude',
    captionNote: 'Contexto FJS Saúde — atendimento informatizado em parceria com o PSC.',
  },
  {
    id: 'sec-otimiza',
    image: '/images/otimiza.png',
    imageAlt: 'Apresentação institucional do projeto Otimiza e MP Eletrônica',
    eyebrow: 'Processos institucionais',
    title: 'Otimiza & MP Eletrônica',
    problem: 'Fluxos físicos em papel.',
    benefit: '30.084 folhas/ano economizadas.',
    metricsSummary: '7.521 MPs/ano · 5.100+ colaboradores impactados',
    subtitle: 'Otimiza & MP Eletrônica — Sede, PROAJ e Unidades Próprias',
    accessLinks: ['Resultados', 'Stakeholders', 'MPs', 'Entregas'],
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos/otimiza',
    captionNote: 'Foto: contexto institucional — apresentação de resultados do projeto Otimiza.',
  },
  {
    id: 'sec-marketing',
    image: '/images/VMC01639.jpg',
    imageAlt: 'Reunião estratégica de governança e comunicação institucional',
    eyebrow: 'Governança e comunicação',
    title: 'Ctrl+ & FJS Saúde',
    problem: 'Posicionamento e controle.',
    benefit: '1.812 visitantes · 20 peças gráficas.',
    metricsSummary: 'Governança financeira, auditoria e plano estratégico',
    subtitle: 'Ctrl+ Controladoria & Plano de Marketing FJS Saúde',
    accessLinks: ['Resultados', 'Entregas'],
    ctaLabel: 'Conheça a solução',
    ctaHref: '/projetos#proj-05-ctrl-plus',
    captionNote: 'Foto: reunião de alinhamento estratégico com a equipe Acelera.',
  },
]

export const MP_FILTERS: MpFilterOption[] = [
  {
    id: 'projeto',
    label: 'Projeto',
    value: 'Todos',
    options: ['Todos', 'Jô — Assistente Virtual', 'FJS Inteligente & IA', 'Feira de Saúde', 'Otimiza'],
  },
  {
    id: 'setor',
    label: 'Setor',
    value: 'Todos',
    options: ['Todos', 'IBIT', 'Unidades Próprias', 'Saúde e Cidadania', 'RH e Viagens'],
  },
  {
    id: 'periodo',
    label: 'Período',
    value: 'Todos',
    options: ['Todos', 'Anual consolidado', 'Semanal', 'Por atendimento'],
  },
]

export const MP_TOP_CARDS: MpTopIndicatorCard[] = [
  {
    id: 'mp-jo',
    project: 'Jô — Assistente Virtual',
    value: '5s / 10,15s',
    dotColor: '#B84469',
    labelColor: '#B84469',
    borderColor: '#F0D0DA',
    filterProject: 'Jô — Assistente Virtual',
    href: '/projetos/jo-assistente-virtual#resultados',
  },
  {
    id: 'mp-fjs',
    project: 'FJS Inteligente & IA',
    value: '13 sensores',
    dotColor: '#2A7A5F',
    labelColor: '#2A7A5F',
    borderColor: '#C8E6E0',
    filterProject: 'FJS Inteligente & IA',
    href: '/projetos/fjs-inteligente#sensores',
  },
]

export const MP_BOTTOM_CARDS: MpBottomEconomyCard[] = [
  {
    id: 'mp-otimiza',
    project: 'Otimiza',
    value: '-80% folhas/viagem',
    description: '30.084 folhas/ano e 3 árvores preservadas/ano.',
    labelColor: '#2A7A5F',
    filterProject: 'Otimiza',
    href: '/projetos/otimiza#resultados',
  },
  {
    id: 'mp-ibit-cura',
    project: 'IBIT — Taxa de cura',
    value: '90% vs 70%',
    description: 'Taxa média de cura da tuberculose no IBIT.',
    labelColor: '#2A7A5F',
    filterProject: 'Jô — Assistente Virtual',
    href: '/projetos/jo-assistente-virtual',
  },
]

export const TASK_RELATION_COLUMNS: TaskRelationColumn[] = [
  {
    id: 'rel-legado',
    label: 'Legado',
    labelColor: '#B84469',
    value: '89 anos',
    description: 'Trajetória institucional da Fundação.',
    href: '/#sobre',
  },
  {
    id: 'rel-pesquisa',
    label: 'Pesquisa',
    labelColor: '#2A7A5F',
    value: '44 projetos',
    description: 'CPAI — Centro de Pesquisa, Aprendizagem e Inovação.',
    href: '/#comunicacao',
  },
  {
    id: 'rel-esg',
    label: 'ESG',
    labelColor: '#62595E',
    value: '3 árvores',
    description: 'Preservadas/ano com Otimiza.',
    href: '/projetos/otimiza',
  },
]

export const CULTURE_PRINCIPLES: CulturePrincipleCard[] = [
  {
    id: 'cult-pa',
    symbol: 'Pa',
    title: 'Paperless',
    description: '30.084 folhas economizadas por ano com o Otimiza.',
    variant: 'light',
    href: '/projetos/otimiza',
  },
  {
    id: 'cult-na',
    symbol: 'Na',
    title: 'Natureza',
    description: 'Equivalente à preservação de 3 árvores por ano.',
    variant: 'light',
    href: '/projetos/otimiza#resultados',
  },
  {
    id: 'cult-re',
    symbol: 'Re',
    title: 'Resíduos',
    description: 'Digitalização de processos para reduzir o consumo de papel.',
    variant: 'teal',
    href: '/projetos/feira-de-saude#mps',
  },
  {
    id: 'cult-hu',
    symbol: 'Hu',
    title: 'Impacto humano',
    description: '+120 pessoas impactadas pelo Otimiza.',
    variant: 'light',
    href: '/projetos/otimiza#stakeholders',
  },
]

export const MAGAZINE_THEMES_LEFT: MagazineThemeItem[] = [
  {
    id: 'mag-legado',
    title: 'Legado institucional',
    description: '89 anos da Fundação José Silveira.',
    href: '/#sobre',
  },
  {
    id: 'mag-cpai',
    title: 'CPAI — Pesquisa',
    description: '44 projetos de pesquisa em andamento.',
    href: '/projetos',
  },
  {
    id: 'mag-esg',
    title: 'ESG em movimento',
    description: 'Paperless e redução de resíduos.',
    href: '/projetos/otimiza',
  },
]

export const MAGAZINE_THEMES_RIGHT: MagazineThemeItem[] = [
  {
    id: 'mag-ibit',
    title: 'IBIT — Taxa de cura',
    description: '90% vs 70% — tuberculose.',
    href: '/projetos/jo-assistente-virtual',
  },
  {
    id: 'mag-feira',
    title: 'Feira de Saúde',
    description: '39.661 atendimentos e -43% no preenchimento.',
    href: '/projetos/feira-de-saude',
  },
  {
    id: 'mag-otimiza',
    title: 'Otimiza',
    description: '30.084 folhas/ano e 3 árvores preservadas/ano.',
    href: '/projetos/otimiza',
  },
]

export const TEAM_MEETING_PHOTOS: TeamPhotoItem[] = [
  {
    id: 'sprint-4',
    src: '/images/hero-slide-03.png',
    alt: 'Reunião de planejamento — equipe Acelera',
    caption: 'Reunião de planejamento — equipe Acelera.',
  },
  {
    id: 'sprint-3',
    src: '/images/meeting-photo-2.png',
    alt: 'Encontro de sprint com times multidisciplinares',
    caption: 'Encontro de sprint com times multidisciplinares.',
  },
  {
    id: 'exp-cliente',
    src: '/images/leila-sprint.jpg',
    alt: 'Apresentação institucional — sessão de alinhamento',
    caption: 'Apresentação institucional — sessão de alinhamento.',
  },
]

export const TEAM_PRESENTATION_PHOTOS: TeamPhotoItem[] = [
  {
    id: 'exp-cliente-2',
    src: '/images/exp-cliente-2.png',
    alt: 'Dinâmica de experiência do cliente com participantes',
    caption: 'Dinâmica de experiência do cliente com participantes.',
  },
  {
    id: 'precorrida',
    src: '/images/precorrida.png',
    alt: 'Grupo pré-corrida — atividade de integração institucional',
    caption: 'Grupo pré-corrida — atividade de integração institucional.',
  },
]

export const TEAM_ADDITIONAL_PHOTOS: TeamPhotoItem[] = [
  {
    id: 'sprint-junho',
    src: '/images/sprint-junho.jpg',
    alt: 'Sprint de inovação — equipe multidisciplinar Acelera',
    caption: 'Sprint de inovação — cocriação com áreas parceiras da FJS.',
  },
  {
    id: 'vmc-1024',
    src: '/images/VMC01024.jpg',
    alt: 'Integração entre equipes técnicas e operacionais',
    caption: 'Integração entre equipes técnicas e operacionais.',
  },
  {
    id: 'alan-mentoria',
    src: '/images/alan.jpg',
    alt: 'Acompanhamento técnico e mentoria de projetos',
    caption: 'Acompanhamento técnico e mentoria de projetos.',
  },
]

export const MILESTONE_CARDS: MilestoneCardItem[] = [
  {
    id: 'bagagem-jo',
    eyebrow: 'Inteligência artificial',
    statusBadge: 'Entregue',
    title: 'Jô — Assistente Virtual',
    description: '1.774 perguntas/semana. Respostas em 5s (simples) e 10,15s (complexas).',
    hasDivider: true,
    hasBorder: true,
    variant: 'project',
    href: '/projetos/jo-assistente-virtual',
  },
  {
    id: 'bagagem-fjs',
    eyebrow: 'Monitoramento inteligente',
    statusBadge: 'Entregue',
    title: 'FJS Inteligente & IA',
    description: '13 sensores instalados, 6 treinamentos, +30 pessoas e 3 setores modernizados.',
    hasDivider: true,
    hasBorder: true,
    variant: 'project',
    href: '/projetos/fjs-inteligente',
  },
  {
    id: 'bagagem-feira',
    eyebrow: 'Saúde e atendimento',
    statusBadge: 'Entregue',
    title: 'Feira de Saúde — 39.661 atendimentos',
    description: 'Fluxo 100% digital em parceria com o PSC e -43% no tempo de preenchimento.',
    hasDivider: true,
    hasBorder: true,
    variant: 'project',
    href: '/projetos/feira-de-saude',
  },
  {
    id: 'bagagem-otimiza',
    eyebrow: 'Processos institucionais',
    statusBadge: 'Entregue',
    title: 'Otimiza & MP Eletrônica',
    description: '30.084 folhas economizadas/ano, 7.521 MPs/ano e cultura paperless na FJS.',
    hasDivider: true,
    hasBorder: true,
    variant: 'project',
    href: '/projetos/otimiza',
  },
  {
    id: 'bagagem-ctrl',
    eyebrow: 'Governança e comunicação',
    statusBadge: 'Entregue',
    title: 'Ctrl+ & FJS Saúde — Plano de Marketing',
    description: 'Governança financeira, controle orçamentário e 20 peças gráficas produzidas.',
    hasDivider: true,
    hasBorder: true,
    variant: 'project',
    href: '/projetos#proj-05-ctrl-plus',
  },
  {
    id: 'bagagem-marcos',
    eyebrow: 'Marcos e aprendizados',
    title: 'O que ficou de cada ciclo.',
    description: 'Registros, aprendizados e práticas ágeis que orientam os próximos ciclos do Acelera.',
    hasDivider: false,
    hasBorder: false,
    variant: 'highlight',
    href: '/projetos',
  },
]
