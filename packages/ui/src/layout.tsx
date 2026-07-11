import * as React from 'react';
import { cn } from './utils';
import { ChevronRight } from 'lucide-react';

/* ── Container ──────────────────────────────────────────────────── */

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children?: React.ReactNode;
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export function Container({ className, size = 'lg', children, ...props }: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeMap[size], className)} {...props}>
      {children}
    </div>
  );
}

/* ── Grid ────────────────────────────────────────────────────────── */

export interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const gapMap = { none: '', sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };
const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
  6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-6',
  12: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-12',
};

export function Grid({ className, cols = 1, gap = 'md', children, ...props }: GridProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('grid', colsMap[cols], gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}

/* ── Stack ───────────────────────────────────────────────────────── */

export interface StackProps {
  direction?: 'row' | 'col';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  className?: string;
  children?: React.ReactNode;
}

const stackGapMap = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export function Stack({
  className,
  direction = 'col',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  children,
  ...props
}: StackProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row flex-wrap',
        stackGapMap[gap],
        `items-${align}`,
        `justify-${justify}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Sidebar Layout ──────────────────────────────────────────────── */

export interface SidebarLayoutProps {
  sidebarWidth?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function SidebarLayout({
  className,
  children,
  ...props
}: SidebarLayoutProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col md:flex-row', className)} {...props}>
      {children}
    </div>
  );
}

export function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside
      className={cn(
        'w-full shrink-0 border-b border-neutral-200 md:w-64 md:border-b-0 md:border-r dark:border-neutral-800',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
}

export function Main({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={cn('flex-1', className)} {...props}>
      {children}
    </main>
  );
}

/* ── Separator ──────────────────────────────────────────────────── */

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn('h-px w-full bg-neutral-200 dark:bg-neutral-800', className)}
      {...props}
    />
  );
}

/* ── Breadcrumbs ──────────────────────────────────────────────────── */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ className, items, ...props }: BreadcrumbsProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-4', className)} {...props}>
      <ol className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {item.href ? (
              <a href={item.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {item.label}
              </a>
            ) : (
              <span className="text-neutral-900 dark:text-neutral-100">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── Navbar ───────────────────────────────────────────────────────── */

export interface NavbarProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string; active?: boolean }[];
  className?: string;
  children?: React.ReactNode;
}

export function Navbar({ className, logo, links = [], children, ...props }: NavbarProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        'sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80',
        className
      )}
      {...props}
    >
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          {logo && <div className="font-semibold">{logo}</div>}
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  link.active
                    ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {children}
      </Container>
    </nav>
  );
}
