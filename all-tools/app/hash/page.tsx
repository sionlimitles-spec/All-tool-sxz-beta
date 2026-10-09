'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

async function hash(algorithm: string, text: string) {
  const buf = new TextEncoder().encode(text)
    const h = await crypto.subtle.digest(algorithm, buf)
      return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('')
      }

      export default function HashGen() {
        const [text, setText] = useState('')
          const [results, setResults] = useState<Record<string, string>>({})

            const gen = async () => {
                setResults({
                      'SHA-1': await hash('SHA-1', text),
                            'SHA-256': await hash('SHA-256', text),
                                  'SHA-384': await hash('SHA-384', text),
                                        'SHA-512': await hash('SHA-512', text),
                                            })
                                              }

                                                return (
                                                    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                                          <div className="max-w-2xl mx-auto">
                                                                  <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Hash Generator</h1>
                                                                          <p className="text-slate-500 mb-6">Generate hash SHA untuk teks</p>
                                                                                  <Card className="card-modern border-0">
                                                                                            <CardContent className="pt-6 space-y-4">
                                                                                                        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Masukkan teks..." rows={3}
                                                                                                                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm" />
                                                                                                                                  <button onClick={gen} className="accent-bg px-6 py-3 rounded-xl font-medium w-full">Generate Hash</button>
                                                                                                                                              <div className="space-y-2">
                                                                                                                                                            {Object.entries(results).map(([k, v]) => (
                                                                                                                                                                            <div key={k} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                                                                                                                                                                                              <div className="flex justify-between items-center mb-1">
                                                                                                                                                                                                                  <span className="text-xs font-medium accent-text">{k}</span>
                                                                                                                                                                                                                                      <button onClick={() => navigator.clipboard.writeText(v)} className="text-xs text-slate-500">Salin</button>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                          <p className="font-mono text-xs break-all text-slate-700 dark:text-slate-200">{v}</p>
                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                              </CardContent>
                                                                                                                                                                                                                                                                                                                                      </Card>
                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                                                                                                                  }