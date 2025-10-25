import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  ContactFormState,
  ContactInquiryRequest,
  FieldValidation,
  SubmissionStatus,
  RootState,
} from '../../../types';

// --- Initial State ---
const defaultField: FieldValidation = { isValid: true };
const emptyForm: ContactInquiryRequest = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const initialState: ContactFormState = {
  data: emptyForm,
  validation: {
    name: defaultField,
    email: defaultField,
    phone: defaultField,
    subject: defaultField,
    message: defaultField,
    isFormValid: false,
  },
  status: 'idle',
  statusMessage: '',
  lastSubmissionAt: undefined,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{
        field: keyof ContactInquiryRequest;
        value: string;
      }>
    ) {
      const { field, value } = action.payload;
      state.data[field] = value;
      if (state.validation[field].error)
        state.validation[field] = { isValid: true };
    },

    updateFormData(
      state,
      action: PayloadAction<Partial<ContactInquiryRequest>>
    ) {
      state.data = { ...state.data, ...action.payload };
    },

    setFieldValidation(
      state,
      action: PayloadAction<{
        field: keyof ContactInquiryRequest;
        validation: FieldValidation;
      }>
    ) {
      const { field, validation } = action.payload;
      state.validation[field] = validation;
      state.validation.isFormValid = Object.entries(state.validation)
        .filter(([k]) => k !== 'isFormValid')
        .every(
          ([k]) => state.validation[k as keyof ContactInquiryRequest].isValid
        );
    },

    setFormValidation(
      state,
      action: PayloadAction<
        Partial<Omit<ContactFormState['validation'], 'isFormValid'>>
      >
    ) {
      state.validation = { ...state.validation, ...action.payload };
      state.validation.isFormValid = Object.entries(state.validation)
        .filter(([k]) => k !== 'isFormValid')
        .every(
          ([k]) => state.validation[k as keyof ContactInquiryRequest].isValid
        );
    },

    setFormValid(state, action: PayloadAction<boolean>) {
      state.validation.isFormValid = action.payload;
    },

    setSubmissionStatus(state, action: PayloadAction<SubmissionStatus>) {
      state.status = action.payload;
      if (action.payload === 'submitting')
        state.statusMessage = 'Sending your message...';
    },

    setStatusMessage(state, action: PayloadAction<string>) {
      state.statusMessage = action.payload;
    },

    submitSuccess(state, action: PayloadAction<string>) {
      state.status = 'success';
      state.statusMessage = action.payload;
      state.lastSubmissionAt = new Date();
      state.data = { ...emptyForm };
      state.validation = {
        name: defaultField,
        email: defaultField,
        phone: defaultField,
        subject: defaultField,
        message: defaultField,
        isFormValid: false,
      };
    },

    submitError(state, action: PayloadAction<string>) {
      state.status = 'error';
      state.statusMessage = action.payload;
    },

    submitValidationError(
      state,
      action: PayloadAction<{ message: string; errors: Record<string, string> }>
    ) {
      const { message, errors } = action.payload;
      state.status = 'error';
      state.statusMessage = message;

      Object.entries(errors).forEach(([field, error]) => {
        if (field in state.validation) {
          state.validation[field as keyof ContactInquiryRequest] = {
            isValid: false,
            error,
          };
        }
      });

      state.validation.isFormValid = false;
    },

    clearValidationErrors(state) {
      state.validation = {
        name: defaultField,
        email: defaultField,
        phone: defaultField,
        subject: defaultField,
        message: defaultField,
        isFormValid: false,
      };
    },

    resetForm(state) {
      state.data = { ...emptyForm };
      state.validation = {
        name: defaultField,
        email: defaultField,
        phone: defaultField,
        subject: defaultField,
        message: defaultField,
        isFormValid: false,
      };
      state.status = 'idle';
      state.statusMessage = '';
    },

    clearStatus(state) {
      state.status = 'idle';
      state.statusMessage = '';
    },
  },
});

// --- Actions ---
export const {
  updateField,
  updateFormData,
  setFieldValidation,
  setFormValidation,
  setFormValid,
  setSubmissionStatus,
  setStatusMessage,
  submitSuccess,
  submitError,
  submitValidationError,
  clearValidationErrors,
  resetForm,
  clearStatus,
} = contactSlice.actions;

// --- Selectors ---
export const selectContactFormData = (s: RootState) => s.forms.contact.data;
export const selectContactFormValidation = (s: RootState) =>
  s.forms.contact.validation;
export const selectContactFormStatus = (s: RootState) => s.forms.contact.status;
export const selectContactStatusMessage = (s: RootState) =>
  s.forms.contact.statusMessage;
export const selectContactLastSubmission = (s: RootState) =>
  s.forms.contact.lastSubmissionAt;
export const selectContactFormValid = (s: RootState) =>
  s.forms.contact.validation.isFormValid;
export const selectContactFieldValidation =
  (field: keyof ContactInquiryRequest) => (s: RootState) =>
    s.forms.contact.validation[field];

// computed
export const selectContactFormIsBusy = (s: RootState) =>
  s.forms.contact.status === 'submitting';
export const selectContactFormHasError = (s: RootState) =>
  s.forms.contact.status === 'error';
export const selectContactFormIsSuccess = (s: RootState) =>
  s.forms.contact.status === 'success';

// --- Reducer ---
export default contactSlice.reducer;
