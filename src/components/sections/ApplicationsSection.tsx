import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

const applications = [
  { label: 'Paddy / Rice Fields', description: 'Puddling and primary tillage for wet paddy cultivation.' },
  { label: 'Wheat Cultivation', description: 'Seedbed preparation and stubble incorporation post-harvest.' },
  { label: 'Cotton Farming', description: 'Deep tillage and residue mixing for cotton crop establishment.' },
  { label: 'Sugarcane Fields', description: 'Inter-row tillage and ratoon management in sugarcane cultivation.' },
  { label: 'Vegetable Farming', description: 'Fine seedbed preparation for vegetable and horticulture crops.' },
  { label: 'Orchards & Plantations', description: 'Inter-row soil management in orchards, vineyards and plantations.' },
  { label: 'Residue Management', description: 'Incorporation of crop residue to improve soil organic matter.' },
  { label: 'Land Development', description: 'Primary tillage for newly cultivated or fallow land preparation.' },
];

export function ApplicationsSection() {
  return (
    <section
      id="applications"
      className="tx-section"
      style={{
        backgroundColor: 'var(--color-terrax-green)',
      }}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionHeading
            overline="Applications"
            heading="Designed for Indian Farming"
            subtext="TERRAX rotavators are suited to the diverse crop types and soil conditions found across Indian agriculture."
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((app, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background-color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = 'rgba(0,0,0,0.35)';
                el.style.borderColor = 'rgba(232,98,26,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.backgroundColor = 'rgba(0,0,0,0.2)';
                el.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-terrax-orange)',
                  marginBottom: '0.75rem',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  color: '#fff',
                  marginBottom: '0.4rem',
                }}
              >
                {app.label}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.6,
                }}
              >
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
