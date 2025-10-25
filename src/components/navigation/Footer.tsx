import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  quicklinks: [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Register Now', href: '/register' },
    { name: 'FAQ', href: '/faqs' },
    { name: 'Care Library', href: '/care-library' },
    { name: 'Newsletter', href: '/newsletter' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'Linkedin', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Youtube', href: 'https://youtube.com', icon: 'youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#4048A7] dark:bg-[#2d3a8c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-white/90 dark:text-white/80 mb-6 max-w-2xl">
              Human-Healthcare.com top home health care, doctor, nurse, physiotherapy, attendant, maid providing services in Karachi, Pakistan
            </p>
            <p className="text-white/90 dark:text-white/80 mb-6 max-w-2xl">
              An idea of Human Health LLC, a US-based startup, Human Health Care Services Pvt Ltd is a Pakistani company headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <h5 className="font-semibold text-white dark:text-white mb-3">Get In Touch</h5>

              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 text-white dark:text-white mt-1 mr-2 flex-shrink-0" />
                <span className="text-white/90 dark:text-white/80">
                  Main Office: HQ40 c/o E40, PRECHS, Gulshan-e-Iqbal, Bl10A, Karachi, Pakistan.
                </span>
              </div>

              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-white dark:text-white mr-2 flex-shrink-0" />
                <a
                  href="mailto:service@human-healthcare.com"
                  className="text-white/90 dark:text-white/80 hover:text-white dark:hover:text-white"
                >
                  service@human-healthcare.com
                </a>
              </div>

              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-white dark:text-white mr-2 flex-shrink-0" />
                <div className="text-white/90 dark:text-white/80">
                  <a href="tel:+923192060174" className="hover:text-white dark:hover:text-white block">+92 319-2060174</a>
                  <a href="https://wa.me/+13199363574" className="text-white dark:text-white hover:text-white/80 dark:hover:text-white/80 font-medium">+1 319 936 3574</a>
                </div>
              </div>

              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 text-white dark:text-white mr-2 flex-shrink-0" />
                <span className="text-white/90 dark:text-white/80">09:00 AM - 06:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#4048A7] hover:text-[#3538a0] dark:hover:text-[#3538a0]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-white mb-4">
              Quicklinks
            </h3>
            <ul className="space-y-2">
              {footerLinks.quicklinks.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 dark:text-white/80 hover:text-white dark:hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white dark:text-white mb-2">Email</h4>
              <div className="flex space-x-4">
                {socialLinks.map(item => {
                  let IconComponent;
                  switch(item.icon) {
                    case 'facebook':
                      IconComponent = Facebook;
                      break;
                    case 'linkedin':
                      IconComponent = Linkedin;
                      break;
                    case 'instagram':
                      IconComponent = Instagram;
                      break;
                    case 'youtube':
                      IconComponent = Youtube;
                      break;
                    default:
                      IconComponent = Facebook;
                  }
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white dark:text-white hover:text-white/80 dark:hover:text-white/80"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-white/80 dark:text-white/70 text-sm mb-4 md:mb-0">
              Copyright © 2025 Human-Healthcare
            </p>
            <div className="flex space-x-4">
              <a href="/service-agreement" className="text-white/80 dark:text-white/70 hover:text-white dark:hover:text-white text-sm">
                Service Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
