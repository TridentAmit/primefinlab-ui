import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Modern Way of
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent block">
              Finance Tech
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with our secure, scalable, and intelligent payment gateway. Accept payments from anywhere in the world with ease.At Prime Fin Labs, we specialize in delivering comprehensive financial technology services that cater to the diverse needs of modern businesses. From secure payment gateways to complete end-to-end payment solutions, we empower organizations to streamline operations and enhance customer experiences.
            </p>
            
            

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">PCI Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Instant Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Global Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=600"
              alt="Secure Payment Processing"
              className="rounded-xl shadow-2xl object-cover w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bank-Level Security</p>
                  <p className="text-sm text-gray-600">256-bit encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}