import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { HeroSlide } from '../../types/home'
import { HERO_SLIDES } from '../../data/homeData'

export interface HeroProps {
  slides?: HeroSlide[]
  autoPlayIntervalMs?: number
}

export function Hero({
  slides = HERO_SLIDES,
  autoPlayIntervalMs = 6000,
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const totalSlides = slides.length

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return
    const timer = window.setInterval(handleNext, autoPlayIntervalMs)
    return () => window.clearInterval(timer)
  }, [isPaused, totalSlides, autoPlayIntervalMs, handleNext])

  const currentSlide = slides[activeIndex] ?? slides[0]
  const formattedTotal = String(totalSlides).padStart(2, '0')
  const isExternalPrimary = currentSlide.primaryCtaHref.startsWith('http')

  return (
    <section
      aria-label="Introdução institucional"
      className="w-full bg-[#FFFFFF]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto relative overflow-hidden min-h-[540px] lg:h-[580px] flex flex-col justify-between">
        {/* Background Slides Track */}
        {slides.map((slide, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center"
              />
              {/* Figma Light Overlay (#4075:357, EL-960f1f1c) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.72) 45%, rgba(255, 255, 255, 0.08) 78%)',
                }}
              />
            </div>
          )
        })}

        {/* Slide Inner Content (#4075:358, EL-1f9b0064) */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-[80px] pt-14 sm:pt-[80px] pb-20 lg:pb-[72px]">
          <div className="w-full max-w-[540px] flex flex-col gap-[24px]">
            {/* Eyebrow (#4075:360, style_793593a8) */}
            <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469] tracking-wide">
              {currentSlide.eyebrow}
            </span>

            {/* Title (#4075:361, style_35a24cbf) */}
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.1] text-[#511B35] m-0">
              {currentSlide.title}
            </h1>

            {/* Description (#4075:362, style_e5657121) */}
            <p className="max-w-[480px] text-[16px] lg:text-[17px] font-normal leading-[1.55] text-[#3A2530] m-0">
              {currentSlide.description}
            </p>

            {/* CTAs (#4075:363) */}
            <div className="flex flex-wrap items-center gap-[16px]">
              {/* Primary CTA (#4075:364, EL-ce5d1223) */}
              {isExternalPrimary ? (
                <a
                  href={currentSlide.primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[50px] px-[22px] gap-[12px] rounded-[25px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors duration-200"
                >
                  <span>{currentSlide.primaryCtaText}</span>
                  <ArrowUpRight className="w-[16px] h-[16px] stroke-[2.2]" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  to={currentSlide.primaryCtaHref}
                  className="inline-flex items-center justify-center h-[50px] px-[22px] gap-[12px] rounded-[25px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors duration-200"
                >
                  <span>{currentSlide.primaryCtaText}</span>
                  <ArrowUpRight className="w-[16px] h-[16px] stroke-[2.2]" aria-hidden="true" />
                </Link>
              )}

              {/* Secondary CTA (#4075:368, EL-3c9a24af) */}
              <Link
                to={currentSlide.secondaryCtaHref}
                className="inline-flex items-center justify-center h-[50px] px-[20px] gap-[10px] rounded-[25px] border-[1.5px] border-[#B84469] text-[#B84469] hover:bg-[#B84469]/10 bg-white/40 backdrop-blur-[2px] text-[15px] font-semibold transition-colors duration-200"
              >
                <span>{currentSlide.secondaryCtaText}</span>
                <ArrowUpRight className="w-[16px] h-[16px] stroke-[2.2]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Nav Bar (#4075:372, EL-2a93a07f) */}
        <div className="relative z-10 w-full h-[56px] px-5 sm:px-10 lg:px-[80px] flex items-center justify-between">
          {/* Controls (#4075:373) */}
          <div className="flex items-center gap-[16px]">
            {/* Arrow prev (#4075:374, EL-c498fc59) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Slide anterior"
              className="w-[40px] h-[40px] rounded-[20px] bg-white/60 hover:bg-white/90 border border-[#51192E]/20 flex items-center justify-center text-[#511B35] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-[18px] h-[18px]" aria-hidden="true" />
            </button>

            {/* Slide counter (#4075:377, EL-e802fee9) */}
            <div className="flex items-baseline gap-[4px]" aria-live="polite">
              <span className="text-[20px] font-bold leading-none text-[#511B35]">
                {currentSlide.slideNumber}
              </span>
              <span className="text-[13px] font-normal text-[#9C8A91]">/</span>
              <span className="text-[13px] font-normal text-[#9C8A91]">{formattedTotal}</span>
            </div>

            {/* Arrow next (#4075:381, EL-406e1fa8) */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo slide"
              className="w-[40px] h-[40px] rounded-[20px] bg-[#B84469] hover:bg-[#a1385a] flex items-center justify-center text-[#FFFFFF] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-[18px] h-[18px]" aria-hidden="true" />
            </button>
          </div>

          {/* Progress segments (#4075:384, EL-d269e0eb) */}
          <div className="flex items-center gap-[6px]" role="tablist" aria-label="Progresso dos slides">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ir para slide ${slide.slideNumber}: ${slide.label}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-10 sm:w-[64px] rounded-[2px] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'h-[4px] bg-[#B84469]'
                      : 'h-[3px] bg-[#511B35]/25 hover:bg-[#511B35]/45'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
