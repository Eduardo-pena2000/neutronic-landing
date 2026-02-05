"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import AnimatedAtom from "./AnimatedAtom"
import { useLanguage } from "@/context/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Full screen background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-[var(--background)] to-pink-500/10 pointer-events-none -z-10" />

      {/* Background decorations with parallax */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ opacity }}
        >
          <motion.span
            className="inline-block text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Neutronic Solutions
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight text-[var(--foreground)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.hero.title1} <br />
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-[var(--text-muted)] max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold
                bg-gradient-to-r from-cyan-500 to-pink-500 shadow-lg shadow-cyan-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t.hero.cta}
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <motion.a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold
                border-2 border-[var(--card-border)] text-[var(--foreground)] bg-[var(--card-bg)]"
              whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t.nav.services}
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-[var(--card-border)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["SM", "JC", "MR"].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-[var(--background)]">
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[var(--text-muted)]">180+ happy clients</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-sm text-[var(--text-muted)] ml-1">4.9/5 rating</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center relative w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Fixed dimensions to prevent ANY deformation + Float Animation */}
          <div
            className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
            <AnimatedAtom />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
