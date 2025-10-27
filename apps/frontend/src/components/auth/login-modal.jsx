'use client'
import { useState } from 'react'

export default function LoginModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false)
  const [currentView, setCurrentView] = useState('login') // 'login' or 'register'
  const [hasSwitchedViews, setHasSwitchedViews] = useState(false) // Track if user has switched
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptPrivacy: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    if (currentView === 'register') {
      // Registration validation
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match')
        setIsLoading(false)
        return
      }
      if (!formData.acceptPrivacy) {
        alert('Please accept the privacy policy to continue')
        setIsLoading(false)
        return
      }
      
      console.log('Registering:', { email: formData.email })
      // TODO: Connect to Strapi registration API
    } else {
      // Login
      console.log('Logging in:', { email: formData.email })
      // TODO: Connect to Strapi login API
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      if (currentView === 'register') {
        // Show success message for registration
        alert('Registration successful! Please check your email to verify your account.')
        setCurrentView('login')
        setFormData({ email: '', password: '', confirmPassword: '', acceptPrivacy: false })
        setHasSwitchedViews(false) // Reset when registration completes
      } else {
        // Login success - redirect to account
        onClose()
        window.location.href = '/account'
      }
    }, 1500)
  }

  const switchView = (view) => {
    setCurrentView(view)
    setHasSwitchedViews(true) // Mark that user has switched views
    setFormData({ email: '', password: '', confirmPassword: '', acceptPrivacy: false })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 text-center">
            {currentView === 'login' ? 'Sign In to ContentWeaver' : 'Create Your Account'}
          </h2>
          <p className="text-gray-600 text-sm text-center mt-1">
            {currentView === 'login' 
              ? 'Access your business account' 
              : 'Start managing your website content with AI'
            }
          </p>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Business Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@company.com"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              minLength="8"
            />
          </div>

          {/* Confirm Password (Registration only) */}
          {currentView === 'register' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                minLength="8"
              />
            </div>
          )}

          {/* Privacy Policy Checkbox (Registration only) */}
          {currentView === 'register' && (
            <div className="flex items-start space-x-3">
              <input
                id="privacy"
                type="checkbox"
                required
                checked={formData.acceptPrivacy}
                onChange={(e) => setFormData({...formData, acceptPrivacy: e.target.checked})}
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I accept the{' '}
                <a href="/privacy" target="_blank" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </a>{' '}
                and agree to the processing of my data according to GDPR/DSGVO
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading 
              ? (currentView === 'login' ? 'Signing in...' : 'Creating account...')
              : (currentView === 'login' ? 'Sign In' : 'Create Account')
            }
          </button>

          {/* Switch View - Only show if user hasn't switched yet */}
          {!hasSwitchedViews && (
            <div className="text-center">
              {currentView === 'login' ? (
                <button
                  type="button"
                  onClick={() => switchView('register')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Don't have an account? Sign up
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => switchView('login')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Already have an account? Sign in
                </button>
              )}
            </div>
          )}

          {/* Datenschutz Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Your data is protected according to German Datenschutz (GDPR/DSGVO) regulations
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}