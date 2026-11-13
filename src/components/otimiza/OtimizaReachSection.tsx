import type { OtimizaReachContent } from '../../types/otimiza'
import { OTIMIZA_REACH_CONTENT } from '../../data/otimizaData'

export interface OtimizaReachSectionProps {
  content?: OtimizaReachContent
}

export function OtimizaReachSection({
  content = OTIMIZA_REACH_CONTENT,
}: OtimizaReachSectionProps) {
  return (
    <section
      aria-labelledby="otimiza-reach-heading"
      className="relative w-full min-h-[300px] sm:min-h-[340px] lg:h-[380px] overflow-hidden flex items-center justify-center"
    >
      {/* Background Photo (#2015:322) */}
      <img
        src={content.backgroundImage}
        alt={content.backgroundImageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Burgundy Overlay (rgba(81, 27, 53, 0.78)) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(81, 27, 53, 0.78)' }}
        aria-hidden="true"
      />

      {/* Centered Content (#2015:323) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 flex flex-col items-center text-center gap-[16px]">
        <span
          id="otimiza-reach-heading"
          className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]"
        >
          {content.eyebrow}
        </span>
        <span className="text-[64px] sm:text-[96px] lg:text-[120px] font-medium leading-none text-[#FFFFFF]">
          {content.value}
        </span>
        <p className="max-w-[600px] text-[22px] sm:text-[26px] lg:text-[28px] font-normal leading-[1.3] text-[#F5E9EF] m-0">
          {content.subtitle}
        </p>
        <p className="max-w-[500px] text-[13px] font-normal leading-[1.5] text-[#E8A0B8] m-0">
          {content.caption}
        </p>
      </div>
    </section>
  )
}

