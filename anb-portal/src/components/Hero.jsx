import logo from "../assets/logo-ab.png"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[90vh] min-h-[580px] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80"
        alt="Naturaleza"
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent" />
      <div
        className="absolute bottom-0 left-0 right-0 h-56"
        style={{ background: "linear-gradient(to top, #f2f6ee 0%, rgba(242,246,238,0.85) 35%, transparent 100%)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        <img src={logo} alt="A&B" className="fade-up fade-up-1 h-16 w-16 object-contain mb-5 drop-shadow-lg" />
        <p className="fade-up fade-up-1 text-[#a8d45a] text-xs font-semibold tracking-widest uppercase mb-4">
          Portal interno
        </p>
        <h1 className="fade-up fade-up-2 text-white text-4xl sm:text-5xl font-bold leading-tight mb-2">
          A&B Laboratorios de Biotecnología
        </h1>
        <p className="fade-up fade-up-3 text-white/80 text-base font-light max-w-md mx-auto mb-8 mt-4">
          Accede a tus herramientas, aplicaciones y recursos internos desde un solo lugar.
        </p>
        <div className="fade-up fade-up-3 flex flex-wrap gap-3 justify-center">
          <a
            href="#noticias"
            className="px-6 py-3 bg-[#7ab531] hover:bg-[#6aa028] text-white text-sm font-medium rounded-full transition-all duration-200 shadow-lg"
          >
            Ver novedades
          </a>
          <a
            href="#aplicaciones"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/20 backdrop-blur-sm transition-all duration-200"
          >
            Ir a aplicaciones
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}