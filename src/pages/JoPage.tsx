import { Footer, Header } from '../components/home'
import {
  JoContinueExploring,
  JoContextSection,
  JoEvolutionSection,
  JoHero,
  JoMetricsSection,
} from '../components/jo'

export function JoPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#322D30] flex flex-col selection:bg-[#B84469] selection:text-white">
      {/* Top Institutional Navigation (#20:6534) */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Banner (#20:6545 / #2015:19) */}
        <JoHero />

        {/* 2. Context & Documented Solution Split Panel (#20:6553 / #2015:27) */}
        <div id="entregas" className="scroll-mt-[112px]">
          <JoContextSection />
        </div>

        {/* 3. Dashboard & Metrics + Weekly Usage Bar Chart (#20:6568) */}
        <div id="resultados" className="scroll-mt-[112px]">
          <div id="mps" className="scroll-mt-[112px]">
            <JoMetricsSection />
          </div>
        </div>

        {/* 4. Nova Jô Capabilities & Equipe — Jô (#20:6584) */}
        <div id="stakeholders" className="scroll-mt-[112px]">
          <JoEvolutionSection />
        </div>

        {/* 5. Continue Exploring Banner (#20:6606 / #2015:122) */}
        <JoContinueExploring />
      </main>

      {/* 6. Institutional Footer (#20:6614) */}
      <Footer variant="catalog" />
    </div>
  )
}
