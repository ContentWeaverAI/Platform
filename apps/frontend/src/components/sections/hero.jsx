export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Headline - Truework style */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Powered Content Management
          <span className="block text-blue-600">Through Conversation</span>
        </h1>
        
        {/* Subtitle - Clear value proposition */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Update your website content instantly by chatting with AI. 
          No technical skills, no complex interfaces.
        </p>
        
        {/* CTA Buttons - Truework style dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg">
            Start Free Trial
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg">
            Watch Demo
          </button>
        </div>
        
        {/* Trust Indicator - Like Truework's "Trusted by" */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-6">TRUSTED BY BUSINESSES WORLDWIDE</p>
          {/* We'll add customer logos later */}
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="h-8 bg-gray-300 rounded w-20"></div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}