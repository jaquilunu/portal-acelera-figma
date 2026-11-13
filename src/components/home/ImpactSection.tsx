import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ImpactProjectCard, ImpactTabCategory } from '../../types/home'
import { IMPACT_CARDS, IMPACT_TABS } from '../../data/homeData'

export interface ImpactSectionProps {
  cards?: ImpactProjectCard[]
  tabs?: ImpactTabCategory[]
}

export function ImpactSection({
  cards = IMPACT_CARDS,
  tabs = IMPACT_TABS,
}: ImpactSectionProps) {
  const [activeTab, setActiveTab] = useState<ImpactTabCategory>('Todos')
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const filteredCards =
    activeTab === 'Todos'
      ? cards
      : cards.filter((card) => card.category === activeTab)

  const scrollToSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, filteredCards.length - 1))
    setActiveSlide(clamped)
    if (trackRef.current) {
      const cardElement = trackRef.current.children[clamped] as HTMLElement | undefined
      if (cardElement) {
        trackRef.current.scrollTo({
          left: cardElement.offsetLeft - trackRef.current.offsetLeft,
          behavior: 'smooth',
        })
      }
    }
  }

  const handleTabChange = (tab: ImpactTabCategory) => {
    setActiveTab(tab)
    setActiveSlide(0)
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  return (
    <section id="impacto" className="w-full bg-[#FDF4F7]">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        {/* Section header (#4075:136) */}
        <div className="px-5 sm:px-10 lg:px-[80px] pt-14 lg:pt-[80px] pb-8 lg:pb-[48px] flex flex-col gap-[16px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#8B3A5A]">
            Resultados
          </span>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-medium leading-[1.15] text-[#511B35] m-0">
            Projetos e indicadores
          </h2>
        </div>

        {/* Tab bar (#4075:143) */}
        <div
          role="tablist"
          aria-label="Filtrar projetos por área"
          className="px-5 sm:px-10 lg:px-[80px] flex items-center overflow-x-auto border-b border-[#E8C8D5] scrollbar-none"
        >
          {tabs.map((tab, idx) => {
            const isActive = tab === activeTab
            const isLast = idx === tabs.length - 1
            return (
              <div
                key={tab}
                className={`shrink-0 flex flex-col ${!isLast ? 'pr-6 sm:pr-[32px]' : ''}`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab)}
                  className={`pt-[12px] cursor-pointer transition-colors text-left whitespace-nowrap ${
                    isActive
                      ? 'pb-[14px] text-[14px] font-semibold text-[#511B35]'
                      : 'pb-[16px] text-[14px] font-normal text-[#8B3A5A] hover:text-[#511B35]'
                  }`}
                >
                  {tab}
                </button>
                {isActive && (
                  <div className="w-full h-[2px] bg-[#511B35]" aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>

        {/* Carousel viewport & track (#4075:157 -> #4075:158) */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            onScroll={(e) => {
              const container = e.currentTarget
              const scrollLeft = container.scrollLeft
              const cardWidth = 640
              const newIndex = Math.round(scrollLeft / cardWidth)
              if (newIndex >= 0 && newIndex < filteredCards.length) {
                setActiveSlide(newIndex)
              }
            }}
            className="flex items-stretch gap-6 lg:gap-[40px] px-5 sm:px-10 lg:px-[80px] py-8 lg:py-[48px] overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredCards.map((card) => (
              <article
                key={card.id}
                className="snap-start w-[88vw] sm:w-[540px] lg:w-[600px] shrink-0 p-6 sm:p-[32px] rounded-[16px] bg-[#FFFFFF] border border-[#E8C8D5] flex flex-col justify-between gap-[20px]"
              >
                <div className="flex flex-col gap-[20px]">
                  {/* Tag row (#4075:456, EL-cfda57d5) */}
                  <div className="inline-flex items-center px-[10px] py-[4px] rounded-[20px] bg-[#F7EEF2] w-fit">
                    <span className="text-[11px] font-semibold uppercase text-[#B84469]">
                      {card.tag}
                    </span>
                  </div>

                  {/* Card title (#4075:458, style_a252f764) */}
                  <h3 className="text-[22px] sm:text-[26px] font-medium leading-[1.2] text-[#511B35] m-0">
                    <Link
                      to={card.ctaHref}
                      className="hover:text-[#B84469] transition-colors"
                    >
                      {card.title}
                    </Link>
                  </h3>

                  {/* Problem & Benefit row (#4075:459, EL-94a17615) */}
                  <div className="flex flex-col sm:flex-row items-start gap-[16px]">
                    {/* Problema block */}
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <span className="text-[11px] font-semibold uppercase text-[#B84469]">
                        Problema
                      </span>
                      <p className="text-[14px] font-normal leading-[1.5] text-[#511B35] m-0">
                        {card.problem}
                      </p>
                    </div>

                    {/* Arrow container (#4075:463, EL-ccc1e12c) */}
                    <div
                      className="w-[32px] h-[32px] flex items-center justify-center shrink-0 text-[#511B35]"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-[20px] h-[20px] stroke-[1.75]" />
                    </div>

                    {/* Benefício block */}
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <span className="text-[11px] font-semibold uppercase text-[#2A7A5F]">
                        Benefício
                      </span>
                      {card.benefitHighlight ? (
                        <p className="text-[14px] font-normal leading-[1.5] text-[#511B35] m-0">
                          {card.benefitPrefix}
                          <strong className="font-semibold">{card.benefitHighlight}</strong>
                          {card.benefitSuffix}
                        </p>
                      ) : (
                        <p className="text-[14px] font-normal leading-[1.5] text-[#511B35] m-0">
                          {card.benefitText}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Métrica divider (#4075:472, EL-ea76ecee) */}
                  <div className="w-full h-[1px] bg-[#E8C8D5]" role="separator" />

                  {/* Métrica row (#4075:473, EL-5473bef8) */}
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[11px] font-semibold uppercase text-[#8B3A5A]">
                      Métrica-chave
                    </span>
                    <div className="flex items-center gap-[12px]">
                      {card.keyMetricIcon && (
                        <img
                          src={card.keyMetricIcon}
                          alt=""
                          aria-hidden="true"
                          className="w-[32px] h-[32px] object-contain rounded-[6px] shrink-0"
                        />
                      )}
                      <span className="text-[26px] sm:text-[32px] font-medium leading-[1.1] text-[#511B35]">
                        {card.keyMetricValue}
                      </span>
                    </div>
                    <span className="text-[12px] font-normal leading-[1.5] text-[#8B3A5A]">
                      {card.keyMetricSubtitle}
                    </span>
                  </div>
                </div>

                {/* Explore action (#4075:477, EL-4c57b848) */}
                <div>
                  <Link
                    to={card.ctaHref}
                    className="inline-flex items-center px-[18px] py-[10px] gap-[10px] rounded-[6px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[14px] font-semibold transition-colors"
                  >
                    <span>{card.ctaLabel}</span>
                    <ArrowUpRight className="w-[16px] h-[16px] stroke-[2]" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Carousel controls (#4075:195) */}
        <div className="px-5 sm:px-10 lg:px-[80px] pt-4 lg:pt-[32px] pb-12 lg:pb-[64px] flex items-center justify-between">
          {/* Dot indicators (#4075:196) */}
          <div className="flex items-center gap-[8px]" role="tablist" aria-label="Indicadores de projetos">
            {filteredCards.map((card, idx) => {
              const isActive = idx === activeSlide
              return (
                <button
                  key={card.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Mostrar cartão ${card.title}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'w-[8px] h-[8px] bg-[#511B35]'
                      : 'w-[6px] h-[6px] bg-[#D4A8BC] hover:bg-[#8B3A5A]'
                  }`}
                />
              )
            })}
          </div>

          {/* Nav arrows (#4075:200) */}
          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              onClick={() => scrollToSlide(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label="Projeto anterior"
              className="w-[44px] h-[44px] rounded-[22px] bg-[#FFFFFF] border border-[#C9A0B4] flex items-center justify-center text-[#511B35] hover:bg-[#F7EEF2] disabled:opacity-45 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-[16px] h-[16px]" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSlide(activeSlide + 1)}
              disabled={activeSlide >= filteredCards.length - 1}
              aria-label="Próximo projeto"
              className="w-[44px] h-[44px] rounded-[22px] bg-[#511B35] border border-[#511B35] flex items-center justify-center text-[#FFFFFF] hover:bg-[#3A1226] disabled:opacity-45 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-[16px] h-[16px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
