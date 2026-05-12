'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import { fadeUp } from '@/lib/motion'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-20">
      {/* Background glows */}
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#31c4d8]/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#c084fc]/5 blur-[100px]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#31c4d8]/20 bg-[#31c4d8]/10 px-4 py-2 text-xs font-medium text-[#31c4d8]"
        >
          <Sparkles size={12} />
          {t.hero.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[80px]"
        >
          {t.hero.h1a}{' '}
          <span className="gradient-text-teal-purple">{t.hero.h1b}</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10 max-w-xl text-base leading-relaxed text-[#7588a3] sm:text-lg"
        >
          {t.hero.sub1}{' '}
          <span className="font-semibold text-[#31c4d8]">{t.hero.sub2}</span>,{' '}
          <span className="font-semibold text-[#f97316]">{t.hero.sub3}</span>,{' '}
          {t.hero.sub4}{' '}
          <span className="font-semibold text-[#31c4d8]">{t.hero.sub5}</span>{' '}
          {t.hero.sub6}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#31c4d8] px-6 py-3 text-sm font-semibold text-[#080c16] transition-colors hover:bg-[#31c4d8]/90"
          >
            <Play size={14} fill="currentColor" />
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            {t.hero.ctaSecondary}
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7588a3]/60">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-[#7588a3]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
