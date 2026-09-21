export type HomeProject = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  url?: string;
  linkLabel?: string;
  githubUrl?: string;
  caseStudy?: string;
  image?: string;
};

// WordPress/PHP work leads: this is a WordPress engineer's portfolio, so the
// first project a visitor reads must prove that. Mobile/product work sits below.
export const homeProjects: Record<'en' | 'es', HomeProject[]> = {
  en: [
    { name: 'Acrylic Photo Print', type: 'E-commerce · Product personalization', description: 'A custom WooCommerce storefront where customers upload, preview and personalize photography products through a purpose-built purchasing flow.', url: 'https://acrylicphotoprint.com/', image: '/images/work/featured/acrylic-photo-print.png', caseStudy: '/work/acrylicphotoprint/', stack: ['WordPress', 'WooCommerce', 'Timber', 'Svelte', 'AWS'] },
    { name: 'Real Estate API Sync', type: 'WordPress backend · Data sync', description: 'A custom WordPress integration that keeps property listings synchronized from external real estate APIs, replacing manual entry with structured Custom Post Types.', githubUrl: 'https://github.com/ysidro/real-estate-sync/tree/main', caseStudy: '/work/real-estate-api-sync/', stack: ['PHP', 'WordPress', 'WP REST API', 'MySQL'] },
    { name: 'Woo Payment Gateway', type: 'WooCommerce · Payments', description: 'A custom WooCommerce payment gateway built for the Dominican Republic market, with secure server-to-server transaction confirmation.', githubUrl: 'https://github.com/ysidro/WooCommerce-CardNet-Payment-Gateway-Dominican-Republic-/blob/main/readme.md', caseStudy: '/work/woo-payment-gateway/', stack: ['PHP', 'WooCommerce', 'Payment APIs'] },
    { name: 'Chevrolet', type: 'Automotive · Headless CMS', description: 'A high-traffic automotive experience using WordPress as a structured content source and Gatsby to deliver fast, optimized customer-facing pages.', url: 'https://chevrolet.com.do/', image: '/images/work/featured/chevrolet.png', stack: ['Gatsby', 'React', 'WordPress', 'WPGraphQL'] },
    { name: 'Seer', type: 'Biotechnology · Corporate platform', description: 'A custom WordPress and ACF implementation that turns complex proteomics content into a structured, maintainable marketing platform.', url: 'https://seer.bio/', image: '/images/work/featured/seer-bio.png', stack: ['WordPress', 'ACF', 'PHP', 'Custom theme'] },
    { name: 'CreathinkTools Login Customizer', type: 'WordPress plugin · Published on WordPress.org', description: 'A free plugin that customizes the WordPress login page from a settings panel, without writing code: background color or image, form box, colors and logo.', url: 'https://wordpress.org/plugins/creathinktools-login-styles/', linkLabel: 'WordPress.org', stack: ['WordPress', 'PHP', 'WordPress.org'] },
  ],
  es: [
    { name: 'Acrylic Photo Print', type: 'E-commerce · Personalización de producto', description: 'Un storefront de WooCommerce a medida donde los clientes suben, previsualizan y personalizan productos fotográficos a través de un flujo de compra construido a propósito.', url: 'https://acrylicphotoprint.com/', image: '/images/work/featured/acrylic-photo-print.png', caseStudy: '/es/work/acrylicphotoprint/', stack: ['WordPress', 'WooCommerce', 'Timber', 'Svelte', 'AWS'] },
    { name: 'Real Estate API Sync', type: 'Backend WordPress · Sincronización de datos', description: 'Integración WordPress a medida que mantiene sincronizados los listados de propiedades desde APIs inmobiliarias externas, reemplazando la entrada manual con Custom Post Types estructurados.', githubUrl: 'https://github.com/ysidro/real-estate-sync/tree/main', caseStudy: '/es/work/real-estate-api-sync/', stack: ['PHP', 'WordPress', 'WP REST API', 'MySQL'] },
    { name: 'Woo Payment Gateway', type: 'WooCommerce · Pagos', description: 'Pasarela de pago a medida para WooCommerce construida para el mercado de República Dominicana, con confirmación segura de transacciones servidor a servidor.', githubUrl: 'https://github.com/ysidro/WooCommerce-CardNet-Payment-Gateway-Dominican-Republic-/blob/main/readme.md', caseStudy: '/es/work/woo-payment-gateway/', stack: ['PHP', 'WooCommerce', 'Payment APIs'] },
    { name: 'Chevrolet', type: 'Automotriz · Headless CMS', description: 'Una experiencia automotriz de alto tráfico que usa WordPress como fuente de contenido estructurado y Gatsby para entregar páginas rápidas y optimizadas al cliente final.', url: 'https://chevrolet.com.do/', image: '/images/work/featured/chevrolet.png', stack: ['Gatsby', 'React', 'WordPress', 'WPGraphQL'] },
    { name: 'Seer', type: 'Biotecnología · Plataforma corporativa', description: 'Una implementación de WordPress y ACF a medida que convierte contenido complejo de proteómica en una plataforma de marketing estructurada y mantenible.', url: 'https://seer.bio/', image: '/images/work/featured/seer-bio.png', stack: ['WordPress', 'ACF', 'PHP', 'Custom theme'] },
    { name: 'CreathinkTools Login Customizer', type: 'Plugin de WordPress · Publicado en WordPress.org', description: 'Un plugin gratuito que personaliza la página de inicio de sesión de WordPress desde un panel de ajustes, sin escribir código: fondo de color o imagen, caja del formulario, colores y logo.', url: 'https://wordpress.org/plugins/creathinktools-login-styles/', linkLabel: 'WordPress.org', stack: ['WordPress', 'PHP', 'WordPress.org'] },
  ],
};

export type BeyondProject = { name: string; type: string; description: string; url: string; stack: string[] };

export const beyondProjects: Record<'en' | 'es', BeyondProject[]> = {
  en: [
    { name: 'M Voy', type: 'Mobile · Flutter', description: 'Two-sided mobility app: passenger and driver flows, maps, geolocation.', url: '/mobile/', stack: ['Flutter', 'Dart', 'Maps'] },
    { name: 'CreaThink Tools', type: 'Browser SaaS · Next.js', description: 'Privacy-first image and QR tools, processed entirely on-device.', url: 'https://creathinktools.com/', stack: ['Next.js', 'React'] },
  ],
  es: [
    { name: 'M Voy', type: 'Mobile · Flutter', description: 'App de movilidad de dos lados: flujos de pasajero y conductor, mapas, geolocalización.', url: '/es/mobile/', stack: ['Flutter', 'Dart', 'Maps'] },
    { name: 'CreaThink Tools', type: 'Browser SaaS · Next.js', description: 'Herramientas de imagen y QR privadas por defecto, procesadas enteramente en el dispositivo.', url: 'https://creathinktools.com/', stack: ['Next.js', 'React'] },
  ],
};
