// ─── TERRAX Project & Developer Portfolio Metadata ───────────────────────────
// Central metadata configuration for technical documentation and case studies.
// Internal reference only — not exposed on the public website interface.

export interface ProjectMetadata {
  projectName: string;
  tagline: string;
  projectType: string;
  category: string;
  role: string;
  developer: string;
  developerProfile: string;
  year: string;
  location: string;
  technologies: string[];
  features: string[];
  routes: Array<{ path: string; name: string; description: string }>;
  contactArchitecture: {
    phones: string[];
    whatsapp: string;
    email: string;
    location: string;
  };
}

export const projectMeta: ProjectMetadata = {
  projectName: 'Terrax',
  tagline: 'Built for the Earth. Engineered to Perform.',
  projectType: 'Agricultural Machinery / Manufacturer Website',
  category: 'Agriculture / Industrial Manufacturing',
  role: 'Website Design & Development',
  developer: 'Divyanshu',
  developerProfile: 'https://www.linkedin.com/in/divyanshu-patel-99450426b/',
  year: '2026',
  location: 'Chandial, Gujarat, India',
  technologies: [
    'React 18',
    'TypeScript',
    'Vite',
    'Tailwind CSS v4',
    'React Router v7',
    'Lucide React',
  ],
  features: [
    'Mobile-first responsive architecture (320px to 1920px+)',
    'Dynamic product catalogue and 6 dedicated series routes',
    'Product enquiry flow with URL parameter pre-population',
    'WhatsApp enquiry generator with URL-encoded structured messages',
    'Accessible form validation and error handling',
    'Centralized contact data and interactive Google Maps',
    'Full SEO metadata, XML sitemap, and Open Graph social sharing',
    'Custom minimal industrial 404 page',
    'Route scroll reset and back-to-top controls',
  ],
  routes: [
    { path: '/', name: 'Home', description: 'Brand hero, trust metrics, product highlights, and Gujarat manufacturing overview' },
    { path: '/about', name: 'About Terrax', description: 'Brand engineering philosophy and four core product principles' },
    { path: '/products', name: 'Product Catalogue', description: 'Overview of all six rotavator series and size configurations' },
    { path: '/products/mini-series', name: 'Mini Series', description: 'Compact tractors and small acreage tillage' },
    { path: '/products/orchard-series', name: 'Orchard Series', description: 'Low-clearance inter-row orchard and plantation tillage' },
    { path: '/products/regular-series', name: 'Regular Series', description: 'Everyday benchmark rotary tiller performance' },
    { path: '/products/regular-plus-series', name: 'Regular Plus Series', description: 'Enhanced reinforced build for demanding soil conditions' },
    { path: '/products/sami-champion-series', name: 'Sami Champion Series', description: 'Championship-grade high output commercial farming' },
    { path: '/products/gyrovator-series', name: 'Gyrovator Series', description: 'Vertical tillage and deep soil conditioning' },
    { path: '/why-terrax', name: 'Why Terrax', description: 'Engineering brand manifesto with 5 value pillars' },
    { path: '/applications', name: 'Applications', description: 'Soil preparation role, field selection factors, and 11 configurations' },
    { path: '/manufacturing', name: 'Manufacturing', description: 'Factory location context on Indore Highway, Chandial, Gujarat' },
    { path: '/contact', name: 'Contact & Enquiry', description: 'Direct phone lines, WhatsApp, email, map, and structured enquiry form' },
  ],
  contactArchitecture: {
    phones: ['+91 9099903217', '+91 8485998851', '+91 98796 64168'],
    whatsapp: '+91 9099903217',
    email: 'cruciateagritech@gmail.com',
    location: '14, Kirti Industrial Park, Indore Highway, Nr. Amba Hotel, Chandial - 382433 (Gujarat - India)',
  },
};
