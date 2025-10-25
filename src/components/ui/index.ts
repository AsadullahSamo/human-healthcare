export { default as Button } from './Button';
export type { ButtonProps } from './Button';

export { default as Card } from './Card';
export type { CardProps } from './Card';


export { default as Input, type InputProps } from './Input';


// Form components
// export { default as Form } from './Form';
// export { default as FormField } from './FormField';
// export { default as FormLabel } from './FormLabel';
// export { default as FormError } from './FormError';

// Layout components
// export { default as Container } from './Container';
// export { default as Section } from './Section';
// export { default as Grid } from './Grid';

// Navigation components
// export { default as Badge } from './Badge';
// export { default as Breadcrumb } from './Breadcrumb';
// export { default as Tabs } from './Tabs';

// Feedback components
// export { default as Alert } from './Alert';
// export { default as Toast } from './Toast';
// export { default as Loading } from './Loading';
// export { default as Spinner } from './Spinner';

// Media components
// export { default as Avatar } from './Avatar';
// export { default as Image } from './Image';
// export { default as Icon } from './Icon';

// Utility components
// export { default as Tooltip } from './Tooltip';
// export { default as Modal } from './Modal';
// export { default as Dropdown } from './Dropdown';

/**
 * Re-export common types from shared types
 */
export type {
  BaseComponentProps,
  ButtonVariant,
  ButtonSize,
  CardProps as BaseCardProps,
} from '../../types/index';
