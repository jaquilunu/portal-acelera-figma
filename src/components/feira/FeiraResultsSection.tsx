import type { FeiraResultIndicator } from '../../types/feira'
import { FEIRA_RESULT_INDICATORS } from '../../data/feiraData'

export interface FeiraResultsSectionProps {
  indicators?: FeiraResultIndicator[]
}

export function FeiraResultsSection({
  indicators = FEIRA_RESULT_INDICATORS,
}: FeiraResultsSectionProps) {
  return (
    <section
      aria-labelledby="feira-results-heading"
      className="w-full bg-[#FFFFFF]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Header Copy (#20:6762 & #20:6763) */}
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            RESULTADOS DA INFORMATIZAÇÃO
          </span>
          <h2
            id="feira-results-heading"
            className="text-[28px] sm:text-[34px] lg:text-[40px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            Atendimentos, pacientes e procedimentos.
          </h2>
        </div>

        {/* 3-Column Metrics Row (#20:6764) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {indicators.map((indicator) => (
            <article
              key={indicator.id}
              className="border-t border-[#E4D9DE] py-6 lg:py-[32px] flex flex-col gap-[12px]"
            >
              <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
                {indicator.eyebrow}
              </span>
              <span className="text-[36px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] text-[#B84469]">
                {indicator.value}
              </span>
              <p className="text-[17px] font-normal leading-[1.45] text-[#322D30] m-0">
                {indicator.label}
              </p>
              <span className="text-[13px] font-normal leading-[1.4] text-[#62595E]">
                {indicator.source}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

