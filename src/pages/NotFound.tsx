import { Link } from 'react-router-dom';
import { ArrowRight, Home, Compass } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';

export function NotFoundPage() {
  useSEO({
    title: 'Page Not Found | Terrax',
    description: "The page you're looking for doesn't exist or may have moved.",
  });

  return (
    <div
      style={{
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: 'clamp(6rem, 14vw, 10rem) 4rem',
        backgroundColor: 'var(--color-terrax-offwhite)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background technical grid decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(26,77,46,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,77,46,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container>
        <div
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Large industrial 404 badge */}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(5rem, 15vw, 9rem)',
              color: 'var(--color-terrax-green)',
              opacity: 0.12,
              lineHeight: 1,
              display: 'block',
              letterSpacing: '-0.04em',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            404
          </span>

          <div
            style={{
              width: '2.5rem',
              height: '3px',
              backgroundColor: 'var(--color-terrax-orange)',
              margin: '0 auto 1.25rem',
              borderRadius: '2px',
            }}
          />

          <span className="tx-overline" style={{ marginBottom: '0.5rem', display: 'block' }}>
            Error 404
          </span>

          <h1
            className="tx-heading-lg"
            style={{
              color: 'var(--color-terrax-charcoal)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '1rem',
            }}
          >
            PAGE NOT FOUND
          </h1>

          <p
            className="tx-body"
            style={{
              maxWidth: '46ch',
              margin: '0 auto 2.25rem',
              fontSize: '1.05rem',
              color: 'var(--color-terrax-muted-dark)',
              lineHeight: 1.6,
            }}
          >
            The page you're looking for doesn't exist or may have moved.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/"
              className="btn-primary"
              style={{ textDecoration: 'none', minHeight: '48px' }}
            >
              <Home size={16} />
              BACK TO HOME
            </Link>

            <Link
              to="/products"
              className="btn-secondary"
              style={{ textDecoration: 'none', minHeight: '48px' }}
            >
              <Compass size={16} />
              EXPLORE PRODUCTS
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
