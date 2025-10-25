'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  MapPin,
  Mail,
  Clock,
  CheckCheck,
  Heart,
  Users,
  Calendar,
  ShieldCheck,
  Globe,
} from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'G Parveen',
    initial: 'G',
    rating: 5,
    timeframe: '3 months ago',
    text: 'I’m extremely pleased with the services provided by HHC to my mom. She was living alone in Pakistan and was having a lot of medical issues and I could not travel back immediately. She received prompt care and we (her kids) received frequent...',
    fullText:
      'I’m extremely pleased with the services provided by HHC to my mom. She was living alone in Pakistan and was having a lot of medical issues and I could not travel back immediately. She received prompt care and we (her kids) received frequent updates. Everything was very well organized and every single person on the team was extremely professional. I highly recommend this service and I am sure to get it again when my mom returns.',
  },
  {
    id: 2,
    name: 'Mushtaq Mohiuddin',
    initial: 'M',
    rating: 5,
    timeframe: '3 month ago',
    text: 'Having personally used these services for our elderly family members, I can confidently say this is one of the best decisions you can make if you have aging loved ones back home. The quality of care provided, along with the level of professionalism...',
    fullText:
      'Having personally used these services for our elderly family members, I can confidently say this is one of the best decisions you can make if you have aging loved ones back home. The quality of care provided, along with the level of professionalism and the communication, surpasses many services available in Western countries, and at a fraction of the cost. I’m seriously grateful to the entire Human Health care team for providing such an outstanding service to humanity.',
  },
  {
    id: 3,
    name: 'Syed Hashmi',
    initial: 'S',
    rating: 5,
    timeframe: '11 months ago',
    text: 'The human healthcare team provided an exceptional experience for my family member! The length of visit, detailed examination and explanation of the care plan was outstanding. The follow up with medication adjustments, lab monitoring written in a care plan available to us shows the team’s...',
    fullText:
      'The human healthcare team provided an exceptional experience for my family member! The length of visit, detailed examination and explanation of the care plan was outstanding. The follow up with medication adjustments, lab monitoring written in a care plan available to us shows the team’s excellent professionalism. What touched us most is the team checked on another family member (not enrolled) during their visit who was recovering from an illness. This reflects kindness and care, not seen in many business models. We would recommend this service to those who are wanting their loved ones to be earnestly looked after for your peace of mind.',
  },
  {
    id: 4,
    name: 'Omair Atiq',
    initial: 'O',
    rating: 5,
    timeframe: 'a year ago',
    text: 'Human Health care service have been taking care of my parents for last 1 year. We had great experience with their team. Very professional in responses. Provided several home services to my parents. Highly recommended.',
    fullText:
      'Human Health care service have been taking care of my parents for last 1 year. We had great experience with their team. Very professional in responses. Provided several home services to my parents. Highly recommended.',
  },
  {
    id: 5,
    name: 'Zeeshan Hassan',
    initial: 'Z',
    rating: 5,
    timeframe: 'a year ago',
    text: 'You can never outsource well being of your precious parents! However Human health has really helped by being true partners and taking care with regular visits, arranging doctors visits as if you are taking care yourself! In some aspects they even exceed your...',
    fullText:
      'You can never outsource well being of your precious parents! However Human health has really helped by being true partners and taking care with regular visits, arranging doctors visits as if you are taking care yourself! In some aspects they even exceed your expextation! Great concept with human touch! Highly recommended whether you are around or overseas! Kudos to the wonderful team!',
  },
  {
    id: 6,
    name: 'Ehrima Fatima',
    initial: 'E',
    rating: 5,
    timeframe: '2 years ago',
    text: 'The Human-Healthcare is undeniably a wonderful initiative. They treat our parents with the same level of care as if they were their own. I feel a great sense of relief knowing that there is a dedicated team overseeing my parents...',
    fullText:
      "The Human-Healthcare is undeniably a wonderful initiative. They treat our parents with the same level of care as if they were their own. I feel a great sense of relief knowing that there is a dedicated team overseeing my parents' healthcare, medications, and blood work. Moreover, the team is incredibly approachable, making it easy for me to discuss any concerns or queries about my parents' health.",
  },
];

