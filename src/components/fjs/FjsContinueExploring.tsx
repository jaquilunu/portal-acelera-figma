import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function FjsContinueExploring() {
  return (
    <section
      aria-labelledby="fjs-continue-heading"
      className="relative w-full min-h-[280px] lg:h-[360px] bg-[#511B35] overflow-hidden flex items-center"
    >
      {/* Background Photo (#4109:135, fills=fill_921d462b) */}
      <img
        src="/images/hero-slide-01.png"
        alt="Equipe do Programa Acelera reunida na Fundação José Silveira"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Burgundy Gradient Overlay (#4109:136) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(81, 27, 53, 0.92) 0%, rgba(81, 27, 53, 0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* CTA Content Row (#4109:137, template=EL-bb582553) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 lg:py-[64px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Next Reading Copy (#4109:138) */}
        <div className="max-w-[720px] flex flex-col gap-[16px]">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
            Continue explorando
          </span>
          <h2
            id="fjs-continue-heading"
            className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.15] text-[#FFFFFF] m-0"
          >
            <Link
              to="/projetos/feira-de-saude"
              className="hover:text-[#E8A0B8] transition-colors underline-offset-4 hover:underline"
            >
              Informatização da Feira de Saúde — transformação digital com o PSC
            </Link>
          </h2>
        </div>

        {/* Explore Action Button (#4109:141) */}
        <Link
          to="/projetos"
          className="inline-flex items-center justify-center px-[28px] py-[16px] gap-[12px] rounded-[8px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors shrink-0"
        >
          <span>Voltar ao catálogo</span>
          <ArrowRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

