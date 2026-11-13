import type { FjsSensorLocation, FjsSensorTotalCard } from '../../types/fjs'
import {
  FJS_CONVERTERS_NOTE,
  FJS_SENSOR_LOCATIONS,
  FJS_SENSOR_TOTALS,
} from '../../data/fjsData'

export interface FjsSensorDistributionSectionProps {
  locations?: FjsSensorLocation[]
  totals?: FjsSensorTotalCard[]
  convertersNote?: string
}

export function FjsSensorDistributionSection({
  locations = FJS_SENSOR_LOCATIONS,
  totals = FJS_SENSOR_TOTALS,
  convertersNote = FJS_CONVERTERS_NOTE,
}: FjsSensorDistributionSectionProps) {
  return (
    <section
      id="sensores"
      aria-labelledby="fjs-sensors-heading"
      className="w-full bg-[#F7EEF2]"
    >
      {/* Sensor distribution (#4109:72, template=EL-a4af6eb1) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Section Header (#4109:73, template=EL-1519dabc) */}
        <div className="flex flex-col gap-[12px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Distribuição de sensores
          </span>
          <h2
            id="fjs-sensors-heading"
            className="text-[30px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            Sensores instalados por local
          </h2>
        </div>

        {/* Distribution List (#4109:76, template=EL-d8a3e5e9) */}
        <div
          role="list"
          aria-label="Quantidade de sensores instalados por local"
          className="flex flex-col gap-[16px]"
        >
          {locations.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[16px]"
            >
              <div className="flex items-center justify-between sm:w-[280px] sm:shrink-0">
                {/* Location Label (#4109:78 / #4109:83 / #4109:88 / #4109:93) */}
                <span className="text-[16px] font-semibold leading-[1.3] text-[#511B35]">
                  {item.location}
                </span>

                {/* Mobile Count */}
                <span className="sm:hidden text-[16px] font-semibold leading-[1.3] text-right text-[#511B35]">
                  {item.count}
                </span>
              </div>

              {/* Progress Bar Track (#4109:79 / #4109:84 / #4109:89 / #4109:94, template=EL-d640ba35) */}
              <div
                className="flex-1 h-[24px] rounded-[12px] bg-[#E4D9DE] overflow-hidden flex items-stretch"
                aria-hidden="true"
              >
                {/* Filled Bar (#4109:80 / #4109:85 / #4109:90 / #4109:95) */}
                <div
                  className="h-full rounded-[12px] bg-[#B84469] transition-all duration-500"
                  style={{
                    width: `${item.percentageWidth}%`,
                    maxWidth: `${item.barWidthPx}px`,
                  }}
                />
              </div>

              {/* Desktop Count (#4109:81 / #4109:86 / #4109:91 / #4109:96, layout_6cb16916) */}
              <span className="hidden sm:block w-[72px] shrink-0 text-[16px] font-semibold leading-[1.3] text-right text-[#511B35]">
                {item.count}
              </span>
            </div>
          ))}
        </div>

        {/* Totals Row (#4109:97, template=EL-94a17615) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
          {totals.map((total) => (
            <article
              key={total.id}
              className="p-[20px] rounded-[14px] bg-[#FFFFFF] border border-[#E4D9DE] flex flex-col gap-[6px]"
            >
              {/* Eyebrow (#4109:99 / #4109:103) */}
              <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
                {total.eyebrow}
              </span>

              {/* Total Value (#4109:100 / #4109:104) */}
              <span className="text-[28px] font-semibold leading-[1.2] text-[#511B35]">
                {total.value}
              </span>

              {/* Subtitle (#4109:101 / #4109:105) */}
              <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                {total.description}
              </p>
            </article>
          ))}
        </div>

        {/* Converters Footnote (#4111:505) */}
        <p className="text-[15px] font-normal text-[#2A7A5F] m-0">
          {convertersNote}
        </p>

        {/* Registros Reais das Instalações em Campo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <figure className="m-0 rounded-2xl overflow-hidden shadow-sm border border-[#E8C8D5] bg-white">
            <img
              src="/images/fjs_inteligente_hemato.jpg"
              alt="Instalação de sensor IoT no Laboratório de Hematologia"
              className="w-full h-[220px] sm:h-[260px] object-cover"
            />
            <figcaption className="p-3 text-[12px] text-[#62595E] font-medium">
              Sensor ativo e conversor instalado no Laboratório de Hematologia
            </figcaption>
          </figure>
          <figure className="m-0 rounded-2xl overflow-hidden shadow-sm border border-[#E8C8D5] bg-white">
            <img
              src="/images/fjs_inteligente_nutri.jpg"
              alt="Instalação de sensor IoT na Nutrição"
              className="w-full h-[220px] sm:h-[260px] object-cover"
            />
            <figcaption className="p-3 text-[12px] text-[#62595E] font-medium">
              Sensor e conversor instalados na Nutrição hospitalar
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

