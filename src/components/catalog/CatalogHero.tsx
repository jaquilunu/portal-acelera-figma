import { Link } from 'react-router-dom'

export interface CatalogHeroProps {
  eyebrow?: string
  titleLine1?: string
  titleLine2?: string
  description?: string
  projectCountLabel?: string
}

export function CatalogHero({
  eyebrow = 'Inovação aplicada na Fundação José Silveira',
  titleLine1 = 'Soluções que',
  titleLine2 = 'transformam a FJS.',
  description = 'Pessoas, tecnologia e processos conectados à inovação institucional.',
  projectCountLabel = '5 projetos · origens institucionais',
}: CatalogHeroProps) {
  return (
    <section
      aria-label="Introdução ao catálogo de projetos"
      className="w-full bg-[#511B35]"
      style={{
        background:
          'linear-gradient(90deg, rgba(81, 27, 53, 1) 0%, rgba(164, 79, 124, 1) 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[72px] flex flex-col gap-[24px]">
        {/* Breadcrumb (#20:6415) */}
        <nav aria-label="Breadcrumb" className="text-[13px] font-normal leading-[1.55] text-[#F5E9EF]/70">
          <Link to="/" className="hover:text-[#FFFFFF] transition-colors">
            Home
          </Link>
          <span> / </span>
          <span aria-current="page">Projetos</span>
        </nav>

        {/* Eyebrow (#20:6416, style_e7ef65e8) */}
        <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
          {eyebrow}
        </span>

        {/* Catalog opening (#20:6417, EL-0490e7b5) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[80px]">
          {/* Title (#20:6418) */}
          <div className="w-full lg:w-[660px] shrink-0 flex flex-col">
            <h1 className="text-[38px] sm:text-[48px] lg:text-[60px] font-medium leading-[1.12] text-[#F7EEF2] m-0">
              {titleLine1}
              <br />
              {titleLine2}
            </h1>
          </div>

          {/* Description (#20:6420, EL-6cb81979) */}
          <div className="flex-1 flex flex-col gap-[20px]">
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-[#F5E9EF] m-0">
              {description}
            </p>
            <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#F5E9EF]">
              {projectCountLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

