import type { OtimizaTravelPaperlessContent } from '../../types/otimiza'
import { OTIMIZA_TRAVEL_PAPERLESS } from '../../data/otimizaData'

export interface OtimizaTravelPaperlessSectionProps {
  content?: OtimizaTravelPaperlessContent
}

export function OtimizaTravelPaperlessSection({
  content = OTIMIZA_TRAVEL_PAPERLESS,
}: OtimizaTravelPaperlessSectionProps) {
  return (
    <section
      aria-labelledby="otimiza-travel-heading"
      className="w-full bg-[#EDF6F2]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col gap-[20px]">
        {/* Eyebrow (#4111:431) */}
        <span className="text-[12px] font-medium leading-[1.35] text-[#2A7A5F]">
          {content.eyebrow}
        </span>

        {/* Section Heading (#4111:432) */}
        <h2
          id="otimiza-travel-heading"
          className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.35] text-[#511B35] m-0"
        >
          {content.title}
        </h2>

        {/* Subheading (#4111:433) */}
        <p className="text-[18px] lg:text-[20px] font-medium leading-[1.35] text-[#511B35] m-0">
          {content.subtitle}
        </p>

        {/* Scale Bar Rows (#4111:434 & #4111:441) */}
        <div className="w-full flex flex-col gap-[20px]">
          {content.rows.map((row) => (
            <div
              key={row.id}
              className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[20px]"
            >
              {/* Left Label (#4111:435 / #4111:442) */}
              <div className="w-full sm:w-[220px] lg:w-[300px] shrink-0">
                <span className="text-[16px] font-medium leading-[1.35] text-[#511B35]">
                  {row.label}
                </span>
              </div>

              {/* Scale 0–5 Bar (#4111:437 / #4111:444) */}
              <div
                className="flex-1 h-[20px] rounded-[10px] bg-[#E3D9DE] overflow-hidden"
                role="progressbar"
                aria-label={`${row.label}: ${row.valueLabel}`}
                aria-valuenow={row.percentageWidth}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-[10px] bg-[#2A7A5F] transition-all duration-500"
                  style={{ width: `${row.percentageWidth}%` }}
                />
              </div>

              {/* Right Value (#4111:439 / #4111:446) */}
              <div className="w-full sm:w-[100px] shrink-0">
                <span className="text-[18px] font-medium leading-[1.35] text-[#2A7A5F]">
                  {row.valueLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note (#4111:448) */}
        <p className="text-[16px] lg:text-[17px] font-normal leading-[1.35] text-[#62595E] m-0">
          {content.footerNote}
        </p>
      </div>
    </section>
  )
}

