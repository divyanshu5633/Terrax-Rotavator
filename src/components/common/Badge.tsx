interface BadgeProps {
  label: string;
  variant?: 'green' | 'orange' | 'neutral';
  className?: string;
}

export function Badge({ label, variant = 'green', className = '' }: BadgeProps) {
  const styles: Record<string, string> = {
    green: 'var(--color-terrax-green-dark)',
    orange: 'var(--color-terrax-orange-dark)',
    neutral: 'var(--color-terrax-charcoal-3)',
  };

  const textStyles: Record<string, string> = {
    green: 'var(--color-terrax-lime-light)',
    orange: '#fff',
    neutral: 'var(--color-terrax-muted)',
  };

  return (
    <span
      className={`tx-badge ${className}`}
      style={{
        backgroundColor: styles[variant],
        color: textStyles[variant],
      }}
    >
      {label}
    </span>
  );
}
