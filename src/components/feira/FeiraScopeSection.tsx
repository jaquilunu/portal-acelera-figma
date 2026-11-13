import type { FeiraScopeContent } from '../../types/feira'
import { FEIRA_SCOPE_CONTENT } from '../../data/feiraData'

export interface FeiraScopeSectionProps {
  content?: FeiraScopeContent
}

export function FeiraScopeSection({
  content = FEIRA_SCOPE_CONTENT,
}: FeiraScopeSectionProps) {
  return (
    <section
      aria-labelledby="feira-scope-heading"
      className="w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(90deg, rgba(81, 27, 53, 1) 0%, rgba(128, 32, 80, 1) 100%)',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[64px] flex flex-col gap-[24px]">
        {/* Eyebrow (#2015:225) */}
        <span
          id="feira-scope-heading"
          className="text-[12px] font-semibold leading-[1.4] uppercase text-[#F5E9EF]"
        >
          {content.eyebrow}
        </span>

        {/* Pillars Row (#2015:226) */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-[48px]">
          {/* Coverage Indicator (#2015:227) */}
          <div className="w-full lg:w-[500px] shrink-0 flex flex-col gap-[8px]">
            <span className="text-[64px] sm:text-[96px] lg:text-[120px] font-normal leading-none text-[#FFFFFF]">
              {content.indicatorValue}
            </span>
            <p className="text-[22px] sm:text-[26px] lg:text-[28px] font-medium leading-[1.15] text-[#FFFFFF] m-0">
              {content.indicatorTitle}
            </p>
            <span className="text-[13px] font-normal leading-[1.55] text-[#F5E9EF]">
              {content.indicatorCaption}
            </span>
          </div>

          {/* Vertical Divider (#2015:231) */}
          <div
            className="w-full h-[1px] lg:w-[1px] lg:h-[180px] bg-[#F5E9EF]/30 shrink-0"
            aria-hidden="true"
          />

          {/* Scope Statements (#2015:232) */}
          <div className="flex-1 flex flex-col gap-[28px]">
            {content.pillars.map((pillar) => (
              <article
                key={pillar.id}
                className="flex flex-col gap-[6px]"
              >
                <div className="flex items-center gap-[10px]">
                  <span
                    className="w-[6px] h-[6px] rounded-[3px] bg-[#B84469] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="text-[22px] lg:text-[26px] font-medium leading-[1.15] text-[#FFFFFF] m-0">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-[15px] font-normal leading-[1.55] text-[#F5E9EF] m-0">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

