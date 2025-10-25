interface TestimonialProps {
  testimonial: {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    verified: boolean;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        {testimonial.verified && (
          <span className="ml-2 text-blue-600 text-sm">✓ Verified</span>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div>
        <div className="font-semibold text-gray-900 dark:text-white">
          {testimonial.name}
        </div>
        <div className="text-sm text-gray-500">{testimonial.role}</div>
      </div>
    </div>
  );
}
