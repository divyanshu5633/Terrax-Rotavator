import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProductImage } from '../common/ProductImage';
import { Cog, Shield, Leaf, Target } from 'lucide-react';

const pillars = [
  {
    icon: <Cog size={22} strokeWidth={1.5} />,
    title: 'Engineering Precision',
    body: 'Manufactured with attention to dimensional accuracy and material selection for consistent tillage performance.',
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: 'Dependable Reliability',
    body: 'Built to withstand demanding soil conditions season after season across Indian landholdings.',
  },
  {
    icon: <Leaf size={22} strokeWidth={1.5} />,
    title: 'Indian Soil Focus',
    body: 'Developed specifically for the diverse soil textures, moisture levels, and crop stubble requirements in India.',
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: 'Application Usability',
    body: 'Six specialized series tailored to distinct tractor HP ranges and field preparation workflows.',
  },
];

export function BrandIntro() {
  return (
    <section
      id="brand-intro"
      className="tx-section"
      style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Pillars */}
          <div className="lg:col-span-7 min-w-0">
            <SectionHeading
              overline="Agricultural Focus"
              heading="Engineered for the Field"
              accentBar
              subtext="TERRAX manufactures rotavators and tillage implements dedicated to thorough soil preparation and practical agricultural operations across India."
            />

            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="tx-body">
                Effective seedbed preparation is fundamental to crop productivity. TERRAX implements are designed around practical field demands — balancing rotor speed, blade geometry, and structural rigidity to ensure clean soil pulverization and stubble incorporation.
              </p>
              <p className="tx-body">
                Whether operating in heavy clay, wet paddy fields, or dry orchard inter-rows, our six specialized product series offer appropriate implement matching for various tractor horsepower capacities.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: '2rem' }}>
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-terrax-border-light)',
                    backgroundColor: '#fff',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-terrax-green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem',
                      color: 'var(--color-terrax-lime-light)',
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      color: 'var(--color-terrax-charcoal)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--color-terrax-muted-dark)',
                      lineHeight: 1.55,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Agricultural Visual */}
          <div className="lg:col-span-5 min-w-0">
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-terrax-border-light)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                backgroundColor: '#fff',
              }}
            >
              <ProductImage
                src="/assets/products/terrax-rotavator-side.png"
                alt="TERRAX Agricultural Rotavator Side Gearbox Profile"
                aspectRatio="4/3"
                objectFit="contain"
                fallbackTitle="TILLAGE ENGINEERING"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
