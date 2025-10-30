'use client';
import { useState, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Listen for open chat events from hero section
  useEffect(() => {
    const handleOpenChatWithMessage = (event) => {
      setIsOpen(true);
      if (event.detail.message) {
        setInputMessage(event.detail.message);
        // Auto-send after a brief delay
        setTimeout(() => {
          handleSendMessage(event.detail.message);
        }, 100);
      }
    };

    window.addEventListener('openChatWithMessage', handleOpenChatWithMessage);
    return () => window.removeEventListener('openChatWithMessage', handleOpenChatWithMessage);
  }, []);

  // Load messages from session storage
  useEffect(() => {
    const savedMessages = sessionStorage.getItem('mokoshChatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to session storage
  useEffect(() => {
    sessionStorage.setItem('mokoshChatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async (prefilledMessage = '') => {
    const messageToSend = prefilledMessage || inputMessage;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    
    if (!prefilledMessage) {
      setInputMessage('');
    }
    
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: updatedMessages
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
          data-chat-widget="true"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Chat Header */}
          <div className="bg-teal-500 px-4 py-3 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              <span className="text-sm font-medium text-white">Mokosh AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <div className="text-teal-500 text-lg font-semibold mb-2">Hi! I'm Mokosh AI</div>
                <p className="text-sm">How can I help you with your website content today?</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    message.role === 'user' 
                      ? 'bg-teal-500 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}>
                    {message.content}
                  </div>
                </div>
              ))
            )}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}