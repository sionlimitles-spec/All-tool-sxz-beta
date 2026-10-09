'use client'
import Link from 'next/link'
import { useState } from 'react'

export function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/', label: 'Beranda' },
    { href: '/settings', label: 'Pengaturan' },
  ]

  return (
    <nav className="glass sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg accent-bg flex items-center justify-center font-bold text-sm">AT</div>
          <span className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight">All Tools</span>
        </Link>
        <div className="hidden sm:flex gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-700 dark:text-slate-200">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 px-6 py-4 space-y-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm text-slate-600 dark:text-slate-300 font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}