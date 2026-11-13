export interface FeiraHeroContent {
  eyebrow: string
  title: string
  summary: string
}

export interface FeiraContextPhoto {
  id: string
  src: string
  alt: string
}

export interface FeiraContextContent {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  description: string
  photos: FeiraContextPhoto[]
}

export interface FeiraScopePillar {
  id: string
  title: string
  description: string
}

export interface FeiraScopeContent {
  eyebrow: string
  indicatorValue: string
  indicatorTitle: string
  indicatorCaption: string
  pillars: FeiraScopePillar[]
}

export interface FeiraResultIndicator {
  id: string
  eyebrow: string
  value: string
  label: string
  source: string
}

export interface FeiraPaperlessImpactCard {
  id: string
  value: string
  label: string
}

export interface FeiraMonthlyPaperComparison {
  id: string
  label: string
  valueLabel: string
  percentageWidth: number
}

export interface FeiraAnnualPaperCard {
  id: string
  value: string
  label: string
}

export interface FeiraHighlightEvent {
  id: string
  title: string
  procedures: string
  description: string
}

export interface FeiraTeamMember {
  id: string
  name: string
}

