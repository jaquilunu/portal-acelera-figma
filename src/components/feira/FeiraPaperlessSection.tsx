import type {
  FeiraAnnualPaperCard,
  FeiraMonthlyPaperComparison,
  FeiraPaperlessImpactCard,
} from '../../types/feira'
import {
  FEIRA_ANNUAL_PAPER,
  FEIRA_MONTHLY_PAPER,
  FEIRA_PAPERLESS_IMPACTS,
} from '../../data/feiraData'

export interface FeiraPaperlessSectionProps {
  impacts?: FeiraPaperlessImpactCard[]
  monthlyComparison?: FeiraMonthlyPaperComparison[]
  annualComparison?: FeiraAnnualPaperCard[]
}

export function FeiraPaperlessSection({
  impacts = FEIRA_PAPERLESS_IMPACTS,
  monthlyComparison = FEIRA_MONTHLY_PAPER,
  annualComparison = FEIRA_ANNUAL_PAPER,
}: FeiraPaperlessSectionProps) {
  return (
    <section
      aria-labelledby="feira-paperless-heading"
      className="w-full bg-[#EDF6F2]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col gap-[20px]">
        {/* Eyebrow (#4111:376) */}
        <span className="text-[12px] font-medium leading-[1.35] text-[#2A7A5F]">
          SUSTENTABILIDADE · PAPERLESS
        </span>

        {/* Section Heading (#4111:377) */}
        <h2
          id="feira-paperless-heading"
          className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.35] text-[#511B35] m-0"
        >
          Menos papel. Mais agilidade no cuidado.
        </h2>

        {/* 3 Impact Cards (#4111:378) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {impacts.map((impact) => (
            <article
              key={impact.id}
              className="p-[24px] rounded-[16px] bg-[#FFFFFF] border border-[#E3D9DE] flex flex-col gap-[8px]"
            >
              <span className="text-[32px] lg:text-[36px] font-medium leading-[1.35] text-[#511B35]">
                {impact.value}
              </span>
              <p className="text-[15px] font-normal leading-[1.35] text-[#62595E] m-0">
                {impact.label}
              </p>
            </article>
          ))}
        </div>

        {/* Monthly Consumption Subheading (#4111:388) */}
        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-[1.35] text-[#511B35] m-0 pt-2">
          Consumo mensal de papel · resmas
        </h3>

        {/* Monthly Scale Bars (#4111:389 & #4111:396) */}
        <div className="w-full flex flex-col gap-[20px]">
          {monthlyComparison.map((row) => (
            <div
              key={row.id}
              className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[20px]"
            >
              {/* Left Label */}
              <div className="w-full sm:w-[160px] lg:w-[300px] shrink-0">
                <span className="text-[16px] font-medium leading-[1.35] text-[#511B35]">
                  {row.label}
                </span>
              </div>

              {/* Progress Bar Track */}
              <div
                className="flex-1 h-[20px] rounded-[10px] bg-[#E3D9DE] overflow-hidden"
                role="progressbar"
                aria-label={`Consumo mensal (${row.label}): ${row.valueLabel}`}
                aria-valuenow={Math.round(row.percentageWidth)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-[10px] bg-[#2A7A5F] transition-all duration-500"
                  style={{ width: `${row.percentageWidth}%` }}
                />
              </div>

              {/* Right Value */}
              <div className="w-full sm:w-[100px] shrink-0">
                <span className="text-[18px] font-medium leading-[1.35] text-[#2A7A5F]">
                  {row.valueLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Annual Consumption Subheading (#4111:403) */}
        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-[1.35] text-[#511B35] m-0 pt-2">
          Consumo anual de papel · resmas
        </h3>

        {/* Annual Cards (#4111:404) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {annualComparison.map((card) => (
            <article
              key={card.id}
              className="p-[24px] rounded-[16px] bg-[#FFFFFF] border border-[#E3D9DE] flex flex-col gap-[8px]"
            >
              <span className="text-[32px] lg:text-[36px] font-medium leading-[1.35] text-[#511B35]">
                {card.value}
              </span>
              <p className="text-[15px] font-normal leading-[1.35] text-[#62595E] m-0">
                {card.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

