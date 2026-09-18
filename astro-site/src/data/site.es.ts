import { person } from './site';

// Spanish mirror of site.ts. Names, URLs, images and tech-stack labels stay
// in English (proper nouns / industry terms); only human-written copy is
// translated. Keep this shape in sync with site.ts when either changes.

export { person };

export const hero = {
  eyebrow: "Hola, soy Ysidro Almonte",
  headline: "Senior WordPress / PHP Engineer",
  subhead:
    "Construyo y mantengo plataformas WordPress de alto rendimiento, sistemas WooCommerce, plugins a medida y productos basados en APIs para agencias y equipos remotos en EE. UU. y otros mercados.",
  chips: [
    "8+ años de experiencia",
    "WordPress / PHP",
    "WooCommerce",
    "APIs",
    "Rendimiento",
    "Colaboración remota",
  ],
  ctaPrimary: {
    label: "Ver trabajo de ingeniería",
    href: "/es/work/",
  },
  ctaResume: {
    label: "Descargar currículum",
    href: person.links.resume,
  },
  ctaGithub: {
    label: "GitHub",
    href: person.links.github,
  },
};

export const proof = [
  { value: "8+", label: "Años de experiencia" },
  { value: "15+", label: "Soluciones WordPress a medida" },
  { value: "30+", label: "Landing pages de campaña" },
  { value: "$2M+", label: "En inversión publicitaria soportada" },
  { value: "Hasta 80%", label: "De mejora en rendimiento" },
  { value: "90+", label: "En PageSpeed" },
];

export const expertise = [
  {
    name: "Ingeniería WordPress",
    stack: [
      "WordPress",
      "WooCommerce",
      "Custom Plugins",
      "Custom Themes",
      "ACF",
      "Gutenberg",
      "WP REST API",
      "WP-CLI",
      "Hooks & Filters",
    ],
  },
  {
    name: "Backend e integraciones",
    stack: [
      "PHP",
      "Object-Oriented PHP",
      "MySQL",
      "REST APIs",
      "OAuth",
      "Composer",
      "Payment APIs",
      "Integraciones con terceros",
    ],
  },
  {
    name: "Frontend y rendimiento",
    stack: [
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Svelte",
      "Core Web Vitals",
      "SEO técnico",
      "Optimización de rendimiento",
    ],
  },
  {
    name: "Infraestructura y adicionales",
    stack: [
      "Git",
      "GitHub",
      "Docker",
      "Cloudflare",
      "AWS",
      "Google Cloud",
      "Flutter",
      "Dart",
      "Python",
      "Go",
    ],
  },
  {
    name: "Ingeniería de producto asistida por IA",
    stack: [
      "Descubrimiento de producto",
      "Arquitectura",
      "Orquestación de agentes",
      "Implementación",
      "Revisión de código",
      "Pruebas automatizadas",
      "Documentación",
      "Validación en producción",
    ],
  },
];

export const aiWorkflow = {
  eyebrow: "Ingeniería asistida por IA",
  headline: "Mayor velocidad, con el criterio técnico siempre presente.",
  body:
    "Uso flujos de trabajo estructurados con IA para avanzar desde el descubrimiento hasta producción en WordPress, PHP, Go, Python, React, Node.js, Firebase y Flutter. La IA acelera investigación, implementación, pruebas, depuración y documentación; yo sigo siendo responsable de la arquitectura, seguridad, revisión de código, criterios de aceptación y validación en producción.",
  stages: [
    { number: "01", title: "Definir", text: "Aclarar el problema, las restricciones, los riesgos y los criterios medibles de aceptación antes de implementar." },
    { number: "02", title: "Diseñar", text: "Elegir el stack, los límites del sistema, el modelo de datos, los controles de seguridad y el plan de entrega." },
    { number: "03", title: "Orquestar", text: "Usar agentes especializados para acelerar tareas delimitadas de implementación, investigación, pruebas y documentación." },
    { number: "04", title: "Verificar", text: "Revisar el código, ejecutar pruebas, inspeccionar rutas de fallo y validar el resultado contra los requisitos de producción." },
  ],
  note: "La IA aumenta la capacidad de entrega. La responsabilidad técnica sigue siendo mía.",
};

