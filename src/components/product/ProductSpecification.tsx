import type { Series } from '../../data/series';
import { sizeConfigs } from '../../data/products';
import { Badge } from '../common/Badge';
import { Phone, MessageCircle } from 'lucide-react';
import { contact } from '../../data/contact';

interface ProductSpecificationProps {
  series: Series;
}

export function ProductSpecification({ series }: ProductSpecificationProps) {
  const sizes = sizeConfigs.filter((s) => series.sizeConfigIds.includes(s.id));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3
          className="tx-heading-md"
          style={{ fontSize: '1.15rem', color: 'var(--color-terrax-charcoal)', margin: 0 }}
        >
          Available Configurations & Specifications
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-mid)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-terrax-orange)',
          }}
        >
          TECHNICAL REFERENCE
        </span>
      </div>

      {sizes.length > 0 ? (
        <div className="tx-table-wrapper">
          <table className="tx-table">
            <thead>
              <tr>
                <th scope="col">Working Width</th>
                <th scope="col">Approx. Width (mm)</th>
                <th scope="col">Blade Configuration</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size) => (
                <tr key={size.id}>
                  <td>
                    <span style={{ fontWeight: 600, color: 'var(--color-terrax-green)' }}>
                      {size.widthFt} ft
                    </span>
                  </td>
                  <td>{size.widthMm.toLocaleString()} mm</td>
                  <td>
                    <Badge label={`${size.bladeCount} Blades`} variant="green" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#fff',
            border: '1px solid var(--color-terrax-border-light)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mid)',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: 'var(--color-terrax-charcoal)',
              marginBottom: '0.5rem',
            }}
          >
            Configuration Details Available on Enquiry
          </p>
          <p
            className="tx-body"
            style={{ fontSize: '0.85rem', color: 'var(--color-terrax-muted-dark)', marginBottom: '1.25rem' }}
          >
            Detailed technical specifications, tractor HP matching, working depth, and blade options for the {series.name} are provided directly by our manufacturing team upon request.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${contact.phones[0].number.replace(/\s/g, '')}`}
              className="btn-secondary"
              style={{ textDecoration: 'none', minHeight: '40px', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <Phone size={14} /> Call Factory Team
            </a>
            <a
              href={contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', minHeight: '40px', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <MessageCircle size={14} /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      )}

      <p
        style={{
          fontSize: '0.78rem',
          color: 'var(--color-terrax-muted)',
          marginTop: '0.85rem',
          fontFamily: 'var(--font-body)',
        }}
      >
        * Specific blade, gearbox, and tractor horsepower recommendations for the {series.name} can be confirmed with TERRAX direct support based on your local soil conditions.
      </p>
    </div>
  );
}
