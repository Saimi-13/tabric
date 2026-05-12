'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Globe, MessageSquare, BarChart2, RefreshCw } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const FEATURE_META = [
  { icon: Zap, color: '#fbbf24', titleKey: 'f1title' as const, bodyKey: 'f1body' as const },
  { icon: Shield, color: '#31c4d8', titleKey: 'f2title' as const, bodyKey: 'f2body' as const },
  { icon: Globe, color: '#c084fc', titleKey: 'f3title' as const, bodyKey: 'f3body' as const },
  { icon: MessageSquare, color: '#31c4d8', titleKey: 'f4title' as const, bodyKey: 'f4body' as const },
  { icon: BarChart2, color: '#f97316', titleKey: 'f5title' as const, bodyKey: 'f5body' as const },
  { icon: RefreshCw, color: '#4ade80', titleKey: 'f6title' as const, bodyKey: 'f6body' as const },
]

export default function Features() {
  const { t } = useI18n()

  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          {t.features.overline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {t.features.h2a}{' '}
          <span className="text-[#31c4d8]">{t.features.h2b}</span>{' '}
          {t.features.h2c}{' '}
          <span className="gradient-text-teal-purple">{t.features.h2d}</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {FEATURE_META.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#191f2e] p-6"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${f.color}15` }}
                >
                  <Icon size={18} style={{ color: f.color }} />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{t.features[f.titleKey]}</h3>
                <p className="text-sm leading-relaxed text-[#7588a3]">{t.features[f.bodyKey]}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
