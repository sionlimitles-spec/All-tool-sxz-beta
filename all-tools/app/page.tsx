'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useSettings } from '@/lib/settings-context'

const categories = {
  gambar: { label: 'Gambar & Media' },
  teks: { label: 'Teks & Data' },
  keamanan: { label: 'Keamanan' },
  utilitas: { label: 'Utilitas' },
  waktu: { label: 'Waktu & Tanggal' },
  dev: { label: 'Developer' },
}

const tools = [
  { name: 'Konversi Gambar', href: '/image-convert', desc: 'PNG, JPG, WEBP, PDF', cat: 'gambar' },
  { name: 'Peningkatan Resolusi', href: '/image-upscale', desc: 'Upscale hingga 4x', cat: 'gambar' },
  { name: 'Generator Gambar', href: '/image-generator', desc: 'AI text-to-image', cat: 'gambar' },
  { name: 'Hapus Background', href: '/remove-bg', desc: 'Background transparan', cat: 'gambar' },
  { name: 'QR Code', href: '/qr-generator', desc: 'Generate dan scan otomatis', cat: 'utilitas' },
  { name: 'Temp Mail', href: '/temp-mail', desc: 'Email sementara instan', cat: 'utilitas' },
  { name: 'Downloader', href: '/downloader', desc: 'TikTok, YouTube, dll', cat: 'utilitas' },
  { name: 'Scan Virus', href: '/virus-scan', desc: 'Deteksi malware', cat: 'keamanan' },
  { name: 'Password Generator', href: '/password-gen', desc: 'Aman dan acak', cat: 'keamanan' },
  { name: 'Hash Generator', href: '/hash', desc: 'SHA, MD5, dan lainnya', cat: 'keamanan' },
  { name: 'Info Perangkat', href: '/device-info', desc: 'Hardware dan browser', cat: 'utilitas' },
  { name: 'Kalkulator', href: '/calculator', desc: 'Operasi aritmatika', cat: 'utilitas' },
  { name: 'Konverter Satuan', href: '/unit-convert', desc: 'Panjang, berat, suhu', cat: 'utilitas' },
  { name: 'BMI Kalkulator', href: '/bmi', desc: 'Indeks massa tubuh', cat: 'utilitas' },
  { name: 'Base64 Encoder', href: '/base64', desc: 'Encode dan decode', cat: 'teks' },
  { name: 'URL Encoder', href: '/url-encoder', desc: 'Encode URL aman', cat: 'teks' },
  { name: 'JSON Formatter', href: '/json', desc: 'Format dan validasi', cat: 'teks' },
  { name: 'Penghitung Kata', href: '/word-count', desc: 'Karakter dan kata', cat: 'teks' },
  { name: 'Color Picker', href: '/color', desc: 'HEX, RGB, HSL', cat: 'dev' },
  { name: 'UUID Generator', href: '/uuid', desc: 'ID unik universal', cat: 'dev' },
  { name: 'Timer Pomodoro', href: '/pomodoro', desc: 'Fokus 25 menit', cat: 'waktu' },
  { name: 'Catatan', href: '/notes', desc: 'Catatan tersimpan lokal', cat: 'waktu' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState<string | null>(null)
  const { cardSize } = useSettings()

  const filtered = tools.filter(t => {
    const matchQuery = t.name.toLowerCase().includes(query.toLowerCase()) ||
                      t.desc.toLowerCase().includes(query.toLowerCase())
    const matchCat = !activeCat || t.cat === activeCat
    return matchQuery && matchCat
  })

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-16">
      <section className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full accent-bg blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full accent-bg blur-3xl opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium accent-text mb-6 border accent-border">
            {tools.length} alat dalam satu platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">
            Semua alat yang kamu butuhkan
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8">
            Konversi, generate, hitung, dan olah data dengan cepat dan mudah.
          </p>
          <div className="max-w-md mx-auto relative">
            <input type="text" placeholder="Cari tool..." value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl glass border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 accent-border transition-all" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button onClick={() => setActiveCat(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              !activeCat ? 'accent-bg' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}>
            Semua
          </button>
          {Object.entries(categories).map(([k, v]) => (
            <button key={k} onClick={() => setActiveCat(k)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCat === k ? 'accent-bg' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}>
              {v.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-16">Tidak ada tool yang cocok</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(t => (
              <Link key={t.href} href={t.href}>
                <div className={`card-modern ${cardSize === 'compact' ? 'p-4' : 'p-6'} h-full group`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold accent-bg">
                      {t.name.slice(0, 1)}
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="text-slate-400 group-hover:accent-text transition-colors">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{t.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}