import * as React from 'react';
import { cn } from './utils';

/* ── Container ──────────────────────────────────────────────────── */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const containerSizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1440px]',
  full: 'max-w-full',
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', containerSizes[size], className)}
      {...props}
    />
  )
);
Container.displayName = 'Container';

/* ── Grid ─────────────────────────────────────────────────────────── */

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
  6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12',
};

const gridGaps = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 'md', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid', gridCols[cols], gridGaps[gap], className)}
      {...props}
    />
  )
);
Grid.displayName = 'Grid';

/* ── Stack ─────────────────────────────────────────────────────────── */

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
}

const stackGaps = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

const stackAlign = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const stackJustify = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = 'col', gap = 'md', align = 'stretch', justify = 'start', wrap = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row',
        stackGaps[gap],
        stackAlign[align],
        stackJustify[justify],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    />
  )
);
Stack.displayName = 'Stack';

/* ── Sidebar ──────────────────────────────────────────────────────── */

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right';
  width?: 'sm' | 'md' | 'lg';
  collapsible?: boolean;
  collapsed?: boolean;
}

const sidebarWidths = {
  sm: 'w-56',
  md: 'w-64',
  lg: 'w-72',
};

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, side = 'left', width = 'md', collapsed, ...props }, ref) => (
    <aside
      ref={ref}
      className={cn(
        'flex flex-col shrink-0',
        'bg-white dark:bg-neutral-900 border-r dark:border-neutral-800',
        side === 'right' && 'border-r-0 border-l dark:border-neutral-800',
        collapsed ? 'w-16' : sidebarWidths[width],
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  )
);
Sidebar.displayName = 'Sidebar';

/* ── Spacer ──────────────────────────────────────────────────────── */

export interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const spacerSizes = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-8',
  xl: 'h-16',
};

const Spacer: React.FC<SpacerProps> = ({ size = 'md' }) => (
  <div className={spacerSizes[size]} />
);

export { Container, Grid, Stack, Sidebar, Spacer };
