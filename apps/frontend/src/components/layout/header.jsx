'use client'
import { useState } from 'react'
import LoginModal from '../auth/login-modal'

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // TODO: Replace with real auth state

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleGetStarted = () => {
    if (isLoggedIn) {
      window.location.href = '/account'
    } else {
      setIsAuthModalOpen(true)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">ContentWeaver</a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Examples
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </button>
            </nav>
            
            {/* CTA Buttons - Dynamic based on auth state */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                // Logged in state
                <button 
                  onClick={() => window.location.href = '/account'}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Account
                </button>
              ) : (
                // Logged out state
                <>
                  <button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Single Auth Modal for both login and registration */}
      <LoginModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
}