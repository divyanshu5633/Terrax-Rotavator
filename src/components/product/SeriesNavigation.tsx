import { NavLink } from 'react-router-dom';
import { allSeries } from '../../data/series';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface SeriesNavigationProps {
  currentSlug: string;
  orientation?: 'horizontal' | 'vertical';
}

export function SeriesNavigation({ currentSlug, orientation = 'vertical' }: SeriesNavigationProps) {
  const sorted = [...allSeries].sort((a, b) => a.order - b.order);

  if (orientation === 'horizontal') {
    return (
      <div className="flex flex-col gap-2 width-full min-w-0">
        <NavLink
          to="/products"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-mid)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-terrax-orange)',
            textDecoration: 'none',
            marginBottom: '0.25rem',
          }}
        >
          <ArrowLeft size={13} /> ALL PRODUCTS
        </NavLink>

        <nav
          aria-label="Product series navigation"
          style={{
            width: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              paddingBottom: '0.5rem',
              flexWrap: 'nowrap',
              width: 'max-content',
              maxWidth: 'none',
            }}
          >
            {sorted.map((s) => {
              const active = s.slug === currentSlug;
              return (
                <NavLink
                  key={s.id}
                  to={`/products/${s.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.5rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-mid)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    backgroundColor: active ? 'var(--color-terrax-green)' : 'var(--color-terrax-offwhite)',
                    color: active ? '#fff' : 'var(--color-terrax-charcoal)',
                    border: `1px solid ${active ? 'var(--color-terrax-green)' : 'var(--color-terrax-border-light)'}`,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  {s.shortName}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <nav aria-label="Product series navigation">
      <div style={{ marginBottom: '0.85rem' }}>
        <NavLink
          to="/products"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-mid)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-terrax-orange)',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={13} /> ALL PRODUCTS
        </NavLink>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-mid)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-terrax-muted)',
          marginBottom: '0.75rem',
        }}
      >
        Product Series
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        {sorted.map((s) => {
          const active = s.slug === currentSlug;
          return (
            <li key={s.id}>
              <NavLink
                to={`/products/${s.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-mid)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  backgroundColor: active ? 'var(--color-terrax-green)' : 'transparent',
                  color: active ? '#fff' : 'var(--color-terrax-charcoal)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  borderLeft: active ? '3px solid var(--color-terrax-orange)' : '3px solid transparent',
                }}
              >
                {s.name}
                {active && <ChevronRight size={14} />}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
