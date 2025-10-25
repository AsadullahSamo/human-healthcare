import React from 'react';
import { Card } from '../../../components/ui/Card';

export default function AboutPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Human Healthcare
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Dedicated to bringing quality healthcare services directly to your
            home in Karachi, Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To provide accessible, professional healthcare services in the
              comfort and safety of your own home. We believe that quality
              medical care should be available to everyone, regardless of their
              mobility or circumstances.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our team of qualified healthcare professionals is committed to
              delivering compassionate, personalized care that meets the unique
              needs of each patient and their family.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Licensed and experienced healthcare professionals
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                24/7 availability for emergency situations
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Personalized care plans tailored to your needs
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Affordable pricing with transparent billing
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Comprehensive range of healthcare services
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Essential Plan
            </h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ₨13,500
              </span>
              <span className="text-gray-600 dark:text-gray-300 ml-2">
                per month
              </span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Basic nursing care</li>
              <li>• Monthly doctor consultation</li>
              <li>• Health monitoring</li>
              <li>• Emergency support</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Premium Plan
            </h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ₨27,000
              </span>
              <span className="text-gray-600 dark:text-gray-300 ml-2">
                per month
              </span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• All Essential features</li>
              <li>• Weekly doctor visits</li>
              <li>• Advanced diagnostics</li>
              <li>• Priority emergency response</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
