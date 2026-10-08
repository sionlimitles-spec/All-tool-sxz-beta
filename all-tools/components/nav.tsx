import Link from 'next/link'

export function Nav() {
  return (
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-lg font-bold text-slate-800 tracking-tight">
                              All Tools
                                      </Link>
                                              <div className="flex gap-6 text-sm text-slate-600">
                                                        <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
                                                                  <Link href="/device-info" className="hover:text-blue-600 transition-colors">Perangkat</Link>
                                                                            <Link href="/password-gen" className="hover:text-blue-600 transition-colors">Password</Link>
                                                                                    </div>
                                                                                          </div>
                                                                                              </nav>
                                                                                                )
                                                                                                }