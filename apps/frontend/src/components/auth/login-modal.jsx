'use client'
import { useState } from 'react'

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Connect to Strapi authentication
    console.log('Logging in:', formData)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      // In real implementation, we'd set user state here
      window.location.href = '/account' // Redirect to account page
    }, 1500)
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
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm relative z-10">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 text-center">Sign In to ContentWeaver</h2>
          <p className="text-gray-600 text-sm text-center mt-1">
            Access your business account
          </p>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
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
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}