import { JO_CAPABILITIES, JO_TEAM_MEMBERS } from '../../data/joData'

export function JoEvolutionSection() {
  return (
    <section aria-labelledby="jo-evolution-heading" className="w-full">
      {/* Part A: Evolution Band (#2015:79) */}
      <div className="w-full bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
          {/* Left Capabilities Column (#2015:80) */}
          <div className="w-full lg:w-[560px] shrink-0 px-5 sm:px-10 lg:pl-[80px] lg:pr-[64px] py-14 lg:py-[64px] flex flex-col justify-center gap-[32px]">
            {/* Header (#2015:81) */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
                Nova Jô
              </span>
              <h2
                id="jo-evolution-heading"
                className="text-[32px] sm:text-[40px] font-medium leading-[1.15] text-[#511B35] m-0"
              >
                Capacidades implementadas.
              </h2>
              <p className="text-[14px] font-normal leading-[1.55] text-[#62595E] m-0">
                Funcionalidades consolidadas da nova versão da assistente.
              </p>
            </div>

            {/* Capabilities List (#2015:85) */}
            <div className="flex flex-col">
              {JO_CAPABILITIES.map((capability) => (
                <div
                  key={capability.id}
                  className="py-[20px] border-t border-[#E4D9DE] flex flex-col gap-[4px]"
                >
                  <h3 className="text-[20px] font-medium leading-[1.15] text-[#511B35] m-0">
                    {capability.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[1.55] text-[#62595E] m-0">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Contextual Photo (#2015:98) */}
          <div className="w-full lg:flex-1 h-[360px] sm:h-[480px] lg:h-[680px] overflow-hidden">
            <img
              src="/images/meeting-photo-2.png"
              alt="Encontro de sprint com a equipe responsável pela evolução da Nova Jô"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Part B: Equipe — Jô (#76:711) */}
      <div className="w-full bg-[#FAF2F5]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[64px] flex flex-col gap-[24px]">
          <h2 className="text-[28px] sm:text-[32px] font-medium leading-[1.35] text-[#511B35] m-0">
            Equipe do projeto
          </h2>

          {/* 2 Rows of 3 Cards (#76:715 & #76:725) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {JO_TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-[20px] rounded-[12px] bg-[#FFFFFF] border border-[#E3D9DE] flex flex-col gap-[4px]"
              >
                <span className="text-[19px] font-medium leading-[1.35] text-[#511B35]">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

