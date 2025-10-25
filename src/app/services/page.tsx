'use client';

import React from 'react';
import Image from 'next/image';
import {
  Stethoscope,
  Heart,
  Users,
  Clock,
  Phone,
  MessageCircle,
  CheckCheck,
  Home,
  Shield,
  Calendar,
  Star,
} from 'lucide-react';

// Services data
const mainServices = [
  {
    id: 1,
    title: 'Doctor Home Visits',
    description:
      'Professional medical consultations in the comfort of your home by qualified physicians.',
    image: '/images/home/card-1.jpg',
    features: [
      'Licensed physicians',
      'Comprehensive checkups',
      'Medication management',
      'Health monitoring',
    ],
    icon: Stethoscope,
  },
  {
    id: 2,
    title: 'Nursing Care at Home',
    description:
      'Skilled nursing services for chronic conditions, post-operative care, and daily health support.',
    image: '/images/home/card-2.png',
    features: [
      'Certified nurses',
      'Wound care',
      'Medication administration',
      'Vital sign monitoring',
    ],
    icon: Heart,
  },
  {
    id: 3,
    title: 'Physiotherapy at Home',
    description:
      'Professional rehabilitation services to help you regain mobility and strength.',
    image: '/images/home/card-3.jpg',
    features: [
      'Licensed physiotherapists',
      'Movement therapy',
      'Pain management',
      'Recovery planning',
    ],
    icon: Users,
  },
  {
    id: 4,
    title: 'Health Monitoring & Support',
    description:
      'Continuous health tracking and family communication for complete peace of mind.',
    image: '/images/home/card-4.jpg',
    features: [
      'Regular health updates',
      'Family communication',
      'Emergency alerts',
      'Care coordination',
    ],
    icon: Clock,
  },
];

const specialistServices = [
  'Cardiology (Heart Specialists)',
  'Neurology (Brain & Nervous System)',
  'Endocrinology (Diabetes & Hormones)',
  'Gastroenterology (Digestive System)',
  'Nephrology (Kidney Specialists)',
  'Rheumatology (Joint & Autoimmune)',
  'Infectious Diseases',
  'Hematology & Oncology (Blood & Cancer)',
  'Geriatrics (Elderly Care)',
  'Pulmonology (Lung & Respiratory)',
  'Psychiatry (Mental Health)',
  'Dermatology (Skin Conditions)',
];

const additionalServices = [
  {
    title: 'Annual Health Screenings',
    description:
      'Comprehensive preventive care including echocardiograms, mammograms, cancer screenings',
    icon: Shield,
  },
  {
    title: 'Lab Tests at Home',
    description:
      'Professional phlebotomy services bringing lab tests to your doorstep',
    icon: Home,
  },
  {
    title: 'Prescription Delivery',
    description: 'Convenient medication delivery and management services',
    icon: Calendar,
  },
  {
    title: 'Emergency Support',
    description: '24-48 hour rapid response for urgent healthcare needs',
    icon: Phone,
  },
];

