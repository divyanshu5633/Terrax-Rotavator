import { MapPin, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { ProductImage } from '../common/ProductImage';
import { contact } from '../../data/contact';

export function ManufacturingSection() {
  return (
    <section
      id="manufacturing"
      className="tx-section"
      style={{
        backgroundColor: 'var(--color-terrax-green-dark)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Location */}
          <div className="lg:col-span-6 min-w-0">
            <span className="tx-overline" style={{ color: 'var(--color-terrax-orange)', marginBottom: '0.5rem' }}>
              Manufacturing Base
            </span>
            <h2
              className="tx-heading-lg"
              style={{ color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}
            >
              MANUFACTURED IN GUJARAT
            </h2>
            <p className="tx-body" style={{ color: 'rgba(255, 255, 255, 0.75)', marginBottom: '1.5rem' }}>
              TERRAX rotavators and agricultural implements are produced in Chandial, Gujarat — an established hub for agricultural machinery manufacturing in India. Direct factory oversight ensures consistent build quality and specification integrity.
            </p>

            {/* Address Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-terrax-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <MapPin size={20} style={{ color: 'var(--color-terrax-lime-light)' }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-orange)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Factory Address
                </p>
                <address
                  style={{
                    fontStyle: 'normal',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.6,
                  }}
                >
                  {contact.address.line1},<br />
                  {contact.address.line2},<br />
                  {contact.address.state} {contact.address.pincode}, {contact.address.country}
                </address>
              </div>
            </div>

            <div>
              <Button as="link" to="/contact" variant="primary" rightIcon={<ArrowRight size={16} />}>
                VIEW LOCATION
              </Button>
            </div>
          </div>

          {/* Right Column: Factory Image */}
          <div className="lg:col-span-6 min-w-0">
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                backgroundColor: 'var(--color-terrax-charcoal)',
              }}
            >
              <ProductImage
                src="/assets/factory/terrax-factory-batch.png"
                alt="TERRAX Agricultural Machinery Factory Batch Production in Chandial Gujarat"
                aspectRatio="16/10"
                objectFit="cover"
                fallbackTitle="GUJARAT FACTORY"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
