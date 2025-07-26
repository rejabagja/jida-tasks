import React from 'react';
import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('container mx-auto', className)} {...props}>
      {children}
    </div>
  );
}
