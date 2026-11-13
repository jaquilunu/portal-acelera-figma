import type { TeamPhotoItem } from '../../types/home'
import {
  TEAM_ADDITIONAL_PHOTOS,
  TEAM_MEETING_PHOTOS,
  TEAM_PRESENTATION_PHOTOS,
} from '../../data/homeData'

export interface TeamSectionProps {
  meetingPhotos?: TeamPhotoItem[]
  presentationPhotos?: TeamPhotoItem[]
  additionalPhotos?: TeamPhotoItem[]
}

export function TeamSection({
  meetingPhotos = TEAM_MEETING_PHOTOS,
  presentationPhotos = TEAM_PRESENTATION_PHOTOS,
  additionalPhotos = TEAM_ADDITIONAL_PHOTOS,
}: TeamSectionProps) {
  return (
    <section id="equipe" className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-10 lg:gap-[64px]">
        {/* People header (#2023:10) */}
        <div className="flex flex-col gap-[12px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Equipe e colaboração
          </span>
          <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 lg:gap-[80px]">
            <h2 className="w-full lg:w-[640px] shrink-0 text-[32px] sm:text-[38px] lg:text-[44px] font-medium leading-[1.1] text-[#511B35] m-0">
              Pessoas que fazem o Acelera acontecer.
            </h2>
            <p className="flex-1 text-[17px] lg:text-[18px] font-normal leading-[1.55] text-[#62595E] m-0">
              Pessoas e áreas conectadas pela inovação.
            </p>
          </div>
        </div>

        {/* Hero collective photo (#2023:12) */}
        <figure className="m-0 flex flex-col gap-[12px]">
          <img
            src="/images/victor-mascarenhas-01461.jpg"
            alt="Equipe Acelera — registro coletivo institucional"
            className="w-full h-[320px] sm:h-[440px] lg:h-[560px] object-cover rounded-[20px]"
          />
          <figcaption className="text-[12px] font-normal leading-[1.5] text-[#62595E]">
            Equipe Acelera — registro coletivo institucional.
          </figcaption>
        </figure>

        {/* Photo row meetings (#2023:15, EL-4848f3c9) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {meetingPhotos.map((item) => (
            <figure key={item.id} className="m-0 flex flex-col gap-[10px]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[260px] lg:h-[320px] object-cover rounded-[16px]"
              />
              <figcaption className="text-[12px] font-normal leading-[1.5] text-[#62595E]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Photo row presentations (#2023:25, EL-4848f3c9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {presentationPhotos.map((item) => (
            <figure key={item.id} className="m-0 flex flex-col gap-[10px]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-[16px]"
              />
              <figcaption className="text-[12px] font-normal leading-[1.5] text-[#62595E]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Corrida full row (#2023:32) */}
        <figure className="m-0 flex flex-col gap-[10px]">
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[440px] rounded-[20px] overflow-hidden">
            <img
              src="/images/victor-mascarenhas-01470.jpg"
              alt="3ª Corrida Saúde Crônica — Fundação José Silveira"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[24px] left-[28px] px-[16px] py-[8px] rounded-[8px] bg-[#511B35]/70 backdrop-blur-[2px]">
              <span className="text-[13px] font-semibold text-[#FFFFFF]">
                3ª Corrida Saúde Crônica — Fundação José Silveira
              </span>
            </div>
          </div>
          <figcaption className="text-[12px] font-normal leading-[1.5] text-[#62595E]">
            Registro de evento esportivo institucional e integração de equipes da Fundação José Silveira.
          </figcaption>
        </figure>

        {/* Additional institutional sprint & mentoring photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {additionalPhotos.map((item) => (
            <figure key={item.id} className="m-0 flex flex-col gap-[10px]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[260px] lg:h-[320px] object-cover rounded-[16px]"
              />
              <figcaption className="text-[12px] font-normal leading-[1.5] text-[#62595E]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
