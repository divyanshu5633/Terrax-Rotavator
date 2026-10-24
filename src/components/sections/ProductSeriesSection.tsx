import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { allSeries } from '../../data/series';
import { ProductImage } from '../common/ProductImage';
import { Badge } from '../common/Badge';

export function ProductSeriesSection() {
  const sortedSeries = [...allSeries].sort((a, b) => a.order - b.order);
  const featured = sortedSeries[0]; // Mini Series or first series
  const remaining = sortedSeries.slice(1);

  return (
    <section
      id="products-overview"
      className="tx-section"
      style={{ backgroundColor: 'var(--color-terrax-green-dark)', color: '#fff' }}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionHeading
            overline="Rotavator Range"
            heading="Six Specialized Series"
            subtext="TERRAX offers dedicated rotavator series engineered for specific landholdings, soil types, and tractor horsepower capacities."
            align="center"
            light
          />
        </div>

        {/* Editorial Layout: Featured Card Top + Responsive Grid */}
        <div className="flex flex-col gap-6">
          {/* Featured Card */}
          {featured && (
            <Link
              to={`/products/${featured.slug}`}
              className="tx-card-dark group block"
              aria-label={`View ${featured.name} details`}
              style={{ textDecoration: 'none', transition: 'border-color 0.25s ease, box-shadow 0.25s ease' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6 min-w-0">
                  <ProductImage
                    src={featured.imagePath}
                    alt={`${featured.name} rotavator`}
                    aspectRatio="16/9"
                    objectFit="contain"
                    fallbackTitle={featured.shortName}
                  />
                </div>
                <div className="lg:col-span-6 p-6 sm:p-8 min-w-0">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Badge label="Featured Series" variant="orange" />
                    <Badge label={featured.name} variant="green" />
                  </div>
                  <h3
                    className="tx-heading-lg"
                    style={{ color: '#fff', marginBottom: '0.5rem', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}
                  >
                    {featured.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      color: 'var(--color-terrax-lime-light)',
                      marginBottom: '0.85rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {featured.tagline}
                  </p>
                  <p
                    className="tx-body"
                    style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '1.5rem' }}
                  >
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
                    Explore Series Details <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining 5 Series Cards Grid — 1 column mobile, 2 columns desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remaining.map((series) => (
              <Link
                key={series.id}
                to={`/products/${series.slug}`}
                className="tx-card-dark group block"
                aria-label={`View ${series.name} details`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <ProductImage
                    src={series.imagePath}
                    alt={`${series.name} rotavator`}
                    aspectRatio="16/10"
                    objectFit="contain"
                    fallbackTitle={series.shortName}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <Badge label={series.name} variant="green" />
                  </div>
                  <h3
                    className="tx-heading-md"
                    style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: '#fff' }}
                  >
                    {series.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      color: 'var(--color-terrax-lime-light)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {series.tagline}
                  </p>
                  <p
                    className="tx-body"
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.65)',
                      marginBottom: '1.25rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {series.description}
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--color-terrax-orange)',
                      fontFamily: 'var(--font-mid)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      minHeight: '44px',
                    }}
                  >
                    View Series <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
