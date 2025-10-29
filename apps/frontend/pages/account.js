'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function AccountPage() {
  const [user, setUser] = useState({
    name: 'John Business',
    email: 'john@business.com',
    company: 'Business GmbH',
    website: 'https://business.com'
  })

  return (
    <>
      <Head>
        <title>Account - MokoshAI</title>
      </Head>

      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-4xl mx-auto py-8 px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Account Overview</h1>
            <p className="text-gray-600 mt-2">Manage your MokoshAI account and settings</p>
          </div>

          {/* Account Info Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <p className="text-gray-900">{user.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <p className="text-gray-900">{user.company}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <p className="text-gray-900">{user.website}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => window.location.href = '/chat'}
                className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Open Chat
              </button>
              <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center">
                Account Settings
              </button>
              <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center">
                Billing
              </button>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              More account features coming soon. This is your basic account overview.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}