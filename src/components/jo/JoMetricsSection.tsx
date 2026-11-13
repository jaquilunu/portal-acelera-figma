import { ArrowRight } from 'lucide-react'
import {
  JO_COMPARISON_METRIC,
  JO_PRIMARY_INDICATORS,
  JO_WEEKDAY_METRICS,
} from '../../data/joData'

export function JoMetricsSection() {
  return (
    <section aria-labelledby="jo-metrics-heading" className="w-full bg-[#FFFFFF]">
      {/* Part A: Results Photo Band (#2015:52) */}
      <div className="relative w-full min-h-[400px] overflow-hidden flex items-center">
        {/* Background Photo (#2015:53) */}
        <img
          src="/images/hero-slide-01.png"
          alt="Equipe Acelera reunida em acompanhamento de indicadores da Jô"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Burgundy Vertical Gradient Overlay (#2015:54) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(81, 27, 53, 0.95) 0%, rgba(81, 27, 53, 0.7) 50%, rgba(81, 27, 53, 0.3) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Results Content (#2015:55) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 lg:py-[56px] flex flex-col justify-between gap-8 lg:gap-[40px]">
          {/* Section Header (#2015:56) */}
          <div className="flex flex-col gap-[8px]">
            <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
              Dashboard e métricas
            </span>
            <h2
              id="jo-metrics-heading"
              className="text-[32px] sm:text-[40px] font-medium leading-[1.15] text-[#FFFFFF] m-0"
            >
              O que Jô registra.
            </h2>
          </div>

          {/* 3-Column Indicators Row (#2015:59) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0">
            {/* Primary Indicator 1 & 2 (#2015:60 & #2015:64) */}
            {JO_PRIMARY_INDICATORS.map((indicator) => (
              <div
                key={indicator.id}
                className="flex flex-col gap-[8px] lg:pr-[48px]"
              >
                <span className="text-[48px] sm:text-[64px] font-medium leading-none text-[#FFFFFF]">
                  {indicator.value}
                </span>
                <span className="text-[18px] font-normal leading-[1.4] text-[#E8A0B8]">
                  {indicator.label}
                </span>
                <span className="text-[12px] font-normal leading-[1.4] text-[#FFFFFF]">
                  {indicator.description}
                </span>
              </div>
            ))}

            {/* Column 3: Tempo por tipo de pergunta (#2015:68) */}
            <div className="flex flex-col gap-[12px]">
              <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
                {JO_COMPARISON_METRIC.eyebrow}
              </span>

              {/* Before / Arrow / After Row (#2015:70) */}
              <div className="flex flex-wrap items-center gap-[16px]">
                {/* Simple Questions (#2015:71) */}
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[11px] font-normal leading-[1.4] uppercase text-[#FFFFFF]">
                    {JO_COMPARISON_METRIC.simpleLabel}
                  </span>
                  <span className="text-[40px] sm:text-[48px] font-medium leading-none text-[#FFFFFF]">
                    {JO_COMPARISON_METRIC.simpleValue}
                  </span>
                </div>

                {/* Arrow (#2015:74) */}
                <div
                  className="w-[32px] h-[40px] flex items-center justify-center text-[#E8A0B8]"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-6 h-6" />
                </div>

                {/* Complex Questions (#2015:75) */}
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[11px] font-normal leading-[1.4] uppercase text-[#E8A0B8]">
                    {JO_COMPARISON_METRIC.complexLabel}
                  </span>
                  <span className="text-[40px] sm:text-[48px] font-medium leading-none text-[#FFFFFF]">
                    {JO_COMPARISON_METRIC.complexValue}
                  </span>
                </div>
              </div>

              <span className="text-[12px] font-normal leading-[1.4] text-[#FFFFFF]">
                {JO_COMPARISON_METRIC.caption}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Part B: Metrics Band — Picos de uso por dia da semana (#4109:11) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[64px] flex flex-col gap-[32px]">
        {/* Header (#4109:13) */}
        <div className="flex flex-col gap-[16px]">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Métricas
          </span>
          <h3 className="text-[32px] sm:text-[40px] font-medium leading-[1.15] text-[#511B35] m-0">
            Picos de uso por dia da semana.
          </h3>
        </div>

        {/* Bar Chart (#4109:17) */}
        <div
          role="img"
          aria-label="Gráfico de barras de picos de uso por dia da semana: Segunda 24,91%, Terça 21,00%, Quarta 20,89%, Quinta 16,80%, Sexta 16,00%"
          className="w-full overflow-x-auto pb-2"
        >
          <div className="min-w-[520px] flex items-end gap-[16px]">
            {JO_WEEKDAY_METRICS.map((item) => (
              <div
                key={item.id}
                className="w-[160px] flex flex-col items-center gap-[8px]"
              >
                <span className="text-[13px] font-semibold leading-[1.4] text-center text-[#511B35]">
                  {item.percentage}
                </span>
                <div
                  className="w-full rounded-[8px] bg-[#B84469] transition-all duration-300 hover:bg-[#9E3557]"
                  style={{ height: `${item.barHeightPx}px` }}
                />
                <span className="text-[11px] font-semibold leading-[1.4] uppercase text-center text-[#B84469]">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

