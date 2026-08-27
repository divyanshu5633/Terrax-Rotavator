# TERRAX — Agricultural Implements Website

Official website for **TERRAX**, an agricultural machinery manufacturer based in Chiloda, Gujarat, India, specializing in high-performance rotavators and rotary tillers.

---

## 🛠️ Project Overview

- **Project**: TERRAX Manufacturer Website
- **Purpose**: Informative, brand-forward agricultural machinery manufacturer web platform designed for product discovery, technical configuration matching, and direct factory enquiry.
- **Domain**: [https://terrax.in](https://terrax.in)
- **Role**: Website Design & Development by [Divyanshu](https://www.linkedin.com/in/divyanshu-patel-99450426b/)

---

## 🗂️ Public Website Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Brand hero, trust metrics, product highlights, and manufacturing overview |
| `/about` | **About Terrax** | Brand engineering philosophy, four core principles, location overview |
| `/products` | **Catalogue** | Overview of all six rotavator series and configuration options |
| `/products/mini-series` | **Mini Series** | Compact tractors and small acreage tillage implement specs |
| `/products/orchard-series` | **Orchard Series** | Low-clearance inter-row orchard and vineyard tillage specs |
| `/products/regular-series` | **Regular Series** | Everyday benchmark rotary tiller performance |
| `/products/regular-plus-series` | **Regular Plus Series** | Reinforced build for demanding soil conditions and higher HP |
| `/products/sami-champion-series` | **Sami Champion Series** | Championship-grade high output commercial farming |
| `/products/gyrovator-series` | **Gyrovator Series** | Vertical tillage and deep soil conditioning |
| `/why-terrax` | **Why Terrax** | Engineering brand manifesto with 5 value pillars |
| `/applications` | **Applications** | Soil preparation role, field selection factors, and 11 configurations |
| `/manufacturing` | **Manufacturing** | Factory location context on NH-8, Chiloda, Gujarat |
| `/contact` | **Contact & Enquiry** | Direct phone lines, WhatsApp, email, map, and structured enquiry form |
| `/*` | **404 Page** | Custom minimal industrial page not found route |

---

## 🧱 Component Architecture

```
src/
├── components/
│   ├── brand/
│   │   ├── BrandHero.tsx            # Multi-theme editorial page hero
│   │   ├── EnquiryCTA.tsx           # Full-width conversion CTA block
│   │   ├── LocationBlock.tsx        # Large typography location presentation
│   │   └── ProductSeriesStrip.tsx   # Numbered 6-series editorial grid
│   ├── common/
│   │   ├── BackToTop.tsx            # Floating accessible scroll-to-top button
│   │   ├── Badge.tsx                # Brand badge indicators
│   │   ├── Breadcrumbs.tsx          # Accessible page hierarchy links
│   │   ├── Button.tsx               # Polymorphic button/anchor/link component
│   │   ├── ContactDetails.tsx       # Standardized phone, WhatsApp, email, address
│   │   ├── ContactMicroCTA.tsx      # Compact conversion bar
│   │   ├── Container.tsx            # Fluid max-width container wrapper
│   │   ├── ImagePlaceholder.tsx     # Clean fallback image presentation
│   │   ├── LocationMap.tsx          # Google Maps embed with Directions CTA
│   │   ├── ProductImage.tsx         # Progressive image loader with fallback
│   │   ├── ScrollToTop.tsx          # Router scroll reset on navigation
│   │   └── SectionHeading.tsx       # Standardized section headings
│   ├── contact/
│   │   └── EnquiryForm.tsx          # Product enquiry form with WhatsApp generator
│   ├── layout/
│   │   ├── Footer.tsx               # 5-column desktop + mobile accordion footer
│   │   ├── Header.tsx               # Sticky brand header + mobile navigation
│   │   └── RootLayout.tsx           # Base page layout wrapper
│   ├── product/
│   │   ├── ProductCard.tsx          # Catalogue product series cards
│   │   ├── ProductGallery.tsx       # Machine photography viewer
│   │   ├── ProductGrid.tsx          # Responsive product grid
│   │   ├── ProductSpecification.tsx # Technical size/blade configuration tables
│   │   └── SeriesNavigation.tsx     # Vertical & horizontal series switcher
│   └── sections/
│       ├── ApplicationsSection.tsx
│       ├── AvailableConfigurationsSection.tsx
│       ├── BrandIntro.tsx
│       ├── CTASection.tsx
│       ├── Hero.tsx
│       ├── ManufacturingSection.tsx
│       ├── ProductSeriesSection.tsx
│       ├── SoilPreparationSection.tsx
│       ├── TrustStrip.tsx
│       └── WhyTerraxSection.tsx
```

---

## 📊 Data Architecture

All business and product data is centralized for single-source-of-truth maintenance:

- **`src/data/contact.ts`**: Direct phone lines (`+91 8485998851`, `+91 9099903217`, `+91 9879664168`), WhatsApp (`+91 9099903217`), Email (`cruciateagritech@gmail.com`), Factory Address (`Chiloda Char Rasta, N.H. No. 8, Gautam Threshar, Gujarat 382355, India`), and analytics event dispatcher.
- **`src/data/series.ts`**: All 6 product series with slugs, descriptions, highlights, and configuration IDs.
- **`src/data/products.ts`**: All 11 working-width and blade configurations.
- **`src/data/navigation.ts`**: Primary nav links, series links, company links, and explore links.
- **`src/data/projectMeta.ts`**: Internal project metadata and developer portfolio case study reference.

---

## ⚡ Tech Stack & Performance

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS Custom Properties
- **Routing**: React Router v7
- **Icons**: Lucide React
- **SEO & Social**: Dynamic `useSEO` hook, XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), Open Graph image (`/assets/brand/terrax-og-image.jpg`), Twitter card metadata.

---

## 🚀 Environment Variables

| Variable | Description | Default / Example |
|---|---|---|
| `VITE_ENQUIRY_ENDPOINT` | Optional backend API endpoint for receiving JSON enquiry form submissions. | `https://api.terrax.in/enquiries` |

---

## 💻 Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Build production bundle
npm run build

# Preview production build
npm run preview
```
