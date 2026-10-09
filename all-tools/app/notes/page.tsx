'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface Note { id: string; title: string; body: string; date: number }

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([])
    const [title, setTitle] = useState('')
      const [body, setBody] = useState('')

        useEffect(() => {
            const s = localStorage.getItem('notes')
                if (s) setNotes(JSON.parse(s))
                  }, [])

                    useEffect(() => {
                        localStorage.setItem('notes', JSON.stringify(notes))
                          }, [notes])

                            const add = () => {
                                if (!title.trim() && !body.trim()) return
                                    setNotes([{ id: crypto.randomUUID(), title, body, date: Date.now() }, ...notes])
                                        setTitle(''); setBody('')
                                          }

                                            const del = (id: string) => setNotes(notes.filter(n => n.id !== id))

                                              return (
                                                  <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                                        <div className="max-w-2xl mx-auto">
                                                                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Catatan</h1>
                                                                        <p className="text-slate-500 mb-6">Tersimpan otomatis di browser kamu</p>
                                                                                <Card className="card-modern border-0 mb-6">
                                                                                          <CardContent className="pt-6 space-y-3">
                                                                                                      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Judul catatan..."
                                                                                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" />
                                                                                                                                <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Isi catatan..." rows={3}
                                                                                                                                              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm" />
                                                                                                                                                          <button onClick={add} className="accent-bg px-6 py-3 rounded-xl font-medium w-full">Tambah Catatan</button>
                                                                                                                                                                    </CardContent>
                                                                                                                                                                            </Card>
                                                                                                                                                                                    <div className="space-y-3">
                                                                                                                                                                                              {notes.map(n => (
                                                                                                                                                                                                          <div key={n.id} className="card-modern p-4 border-0">
                                                                                                                                                                                                                        <div className="flex justify-between items-start gap-3">
                                                                                                                                                                                                                                        <div className="flex-1">
                                                                                                                                                                                                                                                          <h3 className="font-semibold text-slate-800 dark:text-slate-100">{n.title || '(Tanpa judul)'}</h3>
                                                                                                                                                                                                                                                                            {n.body && <p className="text-sm text-slate-500 mt-1 whitespace-pre-wrap">{n.body}</p>}
                                                                                                                                                                                                                                                                                              <p className="text-xs text-slate-400 mt-2">{new Date(n.date).toLocaleString('id-ID')}</p>
                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                              <button onClick={() => del(n.id)} className="text-xs text-red-500 font-medium">Hapus</button>
                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                                                                                                                                            {notes.length === 0 && <p className="text-center text-slate-400 py-8 text-sm">Belum ada catatan</p>}
                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                }