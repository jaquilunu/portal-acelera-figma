import type { OtimizaTeamMember } from '../../types/otimiza'
import { OTIMIZA_TEAM_MEMBERS } from '../../data/otimizaData'

export interface OtimizaTeamSectionProps {
  members?: OtimizaTeamMember[]
}

export function OtimizaTeamSection({
  members = OTIMIZA_TEAM_MEMBERS,
}: OtimizaTeamSectionProps) {
  return (
    <section
      aria-labelledby="otimiza-team-heading"
      className="w-full bg-[#FAF2F5]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col gap-[20px]">
        {/* Section Heading (#4111:450) */}
        <h2
          id="otimiza-team-heading"
          className="text-[26px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.35] text-[#511B35] m-0"
        >
          Equipe do projeto
        </h2>

        {/* 2x3 Grid of Team Members (#4111:451 & #4111:458) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {members.map((member) => (
            <article
              key={member.id}
              className="p-[20px] rounded-[12px] bg-[#FFFFFF] border border-[#E3D9DE] flex flex-col gap-[20px]"
            >
              <span className="text-[19px] font-medium leading-[1.35] text-[#511B35]">
                {member.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

