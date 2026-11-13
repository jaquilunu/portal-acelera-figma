import { useState, useMemo } from 'react'
import type { CatalogCategory, CatalogProject } from '../../types/catalog'
import { CATALOG_PROJECTS } from '../../data/catalogData'
import { CatalogFilterBar } from './CatalogFilterBar'
import { ProjectCard } from './ProjectCard'

export interface ProjectGridProps {
  projects?: CatalogProject[]
}

export function ProjectGrid({ projects = CATALOG_PROJECTS }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategory>('Todos')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' || project.category === selectedCategory

      const normalizedSearch = searchQuery.trim().toLowerCase()
      if (!normalizedSearch) return matchesCategory

      const matchesTitle = project.title.toLowerCase().includes(normalizedSearch)
      const matchesCategoryText = project.category
        .toLowerCase()
        .includes(normalizedSearch)
      const matchesSummary = project.summary
        .toLowerCase()
        .includes(normalizedSearch)
      const matchesDetails = project.details.some(
        (d) =>
          d.text.toLowerCase().includes(normalizedSearch) ||
          (d.secondaryText?.toLowerCase().includes(normalizedSearch) ?? false)
      )

      return (
        matchesCategory &&
        (matchesTitle || matchesCategoryText || matchesSummary || matchesDetails)
      )
    })
  }, [projects, selectedCategory, searchQuery])

  return (
    <section
      aria-label="Catálogo documentado de projetos"
      className="w-full bg-[#FFFFFF]"
    >
      {/* Documented project catalog (#20:6423, EL-954ace0c) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-14 lg:py-[80px] flex flex-col gap-[40px]">
        <CatalogFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredProjects.length}
        />

        {filteredProjects.length > 0 ? (
          <div className="flex flex-col gap-[40px]">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-16 px-6 rounded-[16px] bg-[#FAF8F9] border border-[#E4D9DE] flex flex-col items-center justify-center text-center gap-3">
            <p className="text-[18px] font-medium text-[#511B35] m-0">
              Nenhum projeto encontrado para os critérios selecionados.
            </p>
            <p className="text-[14px] text-[#62595E] m-0">
              Experimente selecionar outra categoria ou limpar o termo de busca.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Todos')
                setSearchQuery('')
              }}
              className="mt-2 px-5 py-2.5 rounded-[6px] bg-[#B84469] text-white text-[14px] font-semibold hover:bg-[#a1385a] transition-colors cursor-pointer"
            >
              Ver todos os 5 projetos
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

