import { Metadata } from 'next';
import Image from 'next/image';
import { Facebook, Twitter, CheckCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story - Human Healthcare',
  description: 'Learn about Human Health Care Services Pvt Ltd, a Pakistani company providing top healthcare services in Karachi and beyond.',
};

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Atif Zafar',
    title: 'Co-Founder & US-Based Neurologist.',
    image: '/images/team/atif-zafar.jpg',
    description: `It all started with the story of our founder Dr. Atif Zafar who, after completing his medical education in Pakistan, went on to pursue his medical specialization in the US. One day, after a 36-hour in-hospital shift he received a grieving call from his father in Karachi, "Tumhari Ammi ko doctors ne cancer diagnose kia hai." Atif was overwhelmed with shock, distress, and a feeling of utter helplessness, sitting thousands of miles away from the family he loved and valued so much, especially at a time when they needed him the most. Wracked with guilt, Atif made the reluctant decision to abandon his training in the US to attend to his mother. Just before he left, he got in touch with a few of his physician friends who were in Karachi at the time. They reassured Atif that he need not leave the US; they would proceed with the arduous task of arranging all the necessary appointments and tests for a second opinion with an oncologist in his stead. To Atif's relief, his friends came through. Upon evaluation and review of previous scans, it turned out that his mother's uterine mass was a benign growth that had been present on previous scans as well. Relieved and grateful beyond words, Atif resolved at that time to help others who were in a similar situation. So that others would never have to feel that sense of helplessness in arranging appropriate medical care for their loved ones when they cannot be physically present with them. Thus, an idea was born. The idea to create a platform offering comprehensive health care coordinated service for parents and loved ones back home in Pakistan. Several years later Dr. Atif Zafar and his colleagues have created Human-Healthcare.com, a unique venture placing your families front and center.`,
    position: 'left'
  },
  {
    id: 2,
    name: 'Dr. Shoaib Ghayas',
    title: 'Co-Founder & UK-Based General Physician.',
    image: '/images/team/shoaib-ghayas.jpg',
    description: `Dr. Shoaib Ghayas, the chief medical officer of the startup shares, "As I was working abroad and miles away from Pakistan, I was concerned for the health, well-being of my parents and their access to adequate health care. The Covid-19 Pandemic hit me while I was working as a Family Physician in England. It was shocking news for me when I came to know my father had severe COVID-19 infection during peak of pandemic. I travelled back to Pakistan at risk of losing my job, leaving behind my wife and daughter in the UK to spend a couple of months in Karachi focusing on my father's health. Alhamdulillah, he recovered, but it was a challenging time for our family and my professional life. Although I was fortunate enough to do so, I have heard many stories of expats struggling to travel back home due to work, visa, or household commitments. We have launched Human-Healthcare.com as we acknowledge how overseas Pakistani are balancing their careers, family life abroad, along with ensuring that parents are well cared back in Pakistan. The Human-Healthcare.com team is working on a model to provide the best care our parents need".`,
    position: 'right'
  },
  {
    id: 3,
    name: 'Dr. Mehwish',
    title: 'Co-Founder & US-Based Endocrinologist.',
    image: '/images/team/mehwish.jpg',
    description: `Dr. Mehwish is the Chief Strategy and Education Officer of Human-Healthcare.com. She is the pioneer of DISEASE to EASE concept which is the core value of how our teams deliver care to families. Based in the US and working as a full-time endocrinologist in Chicago, she travels frequently to Pakistan to visit her parents. As an overseas Pakistani she co-founded Human-Healthcare.com to not only take care of her parents but also help other overseas Pakistanis to feel empowered in taking care of their loved ones in Pakistan. Her vision is to re-invent healthcare in Pakistan.`,
    position: 'left'
  },
  {
    id: 4,
    name: 'Dr. Mudassir Farooqui',
    title: 'Co-Founder & US-Based Public Health Specialist.',
    image: '/images/team/mudassir-farooqui.jpg',
    description: `Dr. Mudassir Farooqui is a public health specialist and has a successful track record in both academic healthcare and health industry. He co-founded Human-Healthcare.com as his mother and many aging relatives in Pakistan inspired him to find an innovative healthcare tech-enabled, data-driven service that can provide personalized care to loved ones back in Pakistan. He serves in the advisory role as the Chief Scientific Officer for Human-Healthcare.com.`,
    position: 'right'
  }
];

const foundingPhotos = [
  { name: 'Dr. Atif Zafar', title: 'Co-Founder & US-Based Neurologist.', image: '/images/team/atif-zafar.jpg' },
  { name: 'Dr. Mudassir Farooqui', title: 'Co-Founder & US- Based Public Health Specialist.', image: '/images/team/mudassir-farooqui.jpg' },
  { name: 'Dr. Mahwash Siddiqui', title: 'Co-Founder & US-Based Endocrinologist.', image: '/images/team/mehwish.jpg' },
  { name: 'Dr. Shoib Ghayas', title: 'Co-Founder & UK-Based General Physician.', image: '/images/team/shoaib-ghayas.jpg' }
];

