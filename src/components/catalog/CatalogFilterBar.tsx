import { Search, X } from 'lucide-react'
import type { CatalogCategory } from '../../types/catalog'
import { CATALOG_CATEGORIES } from '../../data/catalogData'

export interface CatalogFilterBarProps {
  categories?: CatalogCategory[]
  selectedCategory: CatalogCategory
  onSelectCategory: (category: CatalogCategory) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  totalResults: number
}

export function CatalogFilterBar({
  categories = CATALOG_CATEGORIES,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults,
}: CatalogFilterBarProps) {
  return (
    <div className="w-full flex flex-col gap-5 pb-2">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filtrar catálogo por categoria"
          className="flex flex-wrap items-center gap-2"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(category)}
                className={`px-3.5 py-2 rounded-full text-[12px] font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#511B35] text-[#F7EEF2]'
                    : 'bg-[#F7EEF2] text-[#B84469] hover:bg-[#EFE0E7]'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-[320px] shrink-0">
          <Search
            className="w-4 h-4 text-[#9C8A91] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar solução ou indicador..."
            aria-label="Buscar solução ou indicador no catálogo"
            className="w-full h-[42px] pl-10 pr-9 rounded-[10px] bg-[#FAF8F9] border border-[#E4D9DE] text-[14px] text-[#322D30] placeholder:text-[#9C8A91] focus:outline-none focus:border-[#B84469] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Limpar busca"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#9C8A91] hover:text-[#511B35] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {(selectedCategory !== 'Todos' || searchQuery.trim() !== '') && (
        <div className="flex items-center justify-between text-[13px] text-[#62595E]">
          <span>
            Exibindo <strong className="text-[#511B35]">{totalResults}</strong>{' '}
            {totalResults === 1 ? 'projeto encontrado' : 'projetos encontrados'}
          </span>
          <button
            type="button"
            onClick={() => {
              onSelectCategory('Todos')
              onSearchChange('')
            }}
            className="text-[#B84469] font-semibold hover:underline cursor-pointer"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  )
}

