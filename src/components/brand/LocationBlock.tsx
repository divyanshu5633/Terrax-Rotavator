import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '../common/Container';
import { contact } from '../../data/contact';

// ─── LocationBlock ────────────────────────────────────────────────────────────
// Displays TERRAX manufacturing/contact location in an editorial format.
// Does NOT create a second Google Maps embed — links to /contact for full map.
// theme: 'dark' = charcoal/green-dark bg, 'light' = offwhite bg

interface LocationBlockProps {
  theme?: 'dark' | 'light';
  /** Show GET DIRECTIONS button (links to Google Maps) */
  showDirections?: boolean;
  /** Show VIEW LOCATION button (links to /contact) */
  showContactLink?: boolean;
}

export function LocationBlock({
  theme = 'dark',
  showDirections = true,
  showContactLink = true,
}: LocationBlockProps) {
  const isDark = theme === 'dark';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.address.mapQuery}`;

  return (
    <section
      aria-label="Manufacturing location"
      style={{
        backgroundColor: isDark
          ? 'var(--color-terrax-green-dark)'
          : 'var(--color-terrax-offwhite)',
        paddingBlock: 'clamp(3rem, 6vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-2rem',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          lineHeight: 1,
          color: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        GJ
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Large typography + label */}
          <div>
            <span
              className="tx-overline"
              style={{ color: isDark ? 'var(--color-terrax-orange)' : 'var(--color-terrax-orange)', display: 'block', marginBottom: '1.25rem' }}
            >
              Manufacturing Location
            </span>

            {/* Large location label */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: isDark ? '#fff' : 'var(--color-terrax-charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              GUJARAT,
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--color-terrax-orange)',
                marginBottom: '2rem',
              }}
            >
              INDIA.
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: isDark ? 'rgba(255,255,255,0.65)' : 'var(--color-terrax-muted-dark)',
                lineHeight: 1.7,
                maxWidth: '48ch',
                marginBottom: '2rem',
              }}
            >
              TERRAX agricultural implements are manufactured in Chandial, Gujarat — a region with an established tradition in agricultural machinery production.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {showDirections && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? 'btn-ghost' : 'btn-secondary'}
                  style={{ textDecoration: 'none' }}
                  aria-label="Open location in Google Maps"
                >
                  <ExternalLink size={15} />
                  GET DIRECTIONS
                </a>
              )}
              {showContactLink && (
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  VIEW LOCATION
                  <ArrowRight size={15} />
                </Link>
              )}
            </div>
          </div>

          {/* Right: Address card */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                border: isDark
                  ? '1px solid rgba(255,255,255,0.10)'
                  : '1px solid var(--color-terrax-border-light)',
                backgroundColor: isDark
                  ? 'rgba(255,255,255,0.04)'
                  : '#fff',
                overflow: 'hidden',
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: '1.25rem 1.75rem',
                  borderBottom: isDark
                    ? '1px solid rgba(255,255,255,0.07)'
                    : '1px solid var(--color-terrax-border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: isDark
                    ? 'rgba(255,255,255,0.03)'
                    : 'var(--color-terrax-offwhite)',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-terrax-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={15} style={{ color: 'var(--color-terrax-lime-light)' }} />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isDark ? 'rgba(255,255,255,0.6)' : 'var(--color-terrax-muted-dark)',
                    margin: 0,
                  }}
                >
                  TERRAX — Factory Address
                </p>
              </div>

              {/* Address body */}
              <div style={{ padding: '2rem 1.75rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: isDark ? '#fff' : 'var(--color-terrax-charcoal)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.15,
                  }}
                >
                  TERRAX
                </p>
                <address
                  style={{
                    fontStyle: 'normal',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: isDark ? 'rgba(255,255,255,0.75)' : 'var(--color-terrax-charcoal)',
                    lineHeight: 1.85,
                    borderLeft: '3px solid var(--color-terrax-orange)',
                    paddingLeft: '1rem',
                  }}
                >
                  {contact.address.line1},<br />
                  {contact.address.line2},<br />
                  {contact.address.state} {contact.address.pincode},<br />
                  {contact.address.country}
                </address>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
