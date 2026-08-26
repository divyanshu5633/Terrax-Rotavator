import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  seriesName?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = '4/3',
  className = '',
  seriesName,
}: ImagePlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        aspectRatio,
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'var(--color-terrax-charcoal)',
        background: 'linear-gradient(135deg, var(--color-terrax-green-dark) 0%, var(--color-terrax-charcoal) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      aria-label={label ?? `Product image placeholder${seriesName ? ` for ${seriesName}` : ''}`}
    >
      {/* Decorative blade motif */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }}
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="100" cy="75" r="50" stroke="white" strokeWidth="1" />
        <rect x="75" y="65" width="50" height="20" fill="white" />
      </svg>

      <div style={{ zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <div style={{ width: 36, height: 36, borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-terrax-orange)' }}>
          <ImageIcon size={20} />
        </div>
        {seriesName && (
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff' }}>
            {seriesName}
          </span>
        )}
        <span style={{ fontFamily: 'var(--font-mid)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-terrax-lime-light)' }}>
          TERRAX IMPLEMENT
        </span>
      </div>
    </div>
  );
}
