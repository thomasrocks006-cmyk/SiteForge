import { Contact, Team, Message } from '../types'

export const currentUser = {
  id: 'u-thomas',
  name: 'Thomas Francis',
  role: 'Analyst',
  location: 'Melbourne, AU'
}

export const contacts: Contact[] = [
  { id: 'c-sarah', name: 'Sarah Li', role: 'PM', location: 'Sydney', status: 'busy', lastMessagePreview: 'Let us cap TE at 80–100bps.' },
  { id: 'c-ryan', name: 'Ryan Patel', role: 'Risk', location: 'Melbourne', status: 'available', lastMessagePreview: 'Breach cleared. Client notified.' },
  { id: 'c-emma', name: 'Emma Clarke', role: 'ClientService', location: 'Melbourne', status: 'busy', lastMessagePreview: 'Board pack export queued.' },
  { id: 'c-james', name: 'James O Neill', role: 'Sales', location: 'Sydney', status: 'dnd', lastMessagePreview: 'Sunsuper workshop invite sent.' },
  { id: 'c-nina', name: 'Nina Wong', role: 'Compliance', location: 'Melbourne', status: 'available', lastMessagePreview: 'RG97 note on stamp duty.' }
]

const ts = (minAgo: number) => new Date(Date.now() - minAgo*60*1000).toISOString()
const ch = (id: string, name: string, messages: Message[], unread = 0) => ({ id, name, messages, unread })

export const teams: Team[] = [
  {
    id: 't-aus-eq-core',
    name: 'Australian Equity Core',
    org: 'JPMAM AU',
    channels: [
      ch('gen', 'General', [
        { id: 'm1', author: 'Sarah Li', authorRole: 'PM', timestamp: ts(9), text: 'Reminder: keep **TE** within 100bps for YFYS sensitivity.' },
        { id: 'm2', author: 'Thomas Francis', timestamp: ts(7), text: 'Uploading August factsheet draft shortly.' },
        { id: 'm3', author: 'Ryan Patel', authorRole: 'Risk', timestamp: ts(6), text: 'Latest ex-ante **VaR**: 2.1%. Within limits.' }
      ], 3),
      ch('mandates', 'Mandates', [
        { id: 'm4', author: 'Emma Clarke', authorRole: 'ClientService', timestamp: ts(30), text: 'QBE mandate fee table updated (RG97 stamp duty field added).'},
        { id: 'm5', author: 'Thomas Francis', timestamp: ts(25), text: 'Confirmed **benchmark**: S&P/ASX 200 TR. Added to mandate object.'}
      ]),
      ch('breaches', 'Breaches & Approvals', [
        { id: 'm6', author: 'Ryan Patel', authorRole: 'Risk', timestamp: ts(55), text: 'Post-trade issuer limit breach in **Financials**. Proposal: trim NAB by 35bps. Approvals?' },
        { id: 'm7', author: 'Nina Wong', authorRole: 'Compliance', timestamp: ts(50), text: 'Client notice template prepared. Need timestamps on remediation actions.' }
      ])
    ]
  },
  {
    id: 't-liquidity',
    name: 'Global Liquidity – AUD',
    org: 'JPMAM AU',
    channels: [
      ch('general', 'General', [
        { id: 'm8', author: 'James O Neill', authorRole: 'Sales', timestamp: ts(120), text: 'Corporate treasurer demo at **101 Collins St** 3:30pm. Thomas, show WAM/WAL tile.' },
        { id: 'm9', author: 'Thomas Francis', timestamp: ts(115), text: 'Built a same-day cutoff banner; holdings CSV export wired.' }
      ])
    ]
  },
  {
    id: 't-alts',
    name: 'Private Markets AU',
    org: 'JPMAM AU',
    channels: [
      ch('capital-calls', 'Capital Calls', [
        { id: 'm10', author: 'Emma Clarke', authorRole: 'ClientService', timestamp: ts(185), text: 'New capital call: AU$6.2m due **T+10**. Cash ladder updated.' },
        { id: 'm11', author: 'Thomas Francis', timestamp: ts(180), text: 'Commitments view now shows funded % and NAV lag badges.' }
      ])
    ]
  }
]

export const directChats = [
  {
    id: 'dm-sarah',
    name: 'Sarah Li',
    messages: [
      { id: 'dm1', author: 'Sarah Li', authorRole: 'PM', timestamp: ts(3), text: 'Can you sanity-check attribution for CSL? Selection effect seems high.' },
      { id: 'dm2', author: 'Thomas Francis', timestamp: ts(2), text: 'On it. Brinson calc shows 42bps from selection. Will post chart.' }
    ]
  },
  {
    id: 'dm-nina',
    name: 'Nina Wong',
    messages: [
      { id: 'dm3', author: 'Nina Wong', authorRole: 'Compliance', timestamp: ts(12), text: 'Please keep the **general advice** footer in the new portal.' },
      { id: 'dm4', author: 'Thomas Francis', timestamp: ts(9), text: 'Added per FSG. Footer shows AFSL 376919 & address.' }
    ]
  }
]

export const activity = [
  { id: 'a1', text: 'You were mentioned by Ryan in Breaches & Approvals', timestamp: ts(5) },
  { id: 'a2', text: 'Board Pack export finished for QBE Mandate', timestamp: ts(16) },
  { id: 'a3', text: 'New invite: Super fund YFYS workshop', timestamp: ts(45) }
]

export const randomSnippets = [
  'Uploading consultant template now.',
  'TE back to 78bps after trades.',
  'Stamp duty disclosure toggled → RG97 note.',
  'Liquidity ladder: T+0 65%, T+2 30%, >T+7 5%.',
  'YFYS benchmark sheet refreshed.',
  'Client notice sent and archived.'
]