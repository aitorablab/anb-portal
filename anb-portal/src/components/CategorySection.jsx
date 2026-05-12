import { useEffect, useRef, useState } from "react"
import AppCard from "./AppCard"

export default function CategorySection({ category }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={category.section}
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#7ab531" }} />
        <h2 className="text-base font-semibold text-slate-700 tracking-tight">{category.label}</h2>
        <div className="flex-1 h-px bg-green-100" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}