import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { ApplicationsSection } from '../components/sections/ApplicationsSection';
import { CTASection } from '../components/sections/CTASection';

export function ApplicationsPage() {
  useSEO({
    title: 'Applications — TERRAX Rotavators',
    description: 'TERRAX rotavators are designed for paddy, wheat, cotton, sugarcane, vegetables, orchards and more. Explore all farming applications.',
    canonical: '/applications',
  });

  return (
    <>
      {/* Page Hero */}
      <div
        style={{
          backgroundColor: 'var(--color-terrax-green-dark)',
          paddingTop: 'clamp(5.5rem, 12vw, 8rem)',
          paddingBottom: 'clamp(2.5rem, 6vw, 4rem)',
        }}
      >
        <Container>
          <span className="tx-overline">Farming Applications</span>
          <h1
            className="tx-heading-xl"
            style={{ color: '#fff', marginTop: '0.5rem' }}
          >
            Where TERRAX Performs
          </h1>
          <p
            className="tx-body"
            style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '55ch', marginTop: '1rem' }}
          >
            TERRAX rotavators are suited to the diverse crop types and soil conditions found across Indian agriculture.
          </p>
        </Container>
      </div>

      <ApplicationsSection />
      <CTASection />
    </>
  );
}
