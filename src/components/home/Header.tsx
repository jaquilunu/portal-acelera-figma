import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import type { NavItem } from '../../types/home'
import { NAV_ITEMS } from '../../data/homeData'

export interface HeaderProps {
  items?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
}

export function Header({
  items = NAV_ITEMS,
  ctaLabel = 'Conhecer projetos',
  ctaHref = '/projetos',
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const location = useLocation()
  const isCatalogPage =
    location.pathname.startsWith('/projetos') ||
    location.pathname.startsWith('/jo') ||
    location.pathname.startsWith('/fjs') ||
    location.pathname.startsWith('/feira') ||
    location.pathname.startsWith('/otimiza')

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF] border-b border-[#E4D9DE]">
      <div className="max-w-[1440px] mx-auto h-20 lg:h-[112px] px-5 sm:px-10 lg:px-[80px] flex items-center justify-between">
        {/* Brand Logo (#20:6151 / #20:6404) */}
        <Link
          to="/"
          className="inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B84469] rounded"
          aria-label="Acelera — Fundação José Silveira"
        >
          <img
            src="/images/logo-acelera.png"
            alt="Acelera — Fundação José Silveira"
            className="w-[172px] sm:w-[204px] lg:w-[232px] h-auto lg:h-[71.5px] object-contain"
          />
        </Link>

        {/* Desktop Navigation Links (#20:6152 / #20:6405) */}
        <nav
          aria-label="Navegação institucional principal"
          className="hidden lg:flex items-center gap-[30px]"
        >
          {items.map((item) => {
            const isProjetosActive = item.id === 'projetos' && isCatalogPage
            return (
              <Link
                key={item.id}
                to={item.href}
                className={`text-[15px] transition-colors duration-200 ${
                  isProjetosActive
                    ? 'font-semibold text-[#B84469]'
                    : 'font-normal text-[#322D30] hover:text-[#B84469]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA Button (#20:6158 / #20:6411) */}
        <div className="hidden lg:flex items-center">
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center h-[50px] px-[22px] gap-[20px] rounded-[6px] bg-[#B84469] hover:bg-[#a1385a] text-[#FFFFFF] text-[15px] font-semibold transition-colors duration-200"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-[22px] h-[22px] stroke-[2]" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[8px] text-[#511B35] hover:bg-[#F7EEF2] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu móvel"
          className="lg:hidden bg-[#FFFFFF] border-t border-[#E4D9DE] px-5 sm:px-10 py-6 flex flex-col gap-4 shadow-lg"
        >
          {items.map((item) => {
            const isProjetosActive = item.id === 'projetos' && isCatalogPage
            return (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[16px] py-1.5 transition-colors ${
                  isProjetosActive
                    ? 'font-semibold text-[#B84469]'
                    : 'font-normal text-[#322D30] hover:text-[#B84469]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            to={ctaHref}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center h-[50px] px-[22px] gap-[20px] rounded-[6px] bg-[#B84469] text-[#FFFFFF] text-[15px] font-semibold w-full sm:w-fit"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-[22px] h-[22px]" aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  )
}
