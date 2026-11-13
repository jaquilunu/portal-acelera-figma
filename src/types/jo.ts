export interface JoPrimaryIndicator {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface JoComparisonMetric {
  eyebrow: string;
  simpleLabel: string;
  simpleValue: string;
  complexLabel: string;
  complexValue: string;
  caption: string;
}

export interface JoWeekdayMetric {
  id: string;
  day: string;
  percentage: string;
  barHeightPx: number;
}

export interface JoCapability {
  id: string;
  title: string;
  description: string;
}

export interface JoTeamMember {
  id: string;
  name: string;
}