// Pricing plans data
const pricingPlans = [
  {
    id: 1,
    name: 'Humancare Essential',
    price: '$49.00/Rs. 13,500',
    period: 'per month',
    description:
      'Perfect for members who are overall healthy, desire minimal medical interventions, and prioritize excellent preventive primary care to lead a long, healthy life.',
    features: [
      "All Plans include access to primary care doctors and specialists' opinions from the US, Canada, and UK, such as Cardiologists, Endocrinologists, Neurologists, Rheumatologists, Gastroenterologists, Nephrologists, among other specialists.",
      'Weekly Touchpoints: Connect with our dedicated healthcare team.',
      'Up to 2 Home Visits per Month: Experience care in the comfort of your home.',
      'Urgent Care Access: 24-48 hours rapid access to our care team when you need it most.',
      'Note: Services like prescription delivery, weekend service, home physiotherapy, and nurse companion transportation are available at an additional cost. Weekend services are not available in this plan.',
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
      "All Plans include access to primary care doctors and specialists' opinions from the US, Canada, and UK, such as Cardiologists, Endocrinologists, Neurologists, Rheumatologists, Gastroenterologists, Nephrologists, among other specialists.",
      'Urgent Care: Enhanced 24-48 hours access to our care team.',
      "Nurse Companion: Up to 2 home visits a month, ensuring you're never alone on your health journey.",
      'Complimentary Home Physiotherapy: Weekly sessions aiding your physical wellness.',
      'Free Annual Medical Screenings: echocardiogram, mammogram, stool test for colorectal cancer, lung cancer screening, and prostate level checks to ensure comprehensive preventive care.',
    ],
  },
];

// Benefits & Features data
const benefits = [
  {
    id: 1,
    title: 'Home-based Comprehensive Care',
    description:
      'Health expertise that meets you where you are. Personalized care, tailored to all your needs, brought right to your doorstep.',
    image: '/images/home/card-1.jpg',
  },
  {
    id: 2,
    title: 'American and UK Specialists Opinion',
    description:
      'Unlock American, Canadian, and UK medical expertise for your loved ones. From cardiology, neurology, gastroenterology, rheumatology, endocrinology to primary care, geriatrics & more. Your loved ones are under expert care supervision.',
    image: '/images/home/card-2.png',
  },
  {
    id: 3,
    title: 'Regular Health Screenings',
    description:
      'Stay proactive. Our inclusive annual screenings and labs keep you updated and ahead in your health journey.',
    image: '/images/home/card-3.jpg',
  },
  {
    id: 4,
    title: 'Flexible Healthcare on Your Terms',
    description:
      'Hybrid care designed for you. Choose from in-person visits or connect virtually, as your lifestyle demands.',
    image: '/images/home/card-4.jpg',
  },
  {
    id: 5,
    title: 'Say Goodbye to Lab Visits',
    description:
      'Our in-home phlebotomy service takes care of blood tests, bringing the lab to your comfort zone.',
    image: '/images/home/card-5.jpg',
  },
  {
    id: 6,
    title: 'High-Value Care, Always',
    description:
      'With personalized check-ups and telehealth consultations, you never have to ration your healthcare again.',
    image: '/images/home/card-6.png',
  },
  {
    id: 7,
    title: 'Support When You Need it The Most',
    description:
      "During hospital admissions, we're by your side. Our team offers attendance and support on behalf of family members.",
    image: '/images/home/card-7.jpg',
  },
  {
    id: 8,
    title: 'Convenience For Your Parents',
    description:
      'Some times you need a walker or a wheelchair. We make sure all health related needs are fulfilled by your dedicated Human Health Coordinator.',
    image: '/images/home/card-8.jpg',
  },
  {
    id: 9,
    title: 'Messaging Access to Medical Experts',
    description:
      'Questions? Concerns? Reach out to our medical team anytime through our instant messaging service.',
    image: '/images/home/card-9.jpg',
  },
  {
    id: 10,
    title: 'Empower Your Health Management',
    description:
      "State-of-the-art tools at your fingertips to ensure you're always in control of your well-being.",
    image: '/images/home/card-10.jpg',
  },
  {
    id: 11,
    title: 'Quick Solutions for Quick Needs',
    description:
      'From rapid health check-ins to essential tests and vaccinations, your health needs are addressed promptly.',
    image: '/images/home/card-11.jpg',
  },
  {
    id: 12,
    title: 'Trust in Annual Bloodwork',
    description:
      "Comprehensive annual blood work courtesy of Aga Khan Labs, ensuring you're always informed",
    image: '/images/home/card-12.jpg',
  },
];

