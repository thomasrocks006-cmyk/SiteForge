export type Role = 'PM' | 'Analyst' | 'Sales' | 'ClientService' | 'Risk' | 'Compliance' | 'Trader' | 'Tech'

export interface Contact {
  id: string
  name: string
  role: Role
  location: string
  status: 'available' | 'busy' | 'dnd' | 'offline'
  lastMessagePreview?: string
}

export interface Team {
  id: string
  name: string
  org: string
  channels: Channel[]
}

export interface Channel {
  id: string
  name: string
  unread?: number
  messages: Message[]
}

export interface Message {
  id: string
  author: string
  authorRole?: Role
  timestamp: string
  text: string
  attachments?: { type: 'file' | 'link'; title: string; url: string }[]
  mentions?: string[]
}