import React from 'react';

export function Images() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Secure Payment Processing Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art security measures and lightning-fast processing capabilities to handle payments at any scale.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400"
                alt="Secure Payment Processing"
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&h=400"
                alt="Digital Security"
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&w=800&h=1000"
              alt="Payment Technology"
              className="rounded-xl shadow-xl object-cover w-full h-[600px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                <p className="text-sm font-semibold">System Status: Operational</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&h=400"
              alt="Global Payments"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Global Coverage</h3>
              <p className="text-sm text-gray-600">Accept payments worldwide</p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&h=400"
              alt="Fast Processing"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Process in milliseconds</p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400"
              alt="Secure Infrastructure"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Bank-Grade Security</h3>
              <p className="text-sm text-gray-600">Enterprise-level protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}