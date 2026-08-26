import { allSeries } from '../../data/series';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  className?: string;
}

export function ProductGrid({ className = '' }: ProductGridProps) {
  const sorted = [...allSeries].sort((a, b) => a.order - b.order);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {sorted.map((series) => (
        <ProductCard key={series.id} series={series} />
      ))}
    </div>
  );
}
