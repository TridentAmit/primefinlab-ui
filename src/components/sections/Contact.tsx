import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export function Contact() {
  const whatsappNumber = "+919023599747";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our team is here to help you get started with PrimeFin Lab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
                <p className="text-gray-600 mb-6">
                  Choose the most convenient way to reach us. We're here to help!
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-600">support@primefinlabs.com</p>
                  <p className="text-gray-600">24/7 response time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600"> <a href={whatsappUrl}>+91-9023599747</a></p>
                  <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Live Chat</h4>
                  <p className="text-gray-600">Available 24/7</p>
                  <p className="text-gray-600">Average response time: 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}