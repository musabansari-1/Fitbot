import React, { useState, useRef, useEffect } from 'react';
import { Send, Dumbbell } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const suggestions = [
  "How much protein should I eat?",
  "Best exercises for beginners?",
  "How to lose weight effectively?",
  "Proper squat form tips?",
  "Pre-workout meal ideas?",
  "How often should I rest?"
];

export default function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSendMessage(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      {showSuggestions && (
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
            <Dumbbell className="w-4 h-4" />
            Try asking about:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 hover:scale-105 transform"
                disabled={disabled}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about fitness"
              disabled={disabled}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 transform shadow-lg"
          >
            <Send className="w-[1.6rem] h-[1.6rem]" />
          </button>
        </div>
      </form>
    </div>
  );
}