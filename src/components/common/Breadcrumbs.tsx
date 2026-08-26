import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`tx-breadcrumbs ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.35rem',
        fontSize: '0.78rem',
        fontFamily: 'var(--font-mid)',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '1rem',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'rgba(255, 255, 255, 0.7)',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        aria-label="TERRAX Home"
      >
        <Home size={13} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <ChevronRight size={12} style={{ opacity: 0.5, flexShrink: 0 }} aria-hidden="true" />
            {item.to && !isLast ? (
              <Link
                to={item.to}
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--color-terrax-lime-light)', fontWeight: 600 }}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
