'use client';
import { useState, useEffect } from 'react';

const fallbackHeroData = {
  aboveTheFoldHeadline: "AI-Powered Content Management",
  aboveTheFoldAccent: "Through Conversation", 
  aboveTheFoldDescription: "Update your website content instantly by chatting with AI. No technical skills, no complex interfaces.",
  primaryButtonText: "Start Free Trial",
  secondaryButtonText: "Watch Demo"
};

export default function Hero() {
  const [heroData, setHeroData] = useState(fallbackHeroData);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setHeroData(data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching hero data');
      }
    };
    fetchHeroData();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Text (EXACT RunwayML style) */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              {heroData.aboveTheFoldHeadline}
              <span className="block text-teal-500 mt-4">{heroData.aboveTheFoldAccent}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              {heroData.aboveTheFoldDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
              >
                {heroData.primaryButtonText}
              </button>
              
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-900 hover:border-teal-500 text-gray-900 hover:text-teal-500 font-medium py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center space-x-2"
              >
                <span>{heroData.secondaryButtonText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Product Demo (EXACT RunwayML style) */}
          <div className="relative">
            {/* Main Demo Container */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              
              {/* Mock Browser Window */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* Browser Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-gray-600">mokosh-ai-demo.com</span>
                  </div>
                </div>
                
                {/* Website Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-xl font-bold text-gray-900">BusinessName</div>
                    <div className="flex space-x-6">
                      <div className="text-gray-600 hover:text-teal-500 cursor-pointer transition-colors">Services</div>
                      <div className="text-gray-600 hover:text-teal-500 cursor-pointer transition-colors">About</div>
                      <div className="text-gray-600 hover:text-teal-500 cursor-pointer transition-colors">Contact</div>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center py-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Welcome to Our Business
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                      Professional services tailored to your needs with excellence and dedication.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium">Get Started</div>
                      <div className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium">Learn More</div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    {['Web Design', 'SEO', 'Marketing'].map((service, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-6 h-6 bg-teal-500 rounded"></div>
                        </div>
                        <div className="font-medium text-gray-900">{service}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements (RunwayML style) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-2xl transform rotate-12 opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-50 rounded-3xl transform -rotate-6 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}