import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "PrimeFin Lab has transformed how we handle payments. Their system is incredibly reliable and the support team is outstanding.",
    author: "Harshini v",
    role: "Co-Founder at LIQUORREAM",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The integration was seamless and our payment processing costs dropped significantly. Couldn't be happier with the switch to PrimeFin Lab.",
    author: "Dilip Jain",
    role: "CO Founder at Gullak",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Best payment gateway we've used. The analytics and fraud prevention features have saved us countless hours and resources.",
    author: "Aarav Bhatia",
    role: "COO Pocketly",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with PrimeFin Lab
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}