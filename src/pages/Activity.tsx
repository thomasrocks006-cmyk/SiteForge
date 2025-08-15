import React, { FC } from 'react'
import { TopBar } from '../components/TopBar'
import { TabBar } from '../components/TabBar'
import { activity } from '../data/seed'

export const ActivityPage: FC = () => (
  <div className="pb-20">
    <TopBar title="Activity"/>
    <ul>
      {activity.map(a => (
        <li key={a.id} className="px-4 py-3 border-b border-gray-100">
          <div className="text-sm" data-testid={`text-activity-${a.id}`}>{a.text}</div>
          <div className="text-subtle text-xs" data-testid={`text-timestamp-${a.id}`}>{new Date(a.timestamp).toLocaleString()}</div>
        </li>
      ))}
    </ul>
    <TabBar/>
  </div>
)