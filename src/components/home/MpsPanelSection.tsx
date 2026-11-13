import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Clock } from 'lucide-react'
import type {
  MpBottomEconomyCard,
  MpFilterOption,
  MpTopIndicatorCard,
  TaskRelationColumn,
} from '../../types/home'
import {
  MP_BOTTOM_CARDS,
  MP_FILTERS,
  MP_TOP_CARDS,
  TASK_RELATION_COLUMNS,
} from '../../data/homeData'

export interface MpsPanelSectionProps {
  filters?: MpFilterOption[]
  topCards?: MpTopIndicatorCard[]
  bottomCards?: MpBottomEconomyCard[]
  relationColumns?: TaskRelationColumn[]
}

export function MpsPanelSection({
  filters = MP_FILTERS,
  topCards = MP_TOP_CARDS,
  bottomCards = MP_BOTTOM_CARDS,
  relationColumns = TASK_RELATION_COLUMNS,
}: MpsPanelSectionProps) {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({
    projeto: 'Todos',
    setor: 'Todos',
    periodo: 'Todos',
  })

  const cycleFilter = (filter: MpFilterOption) => {
    const currentVal = selectedValues[filter.id] ?? filter.value
    const currentIndex = filter.options.indexOf(currentVal)
    const nextIndex = (currentIndex + 1) % filter.options.length
    setSelectedValues((prev) => ({
      ...prev,
      [filter.id]: filter.options[nextIndex],
    }))
  }

  const activeProject = selectedValues.projeto ?? 'Todos'

  return (
    <section id="painel-mps" className="w-full bg-[#7A1845]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[64px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Cabeçalho painel (#2021:191) */}
        <div className="flex flex-col gap-[8px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#F5C6D8]">
            Painel de MPs
          </span>
          <div className="flex items-end justify-between">
            <h2 className="max-w-[700px] text-[26px] sm:text-[32px] font-semibold leading-[1.2] text-[#FFFFFF] m-0">
              Tempo e produtividade por projeto
            </h2>
          </div>
        </div>

        {/* Filtros visuais (#2021:196) */}
        <div className="flex flex-wrap items-center gap-[12px]">
          <span className="text-[13px] font-semibold text-[#F5C6D8]">Filtrar por:</span>
          {filters.map((filter) => {
            const val = selectedValues[filter.id] ?? filter.value
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => cycleFilter(filter)}
                className="inline-flex items-center px-[14px] py-[8px] gap-[8px] rounded-[20px] bg-white/15 hover:bg-white/25 border border-white/35 text-[13px] font-medium text-[#FFFFFF] transition-colors cursor-pointer"
                aria-label={`Filtrar por ${filter.label}: atual ${val}`}
              >
                <span>
                  {filter.label}: {val}
                </span>
                <ChevronDown className="w-[12px] h-[12px]" aria-hidden="true" />
              </button>
            )
          })}
        </div>

        {/* Linha principal (#2021:208, EL-4848f3c9) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-[24px]">
          {/* Timer visual (#2021:209) */}
          <Link
            to="/projetos/feira-de-saude#mps"
            className="w-full lg:w-[300px] shrink-0 p-[28px] rounded-[16px] bg-[#FFFFFF] hover:bg-[#FDF8FA] border border-[#F0D1DE] flex flex-col gap-[20px] transition-colors"
          >
            {/* Clock face (#2021:210) */}
            <div className="w-[64px] h-[64px] rounded-[32px] bg-[#F7EDF2] flex items-center justify-center text-[#7A1845]">
              <Clock className="w-8 h-8 stroke-[1.75]" aria-hidden="true" />
            </div>

            {/* Timer header (#2021:212) */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-[11px] font-semibold uppercase text-[#7A1845]">
                Ganho de produtividade
              </span>
              <span className="text-[13px] font-normal leading-[1.5] text-[#7A1845]">
                Por projeto e unidade
              </span>
            </div>

            {/* Timer value (#2021:215) */}
            <div className="flex flex-col gap-[6px]">
              <span className="text-[28px] font-semibold leading-[1.15] text-[#7A1845]">
                Feira: -43%
              </span>
            </div>

            {/* Timer subtitle (#2021:219) */}
            <p className="text-[13px] font-normal leading-[1.5] text-[#7A1845] m-0">
              Tempo de preenchimento por paciente.
            </p>
          </Link>

          {/* Cartões indicadores (#2021:220) */}
          <div className="flex-1 flex flex-col gap-[16px]">
            {/* Antes depois row (#2021:221) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {topCards.map((card) => {
                const isDimmed =
                  activeProject !== 'Todos' && activeProject !== card.filterProject
                return (
                  <Link
                    key={card.id}
                    to={card.href ?? '/projetos'}
                    style={{ borderColor: card.borderColor }}
                    className={`p-[20px] rounded-[14px] bg-[#FFFFFF] hover:bg-[#FDF8FA] border flex flex-col gap-[10px] transition-all ${
                      isDimmed ? 'opacity-50' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <span
                        className="w-[8px] h-[8px] rounded-[4px] shrink-0"
                        style={{ backgroundColor: card.dotColor }}
                        aria-hidden="true"
                      />
                      <span
                        className="text-[11px] font-semibold uppercase"
                        style={{ color: card.labelColor }}
                      >
                        {card.project}
                      </span>
                    </div>
                    <span className="text-[28px] font-semibold leading-[1.1] text-[#511B35]">
                      {card.value}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Economia row (#2021:234) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {bottomCards.map((card) => {
                const isDimmed =
                  activeProject !== 'Todos' && activeProject !== card.filterProject
                return (
                  <Link
                    key={card.id}
                    to={card.href ?? '/projetos'}
                    className={`p-[20px] rounded-[14px] bg-[#FFFFFF] hover:bg-[#FDF8FA] border border-[#E4D9DE] flex flex-col gap-[10px] transition-all ${
                      isDimmed ? 'opacity-50' : 'opacity-100'
                    }`}
                  >
                    <span
                      className="text-[11px] font-semibold uppercase"
                      style={{ color: card.labelColor }}
                    >
                      {card.project}
                    </span>
                    <span className="text-[22px] font-semibold leading-[1.1] text-[#511B35]">
                      {card.value}
                    </span>
                    <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                      {card.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Task relation panel (#2021:243) */}
        <div className="p-[24px] rounded-[14px] bg-[#FFFFFF] border border-white/20 flex flex-col gap-[16px]">
          <span className="text-[11px] font-semibold uppercase text-[#7A1845]">
            Relação: Legado · Pesquisa · ESG
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {relationColumns.map((col) => (
              <Link
                key={col.id}
                to={col.href ?? '/#sobre'}
                className="flex flex-col gap-[6px] group"
              >
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: col.labelColor }}
                >
                  {col.label}
                </span>
                <span className="text-[20px] font-semibold text-[#511B35] group-hover:text-[#B84469] transition-colors">
                  {col.value}
                </span>
                <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                  {col.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
