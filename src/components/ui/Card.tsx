import React from 'react';
import type { CardProps } from '../../types/index';

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export type { CardProps };
export default Card;
