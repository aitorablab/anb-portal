import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { news, events } from "../data/apps"

const NEWS_IMAGES = [
  "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&w=800&q=80",
]

export default function NewsAndCalendar() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % news.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const prev = () => setCurrent(c => (c - 1 + news.length) % news.length)
  const next = () => setCurrent(c => (c + 1) % news.length)

  const today = new Date()
  const dayNum   = today.getDate()
  const dayMon   = today.toLocaleDateString("es-ES", { month: "short" }).toUpperCase()
  const fullDate = today.toLocaleDateString("es-ES", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  })
  const fullDateCap = fullDate.charAt(0).toUpperCase() + fullDate.slice(1)

  return (
    <section
      id="noticias"
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#7ab531" }} />
        <h2 className="text-base font-semibold text-slate-700 tracking-tight">Noticias y calendario</h2>
        <div className="flex-1 h-px bg-green-100" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Carrusel — 2/3 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

          {/* Imagen */}
          <div className="relative h-52 overflow-hidden bg-slate-100">
            {NEWS_IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={news[i].title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all">
              <ChevronRight size={16} />
            </button>
            <button onClick={() => setPaused(p => !p)} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all">
              {paused ? <Play size={12} /> : <Pause size={12} />}
            </button>

            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold text-white bg-[#7ab531]/90 backdrop-blur-sm rounded-full px-3 py-0.5">
                {news[current].tag}
              </span>
              <span className="text-[11px] font-medium text-slate-700 bg-white/90 backdrop-blur-sm rounded-full px-3 py-0.5">
                {news[current].date}
              </span>
            </div>
          </div>

          {/* Texto noticia */}
          <div className="relative p-6 h-[130px] overflow-hidden">
            {news.map((item, i) => (
              <div
                key={item.id}
                className={`transition-all duration-500 ${i === current ? "opacity-100 relative" : "opacity-0 absolute inset-0 p-6 pointer-events-none"}`}
              >
                <h3 className="text-base font-semibold text-slate-800 leading-snug mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-1.5 px-6 pb-5">
            {news.map((_, j) => (
              <button
                key={j}
                onClick={() => setCurrent(j)}
                className={`rounded-full transition-all duration-300 ${j === current ? "w-6 h-2" : "w-2 h-2 bg-slate-200 hover:bg-slate-300"}`}
                style={j === current ? { backgroundColor: "#7ab531" } : {}}
              />
            ))}
          </div>
        </div>

        {/* Calendario — 1/3 */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-5">

          <div className="pb-4 border-b border-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Hoy</p>
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white shadow-md shrink-0"
                style={{ backgroundColor: "#7ab531" }}
              >
                <span className="text-2xl font-bold leading-none">{dayNum}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">{dayMon}</span>
              </div>
              <p className="text-sm font-semibold text-slate-700 leading-snug">{fullDateCap}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Próximos eventos</p>
            {events.map((ev, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 text-[11px] font-semibold rounded-lg px-2 py-1 min-w-[52px] text-center leading-tight border"
                  style={{ color: "#7ab531", backgroundColor: "rgba(122,181,49,0.08)", borderColor: "rgba(122,181,49,0.2)" }}
                >
                  {ev.date}
                </span>
                <span className="text-xs text-slate-600 leading-snug pt-1">{ev.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}