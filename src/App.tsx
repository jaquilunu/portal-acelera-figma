import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage'
import { FeiraPage } from './pages/FeiraPage'
import { FjsPage } from './pages/FjsPage'
import { HomePage } from './pages/HomePage'
import { JoPage } from './pages/JoPage'
import { OtimizaPage } from './pages/OtimizaPage'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      const scrollToTarget = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      const timeoutId = window.setTimeout(scrollToTarget, 60)
      return () => window.clearTimeout(timeoutId)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<CatalogPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/projetos/jo-assistente-virtual" element={<JoPage />} />
        <Route path="/jo" element={<JoPage />} />
        <Route path="/projetos/fjs-inteligente" element={<FjsPage />} />
        <Route path="/fjs-inteligente" element={<FjsPage />} />
        <Route path="/fjs" element={<FjsPage />} />
        <Route path="/projetos/feira-de-saude" element={<FeiraPage />} />
        <Route
          path="/projetos/informatizacao-da-feira-de-saude"
          element={<FeiraPage />}
        />
        <Route path="/feira-de-saude" element={<FeiraPage />} />
        <Route path="/feira" element={<FeiraPage />} />
        <Route path="/projetos/otimiza" element={<OtimizaPage />} />
        <Route path="/otimiza" element={<OtimizaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
