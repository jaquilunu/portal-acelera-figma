import type {
  OtimizaContextContent,
  OtimizaCultureContent,
  OtimizaHeroContent,
  OtimizaReachContent,
  OtimizaTeamMember,
  OtimizaTravelPaperlessContent,
} from '../types/otimiza'

export const OTIMIZA_HERO_CONTENT: OtimizaHeroContent = {
  eyebrow: 'Transformação digital · RH, Movimentações e Viagens',
  title: 'Otimiza: menos papel, mais agilidade.',
  description:
    'Digitalização de RH, Movimentações de Pessoal e Viagens com foco em sustentabilidade e eficiência operacional.',
  heroImage: '/images/hero-slide-01.png',
  heroImageAlt: 'Equipe do Programa Acelera reunida na Fundação José Silveira',
  stats: [
    {
      id: 'stat-mps',
      value: '7.521',
      label: 'movimentações de pessoal por ano',
    },
    {
      id: 'stat-folhas',
      value: '30.084',
      label: 'folhas economizadas por ano',
    },
    {
      id: 'stat-arvores',
      value: '3',
      label: 'árvores preservadas por ano',
    },
    {
      id: 'stat-pessoas',
      value: '+120',
      label: 'pessoas impactadas',
    },
  ],
}

export const OTIMIZA_CONTEXT_CONTENT: OtimizaContextContent = {
  eyebrow: 'Contexto e alcance',
  title: 'Implantação em todas as unidades próprias.',
  description:
    'Otimiza atende 25 setores, impacta mais de 120 pessoas e foi consolidado com 14 treinamentos realizados.',
  photoSrc: '/images/hero-slide-01.png',
  photoAlt: 'Sessão de alinhamento e implantação do projeto Otimiza nas unidades próprias',
}

export const OTIMIZA_REACH_CONTENT: OTIMIZA_REACH_TYPE = {
  eyebrow: 'Resultado apresentado no protótipo',
  value: '30.084',
  subtitle: 'folhas economizadas por ano',
  caption: 'Equivalente a 3 árvores preservadas por ano.',
  backgroundImage: '/images/meeting-photo-2.png',
  backgroundImageAlt: 'Equipe multidisciplinar em reunião de resultados do Otimiza',
}

type OTIMIZA_REACH_TYPE = OtimizaReachContent

export const OTIMIZA_CULTURE_CONTENT: OtimizaCultureContent = {
  eyebrow: 'Cultura e documentação',
  photoSrc: '/images/hero-slide-03.png',
  photoAlt: 'Reunião institucional de cultura paperless e documentação de processos',
  blocks: [
    {
      id: 'cult-problema',
      label: 'Problema',
      heading: 'Processos internos com alto consumo de papel.',
      description:
        'A implantação reduziu o volume de papel em Viagens e Movimentações de Pessoal.',
    },
    {
      id: 'cult-beneficio',
      label: 'Benefício documentado',
      description:
        'Fluxo digital com redução de folhas, maior agilidade operacional e sustentabilidade.',
    },
    {
      id: 'cult-diferencial',
      label: 'Diferencial',
      description:
        'Alcance em todas as unidades próprias, 25 setores atendidos e 14 treinamentos realizados.',
    },
  ],
}

export const OTIMIZA_TRAVEL_PAPERLESS: OtimizaTravelPaperlessContent = {
  eyebrow: 'FLUIG · SOLICITAÇÕES DE VIAGEM',
  title: 'De cinco páginas para uma.',
  subtitle: 'Redução de 80% das folhas em cada solicitação de viagem.',
  rows: [
    {
      id: 'viagem-antes',
      label: 'Antes · solicitação física',
      valueLabel: '5 páginas',
      percentageWidth: 100,
    },
    {
      id: 'viagem-depois',
      label: 'Depois · fluxo digital',
      valueLabel: '1 página',
      percentageWidth: 20,
    },
  ],
  footerNote:
    'Digitalização de RH e Viagens com foco em eficiência e sustentabilidade.',
}

export const OTIMIZA_TEAM_MEMBERS: OtimizaTeamMember[] = [
  { id: 'member-caua', name: 'Cauã Andrade' },
  { id: 'member-jean', name: 'Jean Victor Santana' },
  { id: 'member-gabriel', name: 'Gabriel Barbosa' },
  { id: 'member-bruno', name: 'Bruno Henrique Santos' },
  { id: 'member-gabriela', name: 'Gabriela Rappel' },
  { id: 'member-joao', name: 'João Victor Bonfim' },
]

