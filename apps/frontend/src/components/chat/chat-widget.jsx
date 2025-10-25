import React, { useState } from 'react';
import Button from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        variant="primary"
        size="large"
        className="fixed bottom-8 right-8 rounded-full w-14 h-14 shadow-lg z-40"
        onClick={() => setIsOpen(true)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          <Card className="w-full max-w-md h-96 relative z-10">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">ContentWeaver AI Assistant</h3>
              <Button variant="ghost" size="small" onClick={() => setIsOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </Button>
            </CardHeader>
            
            <CardContent className="p-0 h-full flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                      <p className="text-gray-700">Hello! I'm your ContentWeaver AI assistant. How can I help you update your website today?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me to update your website..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button variant="primary" size="medium">
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;