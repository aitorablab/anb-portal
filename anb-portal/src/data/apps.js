export const categories = [

  {
    id: "gestion",
    label: "Gestión",
    section: "gestion",
    apps: [
      { id: "erp",      label: "ERP",              description: "Gestión de recursos empresariales",        url: "",                                          icon: "erp" },
      { id: "crm",      label: "CRM",              description: "Gestión de clientes y oportunidades",      url: "https://ablab.crm4.dynamics.com/apps/TM",   icon: "crm" },
      { id: "personas", label: "Gestión de personas", description: "Gestión de RRHH y equipo interno",     url: "https://aitorablab.github.io/gestionpersonas/", icon: "personas" },
      { id: "pmo",      label: "PMO",              description: "Gestión de proyectos y tareas",            url: "https://aitorablab.github.io/tareaspro/",   icon: "pmo" },
      { id: "agenda",   label: "Agenda comercial", description: "Seguimiento de visitas y clientes",        url: "https://aitorablab.github.io/agendapro/",   icon: "agenda" },
    ],
  },
  {
    id: "microsoft",
    label: "Documentación",
    section: "aplicaciones",
    apps: [
      { id: "teams",      label: "Teams",                   description: "Videollamadas y chat de equipo",         url: "https://teams.microsoft.com",               icon: "teams" },
      { id: "sp-doctec",  label: "Doc. Técnica",            description: "Biblioteca de documentación técnica",    url: "https://ablaboratorios.sharepoint.com/:f:/s/equipoab/IgAufdHMx2y_Q7MFNrrDPCxFAZQ13SlTxMtAsV5ZBrz2njE?e=9yWByk", icon: "sharepoint" },
      { id: "sp-tarifas", label: "Tarifas",                 description: "Tarifas y listas de precios actualizadas", url: "https://ablaboratorios.sharepoint.com/:f:/s/equipoab/IgBXxmGPy-teRZ7CcxlNrogGAYgyFIAxd7ZkzB1N4j-_7P8?e=3kOib3",                icon: "sharepoint" },
    ],
  },
  {
    id: "internal",
    label: "Herramientas internas",
    section: "aplicaciones",
    apps: [
      { id: "email-assistant",  label: "Asistente de correo",       description: "Redacta emails con IA en segundos",      url: "", icon: "mail" },
      { id: "slides-generator", label: "Generador de diapositivas", description: "Crea presentaciones profesionales con IA", url: "", icon: "slides" },
      { id: "evento25", label: "25 Aniversario", description: "Landing page del evento del 25 aniversario", url: "https://aitorablab.github.io/evento25aniversario/", icon: "evento" },
    ],
  },
]

export const news = [
  { id: 1, tag: "Calidad", date: "11 may 2026", title: "Nueva certificación ISO 9001 renovada con éxito", summary: "A&B Laboratorios supera la auditoría externa y renueva su certificación de calidad para los próximos tres años." },
  { id: 2, tag: "Producto", date: "6 may 2026", title: "Lanzamiento de la nueva línea de desinfectantes EcoPro", summary: "La gama EcoPro combina máxima eficacia biocida con fórmulas de bajo impacto ambiental, disponible desde mayo." },
  { id: 3, tag: "Equipo", date: "24 abr 2026", title: "Bienvenida a tres nuevas incorporaciones al equipo técnico", summary: "El departamento de I+D crece con tres especialistas en microbiología industrial para reforzar los proyectos de 2026." },
  { id: 4, tag: "Tecnología", date: "15 abr 2026", title: "Portal interno A&B: nueva era digital en marcha", summary: "Arranca el desarrollo del portal interno centralizado que unificará todas las herramientas y aplicaciones de la empresa." },
  { id: 5, tag: "Eventos", date: "3 abr 2026", title: "A&B presente en el Congreso Nacional de Biotecnología", summary: "El equipo comercial participará como expositor en Valencia del 15 al 17 de mayo con demostraciones en directo." },
]

export const events = [
  { date: "15 may", label: "Congreso Biotecnología Valencia" },
  { date: "20 may", label: "Reunión de equipo trimestral" },
  { date: "2 jun",  label: "Auditoría interna Q2" },
  { date: "8 jun",  label: "Visita EHU" },
  { date: "22 jun",  label: "Presentación proyecto H26" },
]
