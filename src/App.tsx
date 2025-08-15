import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ChatIndex, DirectChat } from './pages/Chat'
import { TeamsIndex, ChannelView } from './pages/Teams'
import { ActivityPage } from './pages/Activity'
import { CalendarPage } from './pages/Calendar'
import { CallsPage } from './pages/Calls'

const App: FC = () => (
  <div className="min-h-screen bg-surface text-ink">
    <Routes>
      <Route path="/" element={<Navigate to="/chat" replace />} />
      <Route path="/chat" element={<ChatIndex />} />
      <Route path="/chat/dm/:dmId" element={<DirectChat />} />
      <Route path="/teams" element={<TeamsIndex />} />
      <Route path="/teams/:teamId/:channelId" element={<ChannelViewWrapper />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calls" element={<CallsPage />} />
    </Routes>
  </div>
)

// Wrapper component to pass URL params to ChannelView
const ChannelViewWrapper: FC = () => {
  const params = new URLSearchParams(window.location.pathname)
  const pathSegments = window.location.pathname.split('/')
  const teamId = pathSegments[2]
  const channelId = pathSegments[3]
  
  return <ChannelView teamId={teamId} channelId={channelId} />
}

export default App