export function JoContextSection() {
  return (
    <section
      aria-labelledby="jo-context-heading"
      className="w-full bg-[#511B35]"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:h-[480px]">
        {/* Left Photo Column (#2015:28) */}
        <div className="w-full lg:w-1/2 h-[320px] sm:h-[400px] lg:h-[480px] shrink-0 overflow-hidden">
          <img
            src="/images/exp-cliente-2.png"
            alt="Colaboradores em dinâmica institucional do projeto Jô"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Burgundy Panel (#2015:29) */}
        <div className="w-full lg:w-1/2 bg-[#511B35] p-8 sm:p-12 lg:p-[64px] flex flex-col justify-center gap-[28px] lg:gap-[32px]">
          {/* Contexto e objetivo (#2015:30) */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
              Contexto e objetivo
            </span>
            <h2
              id="jo-context-heading"
              className="text-[26px] sm:text-[32px] font-medium leading-[1.15] text-[#FFFFFF] m-0"
            >
              Acesso rápido à informação institucional e dúvidas frequentes.
            </h2>
            <p className="text-[16px] font-normal leading-[1.55] text-white/75 m-0">
              Jô centraliza respostas em segundos, reduzindo o tempo de busca e aproximando
              colaboradores das informações de que precisam no dia a dia.
            </p>
          </div>

          {/* Horizontal Divider (#2015:34) */}
          <div className="w-full h-[1px] bg-white/20" role="separator" />

          {/* Solução documentada (#2015:35) */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#E8A0B8]">
              Solução documentada
            </span>
            <h3 className="text-[22px] sm:text-[24px] font-medium leading-[1.15] text-[#FFFFFF] m-0">
              Consulta com inteligência artificial.
            </h3>
            <p className="text-[15px] font-normal leading-[1.55] text-white/75 m-0">
              Assistente com IA para consulta de documentos institucionais. Registra perguntas,
              documentos e tempo de resposta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

