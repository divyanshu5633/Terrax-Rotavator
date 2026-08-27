import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { allSeries } from '../../data/series';

// ─── ProductSeriesStrip ───────────────────────────────────────────────────────
// Compact editorial strip of all 6 Terrax series for brand pages.
// Lighter than ProductSeriesSection — no images, editorial grid treatment.

interface ProductSeriesStripProps {
  /** Section heading overline */
  overline?: string;
  /** Section heading */
  heading?: string;
  /** Optional subtext */
  subtext?: string;
  /** Dark background (default) or light */
  theme?: 'dark' | 'light';
  /** CTA below the strip */
  showCTA?: boolean;
}

export function ProductSeriesStrip({
  overline = 'Product Range',
  heading = 'THE TERRAX RANGE',
  subtext,
  theme = 'dark',
  showCTA = true,
}: ProductSeriesStripProps) {
  const isDark = theme === 'dark';
  const sortedSeries = [...allSeries].sort((a, b) => a.order - b.order);

  return (
    <section
      aria-label="Terrax product series"
      style={{
        backgroundColor: isDark
          ? 'var(--color-terrax-charcoal)'
          : 'var(--color-terrax-offwhite)',
        paddingBlock: 'clamp(3rem, 6vw, 5rem)',
      }}
    >
      <Container>
        {/* Section header */}
        <div style={{ marginBottom: '2.5rem' }}>
          {overline && (
            <span className="tx-overline" style={{ display: 'block' }}>
              {overline}
            </span>
          )}
          <h2
            className="tx-heading-lg"
            style={{
              color: isDark ? '#fff' : 'var(--color-terrax-charcoal)',
              marginTop: '0.25rem',
            }}
          >
            {heading}
          </h2>
          {subtext && (
            <p
              className="tx-body"
              style={{
                color: isDark ? 'rgba(255,255,255,0.6)' : 'var(--color-terrax-muted-dark)',
                marginTop: '0.75rem',
                maxWidth: '56ch',
              }}
            >
              {subtext}
            </p>
          )}
        </div>

        {/* Series grid — 2-col mobile, 3-col desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ marginBottom: showCTA ? '2.5rem' : '0' }}
        >
          {sortedSeries.map((series, i) => (
            <Link
              key={series.id}
              to={`/products/${series.slug}`}
              aria-label={`View ${series.name} details`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: isDark
                  ? '1px solid var(--color-terrax-border)'
                  : '1px solid var(--color-terrax-border-light)',
                backgroundColor: isDark
                  ? 'var(--color-terrax-charcoal-2)'
                  : '#fff',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-terrax-orange)';
                el.style.transform = 'translateY(-2px)';
                el.style.backgroundColor = isDark
                  ? 'var(--color-terrax-charcoal-3)'
                  : 'var(--color-terrax-offwhite)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = isDark
                  ? 'var(--color-terrax-border)'
                  : 'var(--color-terrax-border-light)';
                el.style.transform = 'translateY(0)';
                el.style.backgroundColor = isDark
                  ? 'var(--color-terrax-charcoal-2)'
                  : '#fff';
              }}
            >
              {/* Series number + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--color-terrax-orange)',
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      color: isDark ? '#fff' : 'var(--color-terrax-charcoal)',
                      lineHeight: 1.2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {series.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: isDark
                        ? 'rgba(255,255,255,0.45)'
                        : 'var(--color-terrax-muted)',
                      marginTop: '0.15rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {series.tagline}
                  </p>
                </div>
              </div>
              <ArrowRight
                size={15}
                style={{ color: 'var(--color-terrax-orange)', flexShrink: 0 }}
              />
            </Link>
          ))}
        </div>

        {/* CTA row */}
        {showCTA && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              to="/products"
              className={isDark ? 'btn-ghost' : 'btn-secondary'}
              style={{ textDecoration: 'none' }}
            >
              VIEW ALL PRODUCTS
              <ArrowRight size={16} style={{ marginLeft: '0.4rem' }} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
