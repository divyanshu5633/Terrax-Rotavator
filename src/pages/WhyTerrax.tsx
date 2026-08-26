import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { WhyTerraxSection } from '../components/sections/WhyTerraxSection';
import { CTASection } from '../components/sections/CTASection';

export function WhyTerraxPage() {
  useSEO({
    title: 'Why TERRAX — Agricultural Implement Quality',
    description: 'Discover why TERRAX rotavators are chosen by farmers across India — specialized design, quality construction, and direct support.',
    canonical: '/why-terrax',
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
          <span className="tx-overline">Our Difference</span>
          <h1
            className="tx-heading-xl"
            style={{ color: '#fff', marginTop: '0.5rem' }}
          >
            Why TERRAX?
          </h1>
          <p
            className="tx-body"
            style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '55ch', marginTop: '1rem' }}
          >
            What makes TERRAX agricultural implements different from generic market alternatives.
          </p>
        </Container>
      </div>

      <WhyTerraxSection />
      <CTASection />
    </>
  );
}
