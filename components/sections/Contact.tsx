'use client'

import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="relative px-6 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[#191f2e]/20" />

      <div className="relative mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#191f2e] p-10 text-center"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#31c4d8]/6 to-transparent" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#31c4d8]/15">
              <Mail size={24} className="text-[#31c4d8]" />
            </div>

            <h2 className="mb-4 text-2xl font-black text-white">{t.contact.h2}</h2>
            <p className="mb-8 text-sm leading-relaxed text-[#7588a3]">{t.contact.body}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#31c4d8]/30 bg-[#31c4d8]/8 px-5 py-2.5 text-sm font-medium text-[#31c4d8] transition-colors hover:border-[#31c4d8]/50 hover:bg-[#31c4d8]/15"
              >
                <Mail size={14} />
                {t.contact.email}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/8"
              >
                <ExternalLink size={14} />
                {t.contact.linkedin}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
