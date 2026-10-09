'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function Base64() {
  const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
      const [mode, setMode] = useState<'encode' | 'decode'>('encode')

        const run = () => {
            try {
                  setOutput(mode === 'encode' ? btoa(input) : atob(input))
                      } catch { setOutput('Error: input tidak valid') }
                        }

                          return (
                              <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                    <div className="max-w-2xl mx-auto">
                                            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Base64 Encoder</h1>
                                                    <p className="text-slate-500 mb-6">Encode atau decode teks ke Base64</p>
                                                            <Card className="card-modern border-0">
                                                                      <CardContent className="pt-6 space-y-4">
                                                                                  <div className="flex gap-2">
                                                                                                {(['encode', 'decode'] as const).map(m => (
                                                                                                                <button key={m} onClick={() => setMode(m)}
                                                                                                                                  className={`px-4 py-2 rounded-full text-xs font-medium ${mode === m ? 'accent-bg' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                                                                                                                                                    {m === 'encode' ? 'Encode' : 'Decode'}
                                                                                                                                                                    </button>
                                                                                                                                                                                  ))}
                                                                                                                                                                                              </div>
                                                                                                                                                                                                          <textarea value={input} onChange={e => setInput(e.target.value)}
                                                                                                                                                                                                                        placeholder="Masukkan teks..." rows={5}
                                                                                                                                                                                                                                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-mono text-sm" />
                                                                                                                                                                                                                                                  <button onClick={run} className="accent-bg px-6 py-3 rounded-xl font-medium w-full">Proses</button>
                                                                                                                                                                                                                                                              {output && (
                                                                                                                                                                                                                                                                            <div className="p-4 rounded-xl bg-slate-900 dark:bg-slate-800 text-white">
                                                                                                                                                                                                                                                                                            <p className="text-xs text-slate-400 mb-1">Hasil</p>
                                                                                                                                                                                                                                                                                                            <p className="font-mono text-sm break-all">{output}</p>
                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                                                                                                </CardContent>
                                                                                                                                                                                                                                                                                                                                                        </Card>
                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                                                                                                    }