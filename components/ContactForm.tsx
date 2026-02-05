"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

// Reemplaza con tu Form ID de Formspree (https://formspree.io)
const FORMSPREE_ID = "xvzqedgl"

export default function ContactForm() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        const data = await response.json()
        setError(data.error || t.contact.genericError)
      }
    } catch {
      setError(t.contact.networkError)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-400">{t.contact.success}</h3>
        <p className="text-green-600 dark:text-green-500 mt-2">{t.contact.successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-700 dark:text-green-400 underline hover:no-underline"
        >
          {t.contact.sendAnother}
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2 text-left">
            {t.contact.name}
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
            placeholder={t.contact.namePlaceholder}
            whileFocus={{ scale: 1.01 }}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2 text-left">
            {t.contact.email}
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
            placeholder={t.contact.emailPlaceholder}
            whileFocus={{ scale: 1.01 }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2 text-left">
          {t.contact.phone}
        </label>
        <motion.input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
          placeholder={t.contact.phonePlaceholder}
          whileFocus={{ scale: 1.01 }}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2 text-left">
          {t.contact.message}
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
          placeholder={t.contact.messagePlaceholder}
          whileFocus={{ scale: 1.01 }}
        />
      </div>

      {error && (
        <motion.div
          className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-lg text-white font-semibold
          bg-gradient-to-r from-cyan-500 to-pink-500 shadow-lg shadow-cyan-500/30
          disabled:opacity-70 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {t.contact.sending}
          </span>
        ) : (
          t.contact.submit
        )}
      </motion.button>
    </motion.form>
  )
}
