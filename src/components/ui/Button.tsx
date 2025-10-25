import React from 'react';
import type { ButtonProps } from '../../types/index';

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export type { ButtonProps };
export default Button;
