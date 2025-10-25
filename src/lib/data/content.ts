// Content data for Human Healthcare website matching human-healthcare.com

export const services = [
  {
    id: 'home-healthcare',
    name: 'Home Healthcare Services',
    description:
      'Professional healthcare services delivered to your home by certified medical professionals',
    icon: 'Heart',
    features: [
      'Doctor House Calls',
      'Nursing Care',
      'Health Monitoring',
      'Medication Management',
    ],
    price: 'Starting at Rs. . 13,500/month',
  },
  {
    id: 'elderly-care',
    name: 'Elderly Care',
    description:
      'Specialized care for elderly family members with comprehensive health management',
    icon: 'UserCheck',
    features: [
      '24/7 Monitoring',
      'Medication Management',
      'Emergency Response',
      'Family Updates',
    ],
    price: 'Starting at Rs. . 27,000/month',
  },
  {
    id: 'physiotherapy',
    name: 'Physical Therapy',
    description:
      'Professional physiotherapy services to help patients recover and maintain mobility',
    icon: 'Activity',
    features: [
      'Certified Therapists',
      'Equipment Provided',
      'Progress Tracking',
      'Home Exercises',
    ],
    price: 'Included in Premium',
  },
];

export const pricingPlans = [
  {
    id: 'essential',
    name: 'Humancare Essential',
    price: '$49.00',
    priceLocal: 'Rs. . 13,500',
    period: 'Per Month',
    description:
      'Perfect for members who are overall healthy, desire minimal medical interventions, and prioritize excellent preventive primary care to lead a long, healthy life.',
    features: [
      'Monthly Health Check-ups',
      'Basic Medication Delivery',
      'Phone Consultations',
      'Health Monitoring',
      'Preventive Care',
      'Family Health Updates',
    ],
    popular: false,
    buttonText: 'Book Now',
  },
  {
    id: 'premium',
    name: 'Humancare Premium',
    price: '$99.00',
    priceLocal: 'Rs. . 27,000',
    period: 'Per Month',
    description:
      'Best suited for most parents or individuals aged over 60 who seek an enhanced healthcare experience that includes regular monitoring, physical therapy, personalized medication delivery, and crucial annual screenings.',
    features: [
      'All Benefits of Human-care Essential, Plus:',
      'Physical Therapy Sessions',
      'Regular Monitoring',
      'Personalized Medication Delivery',
      'Annual Health Screenings',
      'Priority Emergency Response',
      '24/7 Medical Support',
      'Chronic Disease Management',
    ],
    popular: true,
    buttonText: 'Book Now',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'G Perven',
    role: 'Family Member',
    content:
      "I'm extremely pleased with the services provided by HHC to my mom. She was living alone in Pakistan and was having a lot of medical issues and I could not travel back immediately. She received prompt care and we (her kids) received frequent updates.",
    rating: 5,
    verified: true,
    timeAgo: '3 months ago',
  },
  {
    id: '2',
    name: 'Mushtaq Mohiuddin',
    role: 'Family Member',
    content:
      'Having personally used these services for our elderly family members, I can confidently say this is one of the best decisions you can make if you have aging loved ones back home. The quality of care provided, along with the level of professionalism',
    rating: 5,
    verified: true,
    timeAgo: '3 months ago',
  },
  {
    id: '3',
    name: 'Syed Hashmi',
    role: 'Family Member',
    content:
      'The human healthcare team provided an exceptional experience for my family member! The length of visit, detailed examination and explanation of the care plan was outstanding. The follow up with medication adjustments, lab monitoring written',
    rating: 5,
    verified: true,
    timeAgo: '11 months ago',
  },
  {
    id: '4',
    name: 'Omair Atiq',
    role: 'Family Member',
    content:
      'Human Health care service have been taking care of my parents for last 1 year. We had great experience with their team. Very professional in responses. Provided several home services to my parents. Highly recommended.',
    rating: 5,
    verified: true,
    timeAgo: 'a year ago',
  },
];

export const companyStats = [
  {
    label: 'Reduced Emergencies',
    value: '85',
    suffix: '%',
    description:
      'Reduction in Hospital Checkups and Clinic Visits of our clients',
  },
  {
    label: 'Trust',
    value: '95',
    suffix: '%',
    description: 'Clients Become Long Term Enrolled Customers',
  },
  {
    label: 'Covid positive cases',
    value: '0',
    suffix: '',
    description: 'COVID Diagnosis among our Enrolled Customers.',
  },
  {
    label: 'Guarantee',
    value: '100',
    suffix: '%',
    description:
      "Money Back Guarantee. If your loved ones and you don't like the experience, you get full refund right away.",
  },
];

export const companyInfo = {
  name: 'Human Health Care Services Pvt Limited',
  address: 'HQ40 c/o E40, PRECHS, Bl10A Gulshan-e-Iqbal, Karachi',
  phone: '+92 319-2060174',
  phoneUS: '+1 319 936 3574',
  email: 'service@human-healthcare.com',
  hours: '09:00 AM - 06:00 PM',
  rating: '5.0',
  reviewCount: '17 reviews',
  googleMapsUrl: 'https://maps.app.goo.gl/2Q5kEoxsh6A6zAhM7',
  whatsappUrl: 'https://wa.me/+13199363574',
};

export const mediaFeatures = [
  {
    id: 1,
    title:
      "Dunya blog features Atif Zafar's and Human-Healthcare.com's article",
    image: '/images/media/dunya-blog.jpg',
    alt: 'Dunya blog features Human Healthcare',
  },
  {
    id: 2,
    title: 'Yahoo finance featured Human-Healthcare.com',
    image: '/images/media/yahoo-finance.jpg',
    alt: 'Yahoo finance featured Human Healthcare',
  },
  {
    id: 3,
    title: 'World Class Doctor at home using EMR in Pakistan',
    image: '/images/media/world-class-doctor.jpg',
    alt: 'World Class Doctor at home using EMR in Pakistan',
  },
  {
    id: 4,
    title: 'MSN features human-healthcare.com',
    image: '/images/media/msn-features.jpg',
    alt: 'MSN features human healthcare',
  },
];

export const videoStories = [
  {
    id: 1,
    title:
      'Explainer video how human-healthcare.com can serve parents of overseas Pakistanis',
    thumbnail: '/images/videos/explainer-video.jpg',
    description:
      'See how we help overseas Pakistanis take care of their parents back home',
  },
  {
    id: 2,
    title:
      'How human-healthcare.com can deliver care to parents of overseas pakistanis in Karachi',
    thumbnail: '/images/videos/care-delivery.jpg',
    description:
      'Learn about our comprehensive care delivery system in Karachi',
  },
  {
    id: 3,
    title: 'Best home health care services in Karachi, Pakistan',
    thumbnail: '/images/videos/best-services.jpg',
    description:
      'Discover what makes our healthcare services the best in Karachi',
  },
];

export const heroContent = {
  title: 'Professional Healthcare at Your Doorstep',
  subtitle:
    'Bringing world-class medical care to your home in Pakistan. Trusted by families worldwide for comprehensive elderly care and health management.',
  primaryButton: 'Book Service Now',
  secondaryButton: 'Learn More',
  features: [
    'Doctor House Calls',
    '24/7 Emergency Support',
    'Medication Delivery',
    'Health Monitoring',
  ],
};
