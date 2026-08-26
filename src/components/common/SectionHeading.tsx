import type { ReactNode } from 'react';

interface SectionHeadingProps {
  overline?: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
  light?: boolean;          // true = white text (for dark backgrounds)
  accentBar?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  overline,
  heading,
  subtext,
  align = 'left',
  light = false,
  accentBar = false,
  children,
}: SectionHeadingProps) {
  const textColor = light ? '#fff' : 'var(--color-terrax-charcoal)';
  const subtextColor = light ? 'rgba(255,255,255,0.65)' : 'var(--color-terrax-muted-dark)';

  return (
    <div style={{ textAlign: align, color: textColor }}>
      {overline && (
        <span className="tx-overline">{overline}</span>
      )}
      {accentBar && align === 'left' && (
        <span className="tx-accent-bar" />
      )}
      <h2 className="tx-heading-lg" style={{ color: textColor }}>
        {heading}
      </h2>
      {subtext && (
        <p
          className="tx-body"
          style={{
            color: subtextColor,
            marginTop: '1rem',
            maxWidth: align === 'center' ? '56ch' : '52ch',
            marginInline: align === 'center' ? 'auto' : undefined,
          }}
        >
          {subtext}
        </p>
      )}
      {children}
    </div>
  );
}
