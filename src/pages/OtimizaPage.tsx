import { Footer, Header } from '../components/home'
import {
  OtimizaContextSection,
  OtimizaContinueExploring,
  OtimizaCultureSection,
  OtimizaHero,
  OtimizaReachSection,
  OtimizaTeamSection,
  OtimizaTravelPaperlessSection,
} from '../components/otimiza'

export function OtimizaPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#322D30] flex flex-col selection:bg-[#B84469] selection:text-white">
      {/* 1. Institutional Navigation (#20:6813) */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 2. Project Introduction — Hero Banner & Stat Strip (#20:6824) */}
        <OtimizaHero />

        {/* 3. Documented Implementation — Contexto e Alcance (#20:6832) */}
        <div id="entregas" className="scroll-mt-[112px]">
          <OtimizaContextSection />
        </div>

        {/* 4. Implementation Reach — 30.084 Folhas Economizadas (#20:6840) */}
        <div id="resultados" className="scroll-mt-[112px]">
          <OtimizaReachSection />
        </div>

        {/* 5. Environmental Culture & Documentation (#20:6847 -> #2015:328) */}
        <OtimizaCultureSection />

        {/* 6. Fluig · Solicitações de Viagem Paperless (#4111:430) */}
        <div id="mps" className="scroll-mt-[112px]">
          <OtimizaTravelPaperlessSection />
        </div>

        {/* 7. Equipe — Otimiza (#4111:449) */}
        <div id="stakeholders" className="scroll-mt-[112px]">
          <OtimizaTeamSection />
        </div>

        {/* 8. Continue Explorando (#20:6858) */}
        <OtimizaContinueExploring />
      </main>

      {/* 9. Institutional Footer (#20:6866) */}
      <Footer variant="catalog" />
    </div>
  )
}
