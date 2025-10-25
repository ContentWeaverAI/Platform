import React from 'react';
import Button from '../ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Transform Your Website Content
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            with AI Conversation
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Update your website, modify services, and optimize content through natural conversation. 
          No technical skills required. Just talk to your AI content assistant.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="primary" size="large">
            Start Chatting Now
          </Button>
          <Button variant="secondary" size="large">
            View Demo
          </Button>
        </div>
        
        {/* Demo Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto border border-gray-200">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 text-left">
              <p className="text-gray-700">"Update our pricing page to show monthly subscriptions starting at €49"</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-left border border-blue-200">
              <p className="text-blue-700">"✓ Updated pricing page with monthly subscription options. Added clear CTAs and comparison table."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;