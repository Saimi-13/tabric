'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-[#080c16]/90 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#31c4d8]/20 text-sm font-black text-[#31c4d8]">
            T
          </span>
          <span className="text-sm font-bold text-white">tabric</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-[#7588a3] transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            className="hidden rounded-full p-1.5 text-[#7588a3] transition-colors hover:text-white md:block"
          >
            <Sun size={16} />
          </button>
          <span className="hidden text-xs text-[#7588a3] md:block">عربي</span>

          <a
            href="#cta"
            className="hidden rounded-full bg-[#31c4d8] px-4 py-2 text-sm font-semibold text-[#080c16] transition-colors hover:bg-[#31c4d8]/90 md:inline-flex md:items-center"
          >
            Get Early Access
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className="text-[#7588a3] hover:text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#080c16]/95 px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-[#7588a3] hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-[#31c4d8] py-3 text-sm font-semibold text-[#080c16] hover:bg-[#31c4d8]/90"
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  )
}
