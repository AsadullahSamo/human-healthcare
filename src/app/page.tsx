import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const features = [
  {
    title: 'Home Nursing',
    description:
      'Professional nursing care in the comfort of your home with qualified healthcare professionals.',
    icon: '🏥',
  },
  {
    title: 'Doctor Visits',
    description:
      'Qualified doctors visit your home for consultations, check-ups, and medical care.',
    icon: '👨‍⚕️',
  },
  {
    title: 'Health Monitoring',
    description:
      'Regular health monitoring and vital signs tracking for chronic conditions.',
    icon: '📊',
  },
  {
    title: 'Emergency Care',
    description:
      '24/7 emergency medical response and immediate healthcare assistance.',
    icon: '🚑',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Quality Healthcare
            <span className="block text-blue-600 dark:text-blue-400">
              At Your Home
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional healthcare services delivered to your doorstep in
            Karachi, Pakistan. Experience compassionate care with qualified
            medical professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet your medical
              needs at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our healthcare services and how
            we can help you.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
