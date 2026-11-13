import type { OtimizaCultureContent } from '../../types/otimiza'
import { OTIMIZA_CULTURE_CONTENT } from '../../data/otimizaData'

export interface OtimizaCultureSectionProps {
  content?: OtimizaCultureContent
}

export function OtimizaCultureSection({
  content = OTIMIZA_CULTURE_CONTENT,
}: OtimizaCultureSectionProps) {
  return (
    <section
      aria-labelledby="otimiza-culture-heading"
      className="w-full bg-[#FFFFFF] flex flex-col"
    >
      {/* Solução e Impacto Split Row (#2015:328) */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:min-h-[480px]">
        {/* Photo Left (#2015:329) */}
        <div className="relative w-full lg:w-[640px] h-[280px] sm:h-[380px] lg:h-auto shrink-0 overflow-hidden">
          <img
            src={content.photoSrc}
            alt={content.photoAlt}
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: 'rgba(26, 10, 17, 0.28)' }}
            aria-hidden="true"
          />
        </div>

        {/* Content Right (#2015:332) */}
        <div className="flex-1 bg-[#F7EEF2] px-5 sm:px-10 lg:p-[56px] py-10 sm:py-12 flex flex-col justify-center gap-[32px]">
          <span
            id="otimiza-culture-heading"
            className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]"
          >
            {content.eyebrow}
          </span>

          <div className="flex flex-col gap-[24px]">
            {content.blocks.map((block) => (
              <article
                key={block.id}
                className="flex flex-col gap-[8px]"
              >
                <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#1E6B5B]">
                  {block.label}
                </span>
                {block.heading && (
                  <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-medium leading-[1.2] text-[#511B35] m-0">
                    {block.heading}
                  </h3>
                )}
                <p className="text-[15px] font-normal leading-[1.55] text-[#62595E] m-0">
                  {block.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* White Spacer Frame (#2015:345) */}
      <div
        className="w-full h-6 lg:h-[48px] bg-[#FFFFFF]"
        aria-hidden="true"
      />
    </section>
  )
}

