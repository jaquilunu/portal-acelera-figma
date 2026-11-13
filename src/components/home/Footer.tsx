import { Link } from 'react-router-dom'
import { ACELERA_FORM_URL } from '../../data/homeData'

export interface FooterProps {
  variant?: 'home' | 'catalog'
  institutionText?: string
  copyrightText?: string
}

export function Footer({
  variant = 'home',
  institutionText,
  copyrightText = 'Fundação José Silveira — Programa Acelera.',
}: FooterProps) {
  const isCatalog = variant === 'catalog'
  const resolvedInstitutionText =
    institutionText ??
    (isCatalog
      ? 'Programa institucional de inovação aplicada da Fundação José Silveira, conectando pessoas, tecnologia e processos.'
      : 'Programa institucional de inovação aplicada da Fundação José Silveira.')

  return (
    <footer className="w-full bg-[#FAF8F9]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-12 lg:py-[48px] flex flex-col gap-[32px]">
        {/* Section divider (#20:6389 / #20:6520, EL-26cca2ff) */}
        <div className="w-full h-[1px] bg-[#E4D9DE]" role="separator" />

        {/* Footer information (#20:6390 / #20:6521, EL-0490e7b5) */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[80px]">
          {/* Institution (#20:6391 / #20:6522) */}
          <div
            className={`w-full ${
              isCatalog ? 'lg:w-[560px]' : 'lg:w-[520px]'
            } shrink-0 flex flex-col gap-[16px]`}
          >
            <Link
              to="/"
              aria-label="Acelera — Fundação José Silveira"
              className="inline-flex w-fit"
            >
              <img
                src="/images/logo-acelera.png"
                alt="Acelera — Fundação José Silveira"
                className="w-[200px] lg:w-[232px] h-auto lg:h-[71.5px] object-contain"
              />
            </Link>
            <p
              className={`${
                isCatalog ? 'text-[17px]' : 'text-[15px]'
              } font-normal leading-[1.55] text-[#62595E] m-0`}
            >
              {resolvedInstitutionText}
            </p>
          </div>

          {/* Navigation (#20:6394 / #20:6525) */}
          <div
            className={`w-full ${
              isCatalog ? 'lg:w-[240px]' : 'lg:w-[220px]'
            } shrink-0 flex flex-col gap-[12px]`}
          >
            <span
              className={`${
                isCatalog ? 'text-[12px]' : 'text-[11px]'
              } font-semibold leading-[1.4] uppercase text-[#B84469]`}
            >
              Navegação
            </span>
            <nav
              aria-label="Links do rodapé"
              className={`text-[15px] font-normal ${
                isCatalog ? 'leading-[1.55]' : 'leading-[1.7]'
              } text-[#62595E] flex flex-col gap-1`}
            >
              <div>
                <Link to="/#sobre" className="hover:text-[#B84469] transition-colors">
                  Sobre
                </Link>
                {' · '}
                <Link to="/projetos" className="hover:text-[#B84469] transition-colors">
                  Projetos
                </Link>
                {' · '}
                <Link to="/#impacto" className="hover:text-[#B84469] transition-colors">
                  Impacto
                </Link>
              </div>
              <div>
                <Link to="/#comunicacao" className="hover:text-[#B84469] transition-colors">
                  Comunicação
                </Link>
                {' · '}
                <Link to="/#equipe" className="hover:text-[#B84469] transition-colors">
                  Equipe
                </Link>
              </div>
              <div className="pt-1 text-[13px] text-[#9E8C94]">
                <Link
                  to="/projetos/jo-assistente-virtual"
                  className="hover:text-[#B84469] transition-colors"
                >
                  Jô IA
                </Link>
                {' · '}
                <Link
                  to="/projetos/fjs-inteligente"
                  className="hover:text-[#B84469] transition-colors"
                >
                  FJS Inteligente
                </Link>
                {' · '}
                <Link
                  to="/projetos/feira-de-saude"
                  className="hover:text-[#B84469] transition-colors"
                >
                  Feira de Saúde
                </Link>
                {' · '}
                <Link
                  to="/projetos/otimiza"
                  className="hover:text-[#B84469] transition-colors"
                >
                  Otimiza
                </Link>
              </div>
            </nav>
          </div>

          {/* Contact status (#20:6397 / #20:6528) */}
          <div className="flex-1 flex flex-col gap-[12px]">
            <span
              className={`${
                isCatalog
                  ? 'text-[12px] text-[#B84469]'
                  : 'text-[11px] text-[#1B5E5A]'
              } font-semibold leading-[1.4] uppercase`}
            >
              Institucional
            </span>
            <span
              className={`text-[15px] font-normal ${
                isCatalog ? 'leading-[1.55]' : 'leading-[1.7]'
              } text-[#62595E]`}
            >
              Fundação José Silveira
            </span>
            <a
              href={ACELERA_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-[#B84469] hover:text-[#7c1e3c] transition-colors w-fit"
            >
              Chamar o Acelera para um café →
            </a>
          </div>
        </div>

        {/* Copyright (#20:6400 / #20:6531) */}
        <p
          className={`${
            isCatalog
              ? 'text-[13px] text-[#62595E]'
              : 'text-[12px] text-[#9E8C94]'
          } font-normal leading-[1.55] m-0`}
        >
          {copyrightText}
        </p>
      </div>
    </footer>
  )
}
