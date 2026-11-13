import type { FeiraContextContent } from '../../types/feira'
import { FEIRA_CONTEXT_CONTENT } from '../../data/feiraData'

export interface FeiraContextSectionProps {
  content?: FeiraContextContent
}

export function FeiraContextSection({
  content = FEIRA_CONTEXT_CONTENT,
}: FeiraContextSectionProps) {
  return (
    <section
      aria-labelledby="feira-context-heading"
      className="w-full bg-[#FFFFFF] flex flex-col"
    >
      {/* Contexto e Objetivo Copy (#20:6739) */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[80px]">
        {/* Left Column (#20:6741) */}
        <div className="w-full lg:w-[430px] shrink-0 flex flex-col gap-[16px]">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            {content.eyebrow}
          </span>
          <h2
            id="feira-context-heading"
            className="text-[28px] sm:text-[32px] lg:text-[34px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>
        </div>

        {/* Right Column (#20:6744) */}
        <div className="flex-1 flex flex-col gap-[20px]">
          <p className="text-[18px] lg:text-[20px] font-normal leading-[1.55] text-[#62595E] m-0">
            {content.description}
          </p>
        </div>
      </div>

      {/* Photo Band (#2015:215) */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 min-h-[280px] sm:min-h-[380px] lg:h-[480px] overflow-hidden">
        {content.photos.map((photo) => (
          <div
            key={photo.id}
            className="relative w-full h-[260px] sm:h-[360px] lg:h-[480px] overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Full-Width Burgundy Overlay (#4038:10) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(81, 27, 53, 0.56) 0%, rgba(81, 27, 53, 0.5) 60%, rgba(81, 27, 53, 0.11) 100%)',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

