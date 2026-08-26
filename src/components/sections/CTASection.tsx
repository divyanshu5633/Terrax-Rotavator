import { Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { contact } from '../../data/contact';

export function CTASection() {
  return (
    <section
      id="cta"
      style={{
        backgroundColor: 'var(--color-terrax-charcoal)',
        paddingBlock: '4rem 3rem',
      }}
    >
      <Container>
        {/* Main CTA Card */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-10 rounded-2xl border border-gray-800 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--color-terrax-green-dark) 0%, #0d1e2d 100%)',
            marginBottom: '3rem',
          }}
        >
          {/* Accent vertical bar */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(to bottom, var(--color-terrax-orange), transparent)',
            }}
          />

          {/* Left: Text */}
          <div className="min-w-0" style={{ maxWidth: '540px' }}>
            <p
              style={{
                fontFamily: 'var(--font-mid)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-terrax-orange)',
                marginBottom: '0.35rem',
              }}
            >
              Direct Product Enquiry
            </p>
            <h2
              className="tx-heading-lg"
              style={{ color: '#fff', marginBottom: '0.65rem' }}
            >
              LOOKING FOR THE RIGHT ROTAVATOR?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.6,
              }}
            >
              Talk to TERRAX about the available series, tractor HP requirements, and size configurations for your field operations.
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto items-stretch sm:items-center">
            <a
              href={contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost justify-center"
              style={{ textDecoration: 'none', minHeight: '48px', backgroundColor: 'rgba(37,211,102,0.1)', borderColor: 'rgba(37,211,102,0.4)' }}
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle size={18} style={{ color: '#25D366' }} />
              WhatsApp
            </a>
            <a
              href={`tel:${contact.phones[0].number.replace(/\s/g, '')}`}
              className="btn-ghost justify-center"
              style={{ textDecoration: 'none', minHeight: '48px' }}
              aria-label="Call TERRAX"
            >
              <Phone size={18} />
              CALL TERRAX
            </a>
            <Button as="link" to="/contact" variant="primary" rightIcon={<ArrowRight size={18} />} className="justify-center">
              ENQUIRE NOW
            </Button>
          </div>
        </div>

        {/* Contact Micro-CTA Strip */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-lime-light)',
                  marginBottom: '0.15rem',
                }}
              >
                Need Product Information?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                Reach us directly across multiple lines or email.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <a
                href={`tel:${contact.phones[0].number.replace(/\s/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff', textDecoration: 'none', fontWeight: 600 }}
              >
                <Phone size={14} style={{ color: 'var(--color-terrax-orange)' }} />
                {contact.phones[0].display}
              </a>
              <a
                href={contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff', textDecoration: 'none', fontWeight: 600 }}
              >
                <MessageCircle size={14} style={{ color: '#25D366' }} />
                WhatsApp: {contact.whatsapp.display}
              </a>
              <a
                href={contact.email.link}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
              >
                <Mail size={14} style={{ color: 'var(--color-terrax-lime-light)' }} />
                {contact.email.address}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
