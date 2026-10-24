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
            gap: '0.65rem',
            overflowX: 'auto',
            paddingBottom: '0.35rem',
            paddingTop: '0.15rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {images.map((img, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${seriesName} angle 0${index + 1}`}
                style={{
                  width: '76px',
                  height: '56px',
                  flexShrink: 0,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: `2px solid ${isSelected ? 'var(--color-terrax-orange)' : 'rgba(255, 255, 255, 0.18)'}`,
                  opacity: isSelected ? 1 : 0.7,
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  backgroundColor: '#121214',
                  padding: '2px',
                  transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                <img
                  src={img}
                  alt={`${seriesName} preview 0${index + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: 'calc(var(--radius-md) - 2px)',
                    display: 'block',
                  }}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
