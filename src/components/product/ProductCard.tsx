import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Series } from '../../data/series';
import { ProductImage } from '../common/ProductImage';
import { Badge } from '../common/Badge';

interface ProductCardProps {
  series: Series;
  dark?: boolean;
}

export function ProductCard({ series, dark = false }: ProductCardProps) {
  const seriesNum = String(series.order).padStart(2, '0');

  return (
    <Link
      to={`/products/${series.slug}`}
      className={`${dark ? 'tx-card-dark' : 'tx-card'} group block min-w-0`}
      aria-label={`View ${series.name} details`}
      style={{ textDecoration: 'none' }}
    >
      {/* Image Area */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <ProductImage
          src={series.imagePath}
          alt={`Terrax ${series.name} agricultural rotavator`}
          aspectRatio="16/10"
          objectFit="contain"
          fallbackTitle={series.shortName}
        />
        {/* Series number overlay badge */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--color-terrax-green-dark)',
            color: 'var(--color-terrax-lime-light)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            border: '1px solid rgba(255,255,255,0.15)',
            zIndex: 10,
          }}
        >
          {seriesNum}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.4rem' }}>
          <Badge label={series.name} variant="green" />
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mid)', color: dark ? 'rgba(255,255,255,0.5)' : 'var(--color-terrax-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            SERIES {seriesNum}
          </span>
        </div>

        <h3
          className="tx-heading-md"
          style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: dark ? '#fff' : 'var(--color-terrax-charcoal)' }}
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
            fontSize: '0.9rem',
            marginBottom: '1.25rem',
            color: dark ? 'rgba(255,255,255,0.7)' : 'var(--color-terrax-muted-dark)',
            lineHeight: 1.55,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {series.description}
        </p>

        {/* CTA */}
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
          VIEW SERIES
          <ArrowRight size={15} />
        </div>
      </div>
    </Link>
  );
}
