'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Stethoscope,
} from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    id: 1,
    question:
      'Who is behind Human Healthcare and why should I trust you with my parents?',
    answer:
      'Human Healthcare was founded by physicians living in the US and UK whose own parents are in Pakistan. The service was first built for their own families. Our commitment is based on three pillars: (1) Personal Motivation: We created the service we wanted for our loved ones, with lead physicians on-site in Pakistan. (2) Vetted & Qualified Local Teams: Care is provided by a dedicated, qualified team of a doctor, nurse, and care coordinator, who undergo rigorous background checks. (3) World-Class Oversight: Care plans are supervised by US & UK-based specialists, ensuring international standards are met.',
  },
  {
    id: 2,
    question:
      'My parents can see a local doctor. Why should I pay a recurring monthly fee for this service?',
    answer:
      'Human Healthcare addresses gaps left by traditional visits by providing proactive, comprehensive, and connected care. Benefits include: (1) Proactive Care: Frequent home visits and regular check-ins to catch issues early. (2) Global Specialist Oversight: US-based specialists review complex cases. (3) Technology for Peace of Mind: Secure digital health data and a personalized dashboard for remote monitoring. (4) Risk-Free Guarantee: Cancel anytime within the first month for a full refund.',
  },
  {
    id: 3,
    question: 'What is the cost and what does it include?',
    answer:
      'Essential Services: $49 USD/month for one parent, including monthly check-ups, annual labs, and cancer/cardiac screenings. Premium Services: $99 USD/month for one parent, covering all core services, monthly medications (Rs. 10k limit), complementary annual labs, weekly visits, urgent care access, weekly physiotherapy, cancer screening, vaccines, and supervision by international specialists. Payments can be monthly, quarterly, or annually.',
  },
  {
    id: 4,
    question:
      'What happens if my parents need transport for tests or specialist appointments?',
    answer:
      'Door-to-door transport for scans or imaging centers is included. For recurring needs, our care team can arrange reliable transport at an additional at-cost charge, ensuring a seamless healthcare journey.',
  },
  {
    id: 5,
    question: 'Which cities in Pakistan do you currently serve?',
    answer:
      'We currently provide complete at-home services in Karachi. Expansion is planned for Islamabad, Rawalpindi, Lahore, and Peshawar based on family demand. Interested families can join the waiting list or contact our founder via WhatsApp at +1 319-936-3574 to prioritize their city.',
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-4">
      <button
        className="w-full px-[70px] py-4 text-left flex justify-between items-center bg-transparent hover:bg-[#f7f9fb] focus:outline-none focus:bg-[#f7f9fb]"
        onClick={onToggle}
      >
        <span className="text-[16px] leading-[24px] font-dm-sans text-black pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-black flex-shrink-0 mr-[70px] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-[70px] pb-4">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[300px] w-full flex items-center justify-center bg-gradient-to-br from-[#a048a7] via-[#8a3d8f] to-[#6b2d6f]">
        <div className="relative z-10">
          <h1 className="text-[63px] leading-[88.2px] font-dm-sans font-semibold text-white font-bold text-center">
            FAQS
          </h1>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-[#f6f6f6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - For Other Questions */}
            <div className="flex-1 pt-48">
              <div className="relative">
                <h2 className="font-montserrat font-semibold text-[45px] leading-[63px] text-black mb-4">
                  <span className="relative">
                    FO
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#a048a7]"></span>
                  </span>
                  R OTHER QUESTIONS
                </h2>
              </div>

              <div className="mt-[10px]">
                <p className="font-poppins text-[16px] leading-[25.6px] text-black mb-[10px]">
                  FAQs will cover the question you have in mind, if still
                  anything bothers you which is not covered in the FAQs then
                  kindly contact us below, we will reach out in no time
                </p>

                <button className="bg-[#a048a7] text-white px-5 py-3 hover:bg-[#8a3d8f] transition-colors flex items-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side - FAQ Image */}
            <div className="flex-1">
              <Image
                src="/images/faqs/faqs.jpg"
                alt="FAQ"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequent Questions Header */}
      <section className="bg-[#a048a7] h-[100px] w-full flex items-center justify-center">
        <h2 className="font-montserrat font-bold text-[45px] leading-[63px] text-white">
          FREQUENT QUESTIONS
        </h2>
      </section>

      {/* FAQ Items */}
      <section className="py-8 bg-[#f6f6f6]">
        <div className="w-full font-semibold">
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItems.includes(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#ECECEC] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Contact Form */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block font-medium text-[#a048a7] mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7]"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium text-[#a048a7] mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-medium text-[#a048a7] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-medium text-[#a048a7] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Additional Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#a048a7] text-white px-12 py-6 text-[16px] leading-[14px] font-medium hover:bg-[#8a3d8f] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex-1">
              <h3 className="text-[16px] leading-[22.4px] font-poppins font-semibold text-[#a048a7] mb-4">
                CONTACT US
              </h3>

              <h2 className="text-[55px] leading-[77px] text-[#343434] font-bold mb-6">
                CONNECT WITH HUMAN-HEALTHCARE
              </h2>

              {/* Divider with Doctor Icon */}
              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gray-400"></div>
                <Stethoscope className="w-6 h-6 text-[#a048a7] mx-4" />
                <div className="flex-1 h-px bg-gray-400"></div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#a048a7] mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <p className="text-black font-poppins text-[15px] leading-[22.4px] flex-1">
                        Main Office: HQ40 c/o E40, PRECHS, Gulshan-e-Iqbal, Bl10A,
                        Karachi, Pakistan.
                      </p>
                      <div className="flex flex-col lg:ml-4 mt-2 lg:mt-0 space-y-1">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-[#a048a7] mr-2 flex-shrink-0" />
                          <a
                            href="tel:+923192060174"
                            className="text-black font-poppins text-[15px] leading-[22.4px] hover:text-[#a048a7]"
                          >
                            +92 319-2060174
                          </a>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <svg
                            className="w-4 h-4 text-[#a048a7] mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.488" />
                            </svg>
                            <a
                            href="https://wa.me/+13199363574"
                            className="text-[15px] leading-[22.4px] text-[#111] font-poppins hover:text-[#a048a7]"
                            >
                            +1 319 936 3574
                            </a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#a048a7] mr-3 flex-shrink-0" />
                  <a
                    href="mailto:service@human-healthcare.com"
                    className="text-black font-poppins text-[15px] leading-[22.4px] hover:text-[#a048a7]"
                  >
                    service@human-healthcare.com
                  </a>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#a048a7] mr-3 flex-shrink-0" />
                  <span className="text-black font-poppins text-[15px] leading-[22.4px]">
                    09:00 AM - 06:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
