import React, { FC } from 'react'
import { Search, MoreVertical } from 'lucide-react'

export const TopBar: FC<{ title: string }>= ({ title }) => (
  <div className="sticky top-0 z-30 bg-surface/95 backdrop-blur border-b border-gray-200">
    <div className="px-4 py-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl2 bg-primary/20 grid place-items-center text-primary font-bold">WT</div>
      <div className="text-lg font-semibold flex-1">{title}</div>
      <button data-testid="button-search" aria-label="search" className="p-2"><Search size={18}/></button>
      <button data-testid="button-more" aria-label="more" className="p-2"><MoreVertical size={18}/></button>
    </div>
  </div>
)