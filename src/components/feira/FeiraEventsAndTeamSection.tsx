import type { FeiraHighlightEvent, FeiraTeamMember } from '../../types/feira'
import { FEIRA_HIGHLIGHT_EVENTS, FEIRA_TEAM_MEMBERS } from '../../data/feiraData'

export interface FeiraEventsAndTeamSectionProps {
  events?: FeiraHighlightEvent[]
  teamMembers?: FeiraTeamMember[]
}

export function FeiraEventsAndTeamSection({
  events = FEIRA_HIGHLIGHT_EVENTS,
  teamMembers = FEIRA_TEAM_MEMBERS,
}: FeiraEventsAndTeamSectionProps) {
  return (
    <section
      aria-labelledby="feira-events-heading"
      className="w-full bg-[#FFFFFF]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 sm:py-16 lg:py-[80px] flex flex-col gap-[20px]">
        {/* Section Heading (#4111:412) */}
        <h2
          id="feira-events-heading"
          className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.35] text-[#511B35] m-0"
        >
          Tecnologia a serviço da população.
        </h2>

        {/* Highlight Events Cards (#4111:413) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {events.map((event) => (
            <article
              key={event.id}
              className="p-[28px] rounded-[16px] bg-[#FAF2F5] flex flex-col gap-[20px]"
            >
              <h3 className="text-[22px] lg:text-[24px] font-medium leading-[1.35] text-[#511B35] m-0">
                {event.title}
              </h3>
              <span className="text-[28px] lg:text-[32px] font-medium leading-[1.35] text-[#511B35]">
                {event.procedures}
              </span>
              <p className="text-[16px] font-normal leading-[1.35] text-[#62595E] m-0">
                {event.description}
              </p>
            </article>
          ))}
        </div>

        {/* Team Subheading (#4111:422) */}
        <h3 className="text-[26px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.35] text-[#511B35] m-0 pt-2">
          Equipe do projeto
        </h3>

        {/* Team Member Cards (#4111:423) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
          {teamMembers.map((member) => (
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

