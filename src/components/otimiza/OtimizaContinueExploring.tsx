import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function OtimizaContinueExploring() {
  return (
    <section
      aria-labelledby="otimiza-continue-heading"
      className="w-full bg-[#F7EEF2]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Next Reading (#20:6860) */}
        <div className="max-w-[760px] flex flex-col gap-[12px]">
          <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Continue explorando
          </span>
          <h2
            id="otimiza-continue-heading"
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            <Link
              to="/projetos#proj-05-ctrl-plus"
              className="hover:text-[#B84469] transition-colors"
            >
              Ctrl+ - Controladoria
            </Link>
          </h2>
        </div>

        {/* Explore Action (#20:6863) */}
        <Link
          to="/projetos#proj-05-ctrl-plus"
          className="inline-flex items-center h-[50px] gap-[20px] rounded-[6px] text-[#B84469] hover:text-[#a1385a] text-[15px] font-semibold transition-colors shrink-0"
        >
          <span>Ver no catálogo</span>
          <ArrowRight className="w-[22px] h-[22px] stroke-[2]" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
