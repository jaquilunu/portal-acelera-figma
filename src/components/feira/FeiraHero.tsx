import { Link } from 'react-router-dom'
import type { FeiraHeroContent } from '../../types/feira'
import { FEIRA_HERO_CONTENT } from '../../data/feiraData'

export interface FeiraHeroProps {
  content?: FeiraHeroContent
}

export function FeiraHero({ content = FEIRA_HERO_CONTENT }: FeiraHeroProps) {
  return (
    <section
      aria-labelledby="feira-hero-heading"
      className="w-full bg-[#F7EEF2]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col gap-6 lg:gap-[32px]">
        {/* Breadcrumb (#20:6732) */}
        <nav
          aria-label="Breadcrumb"
          className="text-[14px] font-normal leading-[1.55] text-[#62595E]"
        >
          <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
            <li>
              <Link
                to="/"
                className="text-[#62595E] hover:text-[#B84469] underline-offset-4 hover:underline transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                to="/projetos"
                className="text-[#62595E] hover:text-[#B84469] underline-offset-4 hover:underline transition-colors"
              >
                Projetos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#511B35] font-medium">
              Informatização da Feira de Saúde
            </li>
          </ol>
        </nav>

        {/* Eyebrow (#20:6733) */}
        <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
          {content.eyebrow}
        </span>

        {/* Hero Row (#20:6734) */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-[80px]">
          {/* Title Column (#20:6735) */}
          <div className="w-full lg:w-[690px] shrink-0">
            <h1
              id="feira-hero-heading"
              className="text-[36px] sm:text-[48px] lg:text-[64px] font-medium leading-[1.15] text-[#511B35] m-0"
            >
              {content.title}
            </h1>
          </div>

          {/* Summary Column (#20:6737) */}
          <div className="flex-1">
            <p className="text-[18px] lg:text-[20px] font-normal leading-[1.55] text-[#62595E] m-0">
              {content.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

