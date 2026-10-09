'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function Uuid() {
  const [count, setCount] = useState(1)
    const [uuids, setUuids] = useState<string[]>([])

      const gen = () => {
          const arr: string[] = []
              for (let i = 0; i < count; i++) arr.push(crypto.randomUUID())
                  setUuids(arr)
                    }

                      return (
                          <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                <div className="max-w-2xl mx-auto">
                                        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">UUID Generator</h1>
                                                <p className="text-slate-500 mb-6">Buat ID unik versi 4</p>
                                                        <Card className="card-modern border-0">
                                                                  <CardContent className="pt-6 space-y-4">
                                                                              <div className="flex gap-3 items-center">
                                                                                            <label className="text-sm text-slate-500">Jumlah:</label>
                                                                                                          <input type="number" min={1} max={50} value={count}
                                                                                                                          onChange={e => setCount(Math.max(1, Math.min(50, Number(e.target.value))))}
                                                                                                                                          className="w-24 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" />
                                                                                                                                                        <button onClick={gen} className="accent-bg px-6 py-2 rounded-xl font-medium text-sm">Generate</button>
                                                                                                                                                                    </div>
                                                                                                                                                                                <div className="space-y-2">
                                                                                                                                                                                              {uuids.map((u, i) => (
                                                                                                                                                                                                              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                                                                                                                                                                                                                                <span className="font-mono text-xs break-all text-slate-800 dark:text-slate-100">{u}</span>
                                                                                                                                                                                                                                                  <button onClick={() => navigator.clipboard.writeText(u)} className="text-xs accent-text font-medium shrink-0 ml-2">Salin</button>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                      </CardContent>
                                                                                                                                                                                                                                                                                                              </Card>
                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                          )
                                                                                                                                                                                                                                                                                                                          }