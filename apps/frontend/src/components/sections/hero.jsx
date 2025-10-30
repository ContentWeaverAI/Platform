'use client';
import { useState, useEffect } from 'react';

const fallbackHeroData = {
  headline: "What do you want to create?",
  subheadline: "Start generating with a simple conversation.",
  primaryButtonText: "Start Free Trial", 
  secondaryButtonText: "Watch Demo"
};

export default function Hero() {
  const [heroData, setHeroData] = useState(fallbackHeroData);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setHeroData({
              headline: data[0].aboveTheFoldHeadline,
              subheadline: data[0].aboveTheFoldDescription,
              primaryButtonText: data[0].primaryButtonText,
              secondaryButtonText: data[0].secondaryButtonText
            });
          }
        }
      } catch (error) {
        console.error('Error fetching hero data');
      }
    };
    fetchHeroData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    const chatWidget = document.querySelector('[data-chat-widget]');
    if (chatWidget) {
      const event = new CustomEvent('openChatWithMessage', { 
        detail: { message: inputMessage } 
      });
      window.dispatchEvent(event);
    }
    
    setInputMessage('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          {heroData.headline}
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto">
          {heroData.subheadline}
        </p>

        {/* Chat Input - Increased height with updated placeholder */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Any questions?"
                className="w-full bg-white border border-gray-300 rounded-xl px-6 py-6 text-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-white hover:bg-gray-900 border border-gray-900 text-gray-900 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Buttons - White with modern hover effects turning black */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-900 border-2 border-gray-900 text-gray-900 hover:text-white font-medium py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
          >
            <span className="relative z-10">{heroData.primaryButtonText}</span>
            <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-900 border-2 border-gray-900 text-gray-900 hover:text-white font-medium py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
          >
            <span className="relative z-10">{heroData.secondaryButtonText}</span>
            <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}