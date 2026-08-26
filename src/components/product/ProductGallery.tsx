import { useState } from 'react';
import { ProductImage } from '../common/ProductImage';

interface ProductGalleryProps {
  seriesName: string;
  galleryPaths?: string[];
  heroImage?: string;
}

export function ProductGallery({ seriesName, galleryPaths = [], heroImage }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = galleryPaths.length > 0 ? galleryPaths : [
    heroImage || '',
    '/assets/products/terrax-rotavator-side.png',
    '/assets/products/terrax-rotavator-stand.png',
  ].filter(Boolean);

  const currentSrc = images[selectedIndex] || heroImage || '';

  return (
    <div className="flex flex-col gap-3 width-full min-w-0">
      {/* Primary Image View */}
      <div
        style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backgroundColor: 'var(--color-terrax-charcoal)',
          boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
        }}
      >
        <ProductImage
          src={currentSrc}
          alt={`Terrax ${seriesName} rotavator view 0${selectedIndex + 1}`}
          aspectRatio="4/3"
          objectFit="contain"
          priority={true}
          fallbackTitle={seriesName}
        />
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div
          style={{
            display: 'flex',
            gap: '0.6rem',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {images.map((_img, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${seriesName} image 0${index + 1}`}
                style={{
                  width: '72px',
                  height: '54px',
                  flexShrink: 0,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: `2px solid ${isSelected ? 'var(--color-terrax-orange)' : 'rgba(255, 255, 255, 0.15)'}`,
                  opacity: isSelected ? 1 : 0.65,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-terrax-charcoal-2)',
                  padding: 0,
                }}
              >
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141416' }}>
                  <span style={{ fontFamily: 'var(--font-mid)', fontSize: '0.65rem', color: isSelected ? 'var(--color-terrax-orange)' : '#fff', fontWeight: 700 }}>
                    0{index + 1}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
