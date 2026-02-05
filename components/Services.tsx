"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'
import { useLanguage } from "@/context/LanguageContext"

type ServiceType = "innovation" | "development" | "support"

export default function Services() {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)

  const services: { title: string; icon: "bulb" | "monitor" | "gear"; serviceKey: ServiceType }[] = [
    { title: t.services.innovation, icon: "bulb", serviceKey: "innovation" },
    { title: t.services.development, icon: "monitor", serviceKey: "development" },
    { title: t.services.support, icon: "gear", serviceKey: "support" },
  ]

  return (
    <section id="services" className="py-20 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent mb-4">
          {t.nav.services}
        </span>
      </motion.div>

      <motion.h2
        className="text-4xl font-extrabold text-[var(--foreground)] relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {t.services.title}
      </motion.h2>

      <motion.p
        className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto text-lg relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.services.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.serviceKey}
            title={service.title}
            icon={service.icon}
            index={index}
            onClick={() => setSelectedService(service.serviceKey)}
          />
        ))}
      </div>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  )
}