// Team members data
const teamMembers = [
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
  {
    id: 7,
    name: 'Omair Atiq, MD – USA',
    title: 'Gastroenterology, Hepatology, and Invasive Gastroenterology',
    image: '/images/home/person-7.webp',
  },
  {
    id: 8,
    name: 'Sana Chaudahry, MD – USA',
    title: 'Rheumatology',
    image: '/images/home/person-8.jpg',
  },
  {
    id: 9,
    name: 'Sahrish Abdin, MD – USA & Canada',
    title: 'Geriatrics & Internist',
    image: '/images/home/person-9.webp',
  },
  {
    id: 10,
    name: 'Sumaira Shafi, MD – USA',
    title: 'Hematology & Oncology',
    image: '/images/home/person-10.webp',
  },
  {
    id: 11,
    name: 'Syed Hammad Alam, MD – USA',
    title: 'Nephrology and Hypertension',
    image: '/images/home/person-11.jpg',
  },
  {
    id: 12,
    name: 'Mubashir Saleem, MBBS, MS – Canada, Pakistan',
    title: 'Dermatology',
    image: '/images/home/person-12.webp',
  },
  {
    id: 13,
    name: 'Zohaib Sohail, MD – USA, Pakistan.',
    title: 'Psychiatry',
    image: '/images/home/person-13.webp',
  },
  {
    id: 14,
    name: 'M. Suhaib Khan, MD – USA',
    title: 'Pulmonology & Critical Care',
    image: '/images/home/person-14.webp',
  },
  {
    id: 15,
    name: 'Dr. Kamran, Family Medicine Specialist, Pakistan',
    title: 'Physician Lead, Karachi',
    image: '/images/home/person-15.webp',
  },
  {
    id: 16,
    name: 'Dr. Sobia, Family Medicine Specialist, Pakistan',
    title: 'Family Physician, Karachi',
    image: '/images/home/person-16.webp',
  },
  {
    id: 17,
    name: 'Sheeba, Human Health Coordinator',
    title: 'Certified Midwife, Karachi',
    image: '/images/home/person-17.webp',
  },
  {
    id: 18,
    name: 'Abdul Jawwad, Human Health Coordinator',
    title: 'Certified Midwife, Karachi',
    image: '/images/home/person-18.webp',
  },
  {
    id: 19,
    name: 'Iqra Batool, Physiotherapist',
    title: 'Doctor of Physiotherapy, Karachi',
    image: '/images/home/person-19.webp',
  },
  {
    id: 20,
    name: 'Kinza Fatima, Physiotherapist',
    title: 'Doctor of Physiotherapy, Karachi',
    image: '/images/home/person-20.webp',
  },
  {
    id: 21,
    name: 'Yasir Saeed, Human Care Advisor',
    title: 'Administrative Lead, Karachi',
    image: '/images/home/person-21.webp',
  },
];

