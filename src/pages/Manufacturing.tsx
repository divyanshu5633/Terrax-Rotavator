import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { BrandHero } from '../components/brand/BrandHero';
import { LocationBlock } from '../components/brand/LocationBlock';
import { EnquiryCTA } from '../components/brand/EnquiryCTA';
import { ManufacturingSection } from '../components/sections/ManufacturingSection';

// ─── Manufacturing Page ───────────────────────────────────────────────────────

export function ManufacturingPage() {
  useSEO({
    title: 'Terrax Manufacturing | Agricultural Implements',
    description:
      'TERRAX agricultural implements are manufactured in Chiloda, Gujarat, India. Located on NH-8, Gautam Threshar, Gujarat 382355.',
    canonical: '/manufacturing',
  });

  return (
    <>
      {/* 1. HERO */}
      <BrandHero
        eyebrow="Manufacturing"
        title={['FROM GUJARAT.', 'FOR AGRICULTURAL', 'APPLICATIONS.']}
        description="TERRAX agricultural implements are manufactured in Chiloda, Gujarat — producing rotavators and tillage implements for agricultural applications across India."
        primaryCTA={{ label: 'GET DIRECTIONS', href: '/contact', variant: 'primary' }}
        secondaryCTA={{ label: 'ENQUIRE NOW', href: '/contact', variant: 'ghost' }}
        theme="dark-green"
      />

      {/* 2. LOCATION BLOCK — large typography + address card */}
      <LocationBlock theme="dark" showDirections showContactLink />

      {/* 3. MANUFACTURING SECTION — reuses existing component (factory image + address) */}
      <ManufacturingSection />

      {/* 4. ABOUT THE LOCATION — factual context */}
      <section
        aria-label="About the manufacturing location"
        style={{
          backgroundColor: 'var(--color-terrax-offwhite)',
          paddingBlock: 'clamp(3.5rem, 7vw, 6rem)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="tx-overline">Location Context</span>
              <h2
                className="tx-heading-lg"
                style={{
                  color: 'var(--color-terrax-charcoal)',
                  marginTop: '0.5rem',
                }}
              >
                CHILODA,
                <br />
                GUJARAT
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="tx-body" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                  TERRAX operates from Chiloda, located on National Highway No. 8 in Gujarat, India.
                  The Gautam Threshar area has an established tradition in agricultural machinery
                  manufacturing — making it a practical location for producing implements used across
                  Indian farming operations.
                </p>
                <p className="tx-body">
                  All TERRAX rotavators and agricultural implements are produced at this location.
                  The manufacturing base allows for direct factory oversight of product quality
                  and specification integrity.
                </p>
                <p className="tx-body">
                  Customers can connect directly with the TERRAX team at this location via phone,
                  WhatsApp, and email for product enquiries, configuration information, and orders.
                </p>
              </div>

              {/* Address reference */}
              <div
                style={{
                  marginTop: '2rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-terrax-border-light)',
                  borderLeft: '4px solid var(--color-terrax-green)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Address
                </p>
                <address
                  style={{
                    fontStyle: 'normal',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-terrax-charcoal)',
                    lineHeight: 1.8,
                  }}
                >
                  Chiloda Char Rasta, N.H. No. 8,<br />
                  Gautam Threshar,<br />
                  Gujarat 382355, India
                </address>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ENQUIRY CTA */}
      <EnquiryCTA />
    </>
  );
}
