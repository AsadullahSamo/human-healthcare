import React from 'react';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import { companyInfo } from '../../lib/data/content';

export default function CompanyInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Get In Touch
      </h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-[#4048A7] mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Main Office
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              <a
                href={companyInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4048A7]"
              >
                {companyInfo.address}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-6 h-6 text-[#4048A7] mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Phone Numbers
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              <a
                href={`tel:${companyInfo.phone}`}
                className="hover:text-[#4048A7] block"
              >
                {companyInfo.phone}
              </a>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4048A7] hover:text-[#3538a0] font-medium"
              >
                {companyInfo.phoneUS}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-[#4048A7] mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Email
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-[#4048A7]"
              >
                {companyInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-[#4048A7] mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Hours
            </h4>
            <div className="text-gray-600 dark:text-gray-300 space-y-1">
              <p>{companyInfo.hours}</p>
              <p className="text-sm font-medium text-[#4048A7]">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <Star className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Customer Rating
            </h4>
            <div className="text-gray-600 dark:text-gray-300">
              <span className="text-lg font-bold text-yellow-500">
                {companyInfo.rating}
              </span>
              <span className="ml-2">{companyInfo.reviewCount}</span>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          {companyInfo.name}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Trusted healthcare provider serving families across Pakistan and
          overseas Pakistanis worldwide.
        </p>
      </div>
    </div>
  );
}
