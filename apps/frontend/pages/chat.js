'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function ChatPage() {
  const [conversations, setConversations] = useState([
    { id: 1, title: 'First Conversation', date: '2024-01-01' }
  ])
  const [currentConversation, setCurrentConversation] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your ContentWeaver AI assistant. I can help you update website content, modify services, or optimize pages. What would you like to change today?' 
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    // Add user message
    const userMessage = { role: 'user', content: input }
    setCurrentConversation(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    try {
      // Real API call to DeepSeek
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get AI response')
      }

      const aiResponse = {
        role: 'assistant',
        content: data.response
      }
      
      setCurrentConversation(prev => [...prev, aiResponse])
      
    } catch (error) {
      console.error('Chat error:', error)
      const errorResponse = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again in a moment.'
      }
      setCurrentConversation(prev => [...prev, errorResponse])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>ContentWeaver AI Chat</title>
      </Head>

      <div className="flex h-screen bg-gray-50">
        {/* Sidebar - Chat History */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <button 
              onClick={() => {
                setCurrentConversation([
                  { 
                    role: 'assistant', 
                    content: 'Hello! I\'m your ContentWeaver AI assistant. What would you like to update on your website today?' 
                  }
                ])
              }}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              New Chat
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setCurrentConversation([{ role: 'assistant', content: 'Welcome back! How can I help you today?' }])}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors mb-1"
              >
                <div className="font-medium text-gray-900 truncate">{conversation.title}</div>
                <div className="text-xs text-gray-500">{conversation.date}</div>
              </button>
            ))}
          </div>
          
          {/* Back to Home */}
          <div className="p-4 border-t border-gray-200">
            <a 
              href="/"
              className="w-full bg-gray-100 text-white py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Back to Home
            </a>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">ContentWeaver AI</h1>
            <div className="text-sm text-gray-500">Powered by DeepSeek AI</div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {currentConversation.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {message.role === 'user' ? 'You' : 'AI'}
                  </div>
                  <div className={`flex-1 rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me to update your website content..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                I can help update services, pages, blog posts, and more through your Strapi CMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}