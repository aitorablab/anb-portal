import Header from "./components/Header"
import Hero from "./components/Hero"
import NewsAndCalendar from "./components/NewsAndCalendar"
import CategorySection from "./components/CategorySection"
import { categories } from "./data/apps"

// Orden según menú: Noticias → Gestión → Documentación → Aplicaciones
const SECTION_ORDER = ["gestion", "documentacion", "aplicaciones"]

export default function App() {
  const sorted = SECTION_ORDER.flatMap(sectionId =>
    categories.filter(c => c.section === sectionId)
  )

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-14">
        <NewsAndCalendar />
        {sorted.map(cat => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </main>
      <footer className="text-center text-xs text-slate-400 py-8 border-t border-green-100">
        © {new Date().getFullYear()} A&B Laboratorios de Biotecnología · Portal interno
      </footer>
    </div>
  )
}