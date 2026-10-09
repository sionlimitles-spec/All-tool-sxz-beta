'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

function hexToRgb(hex: string) {
  return { r: parseInt(hex.slice(1,3),16), g: parseInt(hex.slice(3,5),16), b: parseInt(hex.slice(5,7),16) }
  }
  function rgbToHsl(r: number, g: number, b: number) {
    r/=255; g/=255; b/=255
      const max = Math.max(r,g,b), min = Math.min(r,g,b)
        let h=0, s=0; const l=(max+min)/2
          if (max!==min) {
              const d = max-min
                  s = l>0.5 ? d/(2-max-min) : d/(max+min)
                      if (max===r) h=((g-b)/d+(g<b?6:0))/6
                          else if (max===g) h=((b-r)/d+2)/6
                              else h=((r-g)/d+4)/6
                                }
                                  return { h: Math.round(h*360), s: Math.round(s*100), l: Math.round(l*100) }
                                  }

                                  export default function ColorPicker() {
                                    const [color, setColor] = useState('#2563eb')
                                      const rgb = hexToRgb(color)
                                        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
                                          const rows = [['HEX', color.toUpperCase()], ['RGB', `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`], ['HSL', `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`]]

                                            return (
                                                <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
                                                      <div className="max-w-lg mx-auto">
                                                              <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Color Picker</h1>
                                                                      <p className="text-slate-500 mb-6">Pilih warna dan lihat kodenya</p>
                                                                              <Card className="card-modern border-0">
                                                                                        <CardContent className="pt-6 space-y-4">
                                                                                                    <input type="color" value={color} onChange={e => setColor(e.target.value)}
                                                                                                                  className="w-full h-40 rounded-xl cursor-pointer border-0" />
                                                                                                                              <div className="space-y-2">
                                                                                                                                            {rows.map(([k, v]) => (
                                                                                                                                                            <div key={k} className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                                                                                                                                                                              <span className="text-xs font-medium text-slate-500">{k}</span>
                                                                                                                                                                                                <div className="flex items-center gap-3">
                                                                                                                                                                                                                    <span className="font-mono text-sm text-slate-800 dark:text-slate-100">{v}</span>
                                                                                                                                                                                                                                        <button onClick={() => navigator.clipboard.writeText(v)} className="text-xs accent-text font-medium">Salin</button>
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                              </CardContent>
                                                                                                                                                                                                                                                                                                                      </Card>
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                                                                                                  }