import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Wrench, Package, MapPin, HeadphonesIcon } from 'lucide-react';
import { contact } from '../../data/contact';

const reasons = [
  {
    icon: <Wrench size={26} strokeWidth={1.5} />,
    title: 'Engineered for Agriculture',
    body: 'Built specifically around tillage and rotavator applications — focusing on practical field requirements, structural durability, and reliable operation.',
  },
  {
    icon: <Package size={26} strokeWidth={1.5} />,
    title: 'Practical Product Range',
    body: 'Six specialized series designed for different landholdings, soil textures, and tractor capacities, rather than a generic one-size-fits-all model.',
  },
  {
    icon: <MapPin size={26} strokeWidth={1.5} />,
    title: 'Manufactured in Gujarat',
    body: `Manufacturing facility located at ${contact.address.line1}, ${contact.address.line2}, ${contact.address.state} ${contact.address.pincode}, India.`,
  },
  {
    icon: <HeadphonesIcon size={26} strokeWidth={1.5} />,
    title: 'Direct Enquiry',
    body: 'Direct contact with the TERRAX team for product specifications, availability, and technical guidance via phone, WhatsApp, and email.',
  },
];

export function WhyTerraxSection() {
  return (
    <section
      id="why-terrax"
      className="tx-section"
      style={{ backgroundColor: 'var(--color-terrax-charcoal)', color: '#fff' }}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionHeading
            overline="Why Choose Terrax"
            heading="Why TERRAX?"
            subtext="What sets TERRAX agricultural implements apart for farmers and agricultural equipment operators."
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-terrax-border)',
                backgroundColor: 'var(--color-terrax-charcoal-2)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Top orange accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: 'var(--color-terrax-orange)',
                }}
              />

              <div>
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-terrax-green-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: 'var(--color-terrax-lime-light)',
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    color: '#fff',
                    marginBottom: '0.6rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
