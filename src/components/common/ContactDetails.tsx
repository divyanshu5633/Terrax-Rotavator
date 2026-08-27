import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';
import { contact, trackContactEvent } from '../../data/contact';

interface ContactDetailsProps {
  showQuickActions?: boolean;
  className?: string;
}

export function ContactDetails({
  showQuickActions = true,
  className = '',
}: ContactDetailsProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* ── Direct Contact Cards ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Phone Numbers */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#fff',
            border: '1px solid var(--color-terrax-border-light)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '0.85rem',
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-terrax-green-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={17} style={{ color: 'var(--color-terrax-lime-light)' }} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted-dark)',
                  display: 'block',
                }}
              >
                Direct Phone Lines
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-charcoal)',
                  margin: 0,
                }}
              >
                Call TERRAX
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {contact.phones.map((p) => (
              <a
                key={p.number}
                href={`tel:${p.raw}`}
                onClick={() => trackContactEvent('phone_clicked', { phone: p.number })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-terrax-offwhite)',
                  border: '1px solid var(--color-terrax-border-light)',
                  textDecoration: 'none',
                  minHeight: '44px',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.borderColor = 'var(--color-terrax-green)';
                  e.currentTarget.style.transform = 'translateX(3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-terrax-offwhite)';
                  e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                aria-label={`Call TERRAX at ${p.display}`}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--color-terrax-charcoal)',
                  }}
                >
                  {p.display}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-orange)',
                  }}
                >
                  Call Now →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* WhatsApp Card */}
        <a
          href={contact.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactEvent('whatsapp_clicked', { source: 'contact_details' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#fff',
            border: '1px solid var(--color-terrax-border-light)',
            textDecoration: 'none',
            minHeight: '48px',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#25D366';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.12)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label={`Connect via WhatsApp at ${contact.whatsapp.display}`}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MessageCircle size={20} style={{ color: '#fff' }} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted-dark)',
                  display: 'block',
                }}
              >
                Instant Messaging
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--color-terrax-charcoal)',
                  margin: 0,
                }}
              >
                WhatsApp: {contact.whatsapp.display}
              </p>
            </div>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mid)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#25D366',
            }}
          >
            Chat →
          </span>
        </a>

        {/* Email Card */}
        <a
          href={contact.email.link}
          onClick={() => trackContactEvent('email_clicked', { source: 'contact_details' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#fff',
            border: '1px solid var(--color-terrax-border-light)',
            textDecoration: 'none',
            minHeight: '48px',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-terrax-green)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,77,46,0.08)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label={`Email TERRAX at ${contact.email.address}`}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-terrax-green-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={19} style={{ color: 'var(--color-terrax-lime-light)' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted-dark)',
                  display: 'block',
                }}
              >
                Email Support
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  color: 'var(--color-terrax-charcoal)',
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {contact.email.address}
              </p>
            </div>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mid)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-terrax-green)',
              flexShrink: 0,
              marginLeft: '0.5rem',
            }}
          >
            Email →
          </span>
        </a>

        {/* Manufacturing Location Card */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#fff',
            border: '1px solid var(--color-terrax-border-light)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-terrax-green-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              <MapPin size={19} style={{ color: 'var(--color-terrax-lime-light)' }} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted-dark)',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Manufacturing Location
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-charcoal)',
                  marginBottom: '0.4rem',
                }}
              >
                TERRAX
              </p>
              <address
                style={{
                  fontStyle: 'normal',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--color-terrax-charcoal)',
                  lineHeight: 1.6,
                }}
              >
                {contact.address.line1},<br />
                {contact.address.line2},<br />
                {contact.address.state} {contact.address.pincode},<br />
                {contact.address.country}
              </address>

              <div style={{ marginTop: '0.85rem' }}>
                <a
                  href={contact.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactEvent('directions_clicked', { source: 'address_card' })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mid)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terrax-orange)',
                    textDecoration: 'none',
                  }}
                >
                  <ExternalLink size={13} />
                  Get Directions on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Action Buttons Row (Mobile & Desktop) ────────────────────── */}
      {showQuickActions && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.75rem',
          }}
        >
          <a
            href={`tel:${contact.phones[0].raw}`}
            onClick={() => trackContactEvent('phone_clicked', { phone: contact.phones[0].number })}
            className="btn-primary"
            style={{
              textDecoration: 'none',
              padding: '0.65rem 1rem',
              fontSize: '0.8rem',
              minHeight: '48px',
            }}
            aria-label="Call TERRAX"
          >
            <Phone size={15} />
            CALL TERRAX
          </a>

          <a
            href={contact.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactEvent('whatsapp_clicked', { source: 'quick_actions' })}
            className="btn-ghost"
            style={{
              textDecoration: 'none',
              padding: '0.65rem 1rem',
              fontSize: '0.8rem',
              minHeight: '48px',
              backgroundColor: 'rgba(37,211,102,0.1)',
              borderColor: 'rgba(37,211,102,0.5)',
              color: '#0D2818',
            }}
            aria-label="WhatsApp TERRAX"
          >
            <MessageCircle size={15} style={{ color: '#25D366' }} />
            WHATSAPP
          </a>

          <a
            href={contact.email.link}
            onClick={() => trackContactEvent('email_clicked', { source: 'quick_actions' })}
            className="btn-secondary"
            style={{
              textDecoration: 'none',
              padding: '0.65rem 1rem',
              fontSize: '0.8rem',
              minHeight: '48px',
            }}
            aria-label="Email TERRAX"
          >
            <Mail size={15} />
            EMAIL TERRAX
          </a>
        </div>
      )}
    </div>
  );
}