// Pricing plans data (from homepage)
const pricingPlans = [
  {
    id: 1,
    name: 'Humancare Essential',
    price: '$49.00/Rs. 13,500',
    period: 'per month',
    description:
      'Perfect for members who are overall healthy, desire minimal medical interventions, and prioritize excellent preventive primary care to lead a long, healthy life.',
    features: [
      'Access to primary care doctors and specialists from US, Canada, and UK',
      'Weekly Touchpoints: Connect with our dedicated healthcare team',
      'Up to 2 Home Visits per Month: Experience care in the comfort of your home',
      'Urgent Care Access: 24-48 hours rapid access to our care team when you need it most',
      'Note: Services like prescription delivery, weekend service, home physiotherapy, and nurse companion transportation are available at an additional cost',
    ],
  },
  {
    id: 2,
    name: 'Humancare Premium',
    price: '$99.00/Rs. 27,000',
    period: 'per month',
    description:
      'Best suited for most parents or individuals aged over 60 who seek an enhanced healthcare experience that includes regular monitoring, physical therapy, personalized medication delivery, and crucial annual screenings.',
    features: [
      'All Benefits of Human-care Essential, Plus:',
      'Enhanced 24-48 hours access to our care team',
      'Nurse Companion: Up to 2 home visits a month',
      'Complimentary Home Physiotherapy: Weekly sessions aiding your physical wellness',
      'Free Annual Medical Screenings: echocardiogram, mammogram, stool test for colorectal cancer, lung cancer screening, and prostate level checks',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-[45px] leading-[63px] font-montserrat font-semibold text-[#a048a7] mb-6">
              Our Healthcare Services
            </h1>
            <p className="text-[18px] leading-[28px] font-poppins text-[#565656] max-w-3xl mx-auto">
              Comprehensive healthcare services delivered to your home in
              Karachi. From doctor consultations to specialized care, we bring
              American-standard medical services to your doorstep.
            </p>
          </div>

          {/* Doctor Icon Divider */}
          <div className="flex items-center mb-8">
            <div className="flex-1 h-px bg-gray-400"></div>
            <Stethoscope className="w-6 h-6 text-[#a048a7] mx-4" />
            <div className="flex-1 h-px bg-gray-400"></div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map(service => (
              <div
                key={service.id}
                className="bg-[#f6f6f6] p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#a048a7] rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[24px] leading-[31px] font-poppins font-semibold text-black">
                    {service.title}
                  </h3>
                </div>

                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <p className="font-poppins text-[15px] leading-[25px] text-[#565656] mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCheck className="w-4 h-4 text-[#a048a7] flex-shrink-0" />
                      <span className="font-poppins text-[14px] text-[#565656]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Consultations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-6">
              Specialist Consultations
            </h2>
            <p className="text-[16px] leading-[25px] font-poppins text-[#565656] mb-8">
              Access to medical specialists from the United States, Canada, and
              United Kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialistServices.map((specialist, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow border border-[#a048a7] text-center"
              >
                <div className="w-8 h-8 bg-[#a048a7] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="font-poppins text-[14px] font-medium text-black">
                  {specialist}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-poppins text-[14px] text-[#565656]">
              All specialists are licensed medical professionals from accredited
              institutions
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            Additional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#a048a7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[18px] leading-[25px] font-poppins font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            Service Plans & Pricing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pricingPlans.map(plan => (
              <div
                key={plan.id}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-[28px] leading-[35px] font-poppins font-semibold text-black mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-[32px] leading-[40px] font-poppins font-bold text-[#a048a7]">
                    {plan.price}
                  </span>
                  <span className="text-[16px] text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="font-poppins text-[15px] leading-[25px] text-[#565656] mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      {feature ===
                      'All Benefits of Human-care Essential, Plus:' ? (
                        <span className="font-poppins text-[14px] leading-[22px] text-[#565656] font-bold">
                          {feature}
                        </span>
                      ) : (
                        <>
                          <CheckCheck className="w-5 h-5 text-[#a048a7] mt-0.5 flex-shrink-0" />
                          <span className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                            {feature}
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#a048a7] text-white px-10 py-6 text-[14px] leading-[14px] font-medium hover:bg-[#8a3d8f] transition-colors w-full">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#343434]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-6">
              Service Areas in Karachi
            </h2>
            <p className="font-poppins text-[16px] leading-[25px] text-white mb-8">
              We proudly serve the following areas in Karachi with our
              comprehensive healthcare services
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                'Gulshan-e-Iqbal',
                'PECHS',
                'Defence',
                'Malir Cantt',
                'North Nazimabad',
                'Clifton',
              ].map(area => (
                <div key={area} className="bg-[#a048a7] p-4 rounded-lg">
                  <span className="font-poppins text-[14px] font-medium text-white">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-poppins text-[14px] text-[#afaba6]">
              Don't see your area? Contact us to check service availability in
              your location.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#f6f6f6] p-8 rounded-lg text-center">
            <h2 className="text-[28px] leading-[35px] font-poppins font-semibold text-[#a048a7] mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-poppins text-[16px] leading-[25px] text-[#565656] mb-6">
              Contact our healthcare team today to discuss your needs and
              schedule your first visit.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#a048a7]" />
                <span className="font-poppins text-[16px] text-black font-semibold">
                  Call: 0319-2060174
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#a048a7]" />
                <span className="font-poppins text-[16px] text-black">
                  WhatsApp:
                </span>
                <a
                  href="https://wa.me/+13199363574"
                  className="font-poppins text-[16px] text-[#a048a7] font-semibold hover:underline"
                >
                  +1 (319) 936-3574
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
