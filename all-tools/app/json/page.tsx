'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function JsonFormatter() {
  const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
      const [error, setError] = useState('')

        const format = () => {
            try { setOutput(JSON.stringify(JSON.parse(input), null, 2)); setError('') }
                catch (e: any) { setError(e.message); setOutput('') }
                  }

                    const minify = () => {
                        try { setOutput(JSON.stringify(JSON.parse(input))); setError('') }
                            catch (e: any) { setError(e.message); setOutput('') }
                              }

                                return (
                                    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                          <div className="max-w-2xl mx-auto">
                                                  <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">JSON Formatter</h1>
                                                          <p className="text-slate-500 mb-6">Format, validasi, dan minify JSON</p>
                                                                  <Card className="card-modern border-0">
                                                                            <CardContent className="pt-6 space-y-4">
                                                                                        <textarea value={input} onChange={e => setInput(e.target.value)}
                                                                                                      placeholder='{"nama": "Budi", "umur": 25}' rows={6}
                                                                                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-mono text-sm" />
                                                                                                                                <div className="flex gap-2">
                                                                                                                                              <button onClick={format} className="accent-bg px-4 py-2 rounded-xl font-medium text-sm flex-1">Format</button>
                                                                                                                                                            <button onClick={minify} className="px-4 py-2 rounded-xl font-medium text-sm flex-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200">Minify</button>
                                                                                                                                                                        </div>
                                                                                                                                                                                    {error && <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm">{error}</div>}
                                                                                                                                                                                                {output && (
                                                                                                                                                                                                              <pre className="p-4 rounded-xl bg-slate-900 dark:bg-slate-800 text-emerald-400 text-xs overflow-auto max-h-96 whitespace-pre-wrap">{output}</pre>
                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                    </CardContent>
                                                                                                                                                                                                                                            </Card>
                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                        }