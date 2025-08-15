import React, { FC } from 'react'
import { TopBar } from '../components/TopBar'
import { TabBar } from '../components/TabBar'

const events = [
  { id: 'e1', when: 'Today 11:00–11:30', title: 'Risk/Compliance sync – breach remediation' },
  { id: 'e2', when: 'Today 15:30–16:00', title: 'Corporate treasurer demo – Liquidity WAM/WAL' },
  { id: 'e3', when: 'Tomorrow 09:00–10:00', title: 'Super fund YFYS workshop' }
]

export const CalendarPage: FC = () => (
  <div className="pb-20">
    <TopBar title="Calendar"/>
    <ul>
      {events.map(ev => (
        <li key={ev.id} className="px-4 py-4 border-b border-gray-100">
          <div className="font-medium" data-testid={`text-event-title-${ev.id}`}>{ev.title}</div>
          <div className="text-subtle text-sm" data-testid={`text-event-time-${ev.id}`}>{ev.when}</div>
        </li>
      ))}
    </ul>
    <TabBar/>
  </div>
)