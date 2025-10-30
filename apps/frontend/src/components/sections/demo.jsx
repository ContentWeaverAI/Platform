'use client';
import { useState, useEffect } from 'react';

export default function DemoSection() {
  const [heroData, setHeroData] = useState(null);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [websiteContent, setWebsiteContent] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Fetch hero content from Strapi
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setHeroData(data[0]);
          setWebsiteContent(data[0].demoBeforeText);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
    fetchHeroData();
  }, []);

  // Animation loop
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

    // Clear chat history when starting a new demo
    if (currentStep === 0) {
      setChatHistory([]);
      setWebsiteContent(demo.before);
    }

    const steps = [
      // Step 0: User types message
      { type: 'user', text: demo.user, duration: 2000 },
      // Step 1: AI responds and website updates
      { type: 'ai', text: demo.ai, duration: 3000 },
      // Step 2: Show updated website
      { type: 'website', duration: 4000 }
    ];

    const step = steps[currentStep];
    setDisplayedText('');

    if (step.type === 'user' || step.type === 'ai') {
      let i = 0;
      const timer = setInterval(() => {
        if (i < step.text.length) {
          setDisplayedText(step.text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          // Add completed message to chat history
          setChatHistory(prev => [...prev, { 
            type: step.type, 
            text: step.text,
            id: Date.now() + Math.random()
          }]);
          setDisplayedText('');

          // Update website immediately when AI finishes typing
          if (step.type === 'ai') {
            setWebsiteContent(demo.after);
          }

          setTimeout(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
            if (currentStep === steps.length - 1) {
              setCurrentDemo((prev) => (prev + 1) % demos.length);
              setCurrentStep(0);
            }
          }, step.duration);
        }
      }, 50);
      return () => clearInterval(timer);
    } else {
      // Website step - just wait and move to next demo
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        if (currentStep === steps.length - 1) {
          setCurrentDemo((prev) => (prev + 1) % demos.length);
          setCurrentStep(0);
        }
      }, step.duration);
    }
  }, [currentStep, currentDemo, heroData]);

  if (!heroData) {
    return (
      <section id="demo" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
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
    { type: 'website', duration: 4000 }
  ];

  const step = steps[currentStep];
  const isWebsiteStep = step.type === 'website';
  const isUpdated = currentStep >= 1;
  const isUserMessage = step.type === 'user';
  const isAIThinking = step.type === 'ai' && displayedText.length < step.text.length;

  return (
    <section id="demo" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Mokosh AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how simple it is to update your website content through natural conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Interactive Demo */}
          <div className="space-y-8">
            {/* Chat Interface Mockup */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600 ml-2">Mokosh AI</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4 min-h-[300px] max-h-[300px] overflow-y-auto">
                {/* Previous chat history */}
                {chatHistory.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === 'user' 
                        ? 'bg-teal-500 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {/* Current typing message */}
                {!isWebsiteStep && displayedText && (
                  <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      isUserMessage 
                        ? 'bg-teal-500 text-white rounded-br-none' 
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

            {/* Demo Controls */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <span className="text-sm font-medium text-gray-600">Demo:</span>
                <div className="flex space-x-2">
                  <button 
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      currentDemo === 0 
                        ? 'bg-teal-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      setCurrentDemo(0);
                      setCurrentStep(0);
                    }}
                  >
                    Professional Services
                  </button>
                  <button 
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      currentDemo === 1 
                        ? 'bg-teal-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      setCurrentDemo(1);
                      setCurrentStep(0);
                    }}
                  >
                    Winter Sale
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Website Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600 ml-2">Live Website Preview</span>
                </div>
              </div>
              <div className="p-6">
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
                    isUpdated ? 'text-teal-600 text-lg' : 'text-gray-700 text-base'
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

            {/* Demo Explanation */}
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <h3 className="font-semibold text-teal-800 mb-2">How It Works</h3>
              <ul className="text-sm text-teal-700 space-y-1">
                <li>• Chat with Mokosh AI in natural language</li>
                <li>• AI understands your intent and updates content</li>
                <li>• Changes appear instantly on your live website</li>
                <li>• No technical skills or coding required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}