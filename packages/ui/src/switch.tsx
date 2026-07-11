import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from './utils';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, label, id, ...props }, ref) => {
  const switchId = id || props.name;
  const switchEl = (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
        'bg-neutral-200 dark:bg-neutral-700',
        'data-[state=checked]:bg-primary-600 dark:data-[state=checked]:bg-primary-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'transition-colors duration-200',
        className
      )}
      id={switchId}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0',
          'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
          'transition-transform duration-200'
        )}
      />
    </SwitchPrimitives.Root>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2">
        {switchEl}
        <label
          htmlFor={switchId}
          className="text-sm font-medium leading-none text-neutral-700 dark:text-neutral-300 cursor-pointer"
        >
          {label}
        </label>
      </div>
    );
  }

  return switchEl;
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
