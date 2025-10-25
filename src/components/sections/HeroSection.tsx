import { Button } from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Healthcare at Your <span className="text-blue-600">Doorstep</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional healthcare services delivered to your home. Expert
            care, comfort, and convenience when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              Book a Service
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
