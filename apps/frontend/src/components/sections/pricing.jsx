export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "€49",
      period: "month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "1 website",
        "Unlimited content updates", 
        "AI chat support",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "€99", 
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "3 websites",
        "Unlimited content updates",
        "Priority AI support", 
        "Advanced analytics",
        "Phone & email support",
        "Custom workflows"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited websites",
        "Unlimited content updates",
        "Dedicated AI assistant",
        "Custom integrations",
        "24/7 priority support",
        "SLA guarantee",
        "Training & onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start for free. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 border-2 ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg relative' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600">/{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  )
}