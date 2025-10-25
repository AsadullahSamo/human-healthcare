import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story - Human Healthcare',
  description: 'Learn about Human Health Care Services Pvt Ltd, a Pakistani company providing top healthcare services in Karachi and beyond.',
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4048A7] to-[#3538a0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Discover the journey of Human Health Care Services and our commitment to providing exceptional healthcare services to families across Pakistan and overseas Pakistanis worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#4048A7] mb-6">About Human Health Care Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Human Health Care Services Pvt Ltd is a pioneering Pakistani healthcare company that brings professional medical services directly to your doorstep. We specialize in providing comprehensive home healthcare solutions including nursing care, doctor visits, physiotherapy, attendant services, and domestic help.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                An idea of Human Health LLC, a US-based startup, Human Health Care Services Pvt Ltd is headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi, Pakistan. We bridge the gap between quality healthcare and accessibility, ensuring that every family receives the care they deserve in the comfort of their own home.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4048A7] mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize healthcare delivery in Pakistan by providing accessible, professional, and compassionate home healthcare services that prioritize patient comfort, safety, and well-being.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4048A7] mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become Pakistan's leading home healthcare provider, setting new standards for quality care while making healthcare services accessible to every family across the nation.
                </p>
              </div>
            </div>

            {/* Services Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#4048A7] mb-6">What We Offer</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#4048A7] mb-3">Home Nursing</h4>
                  <p className="text-gray-600">Professional nursing care in the comfort of your home with qualified and experienced nurses.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#4048A7] mb-3">Doctor Visits</h4>
                  <p className="text-gray-600">Qualified doctors available for home consultations and medical check-ups.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#4048A7] mb-3">Physiotherapy</h4>
                  <p className="text-gray-600">Expert physiotherapy services to help with recovery and rehabilitation at home.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#4048A7] mb-3">Attendant Services</h4>
                  <p className="text-gray-600">Trained attendants to provide personal care and assistance for elderly and patients.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#4048A7] mb-3">Maid Services</h4>
                  <p className="text-gray-600">Reliable domestic help services to maintain cleanliness and hygiene in your home.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#4048A7] mb-3">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock availability and emergency support for all our healthcare services.</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#4048A7] mb-6">Why Choose Human Healthcare?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#4048A7] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Qualified Professionals</h4>
                    <p className="text-gray-600">All our healthcare professionals are properly trained, certified, and experienced in their respective fields.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#4048A7] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Affordable Services</h4>
                    <p className="text-gray-600">We offer competitive pricing to make quality healthcare accessible to all families.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#4048A7] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personalized Care</h4>
                    <p className="text-gray-600">Each care plan is tailored to meet the specific needs and preferences of our clients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#4048A7] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Trusted & Reliable</h4>
                    <p className="text-gray-600">We have built our reputation on trust, reliability, and consistent quality service delivery.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Call-to-Action */}
            <div className="bg-[#4048A7] text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Quality Healthcare at Home?</h3>
              <p className="text-gray-100 mb-6">
                Contact us today to learn more about our services and how we can help you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+923192060174" 
                  className="bg-white text-[#4048A7] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call: +92 319-2060174
                </a>
                <a 
                  href="https://wa.me/+13199363574" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp: +1 319 936 3574
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}