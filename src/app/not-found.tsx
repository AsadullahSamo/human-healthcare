import Link from 'next/link';
import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Page Not Found',
  description:
    'The page you are looking for could not be found. Return to our homepage or browse our healthcare services.',
  path: '/404',
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="text-center max-w-md">
        <div className="text-blue-600 text-8xl font-bold mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go Home
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            or browse our{' '}
            <Link href="/services" className="text-blue-600 hover:underline">
              healthcare services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
