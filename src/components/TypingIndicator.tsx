import React from 'react';

export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4 animate-slideUp">
      <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm max-w-[80%] md:max-w-[70%]">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <span className="text-sm text-gray-500">FitBot is typing...</span>
        </div>
      </div>
    </div>
  );
}