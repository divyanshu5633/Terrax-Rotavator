import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { BrandHero } from '../components/brand/BrandHero';
import { ProductSeriesStrip } from '../components/brand/ProductSeriesStrip';
import { LocationBlock } from '../components/brand/LocationBlock';
import { EnquiryCTA } from '../components/brand/EnquiryCTA';

// ─── About Page ───────────────────────────────────────────────────────────────

const approaches = [
  {
    number: '01',
    label: 'Engineering',
    body: 'Rotavators and agricultural implements designed around practical tillage requirements — structural integrity, blade geometry, and reliable operation in diverse field conditions.',
  },
  {
    number: '02',
    label: 'Practicality',
    body: 'Products selected and developed around what the field demands. Six series provide structured options for different landholdings, soil conditions, and tractor categories.',
  },
  {
    number: '03',
    label: 'Field Requirements',
    body: 'Working widths from 3 ft to 7 ft and blade configurations from 16 to 54 blades — designed to address the range of requirements found in Indian agricultural operations.',
  },
  {
    number: '04',
    label: 'Product Range',
    body: 'Mini, Orchard, Regular, Regular Plus, Sami Champion, and Gyrovator — six distinct series, each with a defined purpose rather than a generic one-size-fits-all model.',
  },
];

export function AboutPage() {
  useSEO({
    title: 'About Terrax | Agricultural Implements',
    description:
      'TERRAX is a Gujarat-based manufacturer of rotavators and agricultural implements. Six specialized series designed for different farming requirements.',
    canonical: '/about',
  });

  return (
    <>
      {/* 1. HERO */}
      <BrandHero
        eyebrow="Who We Are"
        title={['ENGINEERED FOR', 'AGRICULTURE.', 'BUILT AROUND', 'THE FIELD.']}
        description="TERRAX is built around agricultural implements designed for practical field requirements. With a range of rotavator series and multiple size/blade configurations, the brand focuses on giving agricultural users product choices aligned with different applications."
        primaryCTA={{ label: 'EXPLORE PRODUCTS', href: '/products', variant: 'primary' }}
        secondaryCTA={{ label: 'ENQUIRE NOW', href: '/contact', variant: 'ghost' }}
        theme="dark-green"
      />

      {/* 2. BRAND INTRODUCTION */}
      <section
        aria-label="About TERRAX"
        style={{ backgroundColor: 'var(--color-terrax-offwhite)', paddingBlock: 'clamp(3.5rem, 7vw, 6rem)' }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: large statement */}
            <div className="lg:col-span-5">
              <span className="tx-overline">About Terrax</span>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-charcoal)',
                  marginTop: '0.75rem',
                }}
              >
                AGRICULTURAL
                <br />
                <span style={{ color: 'var(--color-terrax-green)' }}>IMPLEMENTS.</span>
                <br />
                PRACTICAL
                <br />
                <span style={{ color: 'var(--color-terrax-orange)' }}>ENGINEERING.</span>
              </div>
            </div>

            {/* Right: editorial paragraphs */}
            <div className="lg:col-span-7">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  paddingTop: '0.5rem',
                }}
              >
                <p className="tx-body" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                  TERRAX is focused on agricultural implements for soil preparation and farming applications.
                  The brand's primary product focus is rotavators — also known as rotary tillers — implements
                  used for soil cultivation, seedbed preparation, and residue incorporation.
                </p>
                <p className="tx-body">
                  The TERRAX range covers six product series: Mini, Orchard, Regular, Regular Plus,
                  Sami Champion, and Gyrovator. Each series is defined by a distinct purpose — from compact
                  tillage for small landholdings to high-output implements for larger field operations.
                </p>
                <p className="tx-body">
                  Manufacturing is based in Chiloda, Gujarat, India. Products are available for direct
                  enquiry via phone, WhatsApp, and email.
                </p>

                {/* Internal link to Why Terrax */}
                <div style={{ marginTop: '0.5rem' }}>
                  <Link
                    to="/why-terrax"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mid)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-terrax-green)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = 'var(--color-terrax-orange)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'var(--color-terrax-green)')
                    }
                  >
                    WHY TERRAX <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OUR APPROACH — charcoal dark section */}
      <section
        aria-label="Our approach"
        style={{
          backgroundColor: 'var(--color-terrax-charcoal)',
          paddingBlock: 'clamp(3.5rem, 7vw, 6rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative vertical line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '1px',
            backgroundColor: 'rgba(255,255,255,0.04)',
            pointerEvents: 'none',
          }}
        />
        <Container>
          <div style={{ marginBottom: '3rem' }}>
            <span className="tx-overline">Our Approach</span>
            <h2
              className="tx-heading-lg"
              style={{ color: '#fff', marginTop: '0.5rem', maxWidth: '20ch' }}
            >
              FOUR PRINCIPLES BEHIND THE PRODUCT RANGE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approaches.map((item) => (
              <div
                key={item.number}
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-terrax-border)',
                  backgroundColor: 'var(--color-terrax-charcoal-2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Large decorative number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '1rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: 'rgba(255,255,255,0.04)',
                    userSelect: 'none',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {item.number}
                </span>

                {/* Orange number label */}
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-orange)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.number}
                </p>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#fff',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.label}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. THE TERRAX RANGE */}
      <ProductSeriesStrip
        overline="Product Range"
        heading="THE TERRAX RANGE"
        subtext="Six rotavator series for different agricultural requirements. Each series has a defined purpose and configuration range."
        theme="dark"
        showCTA
      />

      {/* 5. BRAND STATEMENT */}
      <section
        aria-label="Brand statement"
        style={{
          backgroundColor: 'var(--color-terrax-green)',
          paddingBlock: 'clamp(3rem, 7vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />
        <Container>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-mid)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1.5rem',
              }}
            >
              The Terrax Philosophy
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                color: '#fff',
                marginBottom: '1.75rem',
              }}
            >
              BUILT FOR THE EARTH.
              <br />
              <span style={{ color: 'var(--color-terrax-orange)' }}>
                ENGINEERED TO PERFORM.
              </span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.75,
                maxWidth: '52ch',
                margin: '0 auto',
              }}
            >
              This is the operating principle behind the TERRAX range. Every series,
              every configuration, every blade geometry decision is made in the context
              of what the field requires — not what looks good on a specification sheet.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. LOCATION */}
      <LocationBlock theme="dark" showDirections showContactLink />

      {/* 7. FINAL CTA */}
      <div style={{ backgroundColor: 'var(--color-terrax-charcoal)' }}>
        <Container>
          <div
            style={{
              paddingBlock: '3.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--color-terrax-border)',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '0.25rem',
                }}
              >
                Ready to explore the range?
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                Browse all six TERRAX rotavator series.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link
                to="/products"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                EXPLORE TERRAX PRODUCTS
                <ArrowRight size={16} style={{ marginLeft: '0.4rem' }} />
              </Link>
              <Link
                to="/contact"
                className="btn-ghost"
                style={{ textDecoration: 'none' }}
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <EnquiryCTA />
    </>
  );
}
