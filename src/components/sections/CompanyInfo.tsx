import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Get in Touch
      </h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Address
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              123 Healthcare Boulevard
              <br />
              Medical District
              <br />
              City, State 12345
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Phone
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              <a href="tel:+15551234567" className="hover:text-blue-600">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Email
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              <a
                href="mailto:contact@human-healthcare.com"
                className="hover:text-blue-600"
              >
                contact@human-healthcare.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Hours
            </h4>
            <div className="text-gray-600 dark:text-gray-300 space-y-1">
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
              <p className="text-sm font-medium text-blue-600">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Emergency Contact
        </h4>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          For urgent medical situations, please call:
        </p>
        <p className="text-xl font-bold text-red-600">
          <a href="tel:+15551234911">(555) 123-4911</a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Available 24/7 for emergencies
        </p>
      </div>
    </div>
  );
}
