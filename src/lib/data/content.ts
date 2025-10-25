export const services = [
  {
    id: 'home-nursing',
    name: 'Home Nursing',
    description: 'Professional nursing care in the comfort of your home',
    icon: 'Heart',
    features: [
      '24/7 Care',
      'Certified Nurses',
      'Medication Management',
      'Health Monitoring',
    ],
    price: 'From $80/visit',
  },
  {
    id: 'doctor-visits',
    name: 'Doctor Home Visits',
    description:
      'Qualified doctors visit your home for consultations and checkups',
    icon: 'UserCheck',
    features: [
      'General Consultation',
      'Health Checkups',
      'Prescription Services',
      'Follow-up Care',
    ],
    price: 'From $120/visit',
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy',
    description: 'Recovery and rehabilitation therapy at home',
    icon: 'Activity',
    features: [
      'Injury Recovery',
      'Mobility Training',
      'Pain Management',
      'Exercise Plans',
    ],
    price: 'From $90/session',
  },
];

export const pricingPlans = [
  {
    id: 'essential',
    name: 'Essential Care',
    price: '$199',
    period: 'per month',
    description: 'Basic healthcare services for individuals',
    features: [
      '2 Doctor Visits',
      '4 Nursing Visits',
      'Basic Health Monitoring',
      'Phone Support',
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium Care',
    price: '$399',
    period: 'per month',
    description: 'Comprehensive healthcare for families',
    features: [
      'Unlimited Doctor Visits',
      'Unlimited Nursing',
      '24/7 Emergency Support',
      'Health Analytics',
    ],
    popular: true,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Mother of two',
    content:
      'The home nursing service was exceptional. Professional, caring, and reliable.',
    rating: 5,
    verified: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Senior patient',
    content:
      'Doctor visits at home made my recovery so much easier. Highly recommended.',
    rating: 5,
    verified: true,
  },
];

export const companyStats = [
  { label: 'Patients Served', value: '10,000+' },
  { label: 'Years of Service', value: '15+' },
  { label: 'Healthcare Professionals', value: '500+' },
  { label: 'Cities Covered', value: '50+' },
];
