import { Link } from 'react-router-dom'
import type { FjsHeroContent } from '../../types/fjs'
import { FJS_HERO_CONTENT } from '../../data/fjsData'

export interface FjsHeroProps {
  content?: FjsHeroContent
}

export function FjsHero({ content = FJS_HERO_CONTENT }: FjsHeroProps) {
  return (
    <section
      aria-labelledby="fjs-hero-heading"
      className="w-full bg-[#FFFFFF] flex flex-col"
    >
      {/* Hero Image Band (#4109:46) */}
      <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px] overflow-hidden">
        {/* Background Photo (#4109:46 / #4109:48) */}
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Vertical Burgundy Overlay (#4109:47) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(81, 27, 53, 0.82) 0%, rgba(81, 27, 53, 0.55) 60%, rgba(81, 27, 53, 0.2) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Horizontal Burgundy Overlay (#4109:49) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(81, 27, 53, 0.8) 0%, rgba(81, 27, 53, 0.72) 60%, rgba(81, 27, 53, 0.15) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Block (#4109:50, layout_876642ce) */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[72px] flex flex-col gap-[20px] lg:gap-[24px]">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-[13px] font-normal text-[#62595E]">
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
              FJS Inteligente
            </li>
          </ol>
        </nav>

        {/* Eyebrow (#4109:51) */}
        <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
          {content.eyebrow}
        </span>

        {/* Main Title (#4109:52) */}
        <h1
          id="fjs-hero-heading"
          className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.08] text-[#511B35] m-0"
        >
          {content.title}
        </h1>

        {/* Subtitle (#4109:53) */}
        <p className="text-[20px] sm:text-[24px] font-medium leading-[1.2] text-[#511B35] m-0">
          {content.subtitle}
        </p>

        {/* Description (#4109:54) */}
        <p className="text-[16px] font-normal leading-[1.55] text-[#62595E] m-0">
          {content.description}
        </p>
      </div>
    </section>
  )
}

