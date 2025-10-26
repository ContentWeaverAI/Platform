export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Chat with AI",
      description: "Describe what you want to update in plain English",
      icon: "💬"
    },
    {
      number: "2", 
      title: "Review Changes",
      description: "Preview the AI-suggested updates before publishing",
      icon: "👀"
    },
    {
      number: "3",
      title: "Publish Instantly",
      description: "One-click deployment to make changes live",
      icon: "🚀"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How ContentWeaver Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Update your website content in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number & Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            See Live Demo
          </button>
        </div>
      </div>
    </section>
  )
}