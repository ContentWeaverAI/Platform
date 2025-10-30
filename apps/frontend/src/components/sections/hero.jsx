'use client';
import { useState, useEffect } from 'react';

const fallbackHeroData = {
  headline: "What do you want to create?",
  subheadline: "Start generating with a simple conversation.",
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
      // Trigger chat widget open and send message
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
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          {heroData.headline}
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {heroData.subheadline}
        </p>

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
                className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-700 hover:text-gray-900 transition-colors text-lg shadow-sm hover:shadow-md"
              >
                {message}
              </button>
            ))}
          </div>

          {/* Legal Text */}
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            By sending a message, you agree to our Terms of Use and acknowledge that you have read and understand our Privacy Policy.
          </p>
        </div>

        {/* Bottom Links - RunwayML Style */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <button className="hover:text-teal-500 transition-colors">New</button>
          <button className="hover:text-teal-500 transition-colors">Edit video with chat. Learn more.</button>
          <button className="hover:text-teal-500 transition-colors">Make an ad photo for my sneaker brand</button>
          <button className="hover:text-teal-500 transition-colors">Generate a dramatic aerial video shot of NYC</button>
          <button className="hover:text-teal-500 transition-colors">Design a Scandinavian style living room</button>
        </div>
      </div>
    </section>
  );
}