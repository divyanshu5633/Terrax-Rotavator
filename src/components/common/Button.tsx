import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  as?: 'button';
  href?: never;
  to?: never;
}

interface ButtonAsAnchor extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  as: 'a';
  href: string;
  to?: never;
}

interface ButtonAsLink extends BaseProps {
  as: 'link';
  to: string;
  href?: never;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    leftIcon,
    rightIcon,
    fullWidth = false,
  } = props;

  const cls = [
    variantClass[variant],
    size === 'sm' ? '!py-2 !px-5 !text-xs !min-h-[40px]' : '',
    size === 'lg' ? '!py-4 !px-9 !text-base' : '',
    fullWidth ? 'w-full justify-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (props.as === 'a') {
    const { as: _a, href, leftIcon: _l, rightIcon: _r, variant: _v, size: _s, fullWidth: _fw, ...anchorRest } = props;
    return (
      <a href={href} className={cls} {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  if (props.as === 'link') {
    const { as: _a, to, leftIcon: _l, rightIcon: _r, variant: _v, size: _s, fullWidth: _fw, ...linkRest } = props;
    return (
      <Link to={to} className={cls} {...(linkRest as object)}>
        {content}
      </Link>
    );
  }

  const { as: _a, leftIcon: _l, rightIcon: _r, variant: _v, size: _s, fullWidth: _fw, ...btnRest } = props;
  return (
    <button className={cls} {...(btnRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
