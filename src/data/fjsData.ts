import type {
  FjsBenefitCard,
  FjsHeroContent,
  FjsMetricCard,
  FjsSensorLocation,
  FjsSensorTotalCard,
  FjsTeamMember,
} from '../types/fjs'

export const FJS_HERO_CONTENT: FjsHeroContent = {
  eyebrow: 'FJS Inteligente',
  title: 'FJS Inteligente: dados que protegem.',
  subtitle:
    'Internet das Coisas para monitorar temperatura e umidade em equipamentos críticos.',
  description:
    'Automatiza processos manuais, reforça a segurança operacional, melhora a rastreabilidade e ajuda a prevenir desperdícios em áreas críticas.',
  heroImage: '/images/project-fjs-inteligente.png',
  heroImageAlt:
    'Apresentação técnica do projeto FJS Inteligente na Fundação José Silveira',
}

export const FJS_METRICS: FjsMetricCard[] = [
  {
    id: 'metric-treinamentos',
    eyebrow: 'Treinamentos',
    value: '6',
    description: 'Treinamentos realizados',
  },
  {
    id: 'metric-pessoas',
    eyebrow: 'Pessoas impactadas',
    value: '+30',
    description: 'Impacto direto',
  },
  {
    id: 'metric-setores',
    eyebrow: 'Setores modernizados',
    value: '3',
    description: 'Áreas com melhoria',
  },
]

export const FJS_SENSOR_LOCATIONS: FjsSensorLocation[] = [
  {
    id: 'loc-hematologia',
    location: 'Laboratório de Hematologia',
    count: 6,
    barWidthPx: 360,
    percentageWidth: 40.18,
    hasConverter: true,
  },
  {
    id: 'loc-nutricao',
    location: 'Nutrição',
    count: 4,
    barWidthPx: 240,
    percentageWidth: 26.79,
    hasConverter: true,
  },
  {
    id: 'loc-farmacia-ibit',
    location: 'Farmácia IBIT',
    count: 2,
    barWidthPx: 120,
    percentageWidth: 13.39,
    hasConverter: false,
  },
  {
    id: 'loc-ruy-simoes',
    location: 'Sala Ruy Simões',
    count: 1,
    barWidthPx: 60,
    percentageWidth: 6.7,
    hasConverter: false,
  },
]

export const FJS_SENSOR_TOTALS: FjsSensorTotalCard[] = [
  {
    id: 'total-sensores',
    eyebrow: 'Sensores totais',
    value: '13',
    description: 'Distribuídos em 4 locais',
  },
  {
    id: 'total-conversores',
    eyebrow: 'Conversores',
    value: '2',
    description: 'Instalados à parte',
  },
]

export const FJS_CONVERTERS_NOTE =
  'Conversores: 1 no Laboratório de Hematologia e 1 na Nutrição.'

export const FJS_BENEFITS: FjsBenefitCard[] = [
  {
    id: 'ben-automatizacao',
    eyebrow: 'Automatização',
    title: 'Redução de processos manuais',
    description: 'Menos leituras manuais e mais dados disponíveis para decisão.',
    variant: 'blush',
  },
  {
    id: 'ben-seguranca',
    eyebrow: 'Segurança',
    title: 'Monitoramento contínuo',
    description:
      'Mais visibilidade sobre temperatura e umidade em áreas críticas.',
    variant: 'mint',
  },
  {
    id: 'ben-rastreabilidade',
    eyebrow: 'Rastreabilidade',
    title: 'Histórico mais confiável',
    description: 'Dados mais organizados para auditoria e acompanhamento.',
    variant: 'blush',
  },
]

export const FJS_TEAM_MEMBERS: FjsTeamMember[] = [
  {
    id: 'team-aline',
    name: 'Aline Lima',
    role: 'Equipe do projeto FJS Inteligente.',
  },
  {
    id: 'team-julia',
    name: 'Júlia Borges',
    role: 'Equipe do projeto FJS Inteligente.',
  },
]

