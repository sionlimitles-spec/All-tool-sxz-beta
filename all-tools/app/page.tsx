import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const tools = [
  { name: 'Konversi Gambar', href: '/image-convert', desc: 'PNG, JPG, WEBP, PDF' },
    { name: 'Peningkatan Resolusi', href: '/image-upscale', desc: 'Upscale hingga 4x' },
      { name: 'Temp Mail', href: '/temp-mail', desc: 'Email sementara instan' },
        { name: 'Generator Gambar', href: '/image-generator', desc: 'AI text-to-image' },
          { name: 'Downloader', href: '/downloader', desc: 'TikTok, YouTube, dll' },
            { name: 'QR Code', href: '/qr-generator', desc: 'Generate dan scan otomatis' },
              { name: 'Scan Virus', href: '/virus-scan', desc: 'Deteksi malware' },
                { name: 'Hapus Background', href: '/remove-bg', desc: 'Background transparan' },
                  { name: 'Info Perangkat', href: '/device-info', desc: 'Hardware dan browser' },
                    { name: 'Kalkulator', href: '/calculator', desc: 'Scientific dan basic' },
                      { name: 'Generator Password', href: '/password-gen', desc: 'Aman dan acak' },
                      ]

                      export default function Home() {
                        return (
                            <main className="min-h-screen bg-slate-50 py-12 px-4">
                                  <div className="max-w-6xl mx-auto">
                                          <div className="mb-10">
                                                    <h1 className="text-4xl font-bold text-slate-800 mb-2">All Tools</h1>
                                                              <p className="text-slate-500">Kumpulan alat digital dalam satu platform.</p>
                                                                      </div>
                                                                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                                        {tools.map((t) => (
                                                                                                    <Link key={t.href} href={t.href}>
                                                                                                                  <Card className="h-full hover:shadow-lg transition-shadow border-slate-200 bg-white cursor-pointer">
                                                                                                                                  <CardHeader>
                                                                                                                                                    <CardTitle className="text-slate-700 text-lg">{t.name}</CardTitle>
                                                                                                                                                                    </CardHeader>
                                                                                                                                                                                    <CardContent>
                                                                                                                                                                                                      <p className="text-sm text-slate-500">{t.desc}</p>
                                                                                                                                                                                                                      </CardContent>
                                                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                                                                </Link>
                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                                              }