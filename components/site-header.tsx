'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { IamtecIsotipo } from '@/components/iamtec-isotipo'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#rendimiento', label: 'Rendimiento' },
  { href: '#contratar', label: 'Planes' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto max-w-6xl rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,240,255,0.25)]">
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Iamtec.cloud, inicio">
            <IamtecIsotipo variant="cyan" className="size-9" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-wide text-foreground">IAMTEC</span>
              <span className="font-display text-[11px] tracking-[0.3em] text-cyan">.CLOUD</span>
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-cyan focus-visible:text-cyan focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contratar"
              className="hidden rounded-lg bg-cyan px-5 py-2.5 font-display text-sm font-semibold text-background transition-all hover:bg-matrix hover:shadow-[0_0_24px_rgba(0,255,102,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan sm:inline-flex"
            >
              Comenzar
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-white/5 md:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
              <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Móvil" className="border-t border-white/10 px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-foreground hover:bg-white/5 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contratar"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-cyan px-3 py-2.5 text-center font-display font-semibold text-background"
                >
                  Comenzar
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
