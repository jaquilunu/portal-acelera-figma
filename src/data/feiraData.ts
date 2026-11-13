import type {
  FeiraAnnualPaperCard,
  FeiraContextContent,
  FeiraHeroContent,
  FeiraHighlightEvent,
  FeiraMonthlyPaperComparison,
  FeiraPaperlessImpactCard,
  FeiraResultIndicator,
  FeiraScopeContent,
  FeiraTeamMember,
} from '../types/feira'

export const FEIRA_HERO_CONTENT: FeiraHeroContent = {
  eyebrow: 'Saúde e atendimento · Transformação digital',
  title: 'Mais agilidade para cuidar de mais pessoas.',
  summary:
    'A informatização da Feira de Saúde aproxima tecnologia e atendimento à população.',
}

export const FEIRA_CONTEXT_CONTENT: FeiraContextContent = {
  eyebrow: 'Contexto e objetivo',
  titleLine1: 'Transformação digital',
  titleLine2: 'no atendimento.',
  description:
    'A informatização da Feira de Saúde digitaliza o fluxo de atendimento, reduz o tempo de preenchimento e integra os dados ao sistema MV.',
  photos: [
    {
      id: 'photo-main',
      src: '/images/hero-slide-03.png',
      alt: 'Reunião institucional de alinhamento da equipe Acelera na Fundação José Silveira',
    },
    {
      id: 'photo-secondary',
      src: '/images/meeting-photo-2.png',
      alt: 'Colaboradores em sessão de planejamento da informatização da Feira de Saúde',
    },
  ],
}

export const FEIRA_SCOPE_CONTENT: FeiraScopeContent = {
  eyebrow: 'Solução documentada',
  indicatorValue: 'Digital',
  indicatorTitle: 'atendimentos móveis informatizados',
  indicatorCaption: 'Feira de Saúde · Indicador do protótipo',
  pillars: [
    {
      id: 'pillar-fluxo',
      title: 'Fluxo 100% digital',
      description: 'Digitalização dos atendimentos móveis.',
    },
    {
      id: 'pillar-registro',
      title: 'Registro digital',
      description:
        'Dados organizados no fluxo de atendimento do Programa Saúde e Cidadania.',
    },
    {
      id: 'pillar-parceria',
      title: 'Parceria PSC',
      description: 'Programa Saúde e Cidadania.',
    },
  ],
}

export const FEIRA_RESULT_INDICATORS: FeiraResultIndicator[] = [
  {
    id: 'res-atendimentos',
    eyebrow: 'Depois',
    value: '39.661',
    label: 'atendimentos informatizados',
    source: 'Feira de Saúde',
  },
  {
    id: 'res-pacientes',
    eyebrow: 'Depois',
    value: '9.914',
    label: 'pacientes atendidos',
    source: 'Feira de Saúde',
  },
  {
    id: 'res-procedimentos',
    eyebrow: 'Depois',
    value: '+15 mil',
    label: 'procedimentos realizados',
    source: 'Feira de Saúde',
  },
]

export const FEIRA_PAPERLESS_IMPACTS: FeiraPaperlessImpactCard[] = [
  {
    id: 'imp-papel',
    value: '−76%',
    label: 'no consumo de papel',
  },
  {
    id: 'imp-tempo',
    value: '−43%',
    label: 'no tempo de preenchimento',
  },
  {
    id: 'imp-paciente',
    value: '5 min',
    label: 'a menos por paciente',
  },
]

export const FEIRA_MONTHLY_PAPER: FeiraMonthlyPaperComparison[] = [
  {
    id: 'mensal-antes',
    label: 'Antes',
    valueLabel: '29 resmas',
    percentageWidth: 100,
  },
  {
    id: 'mensal-depois',
    label: 'Depois',
    valueLabel: '7 resmas',
    percentageWidth: 24.14,
  },
]

export const FEIRA_ANNUAL_PAPER: FeiraAnnualPaperCard[] = [
  {
    id: 'anual-antes',
    value: '350',
    label: 'resmas por ano · antes',
  },
  {
    id: 'anual-depois',
    value: '84',
    label: 'resmas por ano · depois',
  },
]

export const FEIRA_HIGHLIGHT_EVENTS: FeiraHighlightEvent[] = [
  {
    id: 'evt-itaparica',
    title: 'Itaparica',
    procedures: '2.989 procedimentos',
    description: 'Feira 100% digital.',
  },
  {
    id: 'evt-mutirao',
    title: 'Mutirão 40 anos Bahia Meio Dia',
    procedures: '6.556 procedimentos',
    description: '40 horas ininterruptas de atendimento.',
  },
]

export const FEIRA_TEAM_MEMBERS: FeiraTeamMember[] = [
  { id: 'member-gabriel', name: 'Gabriel Cunha' },
  { id: 'member-laisa', name: 'Laisa Pereira' },
  { id: 'member-lidio', name: 'Lídio Neto' },
]

