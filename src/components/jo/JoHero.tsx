import { Link } from 'react-router-dom'

export function JoHero() {
  return (
    <section
      aria-labelledby="jo-hero-heading"
      className="relative w-full min-h-[460px] lg:h-[560px] overflow-hidden flex items-end"
    >
      {/* Background Photo (#2015:20) */}
      <img
        src="/images/hero-slide-02.png"
        alt="Apresentação institucional da Jô Assistente Virtual na Fundação José Silveira"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay (#2015:21) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(81, 27, 53, 1) 0%, rgba(81, 27, 53, 0.72) 60%, rgba(81, 27, 53, 0.15) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hero Content (#2015:22) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col justify-end gap-[20px] lg:gap-[24px]">
        {/* Breadcrumb (#2015:23) */}
        <nav aria-label="Breadcrumb" className="text-[13px] font-normal text-[#FFFFFF]">
          <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
            <li>
              <Link
                to="/"
                className="text-[#FFFFFF]/90 hover:text-[#FFFFFF] underline-offset-4 hover:underline transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                to="/projetos"
                className="text-[#FFFFFF]/90 hover:text-[#FFFFFF] underline-offset-4 hover:underline transition-colors"
              >
                Projetos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#FFFFFF]">
              Jô — Assistente Virtual
            </li>
          </ol>
        </nav>

        {/* Eyebrow (#2015:24) */}
        <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
          Inteligência artificial · Informações institucionais
        </span>

        {/* Main Title (#2015:25) */}
        <h1
          id="jo-hero-heading"
          className="max-w-[720px] text-[40px] sm:text-[56px] lg:text-[72px] font-medium leading-[1.1] text-[#FFFFFF] m-0"
        >
          Jô: informação institucional em segundos.
        </h1>

        {/* Subtitle (#2015:26) */}
        <p className="max-w-[600px] text-[17px] sm:text-[20px] font-normal leading-[1.5] text-[#F5E9EF] m-0">
          Inteligência artificial para aproximar os colaboradores das respostas de que precisam.
        </p>
      </div>
    </section>
  )
}

