import { Footer, Header } from '../components/home'
import {
  FjsBenefitsSection,
  FjsContinueExploring,
  FjsHero,
  FjsMetricsSection,
  FjsSensorDistributionSection,
  FjsTeamSection,
} from '../components/fjs'

export function FjsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#322D30] flex flex-col selection:bg-[#B84469] selection:text-white">
      {/* 1. Institutional Navigation (#20:6629) */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Image Band & Editorial Introduction (#4109:45) */}
        <FjsHero />

        {/* 3. Dashboard — Métricas do Projeto (#4109:55) */}
        <div id="resultados" className="scroll-mt-[112px]">
          <div id="mps" className="scroll-mt-[112px]">
            <FjsMetricsSection />
          </div>
        </div>

        {/* 4. Distribuição de Sensores por Local & Conversores (#4109:72) */}
        <FjsSensorDistributionSection />

        {/* 5. Benefícios — O que o projeto entrega (#4109:106) */}
        <div id="entregas" className="scroll-mt-[112px]">
          <FjsBenefitsSection />
        </div>

        {/* 6. Equipe — Responsáveis pelo projeto (#4109:123) */}
        <div id="stakeholders" className="scroll-mt-[112px]">
          <FjsTeamSection />
        </div>

        {/* 7. Continue Exploring Banner (#4109:134) */}
        <FjsContinueExploring />
      </main>

      {/* 8. Institutional Footer (#4109:146) */}
      <Footer variant="catalog" />
    </div>
  )
}
