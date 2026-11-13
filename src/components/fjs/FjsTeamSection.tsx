import type { FjsTeamMember } from '../../types/fjs'
import { FJS_TEAM_MEMBERS } from '../../data/fjsData'

export interface FjsTeamSectionProps {
  members?: FjsTeamMember[]
}

export function FjsTeamSection({
  members = FJS_TEAM_MEMBERS,
}: FjsTeamSectionProps) {
  return (
    <section
      id="equipe-fjs"
      aria-labelledby="fjs-team-heading"
      className="w-full bg-[#F7EEF2]"
    >
      {/* Team (#4109:123, template=EL-a4af6eb1) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Section Header (#4109:124, template=EL-1519dabc) */}
        <div className="flex flex-col gap-[12px]">
          <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
            Equipe
          </span>
          <h2
            id="fjs-team-heading"
            className="text-[30px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.15] text-[#511B35] m-0"
          >
            Responsáveis pelo projeto
          </h2>
        </div>

        {/* Team Row (#4109:127, template=EL-4848f3c9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {members.map((member) => (
            <article
              key={member.id}
              className="p-[24px] rounded-[14px] bg-[#FFFFFF] border border-[#E4D9DE] flex flex-col gap-[16px]"
            >
              {/* Name (#4109:129 / #4109:132) */}
              <h3 className="text-[22px] font-semibold leading-[1.2] text-[#511B35] m-0">
                {member.name}
              </h3>

              {/* Role (#4109:130 / #4109:133, template=EL-637a4904) */}
              <p className="text-[14px] font-normal leading-[1.55] text-[#62595E] m-0">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

