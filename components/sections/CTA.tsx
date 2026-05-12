'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const perks = ['No credit card', 'Free during beta', 'Cancel anytime']

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-28 md:py-36">
      {/* Radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#191f2e]/60 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c084fc]/6 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31c4d8]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Ready to stop{' '}
          <span className="gradient-text-amber-teal">burning hours</span>
          <br className="hidden sm:block" />
          <span className="gradient-text-teal-purple"> on spreadsheets?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-sm text-[#7588a3] sm:text-base"
        >
          Join the waitlist and be the first to experience Tabric when we
          launch.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#31c4d8]/15">
              <Check size={24} className="text-[#31c4d8]" />
            </div>
            <p className="text-base font-semibold text-white">
              You&apos;re on the list!
            </p>
            <p className="text-sm text-[#7588a3]">
              We&apos;ll reach out when Tabric launches.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="h-12 rounded-full border border-white/10 bg-[#191f2e] px-5 text-sm text-white placeholder:text-[#7588a3] outline-none focus:border-[#31c4d8]/50 focus:ring-2 focus:ring-[#31c4d8]/20 sm:w-64"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#31c4d8] px-6 text-sm font-semibold text-[#080c16] transition-colors hover:bg-[#31c4d8]/90"
            >
              Get Early Access
              <ArrowRight size={15} />
            </button>
          </motion.form>
        )}

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          {perks.map((perk) => (
            <span
              key={perk}
              className="flex items-center gap-1.5 text-xs text-[#7588a3]"
            >
              <Check size={12} className="text-[#31c4d8]" />
              {perk}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
