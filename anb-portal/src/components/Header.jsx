import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { categories } from "../data/apps"
import logo from "../assets/logo-ab.png"

const NAV_LINKS = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Noticias",      href: "#noticias" },
  { label: "Gestión",       href: "#gestion" },
  { label: "Documentación", href: "#documentacion" },
  { label: "Aplicaciones",  href: "#aplicaciones" },
]

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery]           = useState("")
  const [scrolled, setScrolled]     = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  const allApps = categories.flatMap(c => c.apps)
  const results = query.length > 1
    ? allApps.filter(a => a.label.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-green-100" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="A&B" className="h-9 w-9 object-contain" />
          <div className="hidden sm:block">
            <div className={`text-sm font-semibold leading-tight transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}>
              Portal interno
            </div>
            <div className={`text-[11px] leading-tight transition-colors ${scrolled ? "text-slate-400" : "text-white/70"}`}>
              A&B Laboratorios de Biotecnología
            </div>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? "text-slate-600 hover:text-[#7ab531] hover:bg-[#7ab531]/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Search */}
        <div className="relative flex items-center">
          {searchOpen ? (
            <div className="flex items-center gap-2 fade-in">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Buscar aplicación..."
                  className="w-56 pl-4 pr-4 py-2 rounded-full text-sm bg-white border border-green-200 text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                />
                {results.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-50">
                    {results.map(app => (
                      <a
                        key={app.id}
                        href={app.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { setSearchOpen(false); setQuery("") }}
                        className={`flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-green-50 transition-colors ${!app.url ? "opacity-40 pointer-events-none" : ""}`}
                      >
                        <span className="font-medium">{app.label}</span>
                        {!app.url && <span className="text-xs text-slate-400 ml-auto">Próximo</span>}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => { setSearchOpen(false); setQuery("") }}
                className={`p-2 rounded-full transition-colors ${scrolled ? "text-slate-500 hover:bg-slate-100" : "text-white/80 hover:bg-white/10"}`}
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-full transition-all duration-200 ${
                scrolled ? "text-slate-500 hover:bg-slate-100" : "text-white/80 hover:bg-white/10"
              }`}
            >
              <Search size={20} />
            </button>
          )}
        </div>

      </div>
    </header>
  )
}