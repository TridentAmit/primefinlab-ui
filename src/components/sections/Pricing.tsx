import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "2.9%",
      description: "Perfect for small businesses",
      features: [
        "Up to $50k monthly processing",
        "Standard support",
        "Basic analytics",
        "2-day payouts",
        "Standard fraud protection"
      ]
    },
    {
      name: "Growth",
      price: "2.5%",
      description: "For growing businesses",
      popular: true,
      features: [
        "Up to $250k monthly processing",
        "Priority support",
        "Advanced analytics",
        "Next-day payouts",
        "Advanced fraud protection",
        "Multi-currency support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited processing",
        "24/7 dedicated support",
        "Custom analytics",
        "Same-day payouts",
        "Custom fraud rules",
        "Volume discounts",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white rounded-xl ${
                plan.popular 
                  ? 'ring-2 ring-blue-600 shadow-lg' 
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
                  Popular
                </span>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-600"> + $0.30</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}