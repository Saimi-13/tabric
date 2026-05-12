'use client'

import { motion } from 'framer-motion'
import { Clock, AlertCircle, TrendingDown } from 'lucide-react'
import { slideUp } from '@/lib/motion'
import { useI18n } from '@/lib/i18n'

const STAT_META = [
  { icon: Clock, value: '1hrs', color: '#31c4d8', labelKey: 'stat1label' as const },
  { icon: AlertCircle, value: '10%', color: '#f97316', labelKey: 'stat2label' as const },
  { icon: TrendingDown, value: '0x', color: '#f37272', labelKey: 'stat3label' as const },
]

export default function Problem() {
  const { t } = useI18n()

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f97316]"
        >
          {t.problem.overline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {t.problem.h2a}{' '}
          <span className="gradient-text-teal-amber">{t.problem.h2b}</span>{' '}
          {t.problem.h2c}
          <br className="hidden sm:block" /> {t.problem.h2d}
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STAT_META.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.value}
                custom={i}
                variants={slideUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#191f2e] p-8 text-center"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${stat.color}22 0%, transparent 70%)`,
                  }}
                />
                <Icon size={20} className="mx-auto mb-4" style={{ color: stat.color }} />
                <p className="mb-2 text-4xl font-black" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed text-[#7588a3]">
                  {t.problem[stat.labelKey]}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
