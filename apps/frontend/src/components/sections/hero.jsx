'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [websiteContent, setWebsiteContent] = useState('');

  // Fetch hero content from Strapi
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        console.log('Fetching from:', `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        
        // The API returns an array directly, not {data: [...]}
        if (Array.isArray(data) && data.length > 0) {
          setHeroData(data[0]);
          // Initialize website with "before" content
          setWebsiteContent(data[0].demoBeforeText);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  // Animation sequence
  useEffect(() => {
    if (!heroData) return;

    const steps = [
      { text: heroData.demoUserMessage, type: 'user', delay: 1000 },
      { text: heroData.demoAIResponse, type: 'ai', delay: 2000 },
      { text: heroData.demoBeforeText, type: 'website-before', delay: 2000 },
      { text: heroData.demoAfterText, type: 'website-after', delay: 4000 }
    ];

    const currentStep = steps[animationStep];
    if (!currentStep) {
      // Reset animation after completion
      setTimeout(() => setAnimationStep(0), 2000);
      return;
    }

    // Handle website content updates separately
    if (currentStep.type === 'website-after') {
      setWebsiteContent(heroData.demoAfterText);
    } else if (currentStep.type === 'website-before') {
      setWebsiteContent(heroData.demoBeforeText);
    }

    // Typewriter effect only for chat messages
    if (currentStep.type === 'user' || currentStep.type === 'ai') {
      let currentIndex = 0;
      setDisplayedText('');
      
      const typeInterval = setInterval(() => {
        if (currentIndex < currentStep.text.length) {
          setDisplayedText(currentStep.text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setAnimationStep(prev => prev + 1);
          }, currentStep.delay);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    } else {
      // Move to next step after delay for website steps
      setTimeout(() => {
        setAnimationStep(prev => prev + 1);
      }, currentStep.delay);
    }
  }, [animationStep, heroData]);

  if (!heroData) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="flex space-x-4">
              <div className="h-12 bg-gray-200 rounded w-32"></div>
              <div className="h-12 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heroData.aboveTheFoldHeadline}
              <span className="block text-blue-600">{heroData.aboveTheFoldAccent}</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {heroData.aboveTheFoldDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors shadow-lg">
                {heroData.primaryButtonText}
              </button>
              {heroData.secondaryButtonText && (
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg text-lg transition-colors">
                  {heroData.secondaryButtonText}
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Animation */}
          <div className="relative">
            {/* Chat Interface Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Chat Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600 ml-2">Mokosh AI</span>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[200px]">
                {animationStep >= 0 && displayedText && (
                  <div className={`flex ${animationStep === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      animationStep === 0 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        {animationStep === 1 && (
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                        )}
                      </div>
                      {displayedText}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Website Preview */}
            <div className="mt-8 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600 ml-2">Website Preview</span>
                </div>
              </div>
              <div className="p-4">
                {/* Website Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-bold text-gray-800">BusinessName</div>
                  <div className="flex space-x-4">
                    <div className="w-16 h-2 bg-gray-300 rounded"></div>
                    <div className="w-16 h-2 bg-gray-300 rounded"></div>
                    <div className="w-16 h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className={`text-center font-semibold mb-2 transition-all duration-500 ${
                    animationStep >= 3 ? 'text-green-600 text-lg' : 'text-gray-700 text-base'
                  }`}>
                    {websiteContent}
                  </div>
                  <div className="flex justify-center space-x-2 mt-2">
                    <div className="w-20 h-2 bg-gray-300 rounded"></div>
                    <div className="w-20 h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Services Section */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="p-2 bg-gray-50 rounded text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-1"></div>
                    <div className="w-12 h-2 bg-gray-300 rounded mx-auto"></div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-1"></div>
                    <div className="w-12 h-2 bg-gray-300 rounded mx-auto"></div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-1"></div>
                    <div className="w-12 h-2 bg-gray-300 rounded mx-auto"></div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="w-20 h-2 bg-gray-300 rounded"></div>
                  <div className="w-20 h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}