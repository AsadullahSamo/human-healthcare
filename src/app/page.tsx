export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Healthcare at Your Doorstep
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Professional healthcare services delivered to your home
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Book a Service Now
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold">
            View Our Services
          </button>
        </div>
      </div>
    </main>
  );
}
