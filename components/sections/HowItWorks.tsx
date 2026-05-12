'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, LayoutDashboard } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Upload,
    title: 'Upload',
    body: 'Drop your CSV or Excel file — any size, any structure. We handle the rest.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'AI Analysis',
    body: 'Our engine detects patterns, outliers, and trends automatically in seconds.',
  },
  {
    num: '03',
    icon: LayoutDashboard,
    title: 'Instant Dashboard',
    body: 'Get beautiful charts, key insights, and an AI chatbot — ready to explore.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          From raw data to{' '}
          <span className="gradient-text-teal-purple">clarity</span>
          <br className="hidden sm:block" /> in three simple steps.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, i) => {
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
                {/* Glow top */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#31c4d8]/5 to-transparent" />

                <span className="mb-5 block text-xs font-bold text-[#7588a3]/50">
                  {step.num}
                </span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#31c4d8]/10">
                  <Icon size={22} className="text-[#31c4d8]" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7588a3]">
                  {step.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
