import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-amber-400" />
          <span className="text-lg font-semibold tracking-tight">AI Ads Club</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium shadow/50 shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
          >
            Get started
          </a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
