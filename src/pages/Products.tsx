import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { allSeries } from '../data/series';
import { ProductCard } from '../components/product/ProductCard';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { Badge } from '../components/common/Badge';
import { CTASection } from '../components/sections/CTASection';

const sizeSummary = [
  '3 FT / 16 B',
  '3.5 FT / 20 B',
  '3.5 FT / 24 B',
  '4 FT / 30 B',
  '5 FT / 36 B',
  '5.5 FT / 39 B',
  '5.5 FT / 42 B',
  '6 FT / 42 B',
  '6 FT / 48 B',
  '7 FT / 48 B',
  '7 FT / 54 B',
];

export function ProductsPage() {
  useSEO({
    title: 'Terrax Product Catalogue | Rotavator Series',
    description: 'Browse the complete TERRAX rotavator range: Mini, Orchard, Regular, Regular Plus, Sami Champion, and Gyrovator series. Premium agricultural tillage implements made in India.',
    canonical: '/products',
  });

  const sortedSeries = [...allSeries].sort((a, b) => a.order - b.order);
  const featured = sortedSeries[0]; // Mini Series
  const rest = sortedSeries.slice(1);

  return (
    <>
      {/* Page Hero */}
      <div
        style={{
          backgroundColor: 'var(--color-terrax-green-dark)',
          paddingTop: 'clamp(5.5rem, 12vw, 8rem)',
          paddingBottom: 'clamp(2.5rem, 6vw, 4rem)',
        }}
      >
        <Container>
          <Breadcrumbs items={[{ label: 'Products' }]} />
          <span className="tx-overline">Product Catalogue</span>
          <h1
            className="tx-heading-xl"
            style={{ color: '#fff', marginTop: '0.5rem' }}
          >
            Rotavator Range
          </h1>
          <p
            className="tx-body"
            style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '55ch', marginTop: '1rem' }}
          >
            Rotavator solutions designed around different agricultural requirements and field conditions across India.
          </p>
        </Container>
      </div>

      {/* 11 Size Configurations Reference Banner */}
      <div style={{ backgroundColor: '#0d2818', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBlock: '0.85rem' }}>
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
              <Layers size={16} style={{ color: 'var(--color-terrax-orange)' }} />
              <span style={{ fontFamily: 'var(--font-mid)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                11 Reference Configurations Available
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', width: '100%', paddingBottom: '0.2rem', scrollbarWidth: 'none' }}>
              {sizeSummary.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: 'var(--font-mid)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Products Catalogue Section */}
      <div
        className="tx-section"
        style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}
      >
        <Container>
          <div className="flex flex-col gap-8">
            {/* Featured Series Editorial Card */}
            {featured && (
              <Link
                to={`/products/${featured.slug}`}
                className="tx-card group block"
                aria-label={`View ${featured.name} details`}
                style={{ textDecoration: 'none' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-6 min-w-0">
                    <ImagePlaceholder
                      seriesName={featured.shortName}
                      aspectRatio="16/10"
                      label={`${featured.name} rotavator`}
                    />
                  </div>
                  <div className="lg:col-span-6 p-6 sm:p-8 min-w-0">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <Badge label="01" variant="orange" />
                      <Badge label={featured.name} variant="green" />
                    </div>
                    <h2
                      className="tx-heading-lg"
                      style={{ color: 'var(--color-terrax-charcoal)', marginBottom: '0.4rem', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}
                    >
                      {featured.name}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        color: 'var(--color-terrax-green)',
                        marginBottom: '0.85rem',
                      }}
                    >
                      {featured.tagline}
                    </p>
                    <p className="tx-body" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                      {featured.description}
                    </p>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--color-terrax-orange)',
                        fontFamily: 'var(--font-mid)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        minHeight: '44px',
                      }}
                    >
                      EXPLORE SERIES DETAILS <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Series Cards — 1 column mobile, 2 tablet, 3 desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((series) => (
                <ProductCard key={series.id} series={series} />
              ))}
            </div>
          </div>
        </Container>
      </div>

      <CTASection />
    </>
  );
}
