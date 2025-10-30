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
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          {heroData.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {heroData.subheadline}
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Describe your idea"
                className="w-full bg-white border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            {heroData.primaryButtonText}
          </button>
          
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-900 hover:bg-gray-50 text-gray-900 font-medium py-3 px-8 rounded transition-colors"
          >
            {heroData.secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}