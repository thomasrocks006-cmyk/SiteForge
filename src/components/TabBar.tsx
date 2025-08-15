import React, { FC } from 'react'
import { MessageSquareText, Users, Bell, Calendar, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export const TabBar: FC = () => (
  <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-gray-200">
    <div className="grid grid-cols-5 text-xs">
      <Tab to="/chat" icon={<MessageSquareText size={20}/> } label="Chat"/>
      <Tab to="/teams" icon={<Users size={20}/> } label="Teams"/>
      <Tab to="/activity" icon={<Bell size={20}/> } label="Activity"/>
      <Tab to="/calendar" icon={<Calendar size={20}/> } label="Calendar"/>
      <Tab to="/calls" icon={<Phone size={20}/> } label="Calls"/>
    </div>
  </nav>
)

const Tab: FC<{to:string, icon: React.ReactElement, label:string}> = ({to, icon, label}) => (
  <NavLink to={to} data-testid={`link-${label.toLowerCase()}`} className={({isActive})=>`flex flex-col items-center py-2 ${isActive? 'text-ink':'text-subtle'}`}>
    {icon}
    <span className="mt-1">{label}</span>
  </NavLink>
)