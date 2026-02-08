"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <>
      <motion.nav
        className="flex items-center justify-between py-4 flex-nowrap whitespace-nowrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href="#home"
          className="flex items-center gap-3 cursor-pointer shrink-0 min-w-0"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            {/* Núcleo central - Púrpura sólido */}
            <circle className="atom-nucleus" cx="50" cy="50" r="8" fill="#A855F7" />

            {/* Órbitas rotando - Cyan, Púrpura, Rosa (sólidos para evitar problemas de URL) */}
            <ellipse className="atom-orbit-1" cx="50" cy="50" rx="42" ry="16" stroke="#22D3EE" strokeWidth="2" fill="none" />
            <ellipse className="atom-orbit-2" cx="50" cy="50" rx="42" ry="16" stroke="#A855F7" strokeWidth="2" fill="none" />
            <ellipse className="atom-orbit-3" cx="50" cy="50" rx="42" ry="16" stroke="#EC4899" strokeWidth="2" fill="none" />

            {/* Electrones - Cyan para contraste */}
            <circle className="atom-electron" cx="92" cy="50" r="4" fill="#22D3EE" />
            <circle className="atom-electron" cx="26" cy="16" r="4" fill="#22D3EE" />
            <circle className="atom-electron" cx="74" cy="84" r="4" fill="#22D3EE" />
          </svg>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xl font-bold text-[var(--foreground)] truncate">Neutronic</span>
            <span className="text-[10px] tracking-[0.2em] uppercase bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent font-bold">Solutions</span>
          </div>
        </motion.a>

        <div className="flex items-center gap-6 shrink-0">
          <div className="flex gap-8 text-sm text-[var(--text-muted)] font-medium hidden md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative transition-colors duration-300 hover:text-cyan-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "en" ? "ES" : "EN"}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[var(--foreground)]"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay */}
      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-x-0 top-[73px] bottom-0 bg-[var(--background)] z-[9999] flex flex-col items-center justify-center gap-8 md:hidden border-t border-[var(--card-border)]/50"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-bold text-[var(--foreground)] hover:text-cyan-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>,
        document.body
      )}
    </>
  )
}
