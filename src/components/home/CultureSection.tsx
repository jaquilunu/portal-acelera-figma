import { Link } from 'react-router-dom'
import type { CulturePrincipleCard } from '../../types/home'
import { CULTURE_PRINCIPLES } from '../../data/homeData'

export interface CultureSectionProps {
  principles?: CulturePrincipleCard[]
}

export function CultureSection({
  principles = CULTURE_PRINCIPLES,
}: CultureSectionProps) {
  return (
    <section className="w-full bg-[#F7EEF2]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-10 lg:gap-[48px]">
        {/* Culture header (#2023:4) */}
        <div className="flex flex-col gap-[12px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Cultura institucional
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[1.1] text-[#511B35] m-0">
            ESG em movimento: inovação sustentável.
          </h2>
        </div>

        {/* Culture principles (#20:6306, EL-bff1719b) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {principles.map((card) => {
            const isTeal = card.variant === 'teal'
            return (
              <Link
                key={card.id}
                to={card.href ?? '/projetos/otimiza'}
                className={`p-[32px] min-h-[260px] rounded-[16px] flex flex-col gap-[16px] transition-transform duration-200 hover:-translate-y-1 ${
                  isTeal ? 'bg-[#1B5E5A]' : 'bg-[#FFFFFF]'
                }`}
              >
                <span
                  className={`text-[52px] font-medium leading-none ${
                    isTeal ? 'text-[#7ECDC8]' : 'text-[#B84469]'
                  }`}
                >
                  {card.symbol}
                </span>

                <div className="flex flex-col gap-[6px]">
                  <h3
                    className={`text-[20px] font-semibold leading-[1.2] m-0 ${
                      isTeal ? 'text-[#FFFFFF]' : 'text-[#511B35]'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-[15px] font-normal leading-[1.5] m-0 ${
                      isTeal ? 'text-[#B2DFDC]' : 'text-[#62595E]'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
