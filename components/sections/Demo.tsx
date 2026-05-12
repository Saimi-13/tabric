'use client'

import { motion } from 'framer-motion'
import { Upload, Circle } from 'lucide-react'

export default function Demo() {
  return (
    <section id="demo" className="relative px-6 py-24 md:py-32">
      {/* Faint bg glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31c4d8]/4 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31c4d8]"
        >
          Demo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-center text-3xl font-black text-white sm:text-4xl md:text-5xl"
        >
          See it in <span className="gradient-text-teal-purple">action.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-12 text-center text-sm text-[#7588a3] sm:text-base"
        >
          Upload any CSV (or just click) to see how Tabric transforms your data.
        </motion.p>

        {/* Mock browser */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-white/8 bg-[#0f1524] shadow-2xl shadow-black/40"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 bg-[#141929] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#f37272]/80" />
            <span className="h-3 w-3 rounded-full bg-[#fbbf24]/80" />
            <span className="h-3 w-3 rounded-full bg-[#4ade80]/80" />
            <span className="mx-auto rounded-md border border-white/5 bg-[#0f1524] px-8 py-1 text-[10px] text-[#7588a3]/60">
              tabric.com/demo
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center px-8 py-16 text-center">
            <h3 className="mb-3 text-xl font-bold text-white">
              Turn spreadsheets into stories.
            </h3>
            <p className="mb-12 max-w-sm text-sm text-[#7588a3]">
              Upload a CSV. Get dashboards, insights, and a chatbot to answer
              your questions.
            </p>

            {/* Drop zone */}
            <div className="group flex w-full max-w-md cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-[#31c4d8]/30 bg-[#31c4d8]/5 px-8 py-12 transition-all duration-300 hover:border-[#31c4d8]/60 hover:bg-[#31c4d8]/8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#31c4d8]/15 transition-transform duration-300 group-hover:scale-110">
                <Upload size={24} className="text-[#31c4d8]" />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-white">
                  Drop CSV here or{' '}
                  <span className="text-[#31c4d8]">Choose file</span>
                </p>
                <p className="text-xs text-[#7588a3]">
                  Any CSV will load our demo dataset
                </p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t border-white/5 px-8 py-3">
            <p className="text-center text-[10px] text-[#7588a3]/50">
              This is a product demo. Data and responses are hard-coded for
              preview.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
