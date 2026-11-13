export type CatalogCategory =
  | 'Todos'
  | 'Inteligência artificial'
  | 'Monitoramento inteligente'
  | 'Saúde e atendimento'
  | 'Processos institucionais'
  | 'Governança financeira'

export interface CatalogMediaPhoto {
  type: 'photo'
  src: string
  alt: string
  heightClass?: string
  caption?: string
  captionColor?: string
  keyMetricBox?: {
    eyebrow: string
    value: string
    description: string
  }
  statBadge?: {
    value: string
    subtitle: string
  }
}

export interface CatalogMediaTypographic {
  type: 'typographic'
  eyebrow: string
  title: string
  description: string
}

export type CatalogMediaConfig = CatalogMediaPhoto | CatalogMediaTypographic

export interface CatalogDetailItem {
  id: string
  label: string
  labelColor?: 'magenta' | 'teal'
  text: string
  secondaryText?: string
  isResultHighlight?: boolean
  resultVariant?: 'magenta-bold' | 'burgundy-semibold'
}

export interface CatalogAccessChip {
  label: string
  variant?: 'magenta' | 'teal'
}

export interface CatalogProject {
  id: string
  slug: string
  indexNumber: string
  indexStyle: 'badge' | 'plain'
  category: Exclude<CatalogCategory, 'Todos'>
  title: string
  titleSize?: 'default' | 'large'
  summary: string
  dividerColor?: string
  mediaColumnWidth?: '440' | '400'
  media: CatalogMediaConfig
  details: CatalogDetailItem[]
  accessLabelColor?: string
  accessChips: CatalogAccessChip[]
  ctaLabel: string
  ctaHref: string
}

