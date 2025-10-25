import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from 'lucide-react';

const quicklinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Register Now', href: '/register' },
  { name: 'FAQ', href: '/faqs' },
  { name: 'Care Library', href: '/care-library' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Linkedin', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Youtube', href: 'https://youtube.com', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#343434] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Company Info */}
          <div className="flex-1 mr-8">
            <div className="mb-6">
              <Image
                src="/images/favicon.jpg"
                alt="Human Healthcare"
                width={135}
                height={135}
                className="mb-4"
              />
              <p className="text-[15px] leading-[25px] text-[#ECE9DF] font-poppins max-w-md">
                An idea of Human Health LLC, a US-based startup, Human Health
                Care Services Pvt Ltd is a Pakistani company headquartered at
                E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi.
              </p>
            </div>
          </div>

          {/* Center Section - Get in Touch */}
          <div className="flex-1 mr-8">
            <h3 className="text-[24px] leading-[31.2px] text-[#ffffff] font-poppins mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#a048a7] mt-1 mr-3 flex-shrink-0" />
                <span className="text-[15px] leading-[22.4px] text-[#ffffff] font-poppins">
                  Main Office: HQ40 c/o E40, PRECHS, Gulshan-e-Iqbal, Bl10A,
                  Karachi, Pakistan.
                </span>
              </div>

              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#a048a7] mr-3 flex-shrink-0" />
                <a
                  href="mailto:service@human-healthcare.com"
                  className="text-[15px] leading-[22.4px] text-[#ffffff] font-poppins hover:text-[#a048a7]"
                >
                  service@human-healthcare.com
                </a>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#a048a7] mr-3 flex-shrink-0" />
                <a
                  href="tel:+923192060174"
                  className="text-[15px] leading-[22.4px] text-[#ffffff] font-poppins hover:text-[#a048a7]"
                >
                  +92 319-2060174
                </a>
              </div>

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
                  className="text-[15px] leading-[22.4px] text-[#ffffff] font-poppins hover:text-[#a048a7]"
                >
                  +1 319 936 3574
                </a>
              </div>

              <div className="flex items-center">
                <Clock className="w-4 h-4 text-[#a048a7] mr-3 flex-shrink-0" />
                <span className="text-[15px] leading-[22.4px] text-[#ffffff] font-poppins">
                  09:00 AM - 06:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Right Section 1 - Quicklinks */}
          <div className="flex-1 mr-6">
            <h3 className="text-[24px] leading-[31px] text-[#ffffff] font-dm-sans mb-6">
              Quicklinks
            </h3>
            <ul className="space-y-4">
              {quicklinks.map(item => (
                <li key={item.name} className="pb-4">
                  <Link
                    href={{
                      pathname: item.href,
                    }}
                    className="text-[16px] leading-[20px] text-[#ffffff] font-poppins hover:text-[#a048a7] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section 2 - Newsletter */}
          <div className="flex-1">
            <h3 className="text-[24px] leading-[31px] text-[#ffffff] font-dm-sans mb-6">
              Newsletter
            </h3>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-white pb-2 focus:outline-none focus:border-[#a048a7]"
                />
              </div>
              <button className="bg-[#a048a7] text-white px-10 py-6 text-[14px] leading-[14px] font-medium hover:bg-[#8a3d8f] transition-colors flex items-center space-x-2">
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-3 border-t border-[#343434]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              Copyright © 2025 Human-Healthcare
            </p>

            <div className="text-center mb-4 md:mb-0">
              <a
                href="/service-agreement"
                className="text-white hover:text-[#a048a7] text-sm"
              >
                Service Agreement
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(item => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <IconComponent className="w-4 h-4 text-black" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
