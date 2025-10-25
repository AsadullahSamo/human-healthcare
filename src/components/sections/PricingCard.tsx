import { Button } from '../ui/Button';

interface PricingCardProps {
  plan: {
    id: string;
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-8 rounded-lg border-2 ${
        plan.popular
          ? 'border-blue-500 relative'
          : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {plan.description}
        </p>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {plan.price}
        </div>
        <div className="text-gray-500">{plan.period}</div>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={plan.popular ? 'primary' : 'outline'}>
        Choose Plan
      </Button>
    </div>
  );
}
