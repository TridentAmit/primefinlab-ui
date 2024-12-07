import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Wallet, 
  Globe2,
  Smartphone,
  Settings
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "Advanced Security",
      description: "PCI DSS Level 1 compliance with end-to-end encryption and fraud detection"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with transaction insights and reporting"
    },
    {
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      title: "Multiple Payment Methods",
      description: "Support for cards, digital wallets, and local payment methods"
    },
    {
      icon: <Globe2 className="h-6 w-6 text-blue-600" />,
      title: "Global Currency Support",
      description: "Accept and settle payments in 135+ currencies"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "Mobile-First Design",
      description: "Optimized checkout experience across all devices"
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      title: "Easy Integration",
      description: "Simple API integration with comprehensive documentation"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Commerce
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to process payments securely and grow your business globally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}