import React from 'react';

const stats = [
  { number: "99.99%", label: "Uptime" },
  { number: "150+", label: "Countries" },
  { number: "50M+", label: "Transactions" },
  { number: "10k+", label: "Merchants" }
];

export function Stats() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}