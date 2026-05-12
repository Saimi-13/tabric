'use client'

import { motion } from 'framer-motion'
import { Clock, AlertCircle, TrendingDown } from 'lucide-react'
import { slideUp } from '@/lib/motion'

const stats = [
  {
    icon: Clock,
    value: '1hrs',
    label: 'Avg. hours spent weekly on manual reporting',
    color: '#31c4d8',
  },
  {
    icon: AlertCircle,
    value: '10%',
    label: 'Of decisions delayed by slow data access',
    color: '#f97316',
  },
  {
    icon: TrendingDown,
    value: '0x',
    label: 'Table insights still there in real-time',
    color: '#f37272',
  },
]

export default function Problem() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f97316]"
        >
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Teams waste{' '}
          <span className="gradient-text-teal-amber">hours</span>{' '}
          on spreadsheets.
          <br className="hidden sm:block" /> Every single week.
        </motion.h2>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => {
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
                <Icon
                  size={20}
                  className="mx-auto mb-4"
                  style={{ color: stat.color }}
                />
                <p
                  className="mb-2 text-4xl font-black"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed text-[#7588a3]">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