export const experience = [
  {
    period: "2026",
    company: "Experience Design Studio",
    role: "WordPress Developer · Remoto · Contrato de corto plazo",
    impact:
      "Entregué dos sitios WordPress en producción a partir de diseños en Figma, usando componentes reutilizables y responsivos.",
  },
  {
    period: "2024–2025",
    company: "55places.com / Neighborhoods.com",
    role: "Web Developer · Chicago, USA · Remoto · Contrato full-time",
    impact:
      "Desarrollé funcionalidad WordPress a medida e integraciones de API para una plataforma inmobiliaria a gran escala, incluyendo sincronización de datos MLS y flujos de generación de leads.",
  },
  {
    period: "2023–2024",
    company: "Crunch.io",
    role: "Web Developer · Denver, CO, USA · Remoto · Contrato part-time",
    impact:
      "Construí sitios de marketing y landing pages de alto rendimiento con Hugo, JavaScript y flujos de trabajo frontend modernos, con énfasis en performance y SEO técnico.",
  },
  {
    period: "2017–2024",
    company: "OMD Dominicana",
    role: "Web Developer",
    impact:
      "Entregué 15+ soluciones WordPress y WooCommerce a medida y 30+ landing pages de campaña, soportando más de $2M en inversión publicitaria, con mejoras de rendimiento de hasta 80%.",
  },
];

// Secondary client work — mirrors moreProjects in site.ts.
export const moreProjects = [
  {
    name: "Chevrolet.com.do",
    category: "Automotriz / Headless CMS",
    tags: ["Gatsby.js", "WordPress", "GraphQL"],
    description:
      "Implementación headless de WordPress y Gatsby, donde WordPress gestiona el contenido estructurado a través de WPGraphQL y Gatsby genera páginas estáticas optimizadas.",
    url: "https://chevrolet.com.do/",
    image: "/images/work/legacy/chevrolet-w900-h720.png",
  },
  {
    name: "Suzuki.com.do",
    category: "Automotriz / Headless CMS",
    tags: ["Gatsby.js", "WordPress", "ACF", "GraphQL"],
    description:
      "Implementación headless de Gatsby y WordPress con datos de vehículos gestionados vía ACF y despliegues automáticos activados por cambios de contenido en el CMS.",
    url: "https://suzuki.com.do/",
    image: "/images/work/legacy/suzuki-w900-h720.png",
  },
  {
    name: "CoachCarolinTaveras.com",
    category: "Coaching / E-commerce",
    tags: ["WordPress", "WooCommerce", "Oxygen Builder"],
    description:
      "Plataforma de coaching impulsada por WooCommerce, con paquetes de sesiones, productos digitales y flujos de reserva integrados con Calendly.",
    url: "https://coachcarolintaveras.com",
    image: "/images/work/legacy/coachcarolin.png",
  },
  {
    name: "Argos.com.do",
    category: "Corporativo / WordPress",
    tags: ["WordPress", "ACF", "PHP"],
    description:
      "Tema WordPress a medida con campos flexibles de ACF, dando al equipo interno control estructurado sobre el contenido sin perder el sistema visual aprobado.",
    url: "https://argos.com.do/",
    image: "/images/work/legacy/argos.jpg",
  },
  {
    name: "Seer.bio",
    category: "Biotecnología / WordPress corporativo",
    tags: ["WordPress", "ACF", "Custom Theme"],
    description:
      "Tema WordPress y arquitectura ACF a medida para el sitio de marketing corporativo de una empresa de proteómica.",
    url: "https://seer.bio/",
    image: "/images/work/live/seer-bio.png",
  },
  {
    name: "M Voy — Sitio de marketing",
    category: "Movilidad / Marketing de producto",
    tags: ["Next.js", "React"],
    description:
      "Sitio de marketing de producto para la plataforma de movilidad M Voy, construido con Next.js y React para comunicar la funcionalidad de la app e impulsar descargas en App Store y Google Play.",
    url: "https://mvoyrd.com/",
    image: "/images/work/live/mvoyrd.png",
  },
  {
    name: "GetWiredForPurpose.com",
    category: "Sin fines de lucro / WordPress a medida",
    tags: ["WordPress", "ACF", "Figma", "PHP"],
    description:
      "Tema WordPress desarrollado directamente desde Figma sin page builder, usando ACF para dar control editorial estructurado sobre secciones reutilizables.",
    image: "/images/work/legacy/getwiredforpurpose.jpg",
  },
  {
    name: "Imwhile.com",
    category: "Negocios / WordPress",
    tags: ["WordPress", "Gutenberg", "PHP"],
    description:
      "Tema a medida basado en bloques de Gutenberg para control editorial completo, con marcado semántico limpio y assets optimizados.",
    image: "/images/work/legacy/imwhile.png",
  },
];

