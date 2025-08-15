import React, { FC } from 'react'
import { TopBar } from '../components/TopBar'
import { TabBar } from '../components/TabBar'

const recent = [
  { id: 'r1', name: 'Sarah Li', at: '09:42', type: 'video' },
  { id: 'r2', name: 'James O Neill', at: 'Yesterday', type: 'audio' }
]

export const CallsPage: FC = () => (
  <div className="pb-20">
    <TopBar title="Calls"/>
    <ul>
      {recent.map(r => (
        <li key={r.id} className="px-4 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="font-medium" data-testid={`text-call-name-${r.id}`}>{r.name}</div>
            <div className="text-subtle text-sm" data-testid={`text-call-time-${r.id}`}>{r.at}</div>
          </div>
          <div className="text-subtle text-xs uppercase" data-testid={`text-call-type-${r.id}`}>{r.type}</div>
        </li>
      ))}
    </ul>
    <TabBar/>
  </div>
)