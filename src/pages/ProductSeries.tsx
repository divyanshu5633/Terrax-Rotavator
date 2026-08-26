import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { getSeriesBySlug, allSeries } from '../data/series';
import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductSpecification } from '../components/product/ProductSpecification';
import { SeriesNavigation } from '../components/product/SeriesNavigation';
import { ProductCard } from '../components/product/ProductCard';
import { CTASection } from '../components/sections/CTASection';

export function ProductSeriesPage() {
  const { slug } = useParams<{ slug: string }>();
  const series = slug ? getSeriesBySlug(slug) : undefined;

  // 404 — unknown slug redirects to catalogue
  if (!series) {
    return <Navigate to="/products" replace />;
  }

  const seriesNum = String(series.order).padStart(2, '0');

  // Related series (exclude current series)
  const sorted = [...allSeries].sort((a, b) => a.order - b.order);
  const relatedSeries = sorted.filter((s) => s.id !== series.id).slice(0, 3);

  useSEO({
    title: `Terrax ${series.name} | Agricultural Rotavators`,
    description: series.heroDescription,
    canonical: `/products/${series.slug}`,
  });

  return (
    <>
      {/* Detail Page Hero */}
      <div
        style={{
          backgroundColor: 'var(--color-terrax-green-dark)',
          paddingTop: 'clamp(5.5rem, 12vw, 8rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Products', to: '/products' },
              { label: series.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 min-w-0">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                <Badge label={`SERIES ${seriesNum}`} variant="orange" />
                <Badge label="TERRAX IMPLEMENT" variant="green" />
              </div>

              <h1
                className="tx-heading-xl"
                style={{ color: '#fff', marginBottom: '0.5rem' }}
              >
                {series.name}
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--color-terrax-lime-light)',
                  marginBottom: '1.25rem',
                  wordBreak: 'break-word',
                }}
              >
                {series.tagline}
              </p>

              <p
                className="tx-body"
                style={{ color: 'rgba(255, 255, 255, 0.72)', maxWidth: '52ch', marginBottom: '1.75rem' }}
              >
                {series.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button as="link" to="/contact" variant="primary" rightIcon={<ArrowRight size={18} />} className="justify-center">
                  ENQUIRE ABOUT THIS SERIES
                </Button>
                <Button as="link" to="/products" variant="ghost" className="justify-center">
                  BACK TO PRODUCTS
                </Button>
              </div>
            </div>

            {/* Right Machine Gallery */}
            <div className="lg:col-span-5 min-w-0 width-full">
              <ProductGallery
                seriesName={series.name}
                galleryPaths={series.galleryPaths}
                heroImage={series.imagePath}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Detail Page Main Content */}
      <div
        className="tx-section"
        style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Sidebar Navigation (Desktop: 3 cols sticky, Mobile: top horizontal scroll) */}
            <aside className="lg:col-span-3 min-w-0">
              <div className="hidden lg:block sticky top-24 p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <SeriesNavigation currentSlug={series.slug} orientation="vertical" />
              </div>
              <div className="lg:hidden mb-6 min-w-0">
                <SeriesNavigation currentSlug={series.slug} orientation="horizontal" />
              </div>
            </aside>

            {/* Main Series Content */}
            <div className="lg:col-span-9 min-w-0">
              {/* Series Introduction */}
              <div style={{ marginBottom: '2.5rem', backgroundColor: '#fff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-terrax-border-light)' }}>
                <span className="tx-overline" style={{ marginBottom: '0.35rem' }}>
                  Series Category Overview
                </span>
                <h2
                  className="tx-heading-md"
                  style={{ color: 'var(--color-terrax-charcoal)', marginBottom: '1rem', fontSize: '1.4rem' }}
                >
                  About the {series.name}
                </h2>
                <p className="tx-body" style={{ lineHeight: 1.7 }}>{series.description}</p>
              </div>

              {/* Highlights Bullet List */}
              <div style={{ marginBottom: '2.5rem', backgroundColor: '#fff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-terrax-border-light)' }}>
                <h2
                  className="tx-heading-md"
                  style={{ color: 'var(--color-terrax-charcoal)', marginBottom: '1.25rem', fontSize: '1.2rem' }}
                >
                  Key Implement Features
                </h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {series.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2
                        size={18}
                        style={{ color: 'var(--color-terrax-green)', flexShrink: 0, marginTop: '2px' }}
                      />
                      <span className="tx-body" style={{ fontSize: '0.925rem', color: 'var(--color-terrax-charcoal)' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Configurations & Specifications */}
              <div style={{ marginBottom: '2.5rem', backgroundColor: '#fff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-terrax-border-light)' }}>
                <ProductSpecification series={series} />
              </div>

              {/* Applications Section */}
              <div style={{ marginBottom: '2.5rem', backgroundColor: '#fff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-terrax-border-light)' }}>
                <h2
                  className="tx-heading-md"
                  style={{ color: 'var(--color-terrax-charcoal)', marginBottom: '1rem', fontSize: '1.2rem' }}
                >
                  General Soil & Field Applications
                </h2>
                <p className="tx-body" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  The {series.name} is suited to general agricultural land management, soil preparation, and stubble incorporation tasks:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {series.applications.map((app) => (
                    <span
                      key={app}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-terrax-border-light)',
                        backgroundColor: 'var(--color-terrax-offwhite)',
                        fontFamily: 'var(--font-mid)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-terrax-charcoal)',
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Explore Other Series (Related Products) */}
              <div style={{ marginTop: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span className="tx-overline" style={{ marginBottom: '0.25rem' }}>Product Range</span>
                    <h3 className="tx-heading-md" style={{ color: 'var(--color-terrax-charcoal)', fontSize: '1.35rem' }}>
                      EXPLORE OTHER TERRAX SERIES
                    </h3>
                  </div>
                  <Link
                    to="/products"
                    style={{
                      fontFamily: 'var(--font-mid)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-terrax-orange)',
                      textDecoration: 'none',
                    }}
                  >
                    View All Range →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedSeries.map((s) => (
                    <ProductCard key={s.id} series={s} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Final Contact CTA */}
      <CTASection />
    </>
  );
}
