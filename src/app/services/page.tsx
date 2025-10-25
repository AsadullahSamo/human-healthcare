import { generatePageMetadata } from '../../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Healthcare Services',
  description: 'Professional healthcare services delivered to your home',
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Our Healthcare Services
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300">
          Professional healthcare services coming soon...
        </p>
      </div>
    </main>
  );
}
