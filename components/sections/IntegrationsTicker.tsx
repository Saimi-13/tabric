'use client'

import { motion } from 'framer-motion'

const tools = [
  'Excel',
  'Google Sheets',
  'Airtable',
  'Notion',
  'PostgreSQL',
  'MySQL',
  'BigQuery',
  'CSV',
]

// Duplicate for seamless loop
const allTools = [...tools, ...tools]

export default function IntegrationsTicker() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-10">
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7588a3]/60">
          Works Seamlessly With Your Data Tools
        </p>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080c16] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080c16] to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          className="flex items-center gap-12"
          style={{ width: 'max-content' }}
        >
          {allTools.map((tool, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm font-medium text-[#7588a3]/70"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
