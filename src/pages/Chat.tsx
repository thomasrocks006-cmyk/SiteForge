import React, { FC, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { TabBar } from '../components/TabBar'
import { ChatList } from '../components/ChatList'
import { MessageBubble } from '../components/MessageBubble'
import { directChats } from '../data/seed'
import { useSimulatedTraffic } from '../hooks/useSimulatedTraffic'

export const ChatIndex: FC = () => (
  <div className="pb-20">
    <TopBar title="Chat"/>
    <ChatList/>
    <TabBar/>
  </div>
)

export const DirectChat: FC = () => {
  const { dmId } = useParams()
  const dm = directChats.find(d => d.id === dmId)!
  const [msgs, setMsgs] = useState(dm.messages)

  const push = useCallback((where: string, payload: any)=>{
    if(where === `dm:${dmId}`) setMsgs(m => [...m, payload])
  },[dmId])
  useSimulatedTraffic(push)

  return (
    <div className="pb-24">
      <TopBar title={dm.name}/>
      <div className="pt-2">
        {msgs.map(m => <MessageBubble key={m.id} mine={m.author==='Thomas Francis'} author={m.author} text={m.text} timestamp={m.timestamp}/>) }
      </div>
      <Composer/>
      <TabBar/>
    </div>
  )
}

const Composer: FC = () => (
  <div className="fixed bottom-12 inset-x-0 p-3">
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
      <input data-testid="input-message" className="flex-1 bg-transparent outline-none px-3 text-sm" placeholder="Message" />
      <button data-testid="button-send" className="bg-primary text-white px-4 py-2 rounded-full">Send</button>
    </div>
  </div>
)