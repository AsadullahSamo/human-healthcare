import React from 'react';
import { Card } from '../../../components/ui/Card';
import ContactForm from '../../../components/forms/ContactForm';

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
              Get in Touch
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +92 300 123 4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@humanhealthcare.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🕒</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Hours
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      24/7 Emergency Services
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      9 AM - 6 PM Regular Consultations
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Emergency Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For medical emergencies, please call our 24/7 emergency line:
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                +92 300 123 4567
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Available 24 hours a day, 7 days a week
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                WhatsApp Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Connect with us on WhatsApp for quick consultations and
                appointment scheduling.
              </p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <span className="mr-2">💬</span>
                Chat on WhatsApp
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
