'use client';

import React from 'react';
import Image from 'next/image';
import {
  Heart,
  Users,
  Shield,
  Award,
  Stethoscope,
  CheckCheck,
  Clock,
  Globe,
} from 'lucide-react';

// Team members data (from homepage)
const keyTeamMembers = [
  {
    id: 1,
    name: 'Atif Zafar, MD',
    title: 'Neurologist & Consultant, Stroke Medicine.',
    image: '/images/home/person-1.png',
  },
  {
    id: 2,
    name: 'Mudassir Farooqui, MBBS, MPH',
    title: 'Public Health Specialist, Research Scientist.',
    image: '/images/home/person-2.jpg',
  },
  {
    id: 3,
    name: 'Mahwash Siddiqui, MD',
    title: 'Internist & Endocrinology Specialist.',
    image: '/images/home/person-3.jpg',
  },
  {
    id: 4,
    name: 'Shoib Ghayas, MRCGP',
    title: 'Consultant – General Physician',
    image: '/images/home/person-4.jpg',
  },
  {
    id: 5,
    name: 'Onaizah Baqir, MD – USA',
    title: 'Infectious Diseases & Internist',
    image: '/images/home/person-5.webp',
  },
  {
    id: 6,
    name: 'Hariz Riaz, MD – USA',
    title: 'Cardiology and Interventional Cardiology',
    image: '/images/home/person-6.webp',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-[45px] leading-[63px] font-montserrat font-semibold text-[#a048a7] mb-6">
              About Human Healthcare
            </h1>
            <p className="text-[18px] leading-[28px] font-poppins text-[#565656] max-w-3xl mx-auto">
              Dedicated to bringing American-standard healthcare services
              directly to your home in Karachi, Pakistan. We bridge the gap
              between overseas Pakistanis and quality healthcare for their loved
              ones back home.
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/home/image-1.jpg"
              alt="Healthcare team"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-6">
                Our Story
              </h2>
              <p className="font-poppins text-[15px] leading-[25px] text-[#565656] mb-4">
                Human Healthcare was founded with a simple yet powerful vision:
                to provide world-class healthcare services in the comfort of
                your own home. We understand the challenges faced by overseas
                Pakistanis who want to ensure their elderly parents receive
                quality medical care.
              </p>
              <p className="font-poppins text-[15px] leading-[25px] text-[#565656] mb-4">
                Our team combines local expertise with international standards,
                bringing together doctors and specialists from the US, Canada,
                and UK to provide comprehensive care supervision for your loved
                ones in Karachi.
              </p>
              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Since our inception, we have served hundreds of families,
                reducing hospital emergencies by 80% and achieving a 93% client
                retention rate through our personalized, compassionate approach
                to healthcare.
              </p>
            </div>
            <div>
              <div className="bg-[#f6f6f6] p-8 rounded-lg">
                <h3 className="text-[24px] leading-[31px] font-poppins font-semibold text-[#a048a7] mb-6">
                  Our Mission
                </h3>
                <p className="font-poppins text-[15px] leading-[25px] text-[#565656] mb-6">
                  To eliminate the need for overseas Pakistanis to fly back to
                  Karachi for healthcare emergencies by providing
                  American-standard medical care at home.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-[#a048a7]" />
                  <span className="font-poppins text-[14px] text-[#565656]">
                    Compassionate, personalized care
                  </span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-[#a048a7]" />
                  <span className="font-poppins text-[14px] text-[#565656]">
                    Safe, professional healthcare at home
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-[#a048a7]" />
                  <span className="font-poppins text-[14px] text-[#565656]">
                    International expertise, local care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a048a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] leading-[28px] font-poppins font-semibold text-black mb-3">
                Compassion
              </h3>
              <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                We treat every patient with the same care and kindness we would
                want for our own family members.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#a048a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] leading-[28px] font-poppins font-semibold text-black mb-3">
                Excellence
              </h3>
              <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                We maintain the highest standards of medical care, combining
                international expertise with local understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#a048a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] leading-[28px] font-poppins font-semibold text-black mb-3">
                Trust
              </h3>
              <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                We build lasting relationships based on transparency,
                reliability, and consistent quality of care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#a048a7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] leading-[28px] font-poppins font-semibold text-black mb-3">
                Accessibility
              </h3>
              <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                Quality healthcare should be available to everyone, regardless
                of mobility or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-8">
                Why Choose Human Healthcare
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCheck className="w-6 h-6 text-[#a048a7] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      International Medical Expertise
                    </h3>
                    <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                      Access to specialists from the US, Canada, and UK
                      including cardiologists, neurologists, endocrinologists,
                      and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCheck className="w-6 h-6 text-[#a048a7] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      Proven Track Record
                    </h3>
                    <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                      80% reduction in hospital emergencies and 93% client
                      retention rate among enrolled customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCheck className="w-6 h-6 text-[#a048a7] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      Comprehensive Care Plans
                    </h3>
                    <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                      From basic monitoring to advanced diagnostics,
                      physiotherapy, and emergency support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCheck className="w-6 h-6 text-[#a048a7] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      24/7 Communication
                    </h3>
                    <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                      Personalized WhatsApp groups for family updates,
                      considering time differences for overseas families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-[#343434] p-8 rounded-lg text-center">
              <h3 className="text-[24px] leading-[31px] font-poppins font-semibold text-white mb-8">
                Our Impact
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[40px] leading-[50px] font-poppins font-bold text-[#a048a7] mb-2">
                    80%
                  </div>
                  <p className="font-poppins text-[14px] leading-[20px] text-white">
                    Reduction in Hospital Emergencies
                  </p>
                </div>

                <div>
                  <div className="text-[40px] leading-[50px] font-poppins font-bold text-[#a048a7] mb-2">
                    93%
                  </div>
                  <p className="font-poppins text-[14px] leading-[20px] text-white">
                    Client Retention Rate
                  </p>
                </div>

                <div>
                  <div className="text-[40px] leading-[50px] font-poppins font-bold text-[#a048a7] mb-2">
                    0
                  </div>
                  <p className="font-poppins text-[14px] leading-[20px] text-white">
                    COVID Cases Among Clients
                  </p>
                </div>

                <div>
                  <div className="text-[40px] leading-[50px] font-poppins font-bold text-[#a048a7] mb-2">
                    100%
                  </div>
                  <p className="font-poppins text-[14px] leading-[20px] text-white">
                    Money Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            Our Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyTeamMembers.map(member => (
              <div
                key={member.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-[18px] leading-[25px] font-poppins font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <p className="font-poppins text-[14px] leading-[20px] text-[#565656]">
                  {member.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-poppins text-[16px] leading-[25px] text-[#565656]">
              Our team includes over 20 healthcare professionals from Pakistan,
              USA, Canada, and UK
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-6">
              Service Areas in Karachi
            </h2>
            <p className="font-poppins text-[16px] leading-[25px] text-[#565656] mb-8">
              Currently serving Karachi's most trusted communities
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                'Gulshan-e-Iqbal',
                'PECHS',
                'Defence',
                'Malir Cantt',
                'North Nazimabad',
                'Clifton',
              ].map(area => (
                <div
                  key={area}
                  className="bg-[#f6f6f6] p-4 rounded-lg border border-[#a048a7]"
                >
                  <span className="font-poppins text-[14px] font-medium text-black">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
