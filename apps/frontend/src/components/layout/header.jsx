import React from 'react';
import Button from '../ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">ContentWeaverAI</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Services', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Button variant="primary" size="medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;