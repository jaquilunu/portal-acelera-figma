import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function FeiraContinueExploring() {
  return (
    <section
      aria-labelledby="feira-continue-heading"
      className="w-full flex flex-col"
    >
      {/* Institutional Banner (#2015:280) */}
      <div className="relative w-full min-h-[260px] lg:h-[300px] overflow-hidden flex items-center justify-center">
        {/* Background Photo (#2015:281) */}
        <img
          src="/images/hero-slide-03.png"
          alt="Equipe do Programa Acelera reunida na Fundação José Silveira"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Burgundy Overlay (#2015:282) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(81, 27, 53, 0.72)',
          }}
          aria-hidden="true"
        />

        {/* Centered Banner Content (#2015:283) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-10 flex flex-col items-center text-center gap-[20px]">
          <span className="text-[13px] font-semibold leading-[1.4] uppercase text-[#F5E9EF]">
            Colaboração institucional · Acelera FJS
          </span>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.2] text-[#FFFFFF] m-0 max-w-[760px]">
            Conheça os projetos que transformam a saúde na FJS.
          </h2>
          <Link
            to="/projetos"
            className="inline-flex items-center justify-center px-[28px] py-[14px] gap-[10px] rounded-[8px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors"
          >
            <span>Conheça a solução</span>
            <ArrowRight className="w-[18px] h-[18px] stroke-[2]" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Continue Exploring Band (#2015:289) */}
      <div className="w-full bg-[#F7EEF2]">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Next Reading Copy (#20:6792) */}
          <div className="max-w-[760px] flex flex-col gap-[12px]">
            <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
              Continue explorando
            </span>
            <h3
              id="feira-continue-heading"
              className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.15] text-[#511B35] m-0"
            >
              <Link
                to="/projetos/otimiza"
                className="hover:text-[#B84469] transition-colors underline-offset-4 hover:underline"
              >
                Otimiza — transformação digital dos processos internos
              </Link>
            </h3>
          </div>

          {/* Back to Catalog Button (#20:6795) */}
          <Link
            to="/projetos"
            className="inline-flex items-center justify-center px-[24px] py-[14px] gap-[12px] rounded-[6px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors shrink-0"
          >
            <span>Voltar ao catálogo</span>
            <ArrowRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

