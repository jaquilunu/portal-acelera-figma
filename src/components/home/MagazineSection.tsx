import { Link } from 'react-router-dom'
import type { MagazineThemeItem } from '../../types/home'
import { MAGAZINE_THEMES_LEFT, MAGAZINE_THEMES_RIGHT } from '../../data/homeData'

export interface MagazineSectionProps {
  leftThemes?: MagazineThemeItem[]
  rightThemes?: MagazineThemeItem[]
}

export function MagazineSection({
  leftThemes = MAGAZINE_THEMES_LEFT,
  rightThemes = MAGAZINE_THEMES_RIGHT,
}: MagazineSectionProps) {
  return (
    <section id="comunicacao" className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-8 lg:gap-[48px]">
        {/* Section Eyebrow (#20:6324) */}
        <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
          Comunicação e conhecimento
        </span>

        {/* Magazine editorial spread (#20:6325, EL-4c64e5be) */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[64px]">
          {/* Documentary media (#20:6326) */}
          <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-[12px]">
            <img
              src="/images/revista-acelera-capa.png"
              alt="Capa da Revista Acelera Comunica — 10ª edição"
              className="w-full h-[460px] sm:h-[580px] lg:h-[680px] object-cover rounded-[20px]"
            />
            <span className="text-[12px] font-normal leading-[1.5] text-[#62595E]">
              Arte da capa recebida como material institucional.
            </span>
          </div>

          {/* Magazine presentation (#20:6329, EL-6e1f97e9) */}
          <div className="flex-1 flex flex-col gap-[28px]">
            {/* mag title block (#2023:9) */}
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-medium leading-[1.1] text-[#511B35] m-0">
                Revista
                <br />
                Acelera Comunica
              </h2>
              <span className="text-[14px] font-semibold leading-[1.4] text-[#1B5E5A]">
                10ª edição
              </span>
            </div>

            {/* Lead paragraph (#20:6332) */}
            <p className="text-[20px] sm:text-[24px] font-normal leading-[1.5] text-[#511B35] m-0">
              Pesquisa, transformação digital e sustentabilidade nas iniciativas do Programa Acelera.
            </p>

            {/* Secondary paragraph (#20:6333) */}
            <p className="text-[16px] font-normal leading-[1.55] text-[#62595E] m-0">
              Conheça as iniciativas que conectam pessoas, tecnologia e processos na FJS.
            </p>

            {/* Section divider (#20:6334, EL-26cca2ff) */}
            <div className="w-full h-[1px] bg-[#E4D9DE]" role="separator" />

            {/* Editorial themes (#20:6335) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
              {/* Left topic column (#20:6336) */}
              <div className="flex flex-col gap-[20px]">
                {leftThemes.map((theme) => (
                  <Link
                    key={theme.id}
                    to={theme.href ?? '/projetos'}
                    className="flex flex-col gap-[4px] group"
                  >
                    <h3 className="text-[15px] font-semibold leading-[1.4] text-[#322D30] group-hover:text-[#B84469] transition-colors m-0">
                      {theme.title}
                    </h3>
                    <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                      {theme.description}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Right topic column (#20:6346) */}
              <div className="flex flex-col gap-[20px]">
                {rightThemes.map((theme) => (
                  <Link
                    key={theme.id}
                    to={theme.href ?? '/projetos'}
                    className="flex flex-col gap-[4px] group"
                  >
                    <h3 className="text-[15px] font-semibold leading-[1.4] text-[#322D30] group-hover:text-[#B84469] transition-colors m-0">
                      {theme.title}
                    </h3>
                    <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                      {theme.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
