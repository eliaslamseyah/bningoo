import * as React from 'react';
import { cn } from './utils';

/* ── Typography Components ───────────────────────────────────────── */

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl', className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('scroll-m-20 text-3xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  );
}

export function Lead({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-xl text-neutral-500 dark:text-neutral-400', className)} {...props}>
      {children}
    </p>
  );
}

export function Large({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  );
}

export function Small({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  );
}

export function Muted({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)} {...props}>
      {children}
    </p>
  );
}

export function Caption({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-xs text-neutral-500 dark:text-neutral-400', className)} {...props}>
      {children}
    </p>
  );
}

export function InlineCode({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        'relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
