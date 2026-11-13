import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { FeaturedProject, SecondaryProjectSummary } from '../../types/home'
import { FEATURED_PROJECTS, SECONDARY_FEATURED_PROJECTS } from '../../data/homeData'

export interface FeaturedProjectsProps {
  projects?: FeaturedProject[]
  secondaryProjects?: SecondaryProjectSummary[]
}

function resolveAccessLinkHref(baseHref: string, chip: string): string {
  if (baseHref.includes('#')) return baseHref
  const normalized = chip.trim().toLowerCase()
  if (normalized === 'resultados') return `${baseHref}#resultados`
  if (normalized === 'stakeholders') return `${baseHref}#stakeholders`
  if (normalized === 'mps') return `${baseHref}#mps`
  if (normalized === 'entregas') return `${baseHref}#entregas`
  return baseHref
}

export function FeaturedProjects({
  projects = FEATURED_PROJECTS,
  secondaryProjects = SECONDARY_FEATURED_PROJECTS,
}: FeaturedProjectsProps) {
  return (
    <section id="projetos" className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-8 lg:gap-[40px]">
        {/* Projects heading (#2021:51, EL-197b04ef) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="w-full max-w-[780px] flex flex-col gap-[12px]">
            <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
              Projetos em destaque
            </span>
            <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-medium leading-[1.15] text-[#511B35] m-0">
              Da digitalização de processos à inteligência artificial.
            </h2>
          </div>

          <Link
            to="/projetos"
            className="inline-flex items-center h-[50px] gap-[12px] text-[15px] font-semibold text-[#B84469] hover:text-[#511B35] transition-colors shrink-0"
          >
            <span>Todos os projetos</span>
            <ArrowRight className="w-[22px] h-[22px] stroke-[2]" aria-hidden="true" />
          </Link>
        </div>

        {/* Subtitle (#2021:58, style_e5657121) */}
        <p className="text-[16px] lg:text-[17px] font-normal leading-[1.55] text-[#62595E] m-0">
          Cada iniciativa nasce de um problema real identificado junto a uma área parceira da Fundação José Silveira.
        </p>

        {/* Featured editorial cards (#2021:59) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[40px]">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col gap-[24px]"
            >
              {/* Photograph (#2021:61 / #2021:91, layout_dae8ea9f) */}
              <Link
                to={project.ctaHref}
                className="block overflow-hidden rounded-[16px] group"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover rounded-[16px] group-hover:scale-[1.02] transition-transform duration-300"
                />
              </Link>

              {/* Project meta (#2021:62 / #2021:92) */}
              <div className="flex flex-col gap-[6px]">
                <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
                  {project.eyebrow}
                </span>
                <h3 className="text-[28px] sm:text-[32px] font-medium leading-[1.15] text-[#511B35] m-0">
                  <Link
                    to={project.ctaHref}
                    className="hover:text-[#B84469] transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>

              {/* Solution framing box (#2021:65 / #2021:95, EL-94694899) */}
              <div className="p-[20px] rounded-[12px] bg-[#F7EEF2] flex flex-col gap-[16px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[24px]">
                  {/* Problema */}
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[11px] font-semibold uppercase text-[#B84469]">
                      Problema
                    </span>
                    <p className="text-[14px] font-normal leading-[1.5] text-[#511B35] m-0">
                      {project.problem}
                    </p>
                  </div>

                  {/* Benefício */}
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[11px] font-semibold uppercase text-[#2A7A5F]">
                      Benefício
                    </span>
                    {project.benefitArrowLayout ? (
                      <div className="flex flex-wrap items-center gap-x-[4px] gap-y-[2px] text-[14px] font-normal leading-[1.5] text-[#511B35]">
                        <span>{project.benefitArrowLayout.before}</span>
                        <ArrowRight
                          className="w-[14px] h-[14px] text-[#511B35] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{project.benefitArrowLayout.after}</span>
                      </div>
                    ) : (
                      <p className="text-[14px] font-normal leading-[1.5] text-[#511B35] m-0">
                        {project.benefitText}
                      </p>
                    )}
                  </div>

                  {/* Diferencial */}
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[11px] font-semibold uppercase text-[#62595E]">
                      Diferencial
                    </span>
                    <p className="text-[14px] font-normal leading-[1.5] text-[#511B35] m-0">
                      {project.differential}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics summary line (#4075:340 / #2021:106, style_12aeff15) */}
              <p className="text-[16px] sm:text-[17px] font-semibold leading-[1.5] text-[#B84469] m-0">
                {project.metricsSummary}
              </p>

              {/* Visual access links (#2021:77 / #2021:107, EL-22e6ff9f) */}
              <div className="flex flex-wrap items-center gap-[10px]">
                {project.accessLinks.map((chip) => (
                  <Link
                    key={chip}
                    to={resolveAccessLinkHref(project.ctaHref, chip)}
                    className="px-[16px] py-[8px] rounded-[20px] bg-[#F7EEF2] hover:bg-[#F0DCE5] border border-[#E4D9DE] text-[13px] font-semibold text-[#B84469] transition-colors"
                  >
                    {chip}
                  </Link>
                ))}
              </div>

              {/* Explore action (#2021:86 / #2021:116, EL-ed5bfb96) */}
              <div>
                <Link
                  to={project.ctaHref}
                  className="inline-flex items-center px-[20px] py-[12px] gap-[12px] rounded-[6px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors"
                >
                  <span>{project.ctaLabel}</span>
                  <ArrowUpRight className="w-[18px] h-[18px] stroke-[2]" aria-hidden="true" />
                </Link>
              </div>

              {project.captionNote && (
                <p className="text-[12px] font-normal leading-[1.5] text-[#62595E]/70 m-0">
                  {project.captionNote}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Section divider (#2021:120) */}
        <div className="w-full h-[1px] bg-[#E4D9DE]" role="separator" />

        {/* Other documented projects (#2021:121) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-[40px]">
          {secondaryProjects.map((sec) => (
            <article key={sec.id} className="flex flex-col gap-[16px]">
              <Link
                to={sec.ctaHref}
                className="block overflow-hidden rounded-[12px] group"
              >
                <img
                  src={sec.image}
                  alt={sec.imageAlt}
                  className="w-full h-[200px] object-cover rounded-[12px] group-hover:scale-[1.02] transition-transform duration-300"
                />
              </Link>

              <div className="flex flex-col gap-[6px]">
                <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#B84469]">
                  {sec.eyebrow}
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-medium leading-[1.15] text-[#511B35] m-0">
                  <Link
                    to={sec.ctaHref}
                    className="hover:text-[#B84469] transition-colors"
                  >
                    {sec.title}
                  </Link>
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[11px] font-semibold uppercase text-[#B84469]">
                    Problema
                  </span>
                  <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                    {sec.problem}
                  </p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[11px] font-semibold uppercase text-[#2A7A5F]">
                    Benefício
                  </span>
                  <p className="text-[13px] font-normal leading-[1.5] text-[#62595E] m-0">
                    {sec.benefit}
                  </p>
                </div>
              </div>

              <p className="text-[16px] font-semibold leading-[1.5] text-[#B84469] m-0">
                {sec.metricsSummary}
              </p>

              <p className="text-[12px] font-normal leading-[1.5] text-[#62595E]/70 m-0">
                {sec.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-[8px]">
                {sec.accessLinks.map((chip) => (
                  <Link
                    key={chip}
                    to={resolveAccessLinkHref(sec.ctaHref, chip)}
                    className="px-[14px] py-[6px] rounded-[20px] bg-[#F7EEF2] hover:bg-[#F0DCE5] border border-[#E4D9DE] text-[12px] font-semibold text-[#B84469] transition-colors"
                  >
                    {chip}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-1">
                <Link
                  to={sec.ctaHref}
                  className="inline-flex items-center px-[16px] py-[10px] gap-[12px] rounded-[6px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[14px] font-semibold transition-colors"
                >
                  <span>{sec.ctaLabel}</span>
                  <ArrowUpRight className="w-[16px] h-[16px] stroke-[2]" aria-hidden="true" />
                </Link>
              </div>

              {sec.captionNote && (
                <p className="text-[11px] font-normal leading-[1.5] text-[#62595E]/60 m-0">
                  {sec.captionNote}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
