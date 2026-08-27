import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react';
import { contact, trackContactEvent } from '../../data/contact';
import { Container } from './Container';

interface ContactMicroCTAProps {
  heading?: string;
  subtext?: string;
  seriesSlug?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

export function ContactMicroCTA({
  heading = 'NEED PRODUCT INFORMATION?',
  subtext = 'Talk to Terrax about available series, working widths and configurations for your field.',
  seriesSlug,
  theme = 'dark',
  className = '',
}: ContactMicroCTAProps) {
  const isDark = theme === 'dark';
  const enquireLink = seriesSlug ? `/contact?series=${seriesSlug}` : '/contact';

  return (
    <div
      className={className}
      style={{
        backgroundColor: isDark ? 'var(--color-terrax-charcoal-2)' : 'var(--color-terrax-offwhite)',
        borderTop: isDark ? '1px solid var(--color-terrax-border)' : '1px solid var(--color-terrax-border-light)',
        borderBottom: isDark ? '1px solid var(--color-terrax-border)' : '1px solid var(--color-terrax-border-light)',
        paddingBlock: '1.75rem',
      }}
    >
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <PhoneCall size={14} style={{ color: 'var(--color-terrax-orange)' }} />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: isDark ? '#fff' : 'var(--color-terrax-charcoal)',
                  margin: 0,
                }}
              >
                {heading}
              </p>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: isDark ? 'rgba(255,255,255,0.65)' : 'var(--color-terrax-muted-dark)',
                margin: 0,
              }}
            >
              {subtext}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              to={enquireLink}
              onClick={() => trackContactEvent('product_enquiry_clicked', { seriesSlug })}
              className="btn-primary"
              style={{
                textDecoration: 'none',
                padding: '0.5rem 1.25rem',
                fontSize: '0.8rem',
                minHeight: '44px',
              }}
            >
              ENQUIRE NOW
              <ArrowRight size={15} />
            </Link>

            <a
              href={contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactEvent('whatsapp_clicked', { source: 'micro_cta' })}
              className={isDark ? 'btn-ghost' : 'btn-secondary'}
              style={{
                textDecoration: 'none',
                padding: '0.5rem 1.25rem',
                fontSize: '0.8rem',
                minHeight: '44px',
              }}
              aria-label="WhatsApp TERRAX"
            >
              <MessageCircle size={15} style={{ color: '#25D366' }} />
              WHATSAPP TERRAX
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
