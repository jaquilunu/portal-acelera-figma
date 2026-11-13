import type { FjsBenefitCard } from '../../types/fjs'
import { FJS_BENEFITS } from '../../data/fjsData'

export interface FjsBenefitsSectionProps {
  benefits?: FjsBenefitCard[]
}

export function FjsBenefitsSection({
  benefits = FJS_BENEFITS,
}: FjsBenefitsSectionProps) {
  return (
    <section
      id="entregas"
      aria-labelledby="fjs-benefits-heading"
      className="w-full bg-[#FFFFFF]"
    >
      {/* Benefits (#4109:106, template=EL-954ace0c) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Section Header (#4109:107, template=EL-1519dabc) */}
        <div className="flex flex-col gap-[12px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Benefícios
          </span>
          <h2
            id="fjs-benefits-heading"
            className="text-[30px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            O que o projeto entrega
          </h2>
        </div>

        {/* Benefits Row (#4109:110, template=EL-4848f3c9) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {benefits.map((benefit) => {
            const isMint = benefit.variant === 'mint'

            return (
              <article
                key={benefit.id}
                className={`p-[24px] rounded-[14px] border flex flex-col gap-[8px] ${
                  isMint
                    ? 'bg-[#EDF5F3] border-[#C8E2DC]'
                    : 'bg-[#F7EEF2] border-[#E4D9DE]'
                }`}
              >
                {/* Eyebrow (#4109:112 / #4109:116 / #4109:120) */}
                <span
                  className={`text-[11px] font-semibold leading-[1.4] uppercase ${
                    isMint ? 'text-[#1B6B5A]' : 'text-[#B84469]'
                  }`}
                >
                  {benefit.eyebrow}
                </span>

                {/* Benefit Title (#4109:113 / #4109:117 / #4109:121) */}
                <h3 className="text-[22px] font-semibold leading-[1.2] text-[#511B35] m-0">
                  {benefit.title}
                </h3>

                {/* Benefit Description (#4109:114 / #4109:118 / #4109:122) */}
                <p className="text-[14px] font-normal leading-[1.55] text-[#62595E] m-0">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

