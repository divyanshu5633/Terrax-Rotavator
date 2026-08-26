import { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ProductImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: 'contain' | 'cover';
  priority?: boolean;
  className?: string;
  fallbackTitle?: string;
}

export function ProductImage({
  src,
  alt,
  aspectRatio = '4/3',
  objectFit = 'contain',
  priority = false,
  className = '',
  fallbackTitle,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <ImagePlaceholder
        seriesName={fallbackTitle || alt.split(' ')[0] || 'TERRAX ROTAVATOR'}
        aspectRatio={aspectRatio}
        label={alt}
      />
    );
  }

  return (
    <div
      className={`tx-product-image-frame ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        backgroundColor: '#121214',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Subtle loader background */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-terrax-charcoal-2)',
            animation: 'fadeIn 0.3s ease infinite alternate',
          }}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: '100%',
          height: '100%',
          objectFit,
          objectPosition: 'center',
          transition: 'opacity 0.3s ease',
          opacity: isLoaded ? 1 : 0,
          display: 'block',
        }}
      />
    </div>
  );
}
