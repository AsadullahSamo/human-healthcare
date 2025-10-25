'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  type ContactFormData,
} from '../../lib/validations/contact';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAppDispatch, useAppSelector } from '../../lib/redux/store';
import {
  updateField,
  submitSuccess,
  submitError,
  setSubmissionStatus,
} from '../../lib/redux/slices/contactSlice';

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const { status, statusMessage } = useAppSelector(state => state.contact);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      dispatch(setSubmissionStatus('submitting'));

      await new Promise(resolve => setTimeout(resolve, 2000));

      dispatch(
        submitSuccess(
          'Thank you for your message. We will get back to you soon!'
        )
      );
      reset();
    } catch (error) {
      dispatch(submitError('Failed to send message. Please try again.'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          placeholder="Enter your full name"
        />
        <Input
          label="Email Address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="Enter your email"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Phone Number (Optional)"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+92 300 123 4567"
        />
        <Input
          label="Subject (Optional)"
          {...register('subject')}
          error={errors.subject?.message}
          placeholder="Subject of your inquiry"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={6}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          placeholder="Please describe your healthcare needs or questions..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-md ${
            status === 'success'
              ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400'
              : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400'
          }`}
        >
          {statusMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        loading={isSubmitting || status === 'submitting'}
        disabled={isSubmitting || status === 'submitting'}
      >
        {isSubmitting || status === 'submitting'
          ? 'Sending...'
          : 'Send Message'}
      </Button>
    </form>
  );
}
