import React from 'react';
import { CreditCard, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-blue-600">Solutions</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            
              
            
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#solutions" className="block px-3 py-2 text-gray-600">Solutions</a>
            <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              /*<button className="block w-full px-4 py-2 text-center text-blue-600">Login</button>*/
            </div>
            <div className="mt-3 px-2">
              <button className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}