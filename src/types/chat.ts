export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  emoji?: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}