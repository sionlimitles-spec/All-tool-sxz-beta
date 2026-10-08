'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DeviceInfo() {
  const [info, setInfo] = useState<any>({})

    useEffect(() => {
        const data = {
              browser: navigator.userAgent.includes('Chrome') ? 'Chrome'
                      : navigator.userAgent.includes('Firefox') ? 'Firefox'
                              : navigator.userAgent.includes('Safari') ? 'Safari'
                                      : 'Lainnya',
                                            platform: navigator.platform,
                                                  language: navigator.language,
                                                        cores: navigator.hardwareConcurrency || 'Tidak diketahui',
                                                              memory: (navigator as any).deviceMemory ? `${(navigator as any).deviceMemory} GB` : 'Tidak diketahui',
                                                                    screen: `${window.screen.width} x ${window.screen.height}`,
                                                                          viewport: `${window.innerWidth} x ${window.innerHeight}`,
                                                                                pixelRatio: window.devicePixelRatio,
                                                                                      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                                                                            online: navigator.onLine,
                                                                                                  touch: 'ontouchstart' in window,
                                                                                                        userAgent: navigator.userAgent,
                                                                                                            }
                                                                                                                setInfo(data)
                                                                                                                  }, [])

                                                                                                                    const rows = [
                                                                                                                        ['Browser', info.browser],
                                                                                                                            ['Platform', info.platform],
                                                                                                                                ['Bahasa', info.language],
                                                                                                                                    ['CPU Cores', info.cores],
                                                                                                                                        ['RAM', info.memory],
                                                                                                                                            ['Resolusi Layar', info.screen],
                                                                                                                                                ['Viewport', info.viewport],
                                                                                                                                                    ['Pixel Ratio', info.pixelRatio],
                                                                                                                                                        ['Zona Waktu', info.timezone],
                                                                                                                                                            ['Status Jaringan', info.online ? 'Online' : 'Offline'],
                                                                                                                                                                ['Layar Sentuh', info.touch ? 'Ya' : 'Tidak'],
                                                                                                                                                                  ]

                                                                                                                                                                    return (
                                                                                                                                                                        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-6">
                                                                                                                                                                              <div className="max-w-lg mx-auto">
                                                                                                                                                                                      <h1 className="text-2xl font-bold text-slate-800 mb-2">Info Perangkat</h1>
                                                                                                                                                                                              <p className="text-sm text-slate-500 mb-6">Detail sistem dan browser kamu</p>
                                                                                                                                                                                                      <Card className="bg-white border-slate-200 shadow-lg">
                                                                                                                                                                                                                <CardHeader><CardTitle className="text-slate-700 text-base">Spesifikasi</CardTitle></CardHeader>
                                                                                                                                                                                                                          <CardContent>
                                                                                                                                                                                                                                      <dl className="divide-y divide-slate-100">
                                                                                                                                                                                                                                                    {rows.map(([k, v]: any) => (
                                                                                                                                                                                                                                                                    <div key={k} className="flex justify-between py-3 text-sm">
                                                                                                                                                                                                                                                                                      <dt className="text-slate-500">{k}</dt>
                                                                                                                                                                                                                                                                                                        <dd className="text-slate-700 font-medium text-right max-w-[60%] break-words">{v}</dd>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                                                  </dl>
                                                                                                                                                                                                                                                                                                                                                              <div className="mt-4 pt-4 border-t border-slate-100">
                                                                                                                                                                                                                                                                                                                                                                            <p className="text-xs text-slate-400 mb-1">User Agent</p>
                                                                                                                                                                                                                                                                                                                                                                                          <p className="text-xs text-slate-600 break-all">{info.userAgent}</p>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                </CardContent>
                                                                                                                                                                                                                                                                                                                                                                                                                        </Card>
                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                                                                                                                                                                    }