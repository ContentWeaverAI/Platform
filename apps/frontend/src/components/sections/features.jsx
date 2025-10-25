import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '💬',
      title: 'Chat-Based Updates',
      description: 'Simply tell our AI what changes you want. No forms, no complex interfaces.'
    },
    {
      icon: '🚀',
      title: 'Instant Deployment',
      description: 'Changes go live immediately. Preview before publishing with one click.'
    },
    {
      icon: '🛡️',
      title: 'Safe & Controlled',
      description: 'AI suggests changes, you approve them. Full control over your content.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, powerful content management through AI conversation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;