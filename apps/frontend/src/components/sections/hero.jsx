'use client';
import { useState, useEffect } from 'react';

const fallbackHeroData = {
  headline: "What do you want to create?",
  subheadline: "Start generating with a simple conversation.",
  primaryButtonText: "Start Free Trial",
  secondaryButtonText: "Watch Demo",
  exampleMessages: [
    "Make an ad photo for my sneaker brand",
    "Generate a dramatic aerial video shot of NYC", 
    "Design a Scandinavian style living room"
  ]
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
              secondaryButtonText: data[0].secondaryButtonText,
              exampleMessages: [
                data[0].demoUserMessage,
                data[0].demo2UserMessage,
                "Design a professional services page for my business"
              ]
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
    
    // Open chat widget with the message
    const chatWidget = document.querySelector('[data-chat-widget]');
    if (chatWidget) {
      const event = new CustomEvent('openChatWithMessage', { 
        detail: { message: inputMessage } 
      });
      window.dispatchEvent(event);
    }
    
    setInputMessage('');
  };

  const handleExampleClick = (message) => {
    setInputMessage(message);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-teal-900 px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        
        {/* Headline - White Text */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          {heroData.headline}
        </h1>
        
        {/* Subheadline - Light Gray Text */}
        <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-2xl mx-auto">
          {heroData.subheadline}
        </p>

        {/* Original Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {heroData.primaryButtonText}
          </button>
          
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-teal-300 hover:border-teal-200 text-teal-100 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200"
          >
            {heroData.secondaryButtonText}
          </button>
        </div>

        {/* Chat Input - RunwayML Style */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Describe your idea"
                className="w-full bg-white border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-xl transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Example Messages */}
          <div className="space-y-3 mb-12">
            {heroData.exampleMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(message)}
                className="block w-full text-left bg-teal-800 hover:bg-teal-700 border border-teal-700 rounded-2xl px-6 py-4 text-teal-100 hover:text-white transition-colors text-lg shadow-sm hover:shadow-md"
              >
                {message}
              </button>
            ))}
          </div>

          {/* Legal Text - Light Gray */}
          <p className="text-sm text-teal-300 max-w-md mx-auto">
            By sending a message, you agree to our Terms of Use and acknowledge that you have read and understand our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}