import { Header, Footer } from '../components/home'
import { CatalogHero, ProjectGrid } from '../components/catalog'

export function CatalogPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#322D30] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <CatalogHero />
        <ProjectGrid />
      </main>
      <Footer variant="catalog" />
    </div>
  )
}

