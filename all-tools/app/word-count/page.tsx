'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function WordCount() {
  const [text, setText] = useState('')
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
      const chars = text.length
        const charsNoSpace = text.replace(/\s/g, '').length
          const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length
            const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length
              const stats = [['Kata', words], ['Karakter', chars], ['Tanpa Spasi', charsNoSpace], ['Kalimat', sentences], ['Paragraf', paragraphs]]

                return (
                    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                          <div className="max-w-2xl mx-auto">
                                  <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Penghitung Kata</h1>
                                          <p className="text-slate-500 mb-6">Analisis statistik teks kamu</p>
                                                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
                                                            {stats.map(([k, v]) => (
                                                                        <div key={k} className="card-modern p-4 text-center border-0">
                                                                                      <p className="text-2xl font-bold accent-text">{v}</p>
                                                                                                    <p className="text-xs text-slate-500 mt-1">{k}</p>
                                                                                                                </div>
                                                                                                                          ))}
                                                                                                                                  </div>
                                                                                                                                          <Card className="card-modern border-0">
                                                                                                                                                    <CardContent className="pt-6">
                                                                                                                                                                <textarea value={text} onChange={e => setText(e.target.value)}
                                                                                                                                                                              placeholder="Tulis atau tempel teks di sini..." rows={12}
                                                                                                                                                                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm" />
                                                                                                                                                                                                      </CardContent>
                                                                                                                                                                                                              </Card>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                          )
                                                                                                                                                                                                                          }