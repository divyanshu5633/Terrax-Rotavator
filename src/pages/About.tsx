import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { MapPin, Mail, Phone } from 'lucide-react';
import { contact } from '../data/contact';

export function AboutPage() {
  useSEO({
    title: 'About TERRAX',
    description: 'TERRAX is a Gujarat-based manufacturer of premium rotavators and agricultural implements for the Indian market.',
    canonical: '/about',
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
          <span className="tx-overline">Who We Are</span>
          <h1
            className="tx-heading-xl"
            style={{ color: '#fff', maxWidth: '18ch', marginTop: '0.5rem' }}
          >
            About TERRAX
          </h1>
          <p
            className="tx-body"
            style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '55ch', marginTop: '1rem' }}
          >
            A Gujarat-based manufacturer of rotavators and agricultural implements, purpose-built for Indian farming conditions.
          </p>
        </Container>
      </div>

      {/* Content */}
      <div className="tx-section" style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <SectionHeading
                overline="Manufacturing"
                heading="Gujarat-Made Agricultural Implements"
                accentBar
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '1.5rem' }}>
                <p className="tx-body">
                  TERRAX produces rotavators and agricultural implements designed for the Indian market. The product range is developed with an understanding of the diverse soil types, tractor categories, and farming practices across India.
                </p>
                <p className="tx-body">
                  The manufacturing facility is located in Chiloda, Gujarat — a region with a long-established tradition in agricultural implement manufacturing.
                </p>
                <p className="tx-body">
                  The TERRAX product lineup covers six specialized rotavator series — each engineered for specific tractor ranges and farming applications, from compact mini models to high-capacity champion-grade implements.
                </p>
              </div>
            </div>

            {/* Manufacturing location card */}
            <div>
              <div
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-terrax-border-light)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-charcoal)',
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--color-terrax-border-light)',
                  }}
                >
                  Manufacturing & Contact
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={18} style={{ color: 'var(--color-terrax-green)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-mid)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.25rem' }}>
                        Address
                      </p>
                      <address style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-terrax-charcoal)', lineHeight: 1.6 }}>
                        {contact.address.line1},<br />
                        {contact.address.line2},<br />
                        {contact.address.state} {contact.address.pincode},<br />
                        {contact.address.country}
                      </address>
                    </div>
                  </div>
                  {contact.phones.map((p) => (
                    <div key={p.number} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <Phone size={16} style={{ color: 'var(--color-terrax-green)', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: 'var(--font-mid)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.15rem' }}>Phone</p>
                        <a href={`tel:${p.number.replace(/\s/g, '')}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-terrax-green)', textDecoration: 'none', fontWeight: 600 }}>
                          {p.display}
                        </a>
                      </div>
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Mail size={16} style={{ color: 'var(--color-terrax-green)', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-mid)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.15rem' }}>Email</p>
                      <a href={contact.email.link} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-terrax-green)', textDecoration: 'none', wordBreak: 'break-all' }}>
                        {contact.email.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <CTASection />
    </>
  );
}
