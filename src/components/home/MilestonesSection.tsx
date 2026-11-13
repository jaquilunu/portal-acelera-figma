import { Link } from 'react-router-dom'
import type { MilestoneCardItem } from '../../types/home'
import { MILESTONE_CARDS } from '../../data/homeData'

export interface MilestonesSectionProps {
  cards?: MilestoneCardItem[]
}

export function MilestonesSection({
  cards = MILESTONE_CARDS,
}: MilestonesSectionProps) {
  return (
    <section className="w-full bg-[#F9F4F6]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[64px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Bagagem header (#76:317 -> #76:318) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="w-full max-w-[640px] flex flex-col gap-[8px]">
            <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
              Bagagem do Acelera · Entregas e marcos
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-medium leading-[1.15] text-[#511B35] m-0">
              Projetos entregues, marcos e aprendizados acumulados.
            </h2>
          </div>

          <Link
            to="/#impacto"
            className="px-[24px] py-[16px] rounded-[12px] bg-[#FFFFFF] border border-[#E4D9DE] hover:border-[#B84469] flex flex-col gap-[4px] transition-colors shrink-0"
          >
            <span className="text-[11px] font-semibold uppercase text-[#B84469]">
              Resultados acumulados
            </span>
            <span className="text-[15px] font-medium text-[#511B35]">
              Ver indicadores por iniciativa →
            </span>
            <span className="text-[11px] font-normal text-[#9C8A91]">
              KPIs de projetos distintos; origens independentes.
            </span>
          </Link>
        </div>

        {/* Bagagem projects grid (#76:325 & #76:359) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {cards.map((card) => {
            const isHighlight = card.variant === 'highlight'
            return (
              <Link
                key={card.id}
                to={card.href ?? '/projetos'}
                className={`p-[24px] rounded-[16px] flex flex-col gap-[14px] transition-transform duration-200 hover:-translate-y-1 ${
                  isHighlight
                    ? 'bg-gradient-to-r from-[#511B35] to-[#7A2750] text-[#FFFFFF]'
                    : `bg-[#FFFFFF] ${card.hasBorder ? 'border border-[#E4D9DE]' : ''}`
                }`}
              >
                {/* Card top */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] font-semibold uppercase ${
                      isHighlight ? 'text-[#F7C5D6]' : 'text-[#B84469]'
                    }`}
                  >
                    {card.eyebrow}
                  </span>

                  {card.statusBadge && (
                    <span className="px-[10px] py-[4px] rounded-[20px] bg-[#E8F5F0] text-[11px] font-semibold text-[#2A7A5F]">
                      {card.statusBadge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`${
                    isHighlight ? 'text-[20px] text-[#FFFFFF]' : 'text-[19px] text-[#511B35]'
                  } font-medium leading-[1.2] m-0`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[14px] font-normal leading-[1.55] m-0 ${
                    isHighlight ? 'text-[#FFFFFF]/80' : 'text-[#62595E]'
                  }`}
                >
                  {card.description}
                </p>

                {/* Bottom Divider */}
                {card.hasDivider && (
                  <div className="w-full h-[1px] bg-[#E4D9DE] mt-auto" role="separator" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
