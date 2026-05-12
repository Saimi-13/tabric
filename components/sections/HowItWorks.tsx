'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, LayoutDashboard } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const STEP_META = [
  { num: '01', icon: Upload, titleKey: 's1title' as const, bodyKey: 's1body' as const },
  { num: '02', icon: Cpu, titleKey: 's2title' as const, bodyKey: 's2body' as const },
  { num: '03', icon: LayoutDashboard, titleKey: 's3title' as const, bodyKey: 's3body' as const },
]

export default function HowItWorks() {
  const { t } = useI18n()

  return (
    <section id="how-it-works" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          {t.howItWorks.overline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {t.howItWorks.h2a}{' '}
          <span className="gradient-text-teal-purple">{t.howItWorks.h2b}</span>
          <br className="hidden sm:block" /> {t.howItWorks.h2c}
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEP_META.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#191f2e] p-8"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#31c4d8]/5 to-transparent" />
                <span className="mb-5 block text-xs font-bold text-[#7588a3]/50">{step.num}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#31c4d8]/10">
                  <Icon size={22} className="text-[#31c4d8]" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{t.howItWorks[step.titleKey]}</h3>
                <p className="text-sm leading-relaxed text-[#7588a3]">{t.howItWorks[step.bodyKey]}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
