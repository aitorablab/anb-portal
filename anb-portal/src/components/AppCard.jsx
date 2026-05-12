import { MessageSquare, FileText, Database, Users, Mail, Presentation, HelpCircle, Globe, UserCog, PartyPopper, LayoutDashboard, CalendarDays } from "lucide-react"


const ICON_MAP = {
  teams:      { icon: MessageSquare, color: "#5059C9", bg: "#ede9ff" },
  sharepoint: { icon: Globe,         color: "#038387", bg: "#e0f5f5" },
  erp:        { icon: Database,      color: "#b45309", bg: "#fef3c7" },
  crm:        { icon: Users,         color: "#0078D4", bg: "#dbeafe" },
  mail:       { icon: Mail,          color: "#16a34a", bg: "#dcfce7" },
  slides:     { icon: Presentation,  color: "#dc2626", bg: "#fee2e2" },
  personas: { icon: UserCog,         color: "#7ab531", bg: "#f0fce8" },
  evento:   { icon: PartyPopper,     color: "#c026d3", bg: "#fdf4ff" },
  pmo:      { icon: LayoutDashboard, color: "#0f766e", bg: "#f0fdfa" },
  agenda:   { icon: CalendarDays,    color: "#ea580c", bg: "#fff7ed" },
}

export default function AppCard({ app }) {
  const disabled = !app.url
  const iconDef  = ICON_MAP[app.icon] ?? { icon: HelpCircle, color: "#64748b", bg: "#f1f5f9" }
  const IconComp = iconDef.icon

  const inner = (
    <div className={`card-inner p-5 flex flex-col gap-3 rounded-[14px] h-full border transition-all duration-200
      ${disabled
        ? "bg-slate-50 border-slate-100 grayscale"
        : "bg-white border-slate-100 hover:shadow-md"
      }`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: disabled ? "#f1f5f9" : iconDef.bg }}
      >
        <IconComp size={22} color={disabled ? "#94a3b8" : iconDef.color} strokeWidth={1.8} />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <span className={`text-sm font-semibold leading-tight ${disabled ? "text-slate-400" : "text-slate-800"}`}>
          {app.label}
        </span>
        <span className="text-xs text-slate-400 leading-snug">{app.description}</span>
      </div>

      {disabled && (
        <span className="self-start text-[11px] font-semibold text-amber-700 bg-amber-100 border border-amber-200 rounded-full px-2.5 py-0.5">
          Próximamente
        </span>
      )}
    </div>
  )

  if (disabled) {
    return <div className="card-animated-border disabled h-full cursor-default">{inner}</div>
  }

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-animated-border h-full block"
    >
      {inner}
    </a>
  )
}