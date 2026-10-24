// ─── TERRAX Series Data ───────────────────────────────────────────────────────
// Six customer-facing series. Image paths point to public/assets/products/.
// Assign sizeConfigIds from the master list in products.ts only as confirmed.

export interface Series {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroDescription: string;
  // Confirmed size IDs from sizeConfigs in products.ts.
  // Update when client confirms per-series availability.
  sizeConfigIds: string[];
  imagePath: string;          // /assets/products/<series>/hero.webp
  galleryPaths: string[];     // Additional product images
  highlights: string[];       // 3-4 key feature bullets (no invented specs)
  applications: string[];     // Typical use cases
  order: number;
}

export const allSeries: Series[] = [
  {
    id: 'mini',
    slug: 'mini-series',
    name: 'Mini Series',
    shortName: 'Mini',
    tagline: 'Compact Power for Small Fields',
    description:
      'The Terrax Mini Series is engineered for compact tractors and small to medium landholdings. Designed for precision tillage where maneuverability matters.',
    heroDescription:
      'Purpose-built for small-acreage farming and orchard work with compact tractors. The Mini Series delivers reliable soil preparation in tight spaces.',
    sizeConfigIds: ['s3-16', 's35-20', 's35-24'],
    imagePath: '/assets/products/mini-series/hero.png',
    galleryPaths: ['/assets/products/mini-series/hero.png'],
    highlights: [
      'Compatible with compact and sub-compact tractors',
      'Narrow working widths for precise tillage',
      'Durable blade configuration for efficient soil turn',
      'Ideal for small to medium landholdings',
    ],
    applications: ['Vegetable farming', 'Small fields', 'Kitchen gardens', 'Nurseries'],
    order: 1,
  },
  {
    id: 'orchard',
    slug: 'orchard-series',
    name: 'Orchard Series',
    shortName: 'Orchard',
    tagline: 'Precision Tillage Between the Rows',
    description:
      'The Terrax Orchard Series is specifically designed for inter-row soil management in orchards, vineyards, and plantation crops.',
    heroDescription:
      'Engineered for controlled, precise tillage in orchard and plantation environments. Low-profile build and optimized blade placement for between-row operation.',
    sizeConfigIds: ['s3-16', 's35-20', 's35-24', 's4-30'],
    imagePath: '/assets/products/orchard-series/hero.png',
    galleryPaths: [
      '/assets/products/orchard-series/hero.png',
      '/assets/products/terrax-rotavator-gear-drive-side.png',
      '/assets/products/terrax-rotavator-dualtone.png',
      '/assets/products/terrax-rotavator-classic-orange.png',
      '/assets/products/terrax-rotavator-heavy-duty.png',
    ],
    highlights: [
      'Low-clearance design for orchard environments',
      'Precise inter-row tillage without root damage',
      'Robust build for continuous orchard use',
      'Compatible with orchard and plantation tractors',
    ],
    applications: ['Orchards', 'Vineyards', 'Plantations', 'Fruit gardens'],
    order: 2,
  },
  {
    id: 'regular',
    slug: 'regular-series',
    name: 'Regular Series',
    shortName: 'Regular',
    tagline: 'Dependable Tillage for Every Season',
    description:
      'The Terrax Regular Series is the benchmark for everyday rotavator performance. Built for reliable, season-after-season use across a wide range of soil and crop conditions.',
    heroDescription:
      'The Regular Series sets the standard for dependable tillage performance. Versatile sizes and a proven build make it suitable for the majority of Indian farming conditions.',
    sizeConfigIds: ['s4-30', 's5-36', 's55-39', 's55-42', 's6-42'],
    imagePath: '/assets/products/regular-series/hero.png',
    galleryPaths: [
      '/assets/products/regular-series/hero.png',
      '/assets/products/terrax-rotavator-gear-drive-side.png',
      '/assets/products/terrax-rotavator-dualtone.png',
      '/assets/products/terrax-rotavator-heavy-duty.png',
      '/assets/products/terrax-rotavator-chrome.png',
    ],
    highlights: [
      'Wide size range for varied field requirements',
      'Proven durability for season-round operation',
      'Optimized blade geometry for efficient soil mixing',
      'Compatible with standard mid-range tractors',
    ],
    applications: ['Paddy fields', 'Wheat fields', 'Cotton farming', 'Mixed cropping'],
    order: 3,
  },
  {
    id: 'regular-plus',
    slug: 'regular-plus-series',
    name: 'Regular Plus Series',
    shortName: 'Regular Plus',
    tagline: 'Enhanced Performance, Greater Versatility',
    description:
      'The Terrax Regular Plus Series elevates the standard rotavator design with enhanced structural reinforcement and a broader size range for demanding conditions.',
    heroDescription:
      'When standard isn\'t enough — the Regular Plus Series offers enhanced build strength and extended size coverage for more demanding tillage requirements.',
    sizeConfigIds: ['s5-36', 's55-39', 's55-42', 's6-42', 's6-48'],
    imagePath: '/assets/products/regular-plus-series/hero.png',
    galleryPaths: [
      '/assets/products/regular-plus-series/hero.png',
      '/assets/products/terrax-rotavator-gear-drive-side.png',
      '/assets/products/terrax-rotavator-classic-orange.png',
      '/assets/products/terrax-rotavator-heavy-duty.png',
      '/assets/products/terrax-rotavator-chrome.png',
    ],
    highlights: [
      'Reinforced gearbox and side frame construction',
      'Extended working widths for higher field coverage',
      'Optimized for demanding soil conditions',
      'Compatible with higher horsepower tractors',
    ],
    applications: ['Commercial farming', 'Heavy clay soils', 'Stubble incorporation', 'Large landholdings'],
    order: 4,
  },
  {
    id: 'sami-champion',
    slug: 'sami-champion-series',
    name: 'Sami Champion Series',
    shortName: 'Sami Champion',
    tagline: 'Championship-Grade Agricultural Performance',
    description:
      'The Terrax Sami Champion Series represents a high-performance tier of rotavators engineered for the most demanding tillage applications.',
    heroDescription:
      'Built for high-output commercial farming, the Sami Champion Series delivers championship-grade performance where every tillage pass must count.',
    sizeConfigIds: ['s6-42', 's6-48', 's7-48', 's7-54'],
    imagePath: '/assets/products/sami-champion-series/hero.png',
    galleryPaths: [
      '/assets/products/sami-champion-series/hero.png',
      '/assets/products/terrax-rotavator-gear-drive-side.png',
      '/assets/products/terrax-rotavator-dualtone.png',
      '/assets/products/terrax-rotavator-classic-orange.png',
      '/assets/products/terrax-rotavator-chrome.png',
    ],
    highlights: [
      'High-performance build for demanding farm operations',
      'Wide working widths for maximum field efficiency',
      'Engineered for high-horsepower tractor compatibility',
      'Robust transmission for continuous heavy-duty use',
    ],
    applications: ['Large commercial farms', 'Heavy duty tillage', 'Sugarcane fields', 'Contract farming'],
    order: 5,
  },
  {
    id: 'gyrovator',
    slug: 'gyrovator-series',
    name: 'Gyrovator Series',
    shortName: 'Gyrovator',
    tagline: 'Vertical Tillage. Deeper Results.',
    description:
      'The Terrax Gyrovator Series is engineered for vertical tillage and deep soil conditioning, offering a distinct operational approach compared to conventional rotavators.',
    heroDescription:
      'A specialized tillage solution — the Gyrovator Series delivers deep soil conditioning and vertical mixing for improved soil structure and crop establishment.',
    sizeConfigIds: ['s5-36', 's55-39', 's55-42', 's6-42', 's6-48'],
    imagePath: '/assets/products/gyrovator-series/hero.png',
    galleryPaths: [
      '/assets/products/gyrovator-series/hero.png',
      '/assets/products/terrax-rotavator-gear-drive-side.png',
      '/assets/products/terrax-rotavator-heavy-duty.png',
      '/assets/products/terrax-rotavator-dualtone.png',
      '/assets/products/terrax-rotavator-classic-orange.png',
    ],
    highlights: [
      'Vertical tillage action for superior soil conditioning',
      'Deep penetration for improved root development',
      'Efficient residue incorporation capability',
      'Engineered for varied soil and crop conditions',
    ],
    applications: ['Deep tillage', 'Residue management', 'Soil conditioning', 'Pre-planting preparation'],
    order: 6,
  },
];

// Helpers
export const getSeriesBySlug = (slug: string): Series | undefined =>
  allSeries.find((s) => s.slug === slug);

export const getSeriesById = (id: string): Series | undefined =>
  allSeries.find((s) => s.id === id);
