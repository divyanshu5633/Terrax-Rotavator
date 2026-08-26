// ─── TERRAX Navigation Configuration ─────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const seriesLinks: NavItem[] = [
  { label: 'Mini Series', href: '/products/mini-series' },
  { label: 'Orchard Series', href: '/products/orchard-series' },
  { label: 'Regular Series', href: '/products/regular-series' },
  { label: 'Regular Plus Series', href: '/products/regular-plus-series' },
  { label: 'Sami Champion Series', href: '/products/sami-champion-series' },
  { label: 'Gyrovator Series', href: '/products/gyrovator-series' },
];

export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: seriesLinks,
  },
  { label: 'Why Terrax', href: '/why-terrax' },
  { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '/contact' },
];
