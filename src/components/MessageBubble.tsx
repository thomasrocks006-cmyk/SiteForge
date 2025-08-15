import React, { FC } from 'react'

export const MessageBubble: FC<{ mine?: boolean, author?: string, text: string, timestamp: string }> = ({ mine, author, text, timestamp }) => (
  <div className={`flex ${mine? 'justify-end' : 'justify-start'} px-4`}>
    <div className={`max-w-[80%] rounded-2xl px-4 py-2 mt-2 ${mine? 'bg-primary text-white' : 'bg-gray-100 text-ink'}`} data-testid={`message-${mine ? 'mine' : 'other'}`}>
      {!mine && <div className="text-xs text-subtle mb-1" data-testid="text-author">{author}</div>}
      <div className="text-sm whitespace-pre-wrap" data-testid="text-message">{text}</div>
      <div className="text-[10px] text-subtle mt-1" data-testid="text-timestamp">{new Date(timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>
    </div>
  </div>
)