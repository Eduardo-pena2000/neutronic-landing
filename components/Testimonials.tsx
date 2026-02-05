"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    initials: "SM",
    text: {
      en: "Working with Neutronic transformed our entire digital presence. Their innovative approach and attention to detail exceeded all expectations. The team delivered beyond what we imagined possible.",
      es: "Trabajar con Neutronic transformó toda nuestra presencia digital. Su enfoque innovador y atención al detalle superaron todas las expectativas. El equipo entregó más allá de lo que imaginábamos."
    }
  },
  {
    name: "James Chen",
    role: "Founder, DataFlow Solutions",
    initials: "JC",
    text: {
      en: "The development team at Neutronic is exceptional. They built our platform from scratch with cutting-edge technology and delivered on time. Our user engagement increased by 300%!",
      es: "El equipo de desarrollo de Neutronic es excepcional. Construyeron nuestra plataforma desde cero con tecnología de vanguardia y entregaron a tiempo. ¡Nuestro engagement aumentó un 300%!"
    }
  },
  {
    name: "Maria Rodriguez",
    role: "CTO, CloudScale Systems",
    initials: "MR",
    text: {
      en: "Outstanding support and expertise! Neutronic didn't just build software, they became our technology partner. Their proactive approach to problem-solving is refreshing.",
      es: "¡Soporte y experiencia excepcionales! Neutronic no solo construyó software, se convirtieron en nuestro socio tecnológico. Su enfoque proactivo para resolver problemas es refrescante."
    }
  },
  {
    name: "David Kim",
    role: "VP Engineering, NextGen Apps",
    initials: "DK",
    text: {
      en: "Neutronic helped us scale our infrastructure seamlessly. Their cloud architecture expertise saved us thousands in operational costs while improving performance dramatically.",
      es: "Neutronic nos ayudó a escalar nuestra infraestructura sin problemas. Su experiencia en arquitectura cloud nos ahorró miles en costos operativos mientras mejoraba el rendimiento drásticamente."
    }
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-[var(--background)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
            Testimonials
          </span>
          <h3 className="text-4xl font-extrabold mt-4 text-[var(--foreground)]">
            {t.testimonials.title}
          </h3>
          <p className="mt-4 text-[var(--text-muted)] text-lg">
            {t.testimonials.description}
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial cards */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 lg:p-12 shadow-xl border border-[var(--card-border)] h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full flex items-center justify-center text-cyan-500 mb-6">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M3 21C3 17.134 4.79107 14 8 14C4.79107 14 3 10.866 3 7V3H9V7C9 10.866 7.20893 14 4 14V21H3ZM13 21C13 17.134 14.7911 14 18 14C14.7911 14 13 10.866 13 7V3H19V7C19 10.866 17.2089 14 14 14V21H13Z"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-lg lg:text-xl leading-relaxed text-[var(--foreground)] flex-grow">
                    &ldquo;{testimonials[current].text[language]}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[var(--foreground)]">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-[var(--text-muted)]">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-gradient-to-r from-cyan-500 to-pink-500"
                    : "w-3 bg-[var(--card-border)] hover:bg-[var(--text-muted)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
