'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [websiteContent, setWebsiteContent] = useState('');

  // Fetch hero content from Strapi
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setHeroData(data[0]);
          // Set initial website content
          const demos = [
            { before: data[0].demoBeforeText, after: data[0].demoAfterText },
            { before: data[0].demo2BeforeText, after: data[0].demo2AfterText }
          ];
          setWebsiteContent(demos[0].before);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
    fetchHeroData();
  }, []);

  // Simple animation loop
  useEffect(() => {
    if (!heroData) return;

    const demos = [
      {
        user: heroData.demoUserMessage,
        ai: heroData.demoAIResponse,
        before: heroData.demoBeforeText,
        after: heroData.demoAfterText
      },
      {
        user: heroData.demo2UserMessage,
        ai: heroData.demo2AIResponse,
        before: heroData.demo2BeforeText,
        after: heroData.demo2AfterText
      }
    ];

    const demo = demos[currentDemo];
    const steps = [
      // Step 0: Show user message
      { type: 'user', text: demo.user, duration: 2000 },
      // Step 1: Show AI response and immediately update website
      { type: 'ai', text: demo.ai, duration: 3000 }, // Longer duration to keep AI response visible
      // Step 2: Keep showing updated website
      { type: 'website', text: demo.after, duration: 4000, updated: true }
    ];

    const step = steps[currentStep];
    setDisplayedText('');
    
    // Handle website updates
    if (currentStep === 1) {
      // When AI starts responding, update website immediately after typing finishes
      setTimeout(() => {
        setWebsiteContent(demo.after);
      }, step.text.length * 50 + 500); // After typing + small delay
    } else if (currentStep === 0) {
      // Reset to before text when new demo starts
      setWebsiteContent(demo.before);
    }

    // Typewriter effect for chat messages
    if (step.type === 'user' || step.type === 'ai') {
      let i = 0;
      const timer = setInterval(() => {
        if (i < step.text.length) {
          setDisplayedText(step.text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
            if (currentStep === steps.length - 1) {
              setCurrentDemo((prev) => (prev + 1) % demos.length);
            }
          }, step.duration);
        }
      }, 50);
      return () => clearInterval(timer);
    } else {
      // Website step - just wait and move to next demo
      setDisplayedText(''); // Clear chat during website step
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        if (currentStep === steps.length - 1) {
          setCurrentDemo((prev) => (prev + 1) % demos.length);
        }
      }, step.duration);
    }
  }, [currentStep, currentDemo, heroData]);

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

  const demos = [
    {
      user: heroData.demoUserMessage,
      ai: heroData.demoAIResponse, 
      before: heroData.demoBeforeText,
      after: heroData.demoAfterText
    },
    {
      user: heroData.demo2UserMessage,
      ai: heroData.demo2AIResponse,
      before: heroData.demo2BeforeText,
      after: heroData.demo2AfterText
    }
  ];

  const demo = demos[currentDemo];
  const steps = [
    { type: 'user', text: demo.user, duration: 2000 },
    { type: 'ai', text: demo.ai, duration: 3000 },
    { type: 'website', text: demo.after, duration: 4000, updated: true }
  ];

  const step = steps[currentStep];
  const isWebsiteStep = step.type === 'website';
  const isUpdated = currentStep >= 1; // Website is updated after AI responds
  const isUserMessage = step.type === 'user';
  const isAIThinking = step.type === 'ai' && displayedText.length < step.text.length;

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
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600 ml-2">Mokosh AI</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4 min-h-[200px]">
                {/* Show chat messages only during chat steps */}
                {!isWebsiteStep && displayedText && (
                  <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      isUserMessage 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {isAIThinking && (
                        <div className="flex space-x-1 mb-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      )}
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
                    isUpdated ? 'text-green-600 text-lg' : 'text-gray-700 text-base'
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