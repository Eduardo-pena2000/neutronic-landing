"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

type Props = {
  title: string
  icon: 'bulb' | 'monitor' | 'gear'
  index?: number
  onClick?: () => void
}

const icons = {
  bulb: (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="35" r="20" stroke="url(#iconGradient)" strokeWidth="4" fill="none"/>
      <path d="M 38 55 Q 38 70 50 75 Q 62 70 62 55" stroke="url(#iconGradient)" strokeWidth="4" fill="none"/>
      <line x1="42" y1="75" x2="58" y2="75" stroke="url(#iconGradient)" strokeWidth="4"/>
      <line x1="44" y1="82" x2="56" y2="82" stroke="url(#iconGradient)" strokeWidth="4"/>
      <line x1="50" y1="15" x2="50" y2="5" stroke="url(#iconGradient)" strokeWidth="3"/>
      <line x1="70" y1="20" x2="77" y2="13" stroke="url(#iconGradient)" strokeWidth="3"/>
      <line x1="30" y1="20" x2="23" y2="13" stroke="url(#iconGradient)" strokeWidth="3"/>
    </svg>
  ),
  monitor: (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
      </defs>
      <rect x="10" y="15" width="80" height="50" rx="3" stroke="url(#iconGradient2)" strokeWidth="4" fill="none"/>
      <line x1="30" y1="75" x2="70" y2="75" stroke="url(#iconGradient2)" strokeWidth="4"/>
      <line x1="45" y1="65" x2="50" y2="75" stroke="url(#iconGradient2)" strokeWidth="4"/>
      <line x1="55" y1="65" x2="50" y2="75" stroke="url(#iconGradient2)" strokeWidth="4"/>
      <rect x="20" y="25" width="60" height="30" stroke="url(#iconGradient2)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  gear: (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="15" stroke="url(#iconGradient3)" strokeWidth="4" fill="none"/>
      <circle cx="50" cy="50" r="25" stroke="url(#iconGradient3)" strokeWidth="4" fill="none"/>
      <rect x="47" y="20" width="6" height="8" fill="url(#iconGradient3)"/>
      <rect x="47" y="72" width="6" height="8" fill="url(#iconGradient3)"/>
      <rect x="20" y="47" width="8" height="6" fill="url(#iconGradient3)"/>
      <rect x="72" y="47" width="8" height="6" fill="url(#iconGradient3)"/>
    </svg>
  ),
}

const shortDescriptions = {
  bulb: { en: "Cutting-edge solutions for tomorrow's challenges", es: "Soluciones innovadoras para los desafíos del mañana" },
  monitor: { en: "Custom software built for your unique needs", es: "Software personalizado para tus necesidades únicas" },
  gear: { en: "24/7 expert assistance when you need it most", es: "Asistencia experta 24/7 cuando más lo necesitas" }
}

export default function ServiceCard({ title, icon, index = 0, onClick }: Props) {
  const { language } = useLanguage()

  return (
    <motion.div
      className="group border-2 border-[var(--card-border)] bg-[var(--card-bg)] rounded-3xl p-8 text-center cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        borderColor: "transparent"
      }}
      onClick={onClick}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <div className="relative z-10">
        <motion.div
          className="flex justify-center mb-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icons[icon]}
        </motion.div>
        <h3 className="font-bold text-xl text-[var(--foreground)] group-hover:text-white transition-colors mb-2">
          {title}
        </h3>
        <p className="text-[var(--text-muted)] group-hover:text-white/80 transition-colors text-sm mb-4">
          {shortDescriptions[icon][language]}
        </p>
        <span className="inline-flex items-center gap-1 text-cyan-500 group-hover:text-white font-semibold text-sm transition-colors">
          {language === "en" ? "Learn more" : "Saber más"}
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </motion.div>
  )
}
