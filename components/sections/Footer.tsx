'use client'

import { Heart, ExternalLink, Mail } from 'lucide-react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()

  const links = [
    { label: t.footer.howItWorks, href: '#how-it-works' },
    { label: t.footer.demo, href: '#demo' },
    { label: t.footer.contact, href: '#contact' },
  ]

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Tabric logo" width={24} height={24} className="h-6 w-auto" />
            <span className="text-sm text-[#7588a3]">{t.footer.tagline}</span>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#7588a3] transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Like" className="text-[#7588a3] transition-colors hover:text-white">
              <Heart size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#7588a3] transition-colors hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
            <a href="mailto:hello@tabric.com" aria-label="Email" className="text-[#7588a3] transition-colors hover:text-white">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-[#7588a3]/50">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
