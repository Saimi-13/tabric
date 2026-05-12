import { Heart, ExternalLink, Mail } from 'lucide-react'

const links = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#31c4d8]/20 text-xs font-black text-[#31c4d8]">
              T
            </span>
            <span className="text-sm text-[#7588a3]">
              Turn spreadsheets into stories.
            </span>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
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
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Like"
              className="text-[#7588a3] transition-colors hover:text-white"
            >
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
            <a
              href="mailto:hello@tabric.com"
              aria-label="Email"
              className="text-[#7588a3] transition-colors hover:text-white"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-[#7588a3]/50">
            © 2026 Tabric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
