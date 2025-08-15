import React, { FC } from 'react'
import { contacts, directChats } from '../data/seed'
import { Link } from 'react-router-dom'

export const ChatList: FC = () => (
  <div className="pb-24">
    <div className="p-4 text-subtle uppercase text-xs">Direct messages</div>
    <ul>
      {directChats.map(dm => (
        <li key={dm.id} className="px-4 py-3 border-b border-gray-100">
          <Link to={`/chat/dm/${dm.id}`} data-testid={`link-dm-${dm.id}`} className="flex items-center gap-3">
            <Avatar label={dm.name}/>
            <div className="flex-1">
              <div className="font-medium" data-testid={`text-name-${dm.id}`}>{dm.name}</div>
              <div className="text-subtle text-sm line-clamp-1" data-testid={`text-preview-${dm.id}`}>{dm.messages[dm.messages.length-1]?.text}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <div className="p-4 text-subtle uppercase text-xs">People</div>
    <ul>
      {contacts.map(c => (
        <li key={c.id} className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
          <Avatar label={c.name}/>
          <div className="flex-1">
            <div className="font-medium" data-testid={`text-contact-${c.id}`}>{c.name} <span className="text-subtle text-xs">· {c.role}</span></div>
            <div className="text-subtle text-sm line-clamp-1">{c.lastMessagePreview}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

const Avatar: FC<{label:string}> = ({ label }) => (
  <div className="w-9 h-9 rounded-full bg-primary/30 grid place-items-center text-primary text-sm font-semibold">
    {label.split(' ').map(x=>x[0]).join('').slice(0,2)}
  </div>
)