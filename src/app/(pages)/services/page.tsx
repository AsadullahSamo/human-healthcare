import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import Link from 'next/link';

const services = [
  {
    title: 'Home Nursing',
    description:
      'Professional nursing care provided by qualified nurses in your home environment.',
    features: [
      'Medication administration',
      'Wound care',
      'Vital signs monitoring',
      'Patient education',
    ],
    icon: '🏥',
  },
  {
    title: 'Doctor Visits',
    description:
      'Qualified doctors visit your home for comprehensive medical consultations.',
    features: [
      'General consultations',
      'Health assessments',
      'Prescription management',
      'Follow-up care',
    ],
    icon: '👨‍⚕️',
  },
  {
    title: 'Health Monitoring',
    description:
      'Regular monitoring of health parameters for chronic condition management.',
    features: [
      'Blood pressure monitoring',
      'Blood sugar tracking',
      'Heart rate monitoring',
      'Health reports',
    ],
    icon: '📊',
  },
  {
    title: 'Emergency Care',
    description:
      '24/7 emergency medical response for urgent healthcare situations.',
    features: [
      'Emergency response',
      'Critical care',
      'Ambulance coordination',
      'Hospital liaison',
    ],
    icon: '🚑',
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Healthcare Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive healthcare solutions delivered to your home with
            professional care and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-green-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your healthcare needs and learn how we
            can help you receive quality care at home.
          </p>
          <Link href="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
