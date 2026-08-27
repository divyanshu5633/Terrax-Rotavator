import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { BrandHero } from '../components/brand/BrandHero';
import { ProductSeriesStrip } from '../components/brand/ProductSeriesStrip';
import { EnquiryCTA } from '../components/brand/EnquiryCTA';
import { ArrowRight, Settings2 } from 'lucide-react';

// ─── Applications Page ────────────────────────────────────────────────────────

const sizeConfigs = [
  { width: '3 ft', blades: '16 blade' },
  { width: '3.5 ft', blades: '20 blade' },
  { width: '3.5 ft', blades: '24 blade' },
  { width: '4 ft', blades: '30 blade' },
  { width: '5 ft', blades: '36 blade' },
  { width: '5.5 ft', blades: '39 blade' },
  { width: '5.5 ft', blades: '42 blade' },
  { width: '6 ft', blades: '42 blade' },
  { width: '6 ft', blades: '48 blade' },
  { width: '7 ft', blades: '48 blade' },
  { width: '7 ft', blades: '54 blade' },
];

const selectionFactors = [
  {
    label: 'Working Width',
    body: 'The working width of the implement determines how much soil is tilled in a single pass. Wider implements cover more ground per pass but require adequate tractor power.',
  },
  {
    label: 'Blade Configuration',
    body: 'The number and arrangement of blades affects the fineness of the seedbed and the implement\'s ability to incorporate crop residue or break up hard soil.',
  },
  {
    label: 'Farm & Application Requirements',
    body: 'Different soil types, crop residue volumes, and land sizes call for different implement specifications. Field conditions should guide the choice of series and configuration.',
  },
  {
    label: 'Tractor Compatibility',
    body: 'Each series and size is intended for use with a compatible tractor. Consult the TERRAX team regarding tractor and implement compatibility for your specific situation.',
  },
];

export function ApplicationsPage() {
  useSEO({
    title: 'Rotavator Applications | Terrax',
    description:
      'Rotavators are agricultural implements for soil preparation and seedbed preparation. Explore the TERRAX configuration range and find the right implement for your field.',
    canonical: '/applications',
  });

  return (
    <>
      {/* 1. HERO */}
      <BrandHero
        eyebrow="Applications"
        title={['PREPARE THE SOIL.', 'PREPARE THE FIELD.']}
        description="Rotavators are agricultural implements used for soil cultivation, seedbed preparation, and residue incorporation. The TERRAX range provides multiple series and configurations for different field requirements."
        primaryCTA={{ label: 'VIEW CONFIGURATIONS', href: '#configurations', variant: 'primary' }}
        secondaryCTA={{ label: 'ENQUIRE NOW', href: '/contact', variant: 'ghost' }}
        theme="dark-green"
      />

      {/* 2. SOIL PREPARATION */}
      <section
        aria-label="Soil preparation"
        style={{
          backgroundColor: 'var(--color-terrax-offwhite)',
          paddingBlock: 'clamp(3.5rem, 7vw, 6rem)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="tx-overline">What Rotavators Do</span>
              <h2
                className="tx-heading-lg"
                style={{ color: 'var(--color-terrax-charcoal)', marginTop: '0.5rem' }}
              >
                SOIL PREPARATION
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="tx-body" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                  Rotavators — also called rotary tillers — are tractor-mounted agricultural
                  implements used to prepare soil for crop cultivation. They work by rotating
                  blades through the soil, breaking up clods, incorporating crop residue, and
                  creating a suitable seedbed for planting.
                </p>
                <p className="tx-body">
                  The key functions include primary tillage of untilled ground, secondary tillage
                  to refine a previously tilled seedbed, residue incorporation, and inter-row
                  soil management in established crops.
                </p>
                <p className="tx-body">
                  The right implement choice depends on the working width required, the blade
                  configuration, the soil type, and the available tractor power.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FIELD REQUIREMENTS */}
      <section
        aria-label="Field requirements and implement selection"
        style={{
          backgroundColor: 'var(--color-terrax-charcoal)',
          paddingBlock: 'clamp(3.5rem, 7vw, 6rem)',
        }}
      >
        <Container>
          <div style={{ marginBottom: '3rem' }}>
            <span className="tx-overline">Selection Factors</span>
            <h2
              className="tx-heading-lg"
              style={{ color: '#fff', marginTop: '0.5rem', maxWidth: '28ch' }}
            >
              FIELD REQUIREMENTS
            </h2>
            <p
              className="tx-body"
              style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem', maxWidth: '55ch' }}
            >
              Implement selection can depend on several factors. Consider these criteria
              when identifying the right TERRAX series and configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {selectionFactors.map((factor, i) => (
              <div
                key={factor.label}
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--color-terrax-charcoal-2)',
                  border: '1px solid var(--color-terrax-border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent top line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor:
                      i % 2 === 0
                        ? 'var(--color-terrax-green)'
                        : 'var(--color-terrax-orange)',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-terrax-green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Settings2 size={16} style={{ color: 'var(--color-terrax-lime-light)' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      color: '#fff',
                    }}
                  >
                    {factor.label}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                  }}
                >
                  {factor.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. PRODUCT RANGE STRIP */}
      <ProductSeriesStrip
        overline="Product Range"
        heading="SIX TERRAX SERIES"
        subtext="Each series addresses a different set of agricultural requirements. Browse all six to identify the right starting point."
        theme="light"
        showCTA
      />

      {/* 5. CONFIGURATION RANGE */}
      <section
        id="configurations"
        aria-label="Currently available size and blade configurations"
        style={{
          backgroundColor: 'var(--color-terrax-green-dark)',
          paddingBlock: 'clamp(3.5rem, 7vw, 6rem)',
          scrollMarginTop: '80px',
        }}
      >
        <Container>
          <div style={{ marginBottom: '3rem' }}>
            <span className="tx-overline">Configuration Reference</span>
            <h2
              className="tx-heading-lg"
              style={{ color: '#fff', marginTop: '0.5rem', marginBottom: '0.75rem' }}
            >
              CURRENTLY AVAILABLE SIZE / BLADE CONFIGURATIONS
            </h2>
            <p
              className="tx-body"
              style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '62ch' }}
            >
              The following configurations are currently available across the TERRAX range.
              Not every configuration is available in every series — enquire with TERRAX to confirm
              specific series and size availability.
            </p>
          </div>

          {/* Config grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
              marginBottom: '2.5rem',
            }}
          >
            {sizeConfigs.map(({ width, blades }, i) => (
              <div
                key={`${width}-${blades}-${i}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = 'rgba(255,255,255,0.09)';
                  el.style.borderColor = 'rgba(232,98,26,0.4)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  el.style.borderColor = 'rgba(255,255,255,0.09)';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.75rem',
                    lineHeight: 1,
                    color: '#fff',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {width}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-orange)',
                  }}
                >
                  {blades}
                </span>
              </div>
            ))}
          </div>

          {/* Disclaimer note */}
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              marginBottom: '2.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Note:</strong>{' '}
              These configurations represent the overall TERRAX range. Availability per series
              may vary. Contact TERRAX directly to confirm the configuration available for your
              required series.
            </p>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              ENQUIRE WITH TERRAX
              <ArrowRight size={16} style={{ marginLeft: '0.4rem' }} />
            </Link>
            <Link
              to="/products"
              className="btn-ghost"
              style={{ textDecoration: 'none' }}
            >
              BROWSE ALL SERIES
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. ENQUIRY CTA */}
      <EnquiryCTA />
    </>
  );
}
