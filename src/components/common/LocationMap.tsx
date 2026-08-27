import { ExternalLink, MapPin } from 'lucide-react';
import { contact, trackContactEvent } from '../../data/contact';

interface LocationMapProps {
  title?: string;
  overline?: string;
  showDirectionsButton?: boolean;
  className?: string;
}

export function LocationMap({
  title = 'FIND TERRAX',
  overline = 'Manufacturing Location',
  showDirectionsButton = true,
  className = '',
}: LocationMapProps) {
  const handleDirectionsClick = () => {
    trackContactEvent('directions_clicked', { source: 'location_map' });
  };

  return (
    <div
      className={`tx-card ${className}`}
      style={{
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: '1px solid var(--color-terrax-border-light)',
        backgroundColor: '#fff',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
      }}
    >
      {/* Header with Title and Directions CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <div>
          {overline && (
            <span
              className="tx-overline"
              style={{ marginBottom: '0.25rem', display: 'block' }}
            >
              {overline}
            </span>
          )}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.35rem',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color: 'var(--color-terrax-charcoal)',
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>

        {showDirectionsButton && (
          <a
            href={contact.address.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDirectionsClick}
            className="btn-secondary"
            style={{
              textDecoration: 'none',
              padding: '0.5rem 1.25rem',
              fontSize: '0.825rem',
              minHeight: '44px',
            }}
            aria-label="Get directions to TERRAX manufacturing facility on Google Maps"
          >
            <ExternalLink size={16} />
            GET DIRECTIONS
          </a>
        )}
      </div>

      {/* Address Text Summary Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-terrax-offwhite)',
          marginBottom: '1.25rem',
          border: '1px solid var(--color-terrax-border-light)',
        }}
      >
        <MapPin
          size={18}
          style={{
            color: 'var(--color-terrax-green)',
            flexShrink: 0,
            marginTop: '2px',
          }}
        />
        <address
          style={{
            fontStyle: 'normal',
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--color-terrax-charcoal)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {contact.address.full}
        </address>
      </div>

      {/* Embedded Map Iframe */}
      <div
        style={{
          width: '100%',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--color-terrax-border-light)',
          backgroundColor: 'var(--color-terrax-offwhite)',
        }}
      >
        <iframe
          title="TERRAX Manufacturing Location — Chiloda, Gujarat"
          src={contact.address.embedUrl}
          width="100%"
          height="340"
          style={{
            border: 0,
            display: 'block',
            minHeight: '300px',
            width: '100%',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
