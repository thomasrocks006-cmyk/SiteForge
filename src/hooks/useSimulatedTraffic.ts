import { useEffect } from 'react'
import { teams, directChats, randomSnippets } from '../data/seed'

export function useSimulatedTraffic(onPush: (where: string, payload: any) => void) {
  useEffect(() => {
    const iv = setInterval(() => {
      const isDM = Math.random() < 0.4
      if (isDM) {
        const dm = directChats[Math.floor(Math.random() * directChats.length)]
        const text = randomSnippets[Math.floor(Math.random() * randomSnippets.length)]
        const msg = { id: crypto.randomUUID(), author: dm.name, timestamp: new Date().toISOString(), text }
        onPush(`dm:${dm.id}`, msg)
      } else {
        const team = teams[Math.floor(Math.random() * teams.length)]
        const channel = team.channels[Math.floor(Math.random() * team.channels.length)]
        const text = randomSnippets[Math.floor(Math.random() * randomSnippets.length)]
        const msg = { id: crypto.randomUUID(), author: 'System', timestamp: new Date().toISOString(), text }
        onPush(`ch:${team.id}:${channel.id}`, msg)
      }
    }, 15000)
    return () => clearInterval(iv)
  }, [onPush])
}