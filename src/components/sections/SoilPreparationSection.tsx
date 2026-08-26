import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { ProductImage } from '../common/ProductImage';

export function SoilPreparationSection() {
  return (
    <section
      id="soil-preparation"
      className="tx-section"
      style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Machinery Visual */}
          <div className="lg:col-span-6 min-w-0">
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-terrax-border-light)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                backgroundColor: '#fff',
              }}
            >
              <ProductImage
                src="/assets/products/terrax-rotavator-stand.png"
                alt="TERRAX Rotavator Soil Preparation Action"
                aspectRatio="16/10"
                objectFit="contain"
                fallbackTitle="TILLAGE ACTION"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 min-w-0">
            <span className="tx-overline" style={{ marginBottom: '0.5rem' }}>
              Field Performance
            </span>
            <h2
              className="tx-heading-lg"
              style={{ color: 'var(--color-terrax-charcoal)', marginBottom: '1rem', lineHeight: 1.08 }}
            >
              PREPARE THE SOIL.{' '}
              <span style={{ color: 'var(--color-terrax-green)', display: 'block' }}>
                PREPARE THE FIELD.
              </span>
            </h2>
            <p className="tx-body" style={{ marginBottom: '1.25rem' }}>
              Rotavators play a critical role in modern agricultural land management. By combining secondary tillage, clod crushing, and residue incorporation into a single pass, rotary tillers save time and fuel while producing ideal seedbed tilth.
            </p>
            <p className="tx-body" style={{ marginBottom: '2rem' }}>
              TERRAX rotavators are engineered to maintain consistent working depth and smooth operation across dryland tilling, ratoon management, and wet paddy puddling.
            </p>
            <div>
              <Button as="link" to="/products" variant="primary" rightIcon={<ArrowRight size={16} />}>
                VIEW PRODUCTS
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
