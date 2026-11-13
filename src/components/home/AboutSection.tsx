import type { PillarItem, WorkingJourneyStep } from '../../types/home'
import { ABOUT_PILLARS, WORKING_JOURNEY_STEPS } from '../../data/homeData'

export interface AboutSectionProps {
  pillars?: PillarItem[]
  journeySteps?: WorkingJourneyStep[]
}

export function AboutSection({
  pillars = ABOUT_PILLARS,
  journeySteps = WORKING_JOURNEY_STEPS,
}: AboutSectionProps) {
  return (
    <section id="sobre" className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-10 lg:gap-[56px]">
        {/* Section divider (#20:6181, EL-26cca2ff) */}
        <div className="w-full h-[1px] bg-[#E4D9DE]" role="separator" />

        {/* About editorial columns (#20:6182, EL-4c64e5be) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-[64px]">
          {/* Left column: Purpose (#20:6183) */}
          <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-[24px]">
            {/* Eyebrow (#20:6184, style_793593a8) */}
            <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
              89 anos de legado e inovação
            </span>

            {/* Heading (#20:6185, style_ddbe2c8c) */}
            <h2 className="text-[30px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.15] text-[#511B35] m-0">
              Legado que
              <br />
              orienta a inovação.
            </h2>

            {/* Description (#20:6187, style_e5657121) */}
            <p className="text-[16px] lg:text-[17px] font-normal leading-[1.55] text-[#322D30] m-0">
              Trajetória institucional, pesquisa aplicada e práticas sustentáveis conectando as unidades da Fundação José Silveira.
            </p>

            {/* Pilares (#2020:8, EL-1519dabc) */}
            <ul className="flex flex-col gap-[12px] m-0 p-0 list-none">
              {pillars.map((pillar) => (
                <li
                  key={pillar.id}
                  className="flex items-center gap-[12px] text-[15px] font-normal text-[#322D30]"
                >
                  <span
                    className="w-[8px] h-[8px] rounded-[4px] bg-[#2A7A5F] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{pillar.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Photo grid (#20:6186) */}
          <div className="flex-1 flex flex-col gap-[12px]">
            {/* Meeting photo 1 (#2020:18) */}
            <img
              src="/images/hero-slide-03.png"
              alt="Reunião da equipe institucional Acelera"
              className="w-full h-[220px] sm:h-[280px] object-cover rounded-t-[16px] rounded-b-[4px]"
            />

            {/* Photo row 2 (#2020:19) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
              {/* Meeting photo 2 (#2020:20) */}
              <img
                src="/images/meeting-photo-2.png"
                alt="Encontro de alinhamento de sprint"
                className="w-full h-[180px] object-cover rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[16px]"
              />

              {/* Client experience photo (#2020:21) */}
              <img
                src="/images/leila-sprint.jpg"
                alt="Apresentação da Sprint de experiência do cliente"
                className="w-full h-[180px] object-cover rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[16px]"
              />
            </div>

            {/* Caption (#2020:22, style_c09cd6d7) */}
            <p className="text-[12px] font-normal leading-[1.5] text-[#9C8A91] m-0">
              Reuniões da Sprint de experiência do cliente — registros documentais recebidos.
            </p>
          </div>
        </div>
      </div>

      {/* Working Journey (#20:6189) */}
      <div className="w-full bg-[#F7EEF2]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[72px] flex flex-col gap-8 lg:gap-[48px]">
          <div className="flex flex-col gap-[12px]">
            <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
              Nosso percurso de trabalho
            </span>
            <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.15] text-[#511B35] m-0">
              Do problema real ao acompanhamento dos resultados.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[32px]">
            {journeySteps.map((step) => {
              const isTeal = step.accentColor === 'teal'
              return (
                <div
                  key={step.id}
                  className={`border-t-2 pt-[24px] flex flex-col gap-[12px] ${
                    isTeal ? 'border-[#2A7A5F]' : 'border-[#B84469]'
                  }`}
                >
                  <span
                    className={`text-[13px] font-semibold ${
                      isTeal ? 'text-[#2A7A5F]' : 'text-[#B84469]'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <h4 className="text-[22px] font-medium leading-[1.2] text-[#511B35] m-0">
                    {step.title}
                  </h4>
                  <p className="text-[15px] font-normal leading-[1.55] text-[#62595E] m-0">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
