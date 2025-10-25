export interface ContactInquiryRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactSubmissionResponse {
  success: true;
  message: string;
  submissionId?: string;
}

export interface ContactErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export type ContactApiResponse =
  | ContactSubmissionResponse
  | ContactErrorResponse;

export type Theme = 'light' | 'dark' | 'system';

export interface ThemePreference {
  theme: Theme;
  timestamp: Date;
}

export interface NavigationState {
  currentPath: string;
  mobileMenuOpen: boolean;
  loading: boolean;
}

export interface FieldValidation {
  isValid: boolean;
  error?: string;
}

export interface ContactFormValidation {
  name: FieldValidation;
  email: FieldValidation;
  phone: FieldValidation;
  subject: FieldValidation;
  message: FieldValidation;
  isFormValid: boolean;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ContactFormState {
  data: ContactInquiryRequest;
  validation: ContactFormValidation;
  status: SubmissionStatus;
  statusMessage: string;
  lastSubmissionAt?: Date;
}

export type ServicePlanId = 'essential' | 'premium';

export interface ServicePlan {
  id: ServicePlanId;
  name: string;
  priceUSD: number;
  priceRs: number;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

export type PhoneType = 'primary' | 'whatsapp' | 'international';

export interface ContactPhone {
  number: string;
  type: PhoneType;
  formatted: string;
}

export interface ContactAddress {
  street: string;
  area: string;
  city: string;
  country: string;
  mapUrl: string;
}

export interface BusinessHours {
  open: string;
  close: string;
  timezone: string;
  days: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CompanyInfo {
  address: ContactAddress;
  phone: ContactPhone[];
  email: string;
  hours: BusinessHours;
  socialLinks: SocialLink[];
}

export interface UiState {
  theme: ThemePreference;
  navigation: NavigationState;
}

export interface FormsState {
  contact: ContactFormState;
}

export interface RootState {
  ui: UiState;
  forms: FormsState;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'healthcare'
  | 'outline'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  interactive?: boolean;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequestConfig {
  method: HttpMethod;
  endpoint: string;
  body?: unknown;
  headers?: Record<string, string>;
}
