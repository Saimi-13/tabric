'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Users, BarChart3 } from 'lucide-react'

const cases = [
  {
    icon: TrendingUp,
    title: 'Founders & CEOs',
    body: 'Spot trends across revenue, operations, and growth metrics — without a data team.',
    color: '#31c4d8',
  },
  {
    icon: Target,
    title: 'Marketing Teams',
    body: 'Track campaign performance, CAC, and attribution in a single interactive view.',
    color: '#f37272',
  },
  {
    icon: Users,
    title: 'Sales Leaders',
    body: 'Monitor pipeline health, rep performance, and deal velocity in real time.',
    color: '#fbbf24',
  },
  {
    icon: BarChart3,
    title: 'Data Analysts',
    body: 'Skip the setup. Upload any dataset and start exploring patterns in seconds.',
    color: '#c084fc',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="relative px-6 py-24 md:py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[#191f2e]/30" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          Use Cases
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Built for teams that{' '}
          <span className="gradient-text-teal-purple">run on data.</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#191f2e] p-8 transition-colors hover:border-white/10"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${c.color}10 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${c.color}18` }}
                >
                  <Icon size={20} style={{ color: c.color }} />
                </div>
                <h3 className="mb-3 text-base font-bold text-white">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7588a3]">
                  {c.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
