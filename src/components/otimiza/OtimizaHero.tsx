import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import type { OtimizaHeroContent } from '../../types/otimiza'
import { OTIMIZA_HERO_CONTENT } from '../../data/otimizaData'

export interface OtimizaHeroProps {
  content?: OtimizaHeroContent
}

export function OtimizaHero({
  content = OTIMIZA_HERO_CONTENT,
}: OtimizaHeroProps) {
  return (
    <section
      aria-labelledby="otimiza-hero-heading"
      className="w-full flex flex-col"
    >
      {/* Hero Image Banner (#2015:292) */}
      <div className="relative w-full min-h-[380px] sm:min-h-[440px] lg:h-[507px] overflow-hidden flex flex-col justify-end">
        {/* Background Photo */}
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Plum Overlay (rgba(26, 10, 17, 0.52)) */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26, 10, 17, 0.52)' }}
          aria-hidden="true"
        />

        {/* Hero Copy (#2015:293) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] pt-16 pb-10 lg:pb-[56px] flex flex-col gap-[16px]">
          {/* Breadcrumb (#2015:294) */}
          <nav
            aria-label="Breadcrumb"
            className="text-[13px] font-normal leading-[1.5] text-[#F5E9EF]/75"
          >
            <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
              <li>
                <Link
                  to="/"
                  className="text-[#F5E9EF]/75 hover:text-[#FFFFFF] underline-offset-4 hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/projetos"
                  className="text-[#F5E9EF]/75 hover:text-[#FFFFFF] underline-offset-4 hover:underline transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#FFFFFF] font-medium">
                Otimiza
              </li>
            </ol>
          </nav>

          {/* Eyebrow (#2015:295) */}
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
            {content.eyebrow}
          </span>

          {/* Title (#2015:296) */}
          <h1
            id="otimiza-hero-heading"
            className="text-[36px] sm:text-[52px] lg:text-[72px] font-medium leading-[1.1] text-[#FFFFFF] m-0"
          >
            {content.title}
          </h1>

          {/* Description (#2015:297) */}
          <p className="w-full max-w-[680px] text-[17px] sm:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-[#F5E9EF] m-0">
            {content.description}
          </p>
        </div>
      </div>

      {/* Intro Stat Strip (#2015:298) */}
      <div
        className="w-full"
        style={{
          background:
            'linear-gradient(90deg, rgba(81, 27, 53, 1) 0%, rgba(184, 68, 105, 1) 100%)',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-7 lg:py-[28px] grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-4">
          {content.stats.map((stat, index) => (
            <Fragment key={stat.id}>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[32px] sm:text-[36px] lg:text-[42px] font-medium leading-[1.1] text-[#FFFFFF]">
                  {stat.value}
                </span>
                <span className="text-[14px] font-normal leading-[1.4] text-[#F5E9EF]">
                  {stat.label}
                </span>
              </div>
              {index < content.stats.length - 1 && (
                <div
                  className="hidden lg:block w-[1px] h-[48px] bg-[#FFFFFF]/25 shrink-0"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