function TestimonialCard({
  testimonial,
  expanded,
  onToggle,
}: {
  testimonial: (typeof testimonials)[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border-4 border-[#6c2dc7] shadow-lg">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-[#a048a7] rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {testimonial.initial}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-poppins font-semibold text-black text-lg">
            {testimonial.name}
          </h4>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#6c2dc7] text-[#6c2dc7]"
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              {testimonial.timeframe}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 font-poppins text-[15px] leading-[25px] mb-4">
        {expanded ? testimonial.fullText : testimonial.text}
      </p>
      <button
        onClick={onToggle}
        className="text-[#a048a7] font-medium hover:underline"
      >
        {expanded ? 'Show Less' : 'More'}
      </button>
    </div>
  );
}

export default function HomePage() {
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>(
    []
  );
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const currentTestimonials =
    currentTestimonialSet === 0
      ? testimonials.slice(0, 3)
      : testimonials.slice(3, 6);

  const toggleTestimonial = (id: number) => {
    setExpandedTestimonials(prev =>
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Two Parts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Part */}
            <div className="flex-1">
              <h1 className="text-[45px] leading-[63px] font-montserrat font-semibold text-black mb-6">
                HEALTHCARE AT YOUR DOORSTEP
              </h1>
              <p className="text-[18px] leading-[28px] font-poppins text-[#565656] mb-8">
                Seamless, Doctor-Led Care at Home, So You Can Focus on What
                Matters Most – Even From Abroad. Most popular premium package
                costs 99$/month.
              </p>

              <h3 className="text-[24px] leading-[31px] font-dm-sans font-bold text-[#a648a7] mb-6">
                Here's How We Help:
              </h3>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-poppins font-semibold text-[18px] text-black mb-2">
                    Doctor Home Visits
                  </h4>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Get professional consultations without the hassle of
                    hospital trips.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[18px] text-black mb-2">
                    Nursing Care at Home
                  </h4>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Trained nurses for chronic conditions & more.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[18px] text-black mb-2">
                    Physio at Home
                  </h4>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Regain mobility & strength with expert rehabilitation.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[18px] text-black mb-2">
                    Health Monitoring & Support
                  </h4>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Stay updated on your loved one's health (medications,
                    appointment) anytime.
                  </p>
                </div>
              </div>

              <p className="font-poppins text-[16px] leading-[25px] text-[#565656] mb-6">
                Serving Karachi's Most Trusted Families in Gulshan, PECHS,
                Defence, Malir Cantt, North Nazimabad, Clifton.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-poppins text-[16px] text-black font-semibold">
                    📞 Book an appointment today by calling 0319-2060174 & give
                    your parents the care they deserve!
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-[#a048a7]" />
                  <span className="font-poppins text-[16px] text-black">
                    Send us a WhatsApp Message
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

            {/* Right Part */}
            <div className="flex-1">
              <Image
                src="/images/home/image-1.jpg"
                alt="Healthcare at your doorstep"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Press Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[28px] leading-[35px] font-poppins font-semibold text-[#a048a7] mb-4">
            As Seen In Press
          </h2>
          <p className="text-[40px] leading-[28px] font-montserrat text-black font-semibold mb-8">
            HUMAN-HEALTHCARE.COM
          </p>

          {/* Doctor Icon Divider */}
          <div className="flex items-center mb-8">
            <div className="flex-1 h-px bg-gray-400"></div>
            <Stethoscope className="w-6 h-6 text-[#a048a7] mx-4" />
            <div className="flex-1 h-px bg-gray-400"></div>
          </div>

          {/* Press Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(num => (
              <div key={num}>
                <Image
                  src={`/images/home/${num}.png`}
                  alt={`Press ${num}`}
                  width={200}
                  height={150}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[45px] leading-[63px] font-montserrat font-semibold underline text-[#a048a7] mb-8">
            See How We Bring Care Home: Stories & Solutions
          </h2>
          <p className="text-[18px] leading-[28px] font-poppins text-[#565656]">
            Video content coming soon...
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[45px] leading-[63px] font-dm-sans font-thin text-black text-center mb-12">
            Hear From Families Who Found Peace of Mind
          </h2>

          {/* Business Information */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Image
                alt="Logo"
                src={'/images/favicon.jpg'}
                width={80}
                height={80}
              />
              <div className="text-left">
                <h3 className="text-[28px] font-poppins font-semibold text-[#a048a7]">
                  Human Health Care Services Pvt Limited
                </h3>
                <p className="text-[14px] font-poppins text-[#565656] text-center">
                  HQ40 c/o E40, PRECHS, Bl10A Gulshan-e-Iqbal, Karachi
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <span className="text-[18px] font-poppins font-semibold text-black">
                5.0
              </span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#6c2dc7] text-[#6c2dc7]"
                  />
                ))}
              </div>
              <span className="text-[14px] font-poppins text-[#565656]">
                17 reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentTestimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                expanded={expandedTestimonials.includes(testimonial.id)}
                onToggle={() => toggleTestimonial(testimonial.id)}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setCurrentTestimonialSet(0)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                currentTestimonialSet === 0
                  ? 'bg-[#a048a7] text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentTestimonialSet(1)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                currentTestimonialSet === 1
                  ? 'bg-[#a048a7] text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Powered by Google */}
          <div className="text-center">
            <span className="text-gray-600 font-poppins text-[14px]">
              Powered by{' '}
            </span>
            <span className="font-bold text-[#4285f4]">G</span>
            <span className="font-bold text-[#ea4335]">o</span>
            <span className="font-bold text-[#fbbc05]">o</span>
            <span className="font-bold text-[#4285f4]">g</span>
            <span className="font-bold text-[#34a853]">l</span>
            <span className="font-bold text-[#ea4335]">e</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[45px] leading-[63px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            OUR PRICINGS
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

      {/* Benefits & Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[45px] leading-[63px] font-montserrat font-semibold text-[#a048a7] text-center mb-12">
            BENEFITS & FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit => (
              <div
                key={benefit.id}
                className="bg-[#f6f6f6] p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-[28px] leading-[35px] hover:text-blue-500 hover:cursor-pointer text-center leading-[28px] font-poppins font-semibold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="font-poppins text-center text-[15px] leading-[25px] text-[#565656]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[45px] leading-[63px] font-montserrat font-thin text-black text-center mb-12">
            Meet Our Human Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map(member => (
              <div
                key={member.id}
                className="bg-[#f6f6f6] border-[1px] border-[#a640a7] p-6 rounded-lg shadow-lg border border-gray-200 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-[22px] leading-[25px] font-poppins font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <p className="font-poppins text-[14px] leading-[20px] text-[#565656]">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-[#343434]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[32px] leading-[40px] font-poppins font-bold text-[#a048a7] mb-8">
              Human-Healthcare.com
            </h2>
            <h3 className="text-[28px] leading-[35px] font-poppins font-semibold text-white mb-8">
              AMERICAN HEALTHCARE AT YOUR DOORSTEP
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-[20px] leading-[28px] font-poppins font-semibold text-white mb-2">
                  Stress-Free appointment
                </h4>
                <p className="font-poppins text-[15px] leading-[25px] text-[#afaba6]">
                  With healthcare accessibility at your doorstep, you can save
                  time and avoid the hassle of traveling, freeing you from
                  mental agony and dissatisfaction with unmet healthcare needs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-[20px] leading-[28px] font-poppins font-semibold text-white mb-2">
                  Compassionate, Personalized Care
                </h4>
                <p className="font-poppins text-[15px] leading-[25px] text-[#afaba6]">
                  Our compassionate and patient-centered approach to care
                  ensures that your needs are met with kindness and
                  understanding.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-[20px] leading-[28px] font-poppins font-semibold text-white mb-2">
                  Professional Staff
                </h4>
                <p className="font-poppins text-[15px] leading-[25px] text-[#afaba6]">
                  Our local team of experts is dedicated to ensuring that your
                  healthcare needs are met with personalized attention and care.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-[20px] leading-[28px] font-poppins font-semibold text-white mb-2">
                  Personalized WhatsApp Group
                </h4>
                <p className="font-poppins text-[15px] leading-[25px] text-[#afaba6]">
                  You are busy but want to be involved. We understand. Our
                  doctors and nurses are here to answer your questions
                  considering the time difference.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-[20px] leading-[28px] font-poppins font-semibold text-white mb-2">
                  Peace of Mind for Overseas Pakistanis
                </h4>
                <p className="font-poppins text-[15px] leading-[25px] text-[#afaba6]">
                  For those living abroad, our services eliminate the need to
                  fly back to Karachi for healthcare needs, providing peace of
                  mind for you and your loved ones.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#a048a7] rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-[20px] leading-[28px] font-poppins font-semibold text-white mb-2">
                  World-Class Healthcare in the Comfort of Your Own Home
                </h4>
                <p className="font-poppins text-[15px] leading-[25px] text-[#afaba6]">
                  Our US standard healthcare services bring cutting-edge
                  technology and US specialists directly to you, so you don't
                  have to leave the comfort of your own home.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[48px] leading-[60px] font-poppins font-bold text-[#a048a7] mb-2">
                80%
              </div>
              <h4 className="text-[18px] leading-[25px] font-poppins font-semibold text-white mb-2">
                Reduced Emergencies
              </h4>
              <p className="font-poppins text-[14px] leading-[20px] text-gray-300">
                Reduction in Hospital Checkups and Clinic Visits of our clients
              </p>
            </div>
            <div>
              <div className="text-[48px] leading-[60px] font-poppins font-bold text-[#a048a7] mb-2">
                93%
              </div>
              <h4 className="text-[18px] leading-[25px] font-poppins font-semibold text-white mb-2">
                Trust
              </h4>
              <p className="font-poppins text-[14px] leading-[20px] text-gray-300">
                Clients Become Long Term Enrolled Customers
              </p>
            </div>
            <div>
              <div className="text-[48px] leading-[60px] font-poppins font-bold text-[#a048a7] mb-2">
                0
              </div>
              <h4 className="text-[18px] leading-[25px] font-poppins font-semibold text-white mb-2">
                Covid positive cases
              </h4>
              <p className="font-poppins text-[14px] leading-[20px] text-gray-300">
                COVID Diagnosis among our Enrolled Customers.
              </p>
            </div>
            <div>
              <div className="text-[48px] leading-[60px] font-poppins font-bold text-[#a048a7] mb-2">
                100%
              </div>
              <h4 className="text-[18px] leading-[25px] font-poppins font-semibold text-white mb-2">
                Guarantee
              </h4>
              <p className="font-poppins text-[14px] leading-[20px] text-gray-300">
                Money Back Guarantee. If your loved ones and you don't like the
                experience, you get full refund right away.
              </p>
            </div>
          </div>
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
                        Main Office: HQ40 c/o E40, PRECHS, Gulshan-e-Iqbal,
                        Bl10A, Karachi, Pakistan.
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
