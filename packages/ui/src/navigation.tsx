import * as React from 'react';
import { cn } from './utils';

/* ── Tabs ─────────────────────────────────────────────────────────── */

export interface TabsProps {
  tabs: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: 'underline' | 'pills' | 'buttons';
  className?: string;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, value, defaultValue, onValueChange, variant = 'underline', className }, ref) => {
    const [activeTab, setActiveTab] = React.useState(value || defaultValue || tabs[0]?.value || '');
    const currentValue = value !== undefined ? value : activeTab;

    const handleChange = (tabValue: string) => {
      if (value === undefined) setActiveTab(tabValue);
      onValueChange?.(tabValue);
    };

    return (
      <div ref={ref} className={cn('flex', className)} role="tablist" aria-orientation="horizontal">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={currentValue === tab.value}
            aria-controls={`tabpanel-${tab.value}`}
            disabled={tab.disabled}
            onClick={() => handleChange(tab.value)}
            className={cn(
              'text-sm font-medium transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950',
              'disabled:pointer-events-none disabled:opacity-50',
              variant === 'underline' && [
                'px-4 py-2.5 border-b-2 -mb-px',
                currentValue === tab.value
                  ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:border-neutral-300',
              ],
              variant === 'pills' && [
                'px-4 py-2 rounded-lg',
                currentValue === tab.value
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800',
              ],
              variant === 'buttons' && [
                'px-4 py-2 border border-neutral-200 dark:border-neutral-700',
                'first:rounded-l-lg last:rounded-r-lg -ml-px first:ml-0',
                currentValue === tab.value
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-600 z-10'
                  : 'bg-white dark:bg-neutral-950 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200',
              ],
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
);
Tabs.displayName = 'Tabs';

/* ── Breadcrumbs ──────────────────────────────────────────────────── */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, className, separator }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('flex items-center', className)}>
        <ol className="flex items-center gap-1.5 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">
                    {separator || (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                )}
                {isLast || !item.href ? (
                  <span
                    className={cn(
                      isLast
                        ? 'text-neutral-900 dark:text-neutral-100 font-medium'
                        : 'text-neutral-500 dark:text-neutral-400'
                    )}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);
Breadcrumbs.displayName = 'Breadcrumbs';

/* ── Navbar ────────────────────────────────────────────────────────── */

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean;
  transparent?: boolean;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, sticky = false, transparent = false, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        'flex items-center h-16 px-4 sm:px-6 lg:px-8',
        transparent
          ? 'bg-transparent'
          : 'bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800',
        sticky && 'sticky top-0 z-40',
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
);
Navbar.displayName = 'Navbar';

const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-2 font-semibold text-lg', className)} {...props} />
  )
);
NavbarBrand.displayName = 'NavbarBrand';

const NavbarSection = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-1 ml-auto', className)} {...props} />
  )
);
NavbarSection.displayName = 'NavbarSection';

export { Tabs, Breadcrumbs, Navbar, NavbarBrand, NavbarSection };
