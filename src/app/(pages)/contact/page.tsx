import React from 'react';
import ContactForm from '../../../components/forms/ContactForm';
import CompanyInfo from '../../../components/sections/CompanyInfo';
import { generatePageMetadata } from '../../../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with our healthcare team. Contact Human Healthcare for professional medical services, consultations, and support.',
  path: '/contact',
  keywords: [
    'contact healthcare',
    'medical consultation',
    'healthcare support',
    'schedule appointment',
  ],
});

export default function ContactPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our healthcare team to discuss your needs and
            schedule services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          <div>
            <CompanyInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
