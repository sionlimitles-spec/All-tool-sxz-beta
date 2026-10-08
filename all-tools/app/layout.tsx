import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All Tools',
    description: 'Kumpulan alat digital dalam satu platform',
    }

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode
        }) {
          return (
              <html lang="id">
                    <body className={`${inter.className} bg-slate-50`}>
                            <Nav />
                                    {children}
                                          </body>
                                              </html>
                                                )
                                                }