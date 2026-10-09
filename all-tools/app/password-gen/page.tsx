'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function PasswordGen() {
  const [length, setLength] = useState(16)
    const [useSymbols, setUseSymbols] = useState(true)
      const [useNumbers, setUseNumbers] = useState(true)
        const [password, setPassword] = useState('')

          const generate = () => {
              let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                  if (useNumbers) chars += '0123456789'
                      if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
                          let result = ''
                              const array = new Uint32Array(length)
                                  crypto.getRandomValues(array)
                                      for (let i = 0; i < length; i++) result += chars[array[i] % chars.length]
                                          setPassword(result)
                                            }

                                              return (
                                                  <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                                        <div className="max-w-lg mx-auto">
                                                                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Generator Password</h1>
                                                                        <p className="text-slate-500 mb-6">Buat password acak yang kuat</p>
                                                                                <Card className="card-modern border-0">
                                                                                          <CardHeader><CardTitle className="text-slate-700 dark:text-slate-200 text-base">Konfigurasi</CardTitle></CardHeader>
                                                                                                    <CardContent className="space-y-5">
                                                                                                                <div>
                                                                                                                              <Label className="text-slate-600 dark:text-slate-300 text-sm">Panjang: {length}</Label>
                                                                                                                                            <input type="range" min={8} max={64} value={length}
                                                                                                                                                            onChange={e => setLength(Number(e.target.value))}
                                                                                                                                                                            className="w-full mt-2 accent-blue-600" />
                                                                                                                                                                                        </div>
                                                                                                                                                                                                    <div className="flex items-center gap-3">
                                                                                                                                                                                                                  <input type="checkbox" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} className="accent-blue-600 w-4 h-4" />
                                                                                                                                                                                                                                <Label className="text-slate-600 dark:text-slate-300 text-sm">Sertakan angka</Label>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                        <div className="flex items-center gap-3">
                                                                                                                                                                                                                                                                      <input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} className="accent-blue-600 w-4 h-4" />
                                                                                                                                                                                                                                                                                    <Label className="text-slate-600 dark:text-slate-300 text-sm">Sertakan simbol</Label>
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                            <Button onClick={generate} className="w-full accent-bg border-0">Generate Password</Button>
                                                                                                                                                                                                                                                                                                                        {password && (
                                                                                                                                                                                                                                                                                                                                      <div className="space-y-2">
                                                                                                                                                                                                                                                                                                                                                      <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-blue-300 break-all">{password}</div>
                                                                                                                                                                                                                                                                                                                                                                      <Button variant="outline" onClick={() => navigator.clipboard.writeText(password)}
                                                                                                                                                                                                                                                                                                                                                                                        className="w-full border-slate-300 text-slate-600 dark:text-slate-300">Salin</Button>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                  )}
                                                                                                                                                                                                                                                                                                                                                                                                                            </CardContent>
                                                                                                                                                                                                                                                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                }