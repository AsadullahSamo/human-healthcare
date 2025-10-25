import React from 'react';
import { cn } from '../../lib/utils/cn';
import type { CardProps } from '../../types/index';

export function Card({
  children,
  className,
  title,
  description,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700',
        interactive && 'hover:shadow-md transition-shadow cursor-pointer',
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="p-6 pb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      <div className={cn(title || description ? 'p-6 pt-0' : 'p-6')}>
        {children}
      </div>
    </div>
  );
}

export type { CardProps };
export default Card;
