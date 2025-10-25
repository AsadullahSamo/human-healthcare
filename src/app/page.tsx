import { generatePageMetadata } from '../lib/metadata';
import {
  heroContent,
  mediaFeatures,
  videoStories,
  testimonials,
  pricingPlans,
  companyStats,
} from '../lib/data/content';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Human Healthcare - Professional Healthcare at Your Doorstep',
  description:
    'Bringing world-class medical care to your home in Pakistan. Trusted by families worldwide for comprehensive elderly care and health management.',
  keywords: [
    'home healthcare Pakistan',
    'elderly care Karachi',
    'medical services',
    'doctor visits',
    'overseas Pakistani healthcare',
  ],
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {heroContent.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-[#A048A7] hover:bg-[#3538a0] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {heroContent.primaryButton}
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#A048A7] text-[#A048A7] hover:bg-[#A048A7] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {heroContent.secondaryButton}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {heroContent.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mb-2">
                    <span className="text-[#A048A7] dark:text-blue-400 font-medium text-sm">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured in Leading Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaFeatures.map(feature => (
              <div key={feature.id} className="text-center">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <div className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm text-center px-2">
                      {feature.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            See How We Bring Care Home: Stories & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {videoStories.map(video => (
              <div
                key={video.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm text-center px-4">
                    {video.title}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Hear From Families Who Found Peace Of Mind
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 dark:text-gray-300 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} • {testimonial.timeAgo}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map(plan => (
              <div
                key={plan.id}
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.popular
                    ? 'border-2 border-[#A048A7] bg-white dark:bg-gray-800'
                    : 'bg-white dark:bg-gray-800'
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#A048A7] dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-2xl text-[#A048A7] dark:text-gray-400">
                      /{plan.priceLocal}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 block">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full bg-[#A048A7] hover:bg-[#3538a0] text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            MEET OUR HUMAN TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#A048A7] dark:text-blue-400 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
