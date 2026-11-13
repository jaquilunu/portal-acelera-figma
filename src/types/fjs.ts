export interface FjsHeroContent {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  heroImage: string
  heroImageAlt: string
}

export interface FjsMetricCard {
  id: string
  eyebrow: string
  value: string
  description: string
}

export interface FjsSensorLocation {
  id: string
  location: string
  count: number
  barWidthPx: number
  percentageWidth: number
  hasConverter: boolean
}

export interface FjsSensorTotalCard {
  id: string
  eyebrow: string
  value: string
  description: string
}

export type FjsBenefitVariant = 'blush' | 'mint'

export interface FjsBenefitCard {
  id: string
  eyebrow: string
  title: string
  description: string
  variant: FjsBenefitVariant
}

export interface FjsTeamMember {
  id: string
  name: string
  role: string
}

