import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { CatalogProject } from '../../types/catalog'
import { ACELERA_FORM_URL } from '../../data/homeData'

export interface ProjectCardProps {
  project: CatalogProject
}

const CHIP_ANCHOR_MAP: Record<string, string> = {
  Resultados: '#resultados',
  Stakeholders: '#stakeholders',
  MPs: '#mps',
  Entregas: '#entregas',
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFjsVariant = project.indexNumber === '02'
  const mediaWidthClass =
    project.mediaColumnWidth === '400' ? 'lg:w-[400px]' : 'lg:w-[440px]'
  const isInternalRoute = project.ctaHref.startsWith('/')

  return (
    <article
      id={project.id}
      className={`scroll-mt-[112px] flex flex-col ${isFjsVariant ? 'gap-[32px]' : 'gap-[28px]'}`}
    >
      {/* Top Section divider (#20:6425 / #20:6443 / #20:6461 / #20:6480 / #20:6499) */}
      <div className="w-full h-[1px] bg-[#E4D9DE]" role="separator" />

      {/* Project record (#20:6426 / #20:6444 / #20:6462 / #20:6481 / #20:6500) */}
      <div
        className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-[48px] ${
          isFjsVariant ? 'pb-[24px]' : 'pb-[32px]'
        }`}
      >
        {/* Left column: Project media or indicator */}
        <div
          className={`w-full ${mediaWidthClass} shrink-0 flex flex-col ${
            isFjsVariant ? 'gap-[12px]' : 'gap-[10px]'
          }`}
        >
          {project.media.type === 'photo' ? (
            <>
              {isInternalRoute ? (
                <Link
                  to={project.ctaHref}
                  className="block overflow-hidden rounded-[16px] group"
                >
                  <img
                    src={project.media.src}
                    alt={project.media.alt}
                    className={`w-full ${
                      project.media.heightClass ?? 'h-[320px]'
                    } object-cover rounded-[16px] group-hover:scale-[1.02] transition-transform duration-300`}
                  />
                </Link>
              ) : (
                <img
                  src={project.media.src}
                  alt={project.media.alt}
                  className={`w-full ${
                    project.media.heightClass ?? 'h-[320px]'
                  } object-cover rounded-[16px]`}
                />
              )}

              {project.media.caption && (
                <p
                  className="text-[12px] font-normal leading-[1.5] m-0"
                  style={{ color: project.media.captionColor ?? '#A09298' }}
                >
                  {project.media.caption}
                </p>
              )}

              {/* Key metric block for Project 02 (#2016:4) */}
              {project.media.keyMetricBox && (
                <div className="px-[20px] py-[16px] rounded-[12px] bg-[#EAF4F2] flex flex-col gap-[6px]">
                  <span className="text-[11px] font-semibold uppercase text-[#2A7A6F]">
                    {project.media.keyMetricBox.eyebrow}
                  </span>
                  <span className="text-[28px] font-semibold leading-[1.15] text-[#1C544C]">
                    {project.media.keyMetricBox.value}
                  </span>
                  <p className="text-[12px] font-normal leading-[1.5] text-[#4A8A80] m-0">
                    {project.media.keyMetricBox.description}
                  </p>
                </div>
              )}

              {/* Stat badge for Project 03 (#2015:6) */}
              {project.media.statBadge && (
                <div
                  className="px-[16px] py-[12px] rounded-[12px] flex flex-col gap-[2px]"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(184, 68, 105, 1) 0%, rgba(124, 30, 60, 1) 100%)',
                  }}
                >
                  <span className="text-[24px] sm:text-[28px] font-medium leading-tight text-[#FFFFFF]">
                    {project.media.statBadge.value}
                  </span>
                  <span className="text-[12px] font-normal text-[#F5E9EF]">
                    {project.media.statBadge.subtitle}
                  </span>
                </div>
              )}
            </>
          ) : (
            /* Typographic card for Project 05 (#4109:5) */
            <div className="w-full h-[280px] sm:h-[320px] rounded-[16px] bg-[#F7EEF2] px-6 flex flex-col items-center justify-center gap-[12px] text-center">
              <span className="text-[14px] font-semibold uppercase text-[#B84469]">
                {project.media.eyebrow}
              </span>
              <span className="text-[32px] sm:text-[36px] font-medium leading-[1.1] text-[#511B35]">
                {project.media.title}
              </span>
              <p className="max-w-[360px] text-[16px] font-normal leading-[1.55] text-[#62595E] m-0">
                {project.media.description}
              </p>
            </div>
          )}
        </div>

        {/* Right column: Project overview */}
        <div
          className={`flex-1 flex flex-col ${
            isFjsVariant ? 'gap-[20px]' : 'gap-[16px]'
          }`}
        >
          {/* Classification (#76:19 / #76:54 / #76:89 / #76:124 / #76:163) */}
          <div className="flex items-center gap-[16px]">
            {project.indexStyle === 'badge' ? (
              <div className="w-[28px] h-[28px] rounded-[14px] bg-[#511B35] flex items-center justify-center shrink-0">
                <span className="text-[12px] font-semibold text-[#F7EEF2]">
                  {project.indexNumber}
                </span>
              </div>
            ) : (
              <span className="text-[14px] font-normal text-[#C9B8BF]">
                {project.indexNumber}
              </span>
            )}

            <span className="text-[12px] font-semibold leading-[1.4] uppercase text-[#B84469]">
              {project.category}
            </span>
          </div>

          {/* Title & Summary */}
          {isFjsVariant ? (
            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[32px] sm:text-[40px] font-medium leading-[1.1] text-[#511B35] m-0">
                {isInternalRoute ? (
                  <Link
                    to={project.ctaHref}
                    className="hover:text-[#B84469] transition-colors"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h2>
              <p className="text-[17px] sm:text-[18px] font-normal leading-[1.55] text-[#62595E] m-0">
                {project.summary}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-[28px] sm:text-[34px] font-medium leading-[1.12] text-[#511B35] m-0">
                {isInternalRoute ? (
                  <Link
                    to={project.ctaHref}
                    className="hover:text-[#B84469] transition-colors"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h2>
              <p className="text-[16px] sm:text-[17px] font-normal leading-[1.6] text-[#62595E] m-0">
                {project.summary}
              </p>
            </>
          )}

          {/* Inner thin divider (#2015:5 / #2016:12) */}
          <div
            className="w-full h-[1px]"
            style={{ backgroundColor: project.dividerColor ?? '#F0E8EC' }}
            role="separator"
          />

          {/* Details Blocks */}
          {project.details.map((detail) => {
            const labelColorHex =
              detail.labelColor === 'teal' ? '#2A7A6F' : '#B84469'

            return (
              <div
                key={detail.id}
                className={`flex flex-col ${
                  isFjsVariant ? 'gap-[6px]' : 'gap-[4px]'
                }`}
              >
                <span
                  className="text-[11px] font-semibold leading-[1.4] uppercase"
                  style={{ color: labelColorHex }}
                >
                  {detail.label}
                </span>

                {detail.isResultHighlight ? (
                  detail.resultVariant === 'burgundy-semibold' ? (
                    <p className="text-[18px] font-semibold leading-[1.4] text-[#511B35] m-0">
                      {detail.text}
                    </p>
                  ) : (
                    <p className="text-[15px] font-bold leading-[1.55] text-[#B84469] m-0">
                      {detail.text}
                    </p>
                  )
                ) : (
                  <p
                    className={`${
                      isFjsVariant ? 'text-[16px]' : 'text-[15px]'
                    } font-normal leading-[1.55] text-[#62595E] m-0`}
                  >
                    {detail.text}
                  </p>
                )}

                {detail.secondaryText && (
                  <p
                    className={`${
                      isFjsVariant
                        ? 'text-[13px] leading-[1.55] text-[#9C8F94]'
                        : 'text-[12px] leading-[1.5] text-[#A09298]'
                    } font-normal m-0`}
                  >
                    {detail.secondaryText}
                  </p>
                )}
              </div>
            )
          })}

          {/* Bottom divider for Project 02 (#2016:13) */}
          {isFjsVariant && (
            <div
              className="w-full h-[1px]"
              style={{ backgroundColor: project.dividerColor ?? '#EAD5DC' }}
              role="separator"
            />
          )}

          {/* Access visual (#76:40 / #76:75 / #76:110 / #76:149 / #76:184) */}
          <div
            className={`flex flex-col ${
              isFjsVariant ? 'gap-[10px]' : 'gap-[8px]'
            }`}
          >
            <span
              className="text-[11px] font-semibold leading-[1.4] uppercase"
              style={{ color: project.accessLabelColor ?? '#B84469' }}
            >
              Acessos visuais
            </span>
            <div className="flex flex-wrap items-center gap-[8px]">
              {project.accessChips.map((chip) => {
                const isTealChip = chip.variant === 'teal'
                const anchor = CHIP_ANCHOR_MAP[chip.label] ?? ''
                const chipHref = isInternalRoute
                  ? `${project.ctaHref}${anchor}`
                  : `/#impacto`

                return (
                  <Link
                    key={chip.label}
                    to={chipHref}
                    className={`rounded-full font-semibold transition-colors ${
                      isFjsVariant
                        ? 'px-[14px] py-[7px] text-[13px]'
                        : 'px-[12px] py-[6px] text-[12px]'
                    } ${
                      isTealChip
                        ? 'bg-[#EAF4F2] text-[#2A7A6F] hover:bg-[#d5ebe6]'
                        : 'bg-[#F7EEF2] text-[#B84469] hover:bg-[#EFE0E6]'
                    }`}
                  >
                    {chip.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Explore action (#76:51 / #76:86 / #76:121 / #76:160 / #76:195) */}
          <div className="flex flex-wrap items-center gap-4">
            {isInternalRoute ? (
              <Link
                to={project.ctaHref}
                className={`inline-flex items-center gap-[16px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] font-semibold transition-colors ${
                  isFjsVariant
                    ? 'h-[50px] px-[22px] rounded-[8px] text-[15px]'
                    : 'h-[48px] px-[20px] rounded-[6px] text-[14px]'
                }`}
              >
                <span>{project.ctaLabel}</span>
                <ArrowRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
              </Link>
            ) : (
              <a
                href={ACELERA_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-[16px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] font-semibold transition-colors ${
                  isFjsVariant
                    ? 'h-[50px] px-[22px] rounded-[8px] text-[15px]'
                    : 'h-[48px] px-[20px] rounded-[6px] text-[14px]'
                }`}
              >
                <span>Conversar sobre esta solução</span>
                <ArrowRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
