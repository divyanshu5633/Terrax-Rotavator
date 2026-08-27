import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { contact } from '../../data/contact';

// ─── EnquiryCTA ───────────────────────────────────────────────────────────────
// Brand-level CTA section for the four brand/company pages.
// Spec headline: "LET'S FIND THE RIGHT TERRAX SOLUTION."
// Do not confuse with CTASection (used on product pages) — this has a
// different headline and contact-focused layout.

export function EnquiryCTA() {
  return (
    <section
      id="enquire"
      aria-label="Contact and enquiry"
      style={{
        backgroundColor: 'var(--color-terrax-charcoal)',
        paddingBlock: '4rem 3.5rem',
      }}
    >
      <Container>
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            position: 'relative',
            background:
              'linear-gradient(135deg, var(--color-terrax-green-dark) 0%, #081810 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Orange top accent bar */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background:
                'linear-gradient(90deg, var(--color-terrax-orange) 0%, transparent 60%)',
            }}
          />

          {/* Background grid texture */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{ padding: 'clamp(2rem, 5vw, 4rem)', position: 'relative', zIndex: 1 }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: 'var(--font-mid)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-terrax-orange)',
                marginBottom: '1rem',
              }}
            >
              Direct Enquiry
            </p>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                textTransform: 'uppercase',
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                marginBottom: '1rem',
                maxWidth: '22ch',
              }}
            >
              LET'S FIND THE RIGHT TERRAX SOLUTION.
            </h2>

            {/* Supporting copy */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.65,
                maxWidth: '56ch',
                marginBottom: '2.5rem',
              }}
            >
              Connect with the Terrax team for product information, configurations and enquiries.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
              }}
            >
              <Button
                as="link"
                to="/contact"
                variant="primary"
                rightIcon={<ArrowRight size={17} />}
              >
                ENQUIRE NOW
              </Button>

              <a
                href={`tel:${contact.phones[0].number.replace(/\s/g, '')}`}
                className="btn-ghost"
                style={{ textDecoration: 'none' }}
                aria-label={`Call TERRAX at ${contact.phones[0].display}`}
              >
                <Phone size={17} />
                CALL TERRAX
              </a>

              <a
                href={contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'rgba(37,211,102,0.08)',
                  borderColor: 'rgba(37,211,102,0.35)',
                }}
                aria-label="Contact TERRAX via WhatsApp"
              >
                <MessageCircle size={17} style={{ color: '#25D366' }} />
                WHATSAPP TERRAX
              </a>
            </div>

            {/* Contact strip */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              {contact.phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')
                  }
                >
                  <Phone
                    size={13}
                    style={{ color: 'var(--color-terrax-orange)', flexShrink: 0 }}
                  />
                  {p.display}
                </a>
              ))}
              <a
                href={contact.email.link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')
                }
              >
                {contact.email.address}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
