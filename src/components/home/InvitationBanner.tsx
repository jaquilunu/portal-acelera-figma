import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ACELERA_FORM_URL } from '../../data/homeData'

export interface InvitationBannerProps {
  eyebrow?: string
  titleLine1?: string
  titleLine2?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function InvitationBanner({
  eyebrow = 'Inovação aberta para toda a Fundação',
  titleLine1 = 'Tem um desafio na sua área?',
  titleLine2 = 'O Acelera senta com você.',
  description = 'Nenhuma dor é simples demais, nenhum processo é burocrático demais. O Acelera vai até a sua sala para entender a rotina e construir uma solução sob medida para a sua equipe.',
  ctaLabel = 'Chamar o Acelera para um café',
  ctaHref = ACELERA_FORM_URL,
}: InvitationBannerProps) {
  const isExternal = ctaHref.startsWith('http')

  return (
    <section
      aria-label="Convite institucional"
      className="w-full bg-[#511B35]"
      style={{
        background:
          'linear-gradient(90deg, rgba(81, 27, 53, 1) 0%, rgba(27, 94, 90, 1) 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto min-h-[360px] lg:min-h-[420px] px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col justify-center gap-[32px]">
        {/* Eyebrow (#20:6380) */}
        <span className="text-[11px] font-semibold leading-[1.4] uppercase text-[#7ECDC8]">
          {eyebrow}
        </span>

        {/* Invitation row (#2023:169) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-[80px]">
          {/* Invitation copy (#20:6382) */}
          <div className="w-full max-w-[780px] flex flex-col gap-[16px]">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-medium leading-[1.1] text-[#FFFFFF] m-0">
              {titleLine1}
              <br />
              <span className="text-[#7ECDC8]">{titleLine2}</span>
            </h2>
            <p className="text-[16px] lg:text-[17px] font-normal leading-[1.55] text-[#F5E9EF] m-0">
              {description}
            </p>
          </div>

          {/* CTA wrapper (#2023:170) */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
            {isExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-[24px] py-[14px] gap-[12px] rounded-[8px] bg-[#FFFFFF] hover:bg-[#F7EEF2] text-[#B84469] text-[15px] font-semibold transition-colors"
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
              </a>
            ) : (
              <Link
                to={ctaHref}
                className="inline-flex items-center px-[24px] py-[14px] gap-[12px] rounded-[8px] bg-[#FFFFFF] hover:bg-[#F7EEF2] text-[#B84469] text-[15px] font-semibold transition-colors"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-[20px] h-[20px] stroke-[2]" aria-hidden="true" />
              </Link>
            )}
            <span className="text-[12px] font-normal text-[#F5E9EF]/80">
              Sem complicações · Conversa direta com a equipe Acelera
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
