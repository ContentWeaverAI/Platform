export default function Demo() {
  const examples = [
    {
      before: "Basic consulting services page",
      after: "Professional business strategy services with clear pricing",
      action: "Update service descriptions and add pricing"
    },
    {
      before: "Outdated team member bios", 
      after: "Engaging team profiles with recent achievements",
      action: "Refresh team page with current information"
    },
    {
      before: "Static FAQ section",
      after: "Comprehensive help center with AI-powered search",
      action: "Expand FAQ based on common customer questions"
    }
  ]

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real examples of how AI can transform your website content
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Example {index + 1}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Before:</h4>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">
                    "{example.before}"
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">AI Command:</h4>
                  <p className="text-blue-600 bg-blue-50 p-3 rounded-lg text-sm italic">
                    "{example.action}"
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">After:</h4>
                  <p className="text-gray-700 bg-green-50 p-3 rounded-lg text-sm">
                    "{example.after}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see a live demo with your own website?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Request Personal Demo
          </button>
        </div>
      </div>
    </section>
  )
}