import { Footer, Header } from '../components/home'
import {
  FeiraContextSection,
  FeiraContinueExploring,
  FeiraEventsAndTeamSection,
  FeiraHero,
  FeiraPaperlessSection,
  FeiraResultsSection,
  FeiraScopeSection,
} from '../components/feira'

export function FeiraPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#322D30] flex flex-col selection:bg-[#B84469] selection:text-white">
      {/* 1. Institutional Navigation (#20:6720) */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Editorial Section (#20:6731) */}
        <FeiraHero />

        {/* 3. Contexto e Objetivo + Photo Band (#20:6739 & #2015:215) */}
        <FeiraContextSection />

        {/* 4. Escopo do Projeto — Solução Documentada (#20:6747) */}
        <div id="entregas" className="scroll-mt-[112px]">
          <FeiraScopeSection />
        </div>

        {/* 5. Resultados da Informatização (#20:6761) */}
        <div id="resultados" className="scroll-mt-[112px]">
          <FeiraResultsSection />
        </div>

        {/* 6. Sustentabilidade · Paperless (#4111:375) */}
        <div id="mps" className="scroll-mt-[112px]">
          <FeiraPaperlessSection />
        </div>

        {/* 7. Destaques e Equipe do Projeto (#4111:411) */}
        <div id="stakeholders" className="scroll-mt-[112px]">
          <FeiraEventsAndTeamSection />
        </div>

        {/* 8. Colaboração Institucional & Continue Explorando (#20:6790) */}
        <FeiraContinueExploring />
      </main>

      {/* 9. Institutional Footer (#20:6798) */}
      <Footer variant="catalog" />
    </div>
  )
}
