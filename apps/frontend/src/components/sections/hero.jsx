'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch hero content from Strapi
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setHeroData(data[0]);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
    fetchHeroData();
  }, []);

  // Send message to AI
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          isHeroChat: true 
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!heroData) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heroData.aboveTheFoldHeadline}
              <span className="block text-teal-500">{heroData.aboveTheFoldAccent}</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {heroData.aboveTheFoldDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors shadow-lg"
              >
                {heroData.primaryButtonText}
              </button>
              {heroData.secondaryButtonText && (
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  {heroData.secondaryButtonText}
                </button>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div>No credit card required</div>
              <div>•</div>
              <div>Setup in 5 minutes</div>
              <div>•</div>
              <div>Free trial</div>
            </div>
          </div>

          {/* Right Column - Integrated Chat */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-teal-500 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                <span className="text-sm font-medium text-white ml-2">Ask me about Mokosh AI</span>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="p-6 space-y-4 min-h-[400px] max-h-[400px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <div className="text-teal-500 text-lg font-semibold mb-2">Hi! I'm Mokosh AI</div>
                  <p className="text-sm">Ask me anything about our AI content management platform</p>
                  <div className="mt-4 space-y-2 text-xs text-gray-400">
                    <div>"How does Mokosh AI work?"</div>
                    <div>"What kind of content can I update?"</div>
                    <div>"How much does it cost?"</div>
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user' 
                        ? 'bg-teal-500 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))
              )}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={sendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about Mokosh AI..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}