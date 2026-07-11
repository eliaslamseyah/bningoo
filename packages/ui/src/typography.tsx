import * as React from 'react';
import { cn } from './utils';

/* ── Typography System ────────────────────────────────────────────── */

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextVariant = 'body' | 'body-sm' | 'caption' | 'overline' | 'lead';
type TextColor = 'default' | 'muted' | 'primary' | 'accent' | 'error' | 'success' | 'warning';

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl font-bold tracking-tight',
  h2: 'text-3xl sm:text-4xl font-bold tracking-tight',
  h3: 'text-2xl sm:text-3xl font-semibold tracking-tight',
  h4: 'text-xl sm:text-2xl font-semibold tracking-tight',
  h5: 'text-lg sm:text-xl font-semibold',
  h6: 'text-base sm:text-lg font-semibold',
};

const textStyles: Record<TextVariant, string> = {
  body: 'text-base leading-relaxed',
  'body-sm': 'text-sm leading-relaxed',
  caption: 'text-xs leading-normal',
  overline: 'text-xs font-semibold uppercase tracking-widest',
  lead: 'text-lg leading-relaxed text-neutral-500 dark:text-neutral-400',
};

const textColors: Record<TextColor, string> = {
  default: 'text-neutral-900 dark:text-neutral-100',
  muted: 'text-neutral-500 dark:text-neutral-400',
  primary: 'text-primary-600 dark:text-primary-400',
  accent: 'text-accent-600 dark:text-accent-400',
  error: 'text-error',
  success: 'text-success',
  warning: 'text-warning',
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = 'h2', ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        ref={ref}
        className={cn(
          headingStyles[as],
          'text-neutral-900 dark:text-neutral-100',
          className
        )}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  color?: TextColor;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant = 'body', color = 'default', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(textStyles[variant], textColors[color], className)}
      {...props}
    />
  )
);
Typography.displayName = 'Typography';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariant;
  color?: TextColor;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const textWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, variant = 'body-sm', color = 'default', weight = 'normal', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(textStyles[variant], textColors[color], textWeights[weight], className)}
      {...props}
    />
  )
);
Text.displayName = 'Text';

export { Heading, Typography, Text };
export type { HeadingLevel, TextVariant, TextColor };
