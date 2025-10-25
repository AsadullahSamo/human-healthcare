import { z } from 'zod';

// Field schemas
const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters long')
  .max(100, 'Name must not exceed 100 characters')
  .regex(
    /^[a-zA-Z\s\-']+$/,
    'Name can only contain letters, spaces, hyphens, and apostrophes'
  )
  .transform(v => v.trim());

const emailSchema = z
  .string()
  .email('Please enter a valid email address')
  .max(254, 'Email address is too long')
  .transform(v => v.trim().toLowerCase());

const phoneSchema = z
  .string()
  .optional()
  .or(z.literal(''))
  .refine(
    v =>
      !v ||
      /^(\+\d{1,3}[\s\-]?)?\(?\d{1,4}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,9}$/.test(
        v.trim()
      ),
    { message: 'Please enter a valid phone number (e.g., +1-234-567-8900)' }
  )
  .transform(v => (v && v.trim() ? v.trim() : undefined));

const subjectSchema = z
  .string()
  .optional()
  .or(z.literal(''))
  .refine(v => !v || v.length <= 200, 'Subject must not exceed 200 characters')
  .transform(v => (v && v.trim() ? v.trim() : undefined));

const messageSchema = z
  .string()
  .min(10, 'Message must be at least 10 characters long')
  .max(2000, 'Message must not exceed 2000 characters')
  .refine(
    v => v.trim().length >= 10,
    'Message must contain at least 10 meaningful characters'
  )
  .transform(v => v.trim());

// Contact form schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Reusable field schemas
export const fieldSchemas = {
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  subject: subjectSchema,
  message: messageSchema,
} as const;

// Single-field validation
export function validateField(field: keyof ContactFormData, value: unknown) {
  try {
    fieldSchemas[field].parse(value);
    return { success: true };
  } catch (err) {
    const issue =
      err instanceof z.ZodError
        ? err.issues[0]?.message
        : 'Validation error occurred';
    return { success: false, error: issue || 'Invalid field value' };
  }
}

// Full-form validation
export function validateContactForm(data: unknown) {
  try {
    return { success: true, data: contactFormSchema.parse(data) };
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of err.issues) {
        if (issue.path[0]) errors[issue.path[0] as string] = issue.message;
      }
      return { success: false, errors };
    }
    return { success: false, errors: { form: 'Validation error occurred' } };
  }
}

// Sanitizer
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone?.trim() || undefined,
    subject: data.subject?.trim() || undefined,
    message: data.message.trim(),
  };
}

// Utility helpers
export const isFormReadyForSubmission = (data: unknown) =>
  validateContactForm(data).success;

export const formatValidationErrors = (errors: Record<string, string>) => {
  const formatted: Record<string, string> = {};
  for (const [f, msg] of Object.entries(errors)) {
    const label = f.charAt(0).toUpperCase() + f.slice(1);
    formatted[f] = msg.replace(f, label);
  }
  return formatted;
};

// Defaults and metadata
export const defaultContactFormValues: ContactFormData = {
  name: '',
  email: '',
  phone: undefined,
  subject: undefined,
  message: '',
};

export const fieldRequirements = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: 'Letters, spaces, hyphens, and apostrophes only',
  },
  email: {
    required: true,
    maxLength: 254,
    pattern: 'Valid email address format',
  },
  phone: {
    required: false,
    pattern: 'International format (e.g., +1-234-567-8900)',
  },
  subject: { required: false, maxLength: 200 },
  message: { required: true, minLength: 10, maxLength: 2000 },
} as const;
