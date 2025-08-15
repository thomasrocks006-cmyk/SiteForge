import React, { FC, useCallback, useState } from 'react'
import { TopBar } from '../components/TopBar'
import { TabBar } from '../components/TabBar'
import { teams } from '../data/seed'
import { MessageBubble } from '../components/MessageBubble'
import { useSimulatedTraffic } from '../hooks/useSimulatedTraffic'

export const TeamsIndex: FC = () => (
  <div className="pb-20">
    <TopBar title="Teams"/>
    <ul>
      {teams.map(t => (
        <li key={t.id} className="px-4 py-3 border-b border-gray-100">
          <div className="font-semibold" data-testid={`text-team-${t.id}`}>{t.name}</div>
          <div className="text-subtle text-sm">{t.org} · {t.channels.length} channels</div>
          <div className="mt-2 flex gap-2 overflow-x-auto">
            {t.channels.map(c => (
              <a key={c.id} href={`/teams/${t.id}/${c.id}`} data-testid={`link-channel-${c.id}`} className="px-3 py-2 rounded-full bg-gray-100 text-sm whitespace-nowrap">#{c.name}{c.unread?` · ${c.unread}`:''}</a>
            ))}
          </div>
        </li>
      ))}
    </ul>
    <TabBar/>
  </div>
)

export const ChannelView: FC<{ teamId?: string; channelId?: string }> = ({ teamId, channelId }) => {
  const team = teams.find(t => t.id === teamId)!
  const channel = team.channels.find(c => c.id === channelId)!
  const [msgs, setMsgs] = useState(channel.messages)

  const push = useCallback((where: string, payload: any)=>{
    if(where === `ch:${teamId}:${channelId}`) setMsgs(m => [...m, payload])
  },[teamId, channelId])
  useSimulatedTraffic(push)

  return (
    <div className="pb-24">
      <TopBar title={`${team.name} · #${channel.name}`}/>
      <div className="pt-2">
        {msgs.map(m => (
          <MessageBubble key={m.id} author={m.author} text={m.text} timestamp={m.timestamp}/>
        ))}
      </div>
      <TabBar/>
    </div>
  )
}