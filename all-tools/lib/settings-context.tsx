'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Accent = 'blue' | 'purple' | 'green' | 'rose'
type CardSize = 'comfortable' | 'compact'

interface Ctx {
  theme: Theme
    accent: Accent
      cardSize: CardSize
        setTheme: (t: Theme) => void
          setAccent: (a: Accent) => void
            setCardSize: (s: CardSize) => void
            }

            const Ctx = createContext<Ctx | null>(null)

            const accents: Record<Accent, [number, number, number]> = {
              blue: [217, 91, 60],
                purple: [270, 91, 65],
                  green: [160, 84, 39],
                    rose: [347, 77, 50],
                    }

                    export function SettingsProvider({ children }: { children: React.ReactNode }) {
                      const [theme, setTheme] = useState<Theme>('light')
                        const [accent, setAccent] = useState<Accent>('blue')
                          const [cardSize, setCardSize] = useState<CardSize>('comfortable')

                            useEffect(() => {
                                const t = (localStorage.getItem('theme') as Theme) || 'light'
                                    const a = (localStorage.getItem('accent') as Accent) || 'blue'
                                        const c = (localStorage.getItem('cardSize') as CardSize) || 'comfortable'
                                            setTheme(t); setAccent(a); setCardSize(c)
                                              }, [])

                                                useEffect(() => {
                                                    const root = document.documentElement
                                                        root.classList.toggle('dark', theme === 'dark')
                                                            const [h, s, l] = accents[accent]
                                                                root.style.setProperty('--accent-h', String(h))
                                                                    root.style.setProperty('--accent-s', `${s}%`)
                                                                        root.style.setProperty('--accent-l', `${l}%`)
                                                                            localStorage.setItem('theme', theme)
                                                                                localStorage.setItem('accent', accent)
                                                                                    localStorage.setItem('cardSize', cardSize)
                                                                                      }, [theme, accent, cardSize])

                                                                                        return (
                                                                                            <Ctx.Provider value={{ theme, accent, cardSize, setTheme, setAccent, setCardSize }}>
                                                                                                  {children}
                                                                                                      </Ctx.Provider>
                                                                                                        )
                                                                                                        }

                                                                                                        export const useSettings = () => {
                                                                                                          const c = useContext(Ctx)
                                                                                                            if (!c) throw new Error('SettingsProvider missing')
                                                                                                              return c
                                                                                                              }