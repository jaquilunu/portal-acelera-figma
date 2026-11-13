import type { FjsMetricCard } from '../../types/fjs'
import { FJS_METRICS } from '../../data/fjsData'

export interface FjsMetricsSectionProps {
  metrics?: FjsMetricCard[]
}

export function FjsMetricsSection({
  metrics = FJS_METRICS,
}: FjsMetricsSectionProps) {
  return (
    <section
      id="resultados"
      aria-labelledby="fjs-metrics-heading"
      className="w-full bg-[#FFFFFF]"
    >
      {/* Dashboard (#4109:55, template=EL-954ace0c) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Section Header (#4109:56, template=EL-1519dabc) */}
        <div className="flex flex-col gap-[12px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Dashboard
          </span>
          <h2
            id="fjs-metrics-heading"
            className="text-[30px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            Métricas do projeto
          </h2>
        </div>

        {/* Metrics Row (#4109:59, template=EL-4848f3c9) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className="p-[24px] rounded-[16px] bg-[#FFFFFF] border border-[#E4D9DE] flex flex-col gap-[8px]"
            >
              {/* Eyebrow (#4109:61 / #4109:65 / #4109:69) */}
              <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
                {metric.eyebrow}
              </span>

              {/* Metric Value (#4109:62 / #4109:66 / #4109:70) */}
              <span className="text-[32px] font-semibold leading-[1.08] text-[#511B35]">
                {metric.value}
              </span>

              {/* Description (#4109:63 / #4109:67 / #4109:71) */}
              <p className="text-[14px] font-normal leading-[1.55] text-[#62595E] m-0">
                {metric.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