const advisors = [
  'Endocrinology: Mahwash Siddiqui, MD - USA',
  'Infectious Diseases: Onaizah Baqir, MD - USA',
  'Gastroenterology, Hepatology, and Invasive Gastrology: Omair Atiq, MD – USA',
  'General Physician: Shoib Ghayas, MBBS, MRCP – UK',
  'Rheumatology: Sana Chaudahry, MD – USA',
  'Neurology: Atif Zafar, MD – USA & Canada',
  'Geriatrics: Sahrish Abdin, MD – USA & Canada',
  'Hematology & Oncology: Sumaira Shafi, MD – USA',
  'Nephrology and Hypertension: Syed Hammad Alam, MD – USA',
  'Dermatology: Mubashir Saleem, MBBS, MS – Canada, Pakistan',
  'Psychiatry: Zohaib Sohail, MD – USA, Pakistan.',
  'Pulmonology & Critical Care: M. Suhaib Khan, MD – USA'
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#a048a7] to-[#3538a0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story is Every Pakistani's Story</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Discover the journey of Human Health Care Services and our commitment to providing exceptional healthcare services to families across Pakistan and overseas Pakistanis worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#a048a7] mb-6">About Human Health Care Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Human Health Care Services Pvt Ltd is a pioneering Pakistani healthcare company that brings professional medical services directly to your doorstep. We specialize in providing comprehensive home healthcare solutions including nursing care, doctor visits, physiotherapy, attendant services, and domestic help.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                An idea of Human Health LLC, a US-based startup, Human Health Care Services Pvt Ltd is headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi, Pakistan. We bridge the gap between quality healthcare and accessibility, ensuring that every family receives the care they deserve in the comfort of their own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founding Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[45px] leading-[63px] text-[#000000] font-bold text-center mb-12 font-montserrat">
              Meet Our Founding Members
            </h2>
            
            {/* Founding Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {foundingPhotos.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#f6f6f6] bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center p-4">
                    <h3 className="font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-700 text-center mb-4">{member.title}</p>
                    
                    {/* Social Icons */}
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-[#a048a7] rounded-full flex items-center justify-center">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#a048a7] rounded-full flex items-center justify-center">
                        <Twitter className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#a048a7] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm1.33 14.66v-2.21c1.61 0 2.72-.98 2.72-2.27 0-1.29-1.11-2.28-2.72-2.28v-2.21c2.64 0 4.93 1.88 4.93 4.49 0 2.61-2.29 4.48-4.93 4.48z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* HR Separator */}
            <hr className="border-t-2 border-[#a048a7] my-12" />

            {/* Team Member Stories */}
            {teamMembers.map((member, index) => (
              <div key={member.id}>
                <div className={`flex flex-col ${member.position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start mb-16`}>
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-80 h-80 overflow-hidden rounded-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[24px] leading-[31.2px] text-[#111] font-thin hover:underline cursor-pointer mb-4 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-[15px] leading-[22.4px] text-[#111111] font-poppins">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* HR Separator between team members */}
                {index < teamMembers.length - 1 && (
                  <hr className="border-t-2 border-[#a048a7] my-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="bg-[#343434] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[45px] leading-[63px] text-[#ffffff] font-thin text-center mb-4 font-montserrat">
              Human Advisors and Consultants
            </h2>
            <p className="text-[45px] leading-[63px] text-[#ffffff] font-thin text-center mb-12 font-montserrat">
              empowering healthcare in Pakistan:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#a048a7] border border-[#a048a7] flex items-center justify-center flex-shrink-0">
                    <CheckCheck className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[17px] leading-[22px] text-[#ffffff] font-dm-sans">
                    {advisor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f6f6f6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#a048a7] text-white px-4 py-2 rounded mb-8">
              <span className="text-[15px] font-medium">OUR SERVICES</span>
            </div>
            
            <h2 className="text-[45px] leading-[63px] text-[#000000] font-semibold mb-12 font-poppins">
              WORLD CLASS HEALTH CARE AT YOUR DOORSTEP
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-[16px] leading-[25.6px] text-[#111111] font-poppins">
                Your loved ones get VIP Personalized Care service that offers comprehensive health monitoring for loved ones in Pakistan. The service includes US board-certified specialists who work with local expert doctors to provide personalized care. The team includes specialists in hypertension, diabetes(endocrinology), rheumatology, oncology, hematology, neurology, pulmonology, nephrology, cardiology, gastroenterology, pediatrics, and geriatrics among others.
              </p>
              
              <p className="text-[16px] leading-[25.6px] text-[#111111] font-poppins">
                The service also offers regular check-ups with monthly visits and an urgent as-needed visit system for new medical problems that can often happen in your loved ones. The team collects valuable health data with cutting-edge gadgets and provides frequent updates through a mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
