import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/nav'
import { SettingsProvider } from '@/lib/settings-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All Tools - Kumpulan Alat Digital',
  description: 'Platform lengkap dengan berbagai alat digital dalam satu tempat',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950`}>
        <SettingsProvider>
          <Nav />
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}