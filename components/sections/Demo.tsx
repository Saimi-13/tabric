'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Loader2, TrendingUp, Sparkles, RotateCcw } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const SAMPLE_DATA = [
  { month: 'Jan', revenue: 24, customers: 12 },
  { month: 'Feb', revenue: 31, customers: 18 },
  { month: 'Mar', revenue: 28, customers: 16 },
  { month: 'Apr', revenue: 42, customers: 27 },
  { month: 'May', revenue: 55, customers: 34 },
  { month: 'Jun', revenue: 49, customers: 31 },
  { month: 'Jul', revenue: 68, customers: 42 },
  { month: 'Aug', revenue: 81, customers: 51 },
  { month: 'Sep', revenue: 76, customers: 49 },
  { month: 'Oct', revenue: 94, customers: 58 },
  { month: 'Nov', revenue: 108, customers: 64 },
  { month: 'Dec', revenue: 132, customers: 78 },
]

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: '#4ade80',
    title: 'Revenue grew 450% YoY',
    body: 'From $24K in Jan to $132K in Dec — a 5.5× lift over twelve months.',
  },
  {
    icon: Sparkles,
    color: '#31c4d8',
    title: 'Q4 was your strongest quarter',
    body: 'Oct–Dec contributed $334K (43% of annual revenue) on rising customer count.',
  },
  {
    icon: TrendingUp,
    color: '#fbbf24',
    title: 'Customer LTV is climbing',
    body: 'Revenue per customer rose from $2.0K to $1.7K — but on 6.5× more accounts.',
  },
]

type View = 'idle' | 'loading' | 'results'

function BarChart() {
  const max = Math.max(...SAMPLE_DATA.map((d) => d.revenue))
  return (
    <div className="rounded-xl border border-white/5 bg-[#080c16] p-5">
      <div className="mb-4 flex items-baseline justify-between">
        <h4 className="text-sm font-bold text-white">Monthly Revenue</h4>
        <span className="text-xs text-[#7588a3]">$K, 2025</span>
      </div>
      <div className="flex items-end gap-1.5 h-40">
        {SAMPLE_DATA.map((d, i) => {
          const h = (d.revenue / max) * 100
          return (
            <div key={d.month} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="relative w-full flex-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-[#31c4d8]/40 to-[#31c4d8]"
                />
              </div>
              <span className="text-[9px] text-[#7588a3]">{d.month}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Demo() {
  const { t } = useI18n()
  const [view, setView] = useState<View>('idle')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const start = () => {
    setView('loading')
    setTimeout(() => setView('results'), 1100)
  }

  const reset = () => {
    setView('idle')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <section id="demo" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31c4d8]/4 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          {t.demo.overline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-center text-3xl font-black text-white sm:text-4xl md:text-5xl"
        >
          {t.demo.h2a} <span className="gradient-text-teal-purple">{t.demo.h2b}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-12 text-center text-sm text-[#7588a3] sm:text-base"
        >
          {t.demo.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-white/8 bg-[#0f1524] shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-[#141929] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#f37272]/80" />
            <span className="h-3 w-3 rounded-full bg-[#fbbf24]/80" />
            <span className="h-3 w-3 rounded-full bg-[#4ade80]/80" />
            <span className="mx-auto rounded-md border border-white/5 bg-[#0f1524] px-8 py-1 text-[10px] text-[#7588a3]/60">
              tabric.com/demo
            </span>
          </div>

          <div className="min-h-[400px] px-8 py-12">
            <AnimatePresence mode="wait">
              {view === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center"
                >
                  <h3 className="mb-3 text-xl font-bold text-white">{t.demo.dropTitle}</h3>
                  <p className="mb-10 max-w-sm text-sm text-[#7588a3]">{t.demo.dropSub}</p>

                  <label className="group flex w-full max-w-md cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-[#31c4d8]/30 bg-[#31c4d8]/5 px-8 py-12 transition-all duration-300 hover:border-[#31c4d8]/60 hover:bg-[#31c4d8]/8">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".csv,text/csv"
                      onChange={start}
                      className="hidden"
                    />
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#31c4d8]/15 transition-transform duration-300 group-hover:scale-110">
                      <Upload size={24} className="text-[#31c4d8]" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-white">
                        {t.demo.dropCta}{' '}
                        <span className="text-[#31c4d8]">{t.demo.dropChoose}</span>
                      </p>
                      <p className="text-xs text-[#7588a3]">{t.demo.dropHint}</p>
                    </div>
                  </label>
                </motion.div>
              )}

              {view === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4 py-16"
                >
                  <Loader2 size={32} className="animate-spin text-[#31c4d8]" />
                  <p className="text-sm text-[#7588a3]">Analyzing 12 rows × 3 columns…</p>
                </motion.div>
              )}

              {view === 'results' && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#7588a3]/60">
                        sales-2025.csv
                      </p>
                      <p className="text-sm font-semibold text-white">Sales Dashboard</p>
                    </div>
                    <button
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#7588a3] transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <RotateCcw size={12} />
                      Reset
                    </button>
                  </div>

                  <BarChart />

                  <div className="space-y-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#31c4d8]">
                      AI Insights
                    </p>
                    {INSIGHTS.map((insight, i) => {
                      const Icon = insight.icon
                      return (
                        <motion.div
                          key={insight.title}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.12 }}
                          className="flex gap-3 rounded-xl border border-white/5 bg-[#191f2e] p-4"
                        >
                          <div
                            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                            style={{ background: `${insight.color}20` }}
                          >
                            <Icon size={14} style={{ color: insight.color }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{insight.title}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-[#7588a3]">
                              {insight.body}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-white/5 px-8 py-3">
            <p className="text-center text-[10px] text-[#7588a3]/50">{t.demo.disclaimer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
