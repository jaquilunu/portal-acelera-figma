export interface OtimizaStatItem {
  id: string
  value: string
  label: string
}

export interface OtimizaHeroContent {
  eyebrow: string
  title: string
  description: string
  heroImage: string
  heroImageAlt: string
  stats: OtimizaStatItem[]
}

export interface OtimizaContextContent {
  eyebrow: string
  title: string
  description: string
  photoSrc: string
  photoAlt: string
}

export interface OtimizaReachContent {
  eyebrow: string
  value: string
  subtitle: string
  caption: string
  backgroundImage: string
  backgroundImageAlt: string
}

export interface OtimizaCultureBlock {
  id: string
  label: string
  heading?: string
  description: string
}

export interface OtimizaCultureContent {
  eyebrow: string
  photoSrc: string
  photoAlt: string
  blocks: OtimizaCultureBlock[]
}

export interface OtimizaTravelScaleRow {
  id: string
  label: string
  valueLabel: string
  percentageWidth: number
}

export interface OtimizaTravelPaperlessContent {
  eyebrow: string
  title: string
  subtitle: string
  rows: OtimizaTravelScaleRow[]
  footerNote: string
}

export interface OtimizaTeamMember {
  id: string
  name: string
}

