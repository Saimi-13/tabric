'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

const LINKEDIN_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const members = [
  {
    name: 'Adeen Atif',
    roleKey: 'founder' as const,
    linkedin: 'https://www.linkedin.com/in/adeen-atif/',
    initials: 'AA',
    color: '#31c4d8',
  },
  {
    name: 'Syed Nofel Talha',
    roleKey: 'founder' as const,
    linkedin: 'https://www.linkedin.com/in/syed-nofel-talha-773a88243/',
    initials: 'SN',
    color: '#c084fc',
  },
  {
    name: 'Muhammad Saim',
    roleKey: 'advisor' as const,
    linkedin: 'https://www.linkedin.com/in/muhammad-saim13',
    initials: 'MS',
    color: '#fbbf24',
  },
]

export default function Team() {
  const { t } = useI18n()

  return (
    <section id="team" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[#191f2e]/30" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          {t.team.overline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {t.team.h2a}{' '}
          <span className="gradient-text-teal-purple">{t.team.h2b}</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#191f2e] p-8 text-center transition-colors hover:border-white/10"
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${member.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Avatar */}
              <div
                className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-xl font-black text-white"
                style={{ background: `${member.color}25`, border: `2px solid ${member.color}40` }}
              >
                <span style={{ color: member.color }}>{member.initials}</span>
              </div>

              {/* Name + LinkedIn */}
              <div className="mb-1 flex items-center justify-center gap-2">
                <h3 className="text-base font-bold text-white">{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-[#7588a3] transition-colors hover:text-[#31c4d8]"
                >
                  {LINKEDIN_ICON}
                </a>
              </div>

              {/* Role */}
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest"
                style={{ color: member.color }}>
                {t.team[member.roleKey]}
              </p>

              {/* Experience placeholder */}
              <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-4">
                <p className="text-xs text-[#7588a3]/60 italic">
                  {t.team.experiencePlaceholder}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
