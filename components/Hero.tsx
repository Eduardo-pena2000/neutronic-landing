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
              href="https://wa.me/528144246517?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold
                bg-gradient-to-r from-cyan-500 to-pink-500 shadow-lg shadow-cyan-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t.hero.cta}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.932 1.395 5.608L.05 23.708a.6.6 0 00.735.728l5.956-1.575A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.56 9.56 0 01-5.1-1.469l-.36-.216-3.542.937.923-3.457-.234-.372A9.56 9.56 0 012.4 12c0-5.302 4.298-9.6 9.6-9.6s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6z"/>
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
