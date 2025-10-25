'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Stethoscope,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

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
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-[45px] leading-[63px] font-montserrat font-semibold text-[#a048a7] mb-6">
              Contact Us
            </h1>
            <p className="text-[18px] leading-[28px] font-poppins text-[#565656] max-w-3xl mx-auto">
              Get in touch with our healthcare team to discuss your needs and
              schedule services. We're here to provide American-standard
              healthcare at your doorstep in Karachi.
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

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-[#a048a7] mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7] font-poppins text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-[#a048a7] mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7] font-poppins text-[14px]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-poppins font-medium text-[#a048a7] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7] font-poppins text-[14px]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-poppins font-medium text-[#a048a7] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7] font-poppins text-[14px]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-poppins font-medium text-[#a048a7] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your healthcare needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a048a7] font-poppins text-[14px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#a048a7] text-white px-12 py-4 text-[16px] font-poppins font-medium hover:bg-[#8a3d8f] transition-colors rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-8">
                Get in Touch
              </h2>

              {/* Company Info with Logo */}
              <div className="bg-[#f6f6f6] p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <Image
                    alt="Human Healthcare Logo"
                    src="/images/favicon.jpg"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-[20px] font-poppins font-semibold text-[#a048a7]">
                      Human Health Care Services Pvt Limited
                    </h3>
                    <p className="text-[14px] font-poppins text-[#565656]">
                      American Healthcare at Your Doorstep
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      Main Office
                    </h4>
                    <p className="font-poppins text-[14px] leading-[22px] text-[#565656]">
                      HQ40 c/o E40, PRECHS, Gulshan-e-Iqbal, Bl10A, Karachi,
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      Phone
                    </h4>
                    <a
                      href="tel:+923192060174"
                      className="font-poppins text-[14px] text-[#565656] hover:text-[#a048a7] transition-colors"
                    >
                      +92 319-2060174
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/+13199363574"
                      className="font-poppins text-[14px] text-[#565656] hover:text-[#a048a7] transition-colors"
                    >
                      +1 (319) 936-3574
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      Email
                    </h4>
                    <a
                      href="mailto:service@human-healthcare.com"
                      className="font-poppins text-[14px] text-[#565656] hover:text-[#a048a7] transition-colors"
                    >
                      service@human-healthcare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[16px] text-black mb-2">
                      Office Hours
                    </h4>
                    <p className="font-poppins text-[14px] text-[#565656]">
                      Monday - Saturday: 09:00 AM - 06:00 PM
                    </p>
                    <p className="font-poppins text-[12px] text-[#565656]">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-[32px] leading-[40px] font-montserrat font-semibold text-[#a048a7] mb-6">
              Service Areas in Karachi
            </h2>
            <p className="font-poppins text-[16px] leading-[25px] text-[#565656] mb-8">
              We currently provide healthcare services in the following areas
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
                  className="bg-white p-4 rounded-lg shadow border border-[#a048a7]"
                >
                  <span className="font-poppins text-[14px] font-medium text-black">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-poppins text-[14px] text-[#565656] mt-6">
              Don't see your area listed? Contact us to check service
              availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-[#343434]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-[28px] leading-[35px] font-poppins font-semibold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="font-poppins text-[16px] leading-[25px] text-[#afaba6] mb-8">
              For urgent healthcare needs, contact us directly
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+923192060174"
                className="bg-[#a048a7] text-white px-8 py-4 rounded-lg font-poppins font-medium hover:bg-[#8a3d8f] transition-colors flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: 0319-2060174</span>
              </a>

              <a
                href="https://wa.me/+13199363574"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-poppins font-medium hover:bg-[#1DA851] transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +1 (319) 936-3574</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
