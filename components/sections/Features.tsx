'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Globe, MessageSquare, BarChart2, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Setup',
    body: 'No code, no configuration. Upload and get results in seconds.',
    color: '#fbbf24',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    body: 'Your data is encrypted in transit and at rest. SOC-2 ready.',
    color: '#31c4d8',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    body: 'Insights in English, Arabic, and more. Built for global teams.',
    color: '#c084fc',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    body: 'Ask questions about your data in plain language. Get instant answers.',
    color: '#31c4d8',
  },
  {
    icon: BarChart2,
    title: 'Auto Dashboards',
    body: 'Visualizations generated automatically — no chart-building required.',
    color: '#f97316',
  },
  {
    icon: RefreshCw,
    title: 'Live Updates',
    body: 'Re-upload anytime. Your dashboard refreshes with new data instantly.',
    color: '#4ade80',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          Everything You Need
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          The fastest path from{' '}
          <span className="text-[#31c4d8]">CSV</span> to{' '}
          <span className="gradient-text-teal-purple">clarity.</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
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
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#7588a3]">
                  {f.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
