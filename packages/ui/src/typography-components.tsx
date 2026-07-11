import * as React from 'react';
import { cn } from './utils';

/* ── Heading ────────────────────────────────────────────────────── */
export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children?: React.ReactNode;
}

const headingClasses = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 text-3xl font-bold tracking-tight',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
  h6: 'scroll-m-20 text-base font-semibold tracking-tight',
};

export function Heading({ as: Tag = 'h1', className, children, ...props }: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Tag className={cn(headingClasses[Tag], className)} {...props}>
      {children}
    </Tag>
  );
}

/* ── Typography (body text variant) ──────────────────────────────── */
export interface TypographyProps {
  variant?: 'lead' | 'body' | 'body-sm' | 'caption' | 'overline';
  color?: 'default' | 'muted' | 'primary' | 'accent' | 'error' | 'success' | 'warning';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children?: React.ReactNode;
  as?: 'p' | 'span' | 'div';
}

const variantClasses = {
  lead: 'text-xl text-neutral-500 dark:text-neutral-400',
  body: 'text-base leading-7',
  'body-sm': 'text-sm leading-5',
  caption: 'text-xs leading-4 text-neutral-500 dark:text-neutral-400',
  overline: 'text-xs font-semibold uppercase tracking-widest',
};

const colorClasses = {
  default: 'text-neutral-900 dark:text-neutral-100',
  muted: 'text-neutral-500 dark:text-neutral-400',
  primary: 'text-primary-600 dark:text-primary-400',
  accent: 'text-accent-600 dark:text-accent-400',
  error: 'text-error',
  success: 'text-success',
  warning: 'text-warning',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Typography({
  as: Tag = 'p',
  variant = 'body',
  color = 'default',
  weight,
  className,
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Tag
      className={cn(
        variantClasses[variant],
        colorClasses[color],
        weight && weightClasses[weight],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── Text (shorthand for Typography) ──────────────────────────── */
export interface TextProps {
  variant?: 'lead' | 'body' | 'body-sm' | 'caption' | 'overline';
  color?: 'default' | 'muted' | 'primary' | 'accent' | 'error' | 'success' | 'warning';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children?: React.ReactNode;
}

export function Text({
  variant = 'body',
  color = 'default',
  weight,
  className,
  children,
  ...props
}: TextProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        variantClasses[variant],
        colorClasses[color],
        weight && weightClasses[weight],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
