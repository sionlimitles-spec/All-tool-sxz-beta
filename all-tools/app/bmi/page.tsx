'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function Bmi() {
  const [berat, setBerat] = useState('')
    const [tinggi, setTinggi] = useState('')

      const w = parseFloat(berat)
        const h = parseFloat(tinggi) / 100
          const bmi = w && h ? (w / (h * h)).toFixed(1) : ''
            const n = parseFloat(bmi)
              const status = !n ? '' : n < 18.5 ? 'Kurus' : n < 25 ? 'Normal' : n < 30 ? 'Kelebihan' : 'Obesitas'
                const color = !n ? '' : n < 18.5 ? 'text-blue-400' : n < 25 ? 'text-emerald-400' : n < 30 ? 'text-amber-400' : 'text-red-400'

                  return (
                      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                            <div className="max-w-lg mx-auto">
                                    <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Kalkulator BMI</h1>
                                            <p className="text-slate-500 mb-6">Cek indeks massa tubuh kamu</p>
                                                    <Card className="card-modern border-0">
                                                              <CardContent className="pt-6 space-y-4">
                                                                          <div>
                                                                                        <label className="text-sm text-slate-500">Berat (kg)</label>
                                                                                                      <input type="number" value={berat} onChange={e => setBerat(e.target.value)} placeholder="70"
                                                                                                                      className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" />
                                                                                                                                  </div>
                                                                                                                                              <div>
                                                                                                                                                            <label className="text-sm text-slate-500">Tinggi (cm)</label>
                                                                                                                                                                          <input type="number" value={tinggi} onChange={e => setTinggi(e.target.value)} placeholder="170"
                                                                                                                                                                                          className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" />
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                  {bmi && (
                                                                                                                                                                                                                                <div className="p-6 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-center">
                                                                                                                                                                                                                                                <p className="text-xs text-slate-400 mb-1">BMI Kamu</p>
                                                                                                                                                                                                                                                                <p className={`text-5xl font-bold ${color}`}>{bmi}</p>
                                                                                                                                                                                                                                                                                <p className="text-sm mt-2 text-slate-300">{status}</p>
                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                                    </CardContent>
                                                                                                                                                                                                                                                                                                                            </Card>
                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                        }