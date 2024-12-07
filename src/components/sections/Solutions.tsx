import React from 'react';
import { 
  CreditCard, 
  Store, 
  Repeat, 
  Building2, 
  Wallet, 
  Shield, 
  Users, 
  ArrowLeftRight 
} from 'lucide-react';

const solutions = [
  {
    icon: <CreditCard className="h-12 w-12 text-blue-600" />,
    title: "Online Payments",
    description: "Accept payments globally with our secure payment gateway",
    features: ["Card payments", "Digital wallets", "Local payment methods"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Store className="h-12 w-12 text-blue-600" />,
    title: "Point of Sale",
    description: "Seamless in-person payments for retail businesses",
    features: ["Contactless payments", "Smart terminals", "Inventory management"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    title: "Online KYC",
    description: "Secure and automated identity verification for seamless onboarding",
    features: ["Video KYC", "Document verification", "Biometric authentication", "Real-time verification"],
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Wallet className="h-12 w-12 text-blue-600" />,
    title: "Digital Wallet",
    description: "Comprehensive digital wallet solution for modern payments",
    features: ["Mobile payments", "P2P transfers", "Loyalty integration", "Multi-currency support"],
    image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <ArrowLeftRight className="h-12 w-12 text-blue-600" />,
    title: "Payment Aggregator",
    description: "Unified payment processing across multiple providers",
    features: ["Multi-provider integration", "Smart routing", "Unified reporting", "Optimal cost routing"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Repeat className="h-12 w-12 text-blue-600" />,
    title: "Recurring Billing",
    description: "Automated subscription and invoice payments",
    features: ["Subscription management", "Smart retries", "Revenue recovery"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Multi-party Settlements",
    description: "Complex payment flows for marketplaces and platforms",
    features: ["Split payments", "Automated settlements", "Escrow services", "Commission handling"],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Building2 className="h-12 w-12 text-blue-600" />,
    title: "Enterprise Solutions",
    description: "Customized solutions for large organizations",
    features: ["Custom workflows", "Advanced reporting", "Dedicated support"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400"
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Payment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end payment solutions for businesses of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  {solution.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-6">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}