export const mobileIntro = {
  eyebrow: "Más allá de WordPress",
  headline: "Mobile e ingeniería emergente",
  body:
    "Estoy extendiendo mi experiencia de ingeniería en producción hacia aplicaciones móviles multiplataforma con Flutter y Dart, mientras desarrollo capacidades de backend con Go.",
};

export const mobileProjects = [
  {
    name: "M Voy",
    status: "En desarrollo activo",
    category: "Plataforma de movilidad",
    stack: ["Flutter", "Dart", "REST APIs", "Maps", "Geolocation"],
    description:
      "Aplicación de movilidad multiplataforma con flujos de cliente y conductor, autenticación, mapas, geolocalización y experiencias basadas en ubicación.",
    url: "https://mvoyrd.com/",
  },
  {
    name: "Octanos",
    status: "En desarrollo activo",
    category: "Plataforma de entrega de combustible",
    stack: ["Flutter", "Dart", "REST APIs", "Maps", "Geolocation"],
    description:
      "Aplicación de entrega multiplataforma que soporta flujos de cliente y conductor, autenticación, gestión de pedidos, confirmación de ubicación, seguimiento de entregas e interfaces según el rol.",
    url: "https://octanos.com.do/",
  },
];

export const productsIntro = {
  eyebrow: "Productos",
  headline: "Herramientas que he lanzado",
  body:
    "Productos propios construidos de principio a fin — desde la idea hasta un producto en vivo y de pago — fuera del trabajo con clientes.",
};

export const products = [
  {
    name: "CreaThink Tools",
    status: "En vivo",
    category: "SaaS en navegador",
    stack: ["Next.js", "React", "Client-side Processing"],
    description:
      "Herramientas de navegador rápidas y privadas por defecto — compresión de imágenes, redimensionado para redes sociales y generación de códigos QR — sin cuenta requerida y con archivos procesados enteramente en el dispositivo.",
    url: "https://creathinktools.com/",
  },
];

export const education = {
  degree: "Licenciatura en Publicidad",
  school: "Universidad APEC, República Dominicana",
  year: "2018",
  training: [
    "Desarrollo Web Dinámico — PHP y MySQL",
    "JavaScript Full-Stack — Node.js / ES9 (2021)",
    "React Global Summit — Geekle (2022)",
    "React Native Without Borders — Udemy (2022)",
  ],
};

export const about = {
  paragraph:
    "Mi carrera combina ingeniería de software, tecnología de marketing y desarrollo de producto. La Licenciatura en Publicidad me ayuda a conectar las decisiones técnicas con objetivos de negocio, rendimiento y experiencia de usuario. En más de 8 años trabajando con agencias y equipos de producto en EE. UU. y República Dominicana, he construido plataformas WordPress, sistemas WooCommerce, integraciones de API, aplicaciones móviles y productos propios. Hoy utilizo flujos estructurados asistidos por IA para cubrir alcances mayores sin renunciar a la revisión ni a la responsabilidad técnica.",
};

export const githubRepos = [
  {
    name: "Real Estate API Sync",
    demonstrates:
      "Desarrollo backend en WordPress y sincronización de datos externos de propiedades",
    stack: ["PHP", "WordPress", "REST API", "MySQL"],
    url: "https://github.com/ysidro/real-estate-sync/tree/main",
  },
  {
    name: "Woo Payment Gateway",
    demonstrates:
      "Personalización del checkout de WooCommerce e integración de API de pagos",
    stack: ["PHP", "WooCommerce", "JavaScript"],
    url: "https://github.com/ysidro/WooCommerce-CardNet-Payment-Gateway-Dominican-Republic-/blob/main/readme.md",
  },
];

export const closing = {
  headline: "¿Necesitas ingeniería WordPress senior con responsabilidad real?",
  body:
    "Estoy disponible para soporte continuo a agencias, contratos de largo plazo, mejoras de plataformas y proyectos WordPress técnicamente exigentes con equipos de EE. UU. y otros mercados.",
};
