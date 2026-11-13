import type {
  JoCapability,
  JoComparisonMetric,
  JoPrimaryIndicator,
  JoTeamMember,
  JoWeekdayMetric,
} from '../types/jo'

export const JO_PRIMARY_INDICATORS: JoPrimaryIndicator[] = [
  {
    id: 'ind-volume',
    value: '1.774',
    label: 'perguntas recebidas por semana',
    description: 'Volume consolidado da assistente.',
  },
  {
    id: 'ind-tempo-simples',
    value: '5s',
    label: 'tempo médio para perguntas simples',
    description: 'Resposta rápida para consultas diretas.',
  },
]

export const JO_COMPARISON_METRIC: JoComparisonMetric = {
  eyebrow: 'Tempo por tipo de pergunta',
  simpleLabel: 'Perguntas simples',
  simpleValue: '5s',
  complexLabel: 'Perguntas complexas ou longas',
  complexValue: '10,15s',
  caption: 'Comparação entre tipos de consulta.',
}

export const JO_WEEKDAY_METRICS: JoWeekdayMetric[] = [
  {
    id: 'day-mon',
    day: 'Segunda',
    percentage: '24,91%',
    barHeightPx: 220,
  },
  {
    id: 'day-tue',
    day: 'Terça',
    percentage: '21,00%',
    barHeightPx: 188,
  },
  {
    id: 'day-wed',
    day: 'Quarta',
    percentage: '20,89%',
    barHeightPx: 186,
  },
  {
    id: 'day-thu',
    day: 'Quinta',
    percentage: '16,80%',
    barHeightPx: 150,
  },
  {
    id: 'day-fri',
    day: 'Sexta',
    percentage: '16,00%',
    barHeightPx: 143,
  },
]

export const JO_CAPABILITIES: JoCapability[] = [
  {
    id: 'cap-permissoes',
    title: 'Controle de permissões por setor',
    description: 'Acesso granular por perfil de colaborador.',
  },
  {
    id: 'cap-personalizacao',
    title: 'Personalização por perfil',
    description: 'Experiência adaptada para diferentes perfis de usuário.',
  },
  {
    id: 'cap-agentes',
    title: 'Agentes com comportamentos específicos',
    description: 'Fluxos e respostas ajustados para diferentes cenários.',
  },
  {
    id: 'cap-infra',
    title: 'Infraestrutura mais estável',
    description: 'Melhoria na disponibilidade e consistência da experiência.',
  },
]

export const JO_TEAM_MEMBERS: JoTeamMember[] = [
  { id: 'member-1', name: 'Cauã Andrade' },
  { id: 'member-2', name: 'Gabriel Cunha' },
  { id: 'member-3', name: 'Gabriela Rappel' },
  { id: 'member-4', name: 'João Victor Bonfim' },
  { id: 'member-5', name: 'Laisa Pereira' },
  { id: 'member-6', name: 'Lídio Neto' },
]
