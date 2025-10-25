'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Who is behind Human Healthcare and why should I trust you with my parents?",
    answer: "Human Healthcare was founded by physicians living in the US and UK whose own parents are in Pakistan. The service was first built for their own families. Our commitment is based on three pillars: (1) Personal Motivation: We created the service we wanted for our loved ones, with lead physicians on-site in Pakistan. (2) Vetted & Qualified Local Teams: Care is provided by a dedicated, qualified team of a doctor, nurse, and care coordinator, who undergo rigorous background checks. (3) World-Class Oversight: Care plans are supervised by US & UK-based specialists, ensuring international standards are met."
  },
  {
    id: 2,
    question: "My parents can see a local doctor. Why should I pay a recurring monthly fee for this service?",
    answer: "Human Healthcare addresses gaps left by traditional visits by providing proactive, comprehensive, and connected care. Benefits include: (1) Proactive Care: Frequent home visits and regular check-ins to catch issues early. (2) Global Specialist Oversight: US-based specialists review complex cases. (3) Technology for Peace of Mind: Secure digital health data and a personalized dashboard for remote monitoring. (4) Risk-Free Guarantee: Cancel anytime within the first month for a full refund."
  },
  {
    id: 3,
    question: "What is the cost and what does it include?",
    answer: "Essential Services: $49 USD/month for one parent, including monthly check-ups, annual labs, and cancer/cardiac screenings. Premium Services: $99 USD/month for one parent, covering all core services, monthly medications (Rs. 10k limit), complementary annual labs, weekly visits, urgent care access, weekly physiotherapy, cancer screening, vaccines, and supervision by international specialists. Payments can be monthly, quarterly, or annually."
  },
  {
    id: 4,
    question: "What happens if my parents need transport for tests or specialist appointments?",
    answer: "Door-to-door transport for scans or imaging centers is included. For recurring needs, our care team can arrange reliable transport at an additional at-cost charge, ensuring a seamless healthcare journey."
  },
  {
    id: 5,
    question: "Which cities in Pakistan do you currently serve?",
    answer: "We currently provide complete at-home services in Karachi. Expansion is planned for Islamabad, Rawalpindi, Lahore, and Peshawar based on family demand. Interested families can join the waiting list or contact our founder via WhatsApp at +1 319-936-3574 to prioritize their city."
  }
];


function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0], isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#4048A7] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#4048A7] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4048A7] to-[#3538a0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Find answers to common questions about our healthcare services, booking process, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#4048A7] mb-4">How Can We Help You?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Below are answers to the most frequently asked questions about Human Healthcare services. 
                If you don't find what you're looking for, please contact us directly.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="mb-12">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openItems.includes(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#4048A7] mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you with any additional questions or concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+923192060174" 
                  className="bg-[#4048A7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3538a0] transition-colors"
                >
                  Call: +92 319-2060174
                </a>
                <a 
                  href="https://wa.me/+13199363574" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp: +1 319 936 3574
                </a>
                <a 
                  href="mailto:service@human-healthcare.com" 
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <strong>Business Hours:</strong> 09:00 AM - 06:00 PM (Monday to Sunday)
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Emergency Services:</strong> Available 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}