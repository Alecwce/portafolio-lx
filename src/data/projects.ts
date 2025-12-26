export const PROJECTS = [
  {
    title: "Service Desk PuntoNet",
    description: "Sistema integral de mesa de ayuda para gestión de tickets y soporte técnico empresarial.",
    image: "https://picsum.photos/id/1/1200/800",
    tags: ['React', 'TypeScript', 'Node.js'],
    type: "wide" as const,
  },
  {
    title: "Sitio Web Institucional",
    description: "Página web moderna para institución educativa desarrollada con Astro y optimizada para rendimiento.",
    image: "https://picsum.photos/id/10/800/1200",
    tags: ['Astro', 'Tailwind', 'SEO'],
    type: "tall" as const,
  },
  {
    title: "Portal Empresa de Internet",
    description: "Plataforma web corporativa para empresa proveedora de servicios de internet.",
    tags: ['React', 'Next.js', 'UI/UX'],
    type: "square" as const,
    color: "bg-purple-100",
  },
  {
    title: "App Anti-Robo IMEI",
    description: "Aplicación móvil para bloquear, desbloquear o apagar dispositivos robados mediante IMEI.",
    image: "https://picsum.photos/id/48/1200/800",
    tags: ['React Native', 'Firebase', 'Security'],
    type: "wide" as const,
  },
];
