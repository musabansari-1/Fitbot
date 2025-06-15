import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Dumbbell } from 'lucide-react';
import Message from './Message';
import MessageInput from './MessageInput';
import TypingIndicator from './TypingIndicator';
import { findResponse } from '../data/responses';
import { Message as MessageType, ChatState } from '../types/chat';

export default function Chat() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: '1',
        text: "Hey there, fitness warrior! 👋 I'm FitBot, your personal gym assistant. I'm here to help you with workouts, nutrition, form tips, and anything fitness-related. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
        emoji: '🤖'
      }
    ],
    isTyping: false
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages, chatState.isTyping]);

  const handleSendMessage = async (text: string) => {
    const userMessage: MessageType = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true
    }));

    // Simulate bot thinking time
    setTimeout(() => {
      const { response, emoji } = findResponse(text);
      const botMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
        emoji
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isTyping: false
      }));
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  return (
    <div className="flex flex-col h-[100dvh] max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">FitBot</h1>
            <p className="text-blue-100 text-sm">Your Personal Fitness Assistant</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-blue-200" />
            <span className="text-sm text-blue-100">Always Ready to Help</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {chatState.messages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            isLatest={index === chatState.messages.length - 1}
          />
        ))}
        {chatState.isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <MessageInput
        onSendMessage={handleSendMessage}
        disabled={chatState.isTyping}
      />
    </div>
  );
}