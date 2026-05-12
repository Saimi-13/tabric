'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Users, BarChart3 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const CASE_META = [
  { icon: TrendingUp, color: '#31c4d8', titleKey: 'c1title' as const, bodyKey: 'c1body' as const },
  { icon: Target, color: '#f37272', titleKey: 'c2title' as const, bodyKey: 'c2body' as const },
  { icon: Users, color: '#fbbf24', titleKey: 'c3title' as const, bodyKey: 'c3body' as const },
  { icon: BarChart3, color: '#c084fc', titleKey: 'c4title' as const, bodyKey: 'c4body' as const },
]

export default function UseCases() {
  const { t } = useI18n()

  return (
    <section id="use-cases" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[#191f2e]/30" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          {t.useCases.overline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {t.useCases.h2a}{' '}
          <span className="gradient-text-teal-purple">{t.useCases.h2b}</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CASE_META.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.titleKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#191f2e] p-8 transition-colors hover:border-white/10"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${c.color}10 0%, transparent 70%)` }}
                />
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${c.color}18` }}
                >
                  <Icon size={20} style={{ color: c.color }} />
                </div>
                <h3 className="mb-3 text-base font-bold text-white">{t.useCases[c.titleKey]}</h3>
                <p className="text-sm leading-relaxed text-[#7588a3]">{t.useCases[c.bodyKey]}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
