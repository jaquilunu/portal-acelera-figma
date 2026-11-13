import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function JoContinueExploring() {
  return (
    <section
      aria-labelledby="jo-continue-heading"
      className="relative w-full min-h-[240px] lg:h-[280px] overflow-hidden flex items-center"
    >
      {/* Background Photo (#2015:123) */}
      <img
        src="/images/hero-slide-03.png"
        alt="Reunião técnica do projeto FJS Inteligente"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Rose Gradient Overlay (#2015:124) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(247, 238, 242, 0.97) 0%, rgba(247, 238, 242, 0.92) 60%, rgba(247, 238, 242, 0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content Row (#2015:125) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 lg:py-[56px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Copy (#20:6608) */}
        <div className="max-w-[760px] flex flex-col gap-[12px]">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Continue explorando
          </span>
          <h2
            id="jo-continue-heading"
            className="text-[26px] sm:text-[32px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            <Link
              to="/projetos/fjs-inteligente"
              className="hover:text-[#B84469] transition-colors"
            >
              FJS Inteligente — monitoramento para conservação de produtos
            </Link>
          </h2>
        </div>

        {/* Right CTA Button (#20:6611) */}
        <Link
          to="/projetos"
          className="inline-flex items-center justify-center px-[24px] py-[14px] gap-[12px] rounded-[8px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors shrink-0"
        >
          <span>Voltar ao catálogo</span>
          <ArrowRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

