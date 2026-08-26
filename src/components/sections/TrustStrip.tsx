import { Container } from '../common/Container';

const trustItems = [
  'AGRICULTURAL IMPLEMENTS',
  'ROTAVATOR RANGE',
  '6 SERIES',
  'GUJARAT, INDIA',
];

export function TrustStrip() {
  return (
    <div
      style={{
        backgroundColor: '#0a1d12',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBlock: '0.85rem',
      }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-center">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-4">
              <span
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.75)',
                }}
              >
                {item}
              </span>
              {index < trustItems.length - 1 && (
                <span
                  className="hidden sm:inline-block"
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-terrax-orange)',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
