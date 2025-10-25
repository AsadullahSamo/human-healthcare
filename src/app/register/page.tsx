'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PenTool, CloudDownload, Gem } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Step 1',
    icon: PenTool,
    description: (
      <>
        Please review the services by reviewing{' '}
        <Link href="/faqs" className="text-[#a35966] hover:underline">
          FAQ section
        </Link>
        , and{' '}
        <Link
          href={{
            pathname: '/service-agreement',
          }}
          className="text-[#a35966] hover:underline"
        >
          Service Agreement
        </Link>
        . If it fits with your needs & wishes, please proceed to step 2, Charges
        range from $49USD and higher per person per month.
      </>
    ),
  },
  {
    id: 2,
    title: 'Step 2',
    icon: CloudDownload,
    description:
      'Click Register Now below. This will direct you to a payment & information page. Please fill out the information, and wait for one of our representatives to contact you.',
  },
  {
    id: 3,
    title: 'Step 3',
    icon: Gem,
    description: 'Sit back, relax, and let us take care of your Loved Ones.',
  },
];

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex gap-6 mb-12">
      {/* Left Part - Circular Icon */}
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isHovered
            ? 'bg-[#a048a7] border-[#a048a7]'
            : 'border-[#a048a7] bg-transparent'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <step.icon
          className={`w-8 h-8 transition-colors duration-300 ${
            isHovered ? 'text-white' : 'text-[#a048a7]'
          }`}
        />
      </div>

      {/* Right Part - Text Content */}
      <div className="flex-1">
        <h3 className="font-montserrat font-semibold text-[28px] leading-[25px] text-[#111633] mb-4">
          {step.title}
        </h3>
        <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#a048a7] h-[300px] w-full flex items-center justify-center">
        <h1 className="font-montserrat font-semibold text-[45px] leading-[63px] text-white">
          Register Your Loved Ones Now
        </h1>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Steps */}
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}

            {/* Center Text and Button */}
            <div className="text-center mt-16">
              <p className="font-poppins text-[16px] leading-[22.4px] text-[#767471] mb-8">
                By Clicking REGISTER NOW, I acknowledge reviewing the FAQ page
                and approve the Terms & Conditions of Human-Healthcare.com
              </p>

              <button className="bg-[#a048a7] text-white px-10 py-6 text-[14px] leading-[14px] font-medium hover:bg-[#8a3d8f] transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
