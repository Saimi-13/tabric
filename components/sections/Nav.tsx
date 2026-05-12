'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useI18n, type Lang } from '@/lib/i18n'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'عر' },
  { code: 'de', label: 'DE' },
]

export default function Nav() {
  const { t, lang, setLang } = useI18n()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = !mounted || resolvedTheme === 'dark'

  const links = [
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.useCases, href: '#use-cases' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.demo, href: '#demo' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-[#080c16]/90 backdrop-blur-md dark:bg-[#080c16]/90 light:bg-white/90'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Tabric home">
          <Image
            src="/logo.svg"
            alt="Tabric logo"
            width={22}
            height={22}
            className="h-5 w-auto"
            priority
          />
          <span className="text-sm font-bold text-white dark:text-white">tabric</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-[#7588a3] transition-colors hover:text-white dark:hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="rounded-full p-1.5 text-[#7588a3] transition-colors hover:text-white"
          >
            {mounted && resolvedTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Language switcher */}
          <div className="hidden items-center gap-0.5 rounded-full border border-white/10 p-0.5 sm:flex">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-label={`Switch to ${code.toUpperCase()}`}
                className={cn(
                  'rounded-full px-2.5 py-1 text-xs font-medium transition-all',
                  lang === code
                    ? 'bg-[#31c4d8] text-[#080c16]'
                    : 'text-[#7588a3] hover:text-white'
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href="#cta"
            className="hidden rounded-full bg-[#31c4d8] px-4 py-2 text-sm font-semibold text-[#080c16] transition-colors hover:bg-[#31c4d8]/90 xl:inline-flex xl:items-center"
          >
            {t.nav.cta}
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className="text-[#7588a3] hover:text-white xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#080c16]/95 px-6 pb-6 pt-4 xl:hidden">
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

          {/* Mobile language switcher */}
          <div className="mt-5 flex items-center gap-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-all',
                  lang === code
                    ? 'bg-[#31c4d8] text-[#080c16]'
                    : 'border border-white/10 text-[#7588a3]'
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[#31c4d8] py-3 text-sm font-semibold text-[#080c16] hover:bg-[#31c4d8]/90"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
