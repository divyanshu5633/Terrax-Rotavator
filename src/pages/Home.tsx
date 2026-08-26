import { useSEO } from '../hooks/useSEO';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { BrandIntro } from '../components/sections/BrandIntro';
import { ProductSeriesSection } from '../components/sections/ProductSeriesSection';
import { AvailableConfigurationsSection } from '../components/sections/AvailableConfigurationsSection';
import { WhyTerraxSection } from '../components/sections/WhyTerraxSection';
import { SoilPreparationSection } from '../components/sections/SoilPreparationSection';
import { ManufacturingSection } from '../components/sections/ManufacturingSection';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  useSEO({
    title: 'Terrax | Agricultural Implements & Rotavators',
    description: 'TERRAX manufactures agricultural implements and rotavators focused on soil preparation in India. Explore six specialized series and available size configurations.',
    canonical: '/',
  });

  return (
    <>
      {/* 1. Dark Hero */}
      <Hero />

      {/* 2. Trust & Quick Information Strip */}
      <TrustStrip />

      {/* 3. Light Intro: Engineered for the Field */}
      <BrandIntro />

      {/* 4. Dark Product Series: Six Specialized Series */}
      <ProductSeriesSection />

      {/* 5. Light Configurations: Available Size & Blade Configurations */}
      <AvailableConfigurationsSection />

      {/* 6. Dark Why TERRAX */}
      <WhyTerraxSection />

      {/* 7. Light Soil Preparation Editorial Break */}
      <SoilPreparationSection />

      {/* 8. Dark Manufacturing & Gujarat Location */}
      <ManufacturingSection />

      {/* 9. Dark Final CTA & Contact Micro-Strip */}
      <CTASection />
    </>
  );
}
