export const person = {
  name: "Ysidro Almonte",
  fullName: "Ysidro Almonte Morales",
  title: "Senior WordPress / PHP Engineer",
  email: "almonte.ysidro@gmail.com",
  location: "Dominican Republic",
  links: {
    linkedin: "https://www.linkedin.com/in/ysidro-almonte/",
    github: "https://github.com/ysidro",
    site: "https://ysidroalmonte.com",

    // Live Google Doc exported as PDF.
    // Changes made in Google Drive are reflected without
    // re-uploading a static resume file.
    resume:
      "https://docs.google.com/document/d/1ghJqQxD4qdk2TTmkshdjhn8h6eQi420q8jCg-nPyud4/export?format=pdf",
  },
};
export const hero = {
  eyebrow: "Hello, I'm Ysidro Almonte",
  headline: "Senior WordPress / PHP Engineer",
  subhead:
    "Building high-performance WordPress platforms, WooCommerce solutions, custom plugins, and API-driven digital products for remote teams across the U.S. and internationally.",
  chips: [
    "8+ Years Experience",
    "WordPress / PHP",
    "WooCommerce",
    "APIs",
    "Performance",
    "Remote Collaboration",
  ],
  ctaPrimary: {
    label: "View Engineering Work",
    href: "/work/",
  },
  ctaResume: {
    label: "Download Resume",
    href: person.links.resume,
  },
  ctaGithub: {
    label: "GitHub",
    href: person.links.github,
  },
};

export const proof = [
  { value: "8+", label: "Years of Experience" },
  { value: "15+", label: "Custom WordPress Solutions" },
  { value: "30+", label: "Campaign Landing Pages" },
  { value: "$2M+", label: "Digital Media Supported" },
  { value: "Up to 80%", label: "Performance Improvement" },
  { value: "90+", label: "PageSpeed Scores" },
];

