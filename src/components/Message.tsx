import React from 'react';
import { Message as MessageType } from '../types/chat';

interface MessageProps {
  message: MessageType;
  isLatest?: boolean;
}

export default function Message({ message, isLatest }: MessageProps) {
  return (
    <div
      className={`flex mb-4 ${message.isBot ? 'justify-start' : 'justify-end'} ${
        isLatest ? 'animate-slideUp' : ''
      }`}
    >
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-sm ${
          message.isBot
            ? 'bg-white text-gray-800 rounded-bl-sm'
            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
        } ${isLatest ? 'animate-pulse-once' : ''}`}
      >
        <div className="flex items-start gap-2">
          {message.emoji && (
            <span className="text-lg flex-shrink-0 mt-0.5">{message.emoji}</span>
          )}
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {message.text}
          </p>
        </div>
        <div className="flex justify-end mt-2">
          <span
            className={`text-xs ${
              message.isBot ? 'text-gray-400' : 'text-blue-100'
            }`}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>
    </div>
  );
}