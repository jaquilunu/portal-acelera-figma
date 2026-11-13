import type { OtimizaContextContent } from '../../types/otimiza'
import { OTIMIZA_CONTEXT_CONTENT } from '../../data/otimizaData'

export interface OtimizaContextSectionProps {
  content?: OtimizaContextContent
}

export function OtimizaContextSection({
  content = OTIMIZA_CONTEXT_CONTENT,
}: OtimizaContextSectionProps) {
  return (
    <section
      aria-labelledby="otimiza-context-heading"
      className="w-full bg-[#FFFFFF]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col lg:flex-row items-center gap-8 lg:gap-[80px]">
        {/* Section Introduction (#2015:315) */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-[16px]">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            {content.eyebrow}
          </span>
          <h2
            id="otimiza-context-heading"
            className="text-[28px] sm:text-[32px] lg:text-[34px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            {content.title}
          </h2>
          <p className="text-[16px] font-normal leading-[1.55] text-[#62595E] m-0">
            {content.description}
          </p>
        </div>

        {/* Photo Context (#2015:319) */}
        <div className="relative flex-1 w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-[16px] overflow-hidden">
          <img
            src={content.photoSrc}
            alt={content.photoAlt}
            className="w-full h-full object-cover object-center"
          />
          {/* Caption Overlay (#2015:320) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: 'rgba(26, 10, 17, 0.35)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

