import type { ReactNode } from 'react';
import { Container } from '../common/Container';

// ─── BrandHero ────────────────────────────────────────────────────────────────
// Reusable editorial hero for brand/company pages.
// title accepts a string array — each element renders on its own line.
// theme: 'dark-green' = deepest green bg, 'charcoal' = near-black bg

interface CTAItem {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
}

interface BrandHeroProps {
  eyebrow?: string;
  title: string[];          // Each string = one line
  description?: string;
  primaryCTA?: CTAItem;
  secondaryCTA?: CTAItem;
  theme?: 'dark-green' | 'charcoal';
  /** Optional decorative right-side element (e.g. stat block or badge) */
  aside?: ReactNode;
}

export function BrandHero({
  eyebrow,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  theme = 'dark-green',
  aside,
}: BrandHeroProps) {
  const bg =
    theme === 'charcoal'
      ? 'var(--color-terrax-charcoal)'
      : 'var(--color-terrax-green-dark)';

  return (
    <div
      style={{
        backgroundColor: bg,
        paddingTop: 'clamp(5.5rem, 12vw, 9rem)',
        paddingBottom: 'clamp(3rem, 7vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid-line decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />
      {/* Orange accent bottom-left glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,98,26,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: aside ? '2.5rem' : '0',
            }}
            className={aside ? 'lg:flex-row lg:items-end lg:justify-between' : ''}
          >
            <div style={{ maxWidth: '680px' }}>
              {eyebrow && (
                <span
                  className="tx-overline"
                  style={{ marginBottom: '1rem', display: 'block' }}
                >
                  {eyebrow}
                </span>
              )}

              {/* Orange accent bar */}
              <div
                aria-hidden="true"
                style={{
                  width: '2.5rem',
                  height: '3px',
                  backgroundColor: 'var(--color-terrax-orange)',
                  borderRadius: '2px',
                  marginBottom: '1.25rem',
                }}
              />

              <h1
                className="tx-heading-xl"
                style={{ color: '#fff', lineHeight: 1.0 }}
              >
                {title.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </h1>

              {description && (
                <p
                  className="tx-body"
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    maxWidth: '58ch',
                    marginTop: '1.5rem',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                  }}
                >
                  {description}
                </p>
              )}

              {(primaryCTA || secondaryCTA) && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.85rem',
                    marginTop: '2.25rem',
                  }}
                >
                  {primaryCTA && (
                    <a
                      href={primaryCTA.href}
                      className="btn-primary"
                      style={{ textDecoration: 'none' }}
                      {...(primaryCTA.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {primaryCTA.label}
                    </a>
                  )}
                  {secondaryCTA && (
                    <a
                      href={secondaryCTA.href}
                      className="btn-ghost"
                      style={{ textDecoration: 'none' }}
                      {...(secondaryCTA.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {secondaryCTA.label}
                    </a>
                  )}
                </div>
              )}
            </div>

            {aside && (
              <div style={{ flexShrink: 0 }}>{aside}</div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
