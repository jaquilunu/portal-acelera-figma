import {
  AboutSection,
  CultureSection,
  FeaturedProjects,
  Footer,
  Header,
  Hero,
  ImpactSection,
  InvitationBanner,
  MagazineSection,
  MilestonesSection,
  MpsPanelSection,
  TeamSection,
} from '../components/home'

export function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#322D30] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <AboutSection />
        <ImpactSection />
        <FeaturedProjects />
        <MpsPanelSection />
        <CultureSection />
        <MagazineSection />
        <TeamSection />
        <InvitationBanner />
        <MilestonesSection />
      </main>
      <Footer variant="home" />
    </div>
  )
}
