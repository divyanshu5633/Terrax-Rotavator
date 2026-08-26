import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Layers } from 'lucide-react';

const configurations = [
  { widthFt: '3 FT', blades: '16 BLADES', mm: '900 mm' },
  { widthFt: '3.5 FT', blades: '20 BLADES', mm: '1,050 mm' },
  { widthFt: '3.5 FT', blades: '24 BLADES', mm: '1,050 mm' },
  { widthFt: '4 FT', blades: '30 BLADES', mm: '1,200 mm' },
  { widthFt: '5 FT', blades: '36 BLADES', mm: '1,500 mm' },
  { widthFt: '5.5 FT', blades: '39 BLADES', mm: '1,650 mm' },
  { widthFt: '5.5 FT', blades: '42 BLADES', mm: '1,650 mm' },
  { widthFt: '6 FT', blades: '42 BLADES', mm: '1,800 mm' },
  { widthFt: '6 FT', blades: '48 BLADES', mm: '1,800 mm' },
  { widthFt: '7 FT', blades: '48 BLADES', mm: '2,100 mm' },
  { widthFt: '7 FT', blades: '54 BLADES', mm: '2,100 mm' },
];

export function AvailableConfigurationsSection() {
  return (
    <section
      id="configurations"
      className="tx-section"
      style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionHeading
            overline="Specification Reference"
            heading="Available Configurations"
            subtext="Comprehensive size and blade configurations engineered across the TERRAX rotavator range."
            align="center"
          />
        </div>

        {/* Technical Grid — 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {configurations.map((config, index) => (
            <div
              key={index}
              style={{
                padding: '1.25rem 1rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#fff',
                border: '1px solid var(--color-terrax-border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    color: 'var(--color-terrax-green)',
                    lineHeight: 1,
                  }}
                >
                  {config.widthFt}
                </span>
                <Layers size={16} style={{ color: 'var(--color-terrax-orange)', flexShrink: 0 }} />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-charcoal)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {config.blades}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--color-terrax-muted)',
                  }}
                >
                  Working Width ~ {config.mm}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--color-terrax-muted)',
            marginTop: '2rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          * Blade and width specifications represent standard production dimensions. Contact TERRAX for series-specific matching.
        </p>
      </Container>
    </section>
  );
}
