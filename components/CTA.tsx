"use client"

import { motion } from "framer-motion"
import ContactForm from "./ContactForm"
import { useLanguage } from "@/context/LanguageContext"

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 8L10.89 13.26C11.5483 13.7165 12.4517 13.7165 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: { en: "Email Us", es: "Escríbenos" },
    value: "neutronicsolutions@gmail.com",
    subtitle: { en: "We reply within 24 hours", es: "Respondemos en 24 horas" }
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: { en: "Call Us", es: "Llámanos" },
    value: "81 3628 5741",
    subtitle: { en: "Mon-Fri, 9AM-6PM", es: "Lun-Vie, 9AM-6PM" }
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M17.657 16.657L13.414 20.9C13.039 21.275 12.525 21.484 11.993 21.484C11.461 21.484 10.947 21.275 10.572 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3 12 3C13.5822 3 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: { en: "Visit Us", es: "Visítanos" },
    value: "123 Tech Street",
    subtitle: { en: "San Francisco, CA 94102", es: "San Francisco, CA 94102" }
  }
]

export default function CTA() {
  const { t, language } = useLanguage()

  return (
    <section id="contact" className="py-20">
      <motion.h2
        className="text-4xl font-extrabold text-[var(--foreground)] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.contact.title}
      </motion.h2>

      <motion.p
        className="mt-4 text-[var(--text-muted)] text-center max-w-lg mx-auto mb-12 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {t.contact.description}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="group bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-2xl p-6 relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10, borderColor: "transparent" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-xl flex items-center justify-center text-cyan-500 group-hover:text-white group-hover:bg-white/20 transition-all mb-4">
                  {info.icon}
                </div>
                <h4 className="font-bold text-lg text-[var(--foreground)] group-hover:text-white transition-colors">
                  {info.title[language]}
                </h4>
                <p className="text-[var(--foreground)] font-semibold mt-1 group-hover:text-white transition-colors">
                  {info.value}
                </p>
                <span className="text-sm text-[var(--text-muted)] group-hover:text-white/80 transition-colors">
                  {info.subtitle[language]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
