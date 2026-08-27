import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { BrandHero } from '../components/brand/BrandHero';
import { ProductSeriesStrip } from '../components/brand/ProductSeriesStrip';
import { EnquiryCTA } from '../components/brand/EnquiryCTA';

// ─── Why Terrax Page ──────────────────────────────────────────────────────────
// Engineering brand manifesto layout.
// Five value pillars arranged around a central statement — not five icon cards.

const pillars = [
  {
    number: '01',
    title: 'AGRICULTURAL FOCUS',
    body: 'TERRAX is focused on agricultural implements and soil-preparation applications. Every product in the range is built specifically for tillage — not adapted from another category.',
    accent: 'green',
  },
  {
    number: '02',
    title: 'MULTIPLE PRODUCT SERIES',
    body: 'Six series — Mini, Orchard, Regular, Regular Plus, Sami Champion, and Gyrovator — provide a structured range for different agricultural requirements rather than a generic single model.',
    accent: 'orange',
  },
  {
    number: '03',
    title: 'MULTIPLE CONFIGURATIONS',
    body: 'The current range includes working widths from 3 ft to 7 ft and blade counts from 16 to 54 — giving agricultural users the ability to match implement to field requirement.',
    accent: 'green',
  },
  {
    number: '04',
    title: 'INDIAN MANUFACTURING',
    body: "TERRAX's manufacturing location is in Chiloda, Gujarat, India — an established region for agricultural machinery production. Products are manufactured at this facility.",
    accent: 'orange',
  },
  {
    number: '05',
    title: 'DIRECT PRODUCT ENQUIRY',
    body: 'Customers can directly connect with the TERRAX team through phone, WhatsApp and email for product information, series comparison, and configuration enquiries.',
    accent: 'green',
  },
] as const;

export function WhyTerraxPage() {
  useSEO({
    title: 'Why Terrax | Agricultural Implements & Rotavators',
    description:
      'Five reasons to consider TERRAX rotavators: agricultural focus, structured product range, multiple configurations, Indian manufacturing, and direct enquiry access.',
    canonical: '/why-terrax',
  });

  return (
    <>
      {/* 1. HERO */}
      <BrandHero
        eyebrow="Our Approach"
        title={['DESIGNED', 'AROUND', 'THE FIELD.']}
        description="TERRAX agricultural implements are built specifically for soil preparation and tillage. Five principles define why the product range is structured the way it is."
        primaryCTA={{ label: 'EXPLORE PRODUCTS', href: '/products', variant: 'primary' }}
        secondaryCTA={{ label: 'ENQUIRE NOW', href: '/contact', variant: 'ghost' }}
        theme="dark-green"
      />

      {/* 2. MANIFESTO SECTION */}
      <section
        aria-label="Why Terrax — brand manifesto"
        style={{
          backgroundColor: 'var(--color-terrax-offwhite)',
          paddingBlock: 'clamp(3.5rem, 8vw, 7rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Technical grid lines */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(26,77,46,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,77,46,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        <Container>
          {/* Central statement */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '0.35rem 1rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-terrax-green-dark)',
                marginBottom: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-lime-light)',
                  margin: 0,
                }}
              >
                Why Terrax
              </p>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(3rem, 9vw, 7rem)',
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: 'var(--color-terrax-charcoal)',
                marginBottom: '1.5rem',
              }}
            >
              BUILT FOR
              <br />
              <span
                style={{
                  WebkitTextStroke: '2px var(--color-terrax-green)',
                  color: 'transparent',
                }}
              >
                THE EARTH.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-terrax-muted-dark)',
                maxWidth: '50ch',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Five principles that define the TERRAX product approach.
              No marketing superlatives — just what the product range is built around.
            </p>
          </div>

          {/* Five pillars — editorial asymmetric layout */}
          <div
            style={{ position: 'relative', zIndex: 1 }}
          >
            {/* First two pillars — full width split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ marginBottom: '1.25rem' }}>
              {pillars.slice(0, 2).map((pillar) => (
                <PillarCard key={pillar.number} pillar={pillar} size="lg" />
              ))}
            </div>

            {/* Next three — tighter grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pillars.slice(2).map((pillar) => (
                <PillarCard key={pillar.number} pillar={pillar} size="md" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CONFIGURATION RANGE callout */}
      <section
        aria-label="Configuration range"
        style={{
          backgroundColor: 'var(--color-terrax-green-dark)',
          paddingBlock: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="tx-overline">Configuration Range</span>
              <h2
                className="tx-heading-lg"
                style={{ color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}
              >
                11 SIZE / BLADE CONFIGURATIONS
              </h2>
              <p
                className="tx-body"
                style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}
              >
                Working widths from 3 ft to 7 ft. Blade configurations from 16 to 54 blades.
                The current TERRAX range addresses a broad spectrum of field requirements.
              </p>
              <a
                href="/applications"
                className="btn-ghost"
                style={{ textDecoration: 'none', display: 'inline-flex' }}
              >
                VIEW APPLICATIONS
              </a>
            </div>

            {/* Config list — technical style */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.6rem',
              }}
            >
              {[
                ['3 ft', '16 blade'],
                ['3.5 ft', '20 blade'],
                ['3.5 ft', '24 blade'],
                ['4 ft', '30 blade'],
                ['5 ft', '36 blade'],
                ['5.5 ft', '39 blade'],
                ['5.5 ft', '42 blade'],
                ['6 ft', '42 blade'],
                ['6 ft', '48 blade'],
                ['7 ft', '48 blade'],
                ['7 ft', '54 blade'],
              ].map(([width, blades]) => (
                <div
                  key={`${width}-${blades}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#fff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {width}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mid)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--color-terrax-orange)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {blades}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SERIES STRIP */}
      <ProductSeriesStrip
        overline="Six Series"
        heading="THE COMPLETE RANGE"
        subtext="Each series is designed for a specific use case — not interchangeable generics."
        theme="light"
        showCTA
      />

      {/* 5. ENQUIRY CTA */}
      <EnquiryCTA />
    </>
  );
}

// ─── PillarCard ───────────────────────────────────────────────────────────────
interface PillarData {
  number: string;
  title: string;
  body: string;
  accent: 'green' | 'orange';
}

function PillarCard({ pillar, size }: { pillar: PillarData; size: 'lg' | 'md' }) {
  return (
    <div
      style={{
        padding: size === 'lg' ? '2rem' : '1.5rem',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: '#fff',
        border: '1px solid var(--color-terrax-border-light)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        el.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor:
            pillar.accent === 'orange'
              ? 'var(--color-terrax-orange)'
              : 'var(--color-terrax-green)',
        }}
      />

      {/* Large background number */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-0.5rem',
          right: '0.75rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: size === 'lg' ? '6rem' : '5rem',
          lineHeight: 1,
          color: 'rgba(0,0,0,0.04)',
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {pillar.number}
      </span>

      {/* Number label */}
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color:
            pillar.accent === 'orange'
              ? 'var(--color-terrax-orange)'
              : 'var(--color-terrax-green)',
          marginBottom: '0.5rem',
        }}
      >
        {pillar.number}
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: size === 'lg' ? '1.35rem' : '1.15rem',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          color: 'var(--color-terrax-charcoal)',
          marginBottom: '0.75rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {pillar.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--color-terrax-muted-dark)',
          lineHeight: 1.7,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {pillar.body}
      </p>
    </div>
  );
}
