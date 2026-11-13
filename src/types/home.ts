export interface NavItem {
  id: string
  label: string
  href: string
}

export interface HeroSlide {
  id: string
  slideNumber: string
  label: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText: string
  secondaryCtaHref: string
}

export interface PillarItem {
  id: string
  text: string
}

export interface WorkingJourneyStep {
  id: string
  stepNumber: string
  title: string
  description: string
  accentColor: 'magenta' | 'teal'
}

export interface AboutPhotoItem {
  id: string
  src: string
  alt: string
}

export type ImpactTabCategory =
  | 'Todos'
  | 'Feira de Saúde'
  | 'FJS Inteligente & IA'
  | 'Gestão de Pessoas'

export interface ImpactProjectCard {
  id: string
  category: Exclude<ImpactTabCategory, 'Todos'>
  tag: string
  title: string
  problem: string
  benefitPrefix?: string
  benefitHighlight?: string
  benefitSuffix?: string
  benefitText?: string
  keyMetricValue: string
  keyMetricSubtitle: string
  keyMetricIcon?: string
  ctaLabel: string
  ctaHref: string
}

export interface FeaturedProject {
  id: string
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  problem: string
  benefitArrowLayout?: {
    before: string
    after: string
  }
  benefitText?: string
  differential: string
  metricsSummary: string
  accessLinks: string[]
  ctaLabel: string
  ctaHref: string
  captionNote?: string
}

export interface SecondaryProjectSummary {
  id: string
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  problem: string
  benefit: string
  metricsSummary: string
  subtitle: string
  accessLinks: string[]
  ctaLabel: string
  ctaHref: string
  captionNote?: string
}

export interface MpFilterOption {
  id: string
  label: string
  value: string
  options: string[]
}

export interface MpTopIndicatorCard {
  id: string
  project: string
  value: string
  dotColor: string
  labelColor: string
  borderColor: string
  filterProject: string
  href?: string
}

export interface MpBottomEconomyCard {
  id: string
  project: string
  value: string
  description: string
  labelColor: string
  filterProject: string
  href?: string
}

export interface TaskRelationColumn {
  id: string
  label: string
  labelColor: string
  value: string
  description: string
  href?: string
}

export interface CulturePrincipleCard {
  id: string
  symbol: string
  title: string
  description: string
  variant: 'light' | 'teal'
  href?: string
}

export interface MagazineThemeItem {
  id: string
  title: string
  description: string
  href?: string
}

export interface TeamPhotoItem {
  id: string
  src: string
  alt: string
  caption: string
}

export interface MilestoneCardItem {
  id: string
  eyebrow: string
  statusBadge?: string
  title: string
  description: string
  hasDivider: boolean
  hasBorder: boolean
  variant: 'project' | 'highlight'
  href?: string
}
