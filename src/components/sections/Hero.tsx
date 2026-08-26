import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../common/Button';
import { ProductImage } from '../common/ProductImage';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="TERRAX — Built for the Earth, Engineered to Perform"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--color-terrax-green-dark)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Background geometric pattern — aria-hidden, purely decorative */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(13,40,24,1) 0%, rgba(26,77,46,0.88) 50%, rgba(13,40,24,0.96) 100%)',
          }}
        />

        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Orange accent stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '6%',
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(to bottom, transparent, var(--color-terrax-orange) 30%, var(--color-terrax-orange) 70%, transparent)',
            opacity: 0.35,
          }}
        />
      </div>

      {/* Content Container — mobile-first grid */}
      <div
        className="tx-container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '5.5rem',    /* header clearance */
          paddingBottom: '3.5rem',
          width: '100%',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 min-w-0">
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.85rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.5s ease 0.1s both',
              }}
            >
              <span className="tx-overline" style={{ margin: 0 }}>
                Agriculture Implements
              </span>
              <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--color-terrax-orange)', flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Gujarat, India
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="tx-heading-xl"
              style={{
                color: '#fff',
                marginBottom: '1rem',
                lineHeight: 1.05,
                animation: 'fadeUp 0.6s ease 0.2s both',
              }}
            >
              BUILT FOR THE EARTH.{' '}
              <span style={{ color: 'var(--color-terrax-lime-light)', display: 'block' }}>
                ENGINEERED TO PERFORM.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="tx-body"
              style={{
                color: 'rgba(255,255,255,0.72)',
                marginBottom: '1.5rem',
                maxWidth: '52ch',
                animation: 'fadeUp 0.6s ease 0.3s both',
              }}
            >
              Precision agricultural implements designed for dependable soil preparation and demanding field conditions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3"
              style={{ marginBottom: '1.75rem', animation: 'fadeUp 0.6s ease 0.4s both' }}
            >
              <Button as="link" to="/products" variant="primary" rightIcon={<ArrowRight size={18} />} className="justify-center">
                EXPLORE PRODUCTS
              </Button>
              <Button as="link" to="/contact" variant="ghost" className="justify-center">
                ENQUIRE NOW
              </Button>
            </div>

            {/* Factual Supporting Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem 1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                animation: 'fadeUp 0.6s ease 0.5s both',
              }}
            >
              {[
                '6 Customer Series',
                'Gujarat Manufacturing',
                'Direct Support',
              ].map((badge) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--color-terrax-orange)', flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mid)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Machine Visual */}
          <div className="lg:col-span-5 min-w-0">
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                backgroundColor: 'var(--color-terrax-charcoal)',
                animation: 'fadeUp 0.6s ease 0.3s both',
              }}
            >
              <ProductImage
                src="/assets/hero/terrax-hero-rotavator.png"
                alt="TERRAX Agricultural Rotavator — Orange Tiller"
                aspectRatio="4/3"
                objectFit="contain"
                priority={true}
                fallbackTitle="TERRAX ROTAVATOR"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue — desktop only */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
          gap: '0.2rem',
          color: 'rgba(255,255,255,0.35)',
        }}
        className="hidden md:flex flex-col"
        aria-hidden="true"
      >
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