export const expertise = [
  {
    name: "WordPress Engineering",
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
    name: "Backend & Integrations",
    stack: [
      "PHP",
      "Object-Oriented PHP",
      "MySQL",
      "REST APIs",
      "OAuth",
      "Composer",
      "Payment APIs",
      "Third-party Integrations",
    ],
  },
  {
    name: "Frontend & Performance",
    stack: [
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Svelte",
      "Core Web Vitals",
      "Technical SEO",
      "Performance Optimization",
    ],
  },
  {
    name: "Infrastructure & Additional",
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
];

export const experience = [
  {
    period: "2026",
    company: "Experience Design Studio",
    role: "WordPress Developer · Remote · Short-term Contract",
    impact:
      "Delivered two production WordPress websites from Figma designs using reusable, responsive components and modern frontend workflows.",
  },
  {
    period: "2024–2025",
    company: "55places.com / Neighborhoods.com",
    role: "Web Developer · Chicago, USA · Remote · Full-time Contract",
    impact:
      "Built custom WordPress functionality and API integrations for a large-scale real estate platform, including MLS data synchronization and lead-generation workflows.",
  },
  {
    period: "2023–2024",
    company: "Crunch.io",
    role: "Web Developer · Denver, CO, USA · Remote · Part-time Contract",
    impact:
      "Built high-performance marketing websites and conversion-focused landing pages with Hugo, JavaScript, and modern frontend workflows, with an emphasis on performance and technical SEO.",
  },
  {
    period: "2017–2024",
    company: "OMD Dominicana",
    role: "Web Developer",
    impact:
      "Delivered 15+ custom WordPress and WooCommerce solutions and 30+ campaign landing pages supporting more than $2M in media spend, with performance improvements of up to 80%.",
  },
];

// Secondary client work — real, but not deep enough to carry a full 12-block
// case study. Shown as a compact grid on /work/ rather than diluting the
// featured engineering projects above.
export const moreProjects = [
  {
  name: "Chevrolet.com.do",
  category: "Automotive / Headless CMS",
  tags: ["Gatsby.js", "WordPress", "GraphQL"],
  description:
    "Headless WordPress and Gatsby implementation where WordPress manages structured content through WPGraphQL and Gatsby generates optimized static pages.",
  url: "https://chevrolet.com.do/",
  image: "/images/work/legacy/chevrolet-w900-h720.png",
},
  {
  name: "Suzuki.com.do",
  category: "Automotive / Headless CMS",
  tags: ["Gatsby.js", "WordPress", "ACF", "GraphQL"],
  description:
    "Headless Gatsby and WordPress implementation with ACF-powered vehicle data and automated deployment workflows triggered by CMS content updates.",
  url: "https://suzuki.com.do/",
  image: "/images/work/legacy/suzuki-w900-h720.png",
},
  {
  name: "CoachCarolinTaveras.com",
  category: "Coaching / E-commerce",
  tags: ["WordPress", "WooCommerce", "Oxygen Builder"],
  description:
    "WooCommerce-powered coaching platform supporting session packages, digital products, and booking workflows with Calendly integration.",
  url: "https://coachcarolintaveras.com",
  image: "/images/work/legacy/coachcarolin.png",
},
 {
  name: "Argos.com.do",
  category: "Corporate / WordPress",
  tags: ["WordPress", "ACF", "PHP"],
  description:
    "Custom WordPress theme with ACF flexible content fields, giving the internal team structured control over content while preserving the approved visual system.",
  url: "https://argos.com.do/",
  image: "/images/work/legacy/argos.jpg",
},
  {
    name: "Seer.bio",
    category: "Biotech / Corporate WordPress",
    tags: ["WordPress", "ACF", "Custom Theme"],
    description:
      "Custom WordPress theme and ACF architecture for a proteomics biotech company's corporate marketing site.",
    url: "https://seer.bio/",
    image: "/images/work/live/seer-bio.png",
  },
  {
  name: "M Voy — Marketing Site",
  category: "Mobility / Product Marketing",
  tags: ["Next.js", "React"],
  description:
    "Product marketing site for the M Voy mobility platform, built with Next.js and React to communicate app functionality and drive App Store and Google Play downloads.",
  url: "https://mvoyrd.com/",
  image: "/images/work/live/mvoyrd.png",
},
  {
  name: "GetWiredForPurpose.com",
  category: "Nonprofit / Custom WordPress",
  tags: ["WordPress", "ACF", "Figma", "PHP"],
  description:
    "Custom WordPress theme developed directly from Figma without a page builder, using ACF to provide structured editorial control over reusable page sections.",
  image: "/images/work/legacy/getwiredforpurpose.jpg",
},
  {
    name: "Imwhile.com",
    category: "Business / WordPress",
    tags: ["WordPress", "Gutenberg", "PHP"],
    description:
      "Custom block-based theme built on Gutenberg for full editorial control, with clean semantic markup and optimized assets.",
    image: "/images/work/legacy/imwhile.png",
  },
  
];

export const mobileIntro = {
  eyebrow: "Beyond WordPress",
  headline: "Mobile & Emerging Engineering",
  body:
    "I'm extending my production engineering experience into cross-platform mobile applications with Flutter and Dart, while developing backend capabilities with Go.",
};

export const mobileProjects = [
  {
    name: "M Voy",
    status: "Active Development",
    category: "Mobility Platform",
    stack: ["Flutter", "Dart", "REST APIs", "Maps", "Geolocation"],
    description:
      "Cross-platform mobility application with customer and driver workflows, authentication, maps, geolocation, and location-based service experiences.",
    url: "https://mvoyrd.com/",
  },
  {
    name: "Octanos",
    status: "Active Development",
    category: "Fuel Delivery Platform",
    stack: ["Flutter", "Dart", "REST APIs", "Maps", "Geolocation"],
    description:
      "Cross-platform delivery application supporting customer and driver workflows, authentication, order management, location confirmation, delivery tracking, and role-specific interfaces.",
    url: "https://octanos.com.do/",
  },
];

export const education = {
  degree: "Bachelor’s Degree in Advertising",
  school: "APEC University, Dominican Republic",
  year: "2018",
  training: [
    "Dynamic Web Development — PHP & MySQL",
    "Full-Stack JavaScript — Node.js / ES9 (2021)",
    "React Global Summit — Geekle (2022)",
    "React Native Without Borders — Udemy (2022)",
  ],
};

export const about = {
  paragraph:
    "My career combines software engineering with marketing technology. I hold a Bachelor’s Degree in Advertising, which influences how I approach development: not only as working code, but as technology connected to business goals, performance, and user experience. Over 8+ years working with agencies and product teams in the U.S. and the Dominican Republic, I’ve built custom WordPress platforms, WooCommerce solutions, API integrations, and performance-focused digital products supporting large-scale marketing initiatives.",
};

export const githubRepos = [
  {
    name: "Real Estate API Sync",
    demonstrates:
      "WordPress backend development and external property data synchronization",
    stack: ["PHP", "WordPress", "REST API", "MySQL"],
    url: "https://github.com/ysidro/real-estate-sync/tree/main",
  },
  {
    name: "Woo Payment Gateway",
    demonstrates:
      "WooCommerce checkout customization and payment API integration",
    stack: ["PHP", "WooCommerce", "JavaScript"],
    url: "https://github.com/ysidro/WooCommerce-CardNet-Payment-Gateway-Dominican-Republic-/blob/main/readme.md",
  },
];

export const closing = {
  headline: "Looking for a Senior WordPress / PHP Engineer?",
  body:
    "I’m open to remote opportunities with U.S. and international engineering teams.",
};