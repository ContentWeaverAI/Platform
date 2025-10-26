export default function Features() {
  const features = [
    {
      title: "Service Pages",
      description: "Update pricing, descriptions, and offerings instantly",
      icon: "🛠️"
    },
    {
      title: "Blog Content", 
      description: "Create and optimize blog posts through conversation",
      icon: "📝"
    },
    {
      title: "Landing Pages",
      description: "A/B test headlines and copy with AI suggestions",
      icon: "🎯"
    },
    {
      title: "Product Listings",
      description: "Update product details, prices, and features",
      icon: "📦"
    },
    {
      title: "Team Pages",
      description: "Keep team information current and engaging",
      icon: "👥"
    },
    {
      title: "FAQ Sections",
      description: "Expand and optimize frequently asked questions",
      icon: "❓"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What You Can Update
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage every part of your website through natural conversation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to transform your content management?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}