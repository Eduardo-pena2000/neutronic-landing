"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

type ServiceType = "innovation" | "development" | "support"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceType | null
}

const servicesData = {
  innovation: {
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="35" r="20" stroke="white" strokeWidth="4"/>
        <path d="M 38 55 Q 38 70 50 75 Q 62 70 62 55" stroke="white" strokeWidth="4" fill="none"/>
        <line x1="42" y1="75" x2="58" y2="75" stroke="white" strokeWidth="4"/>
        <line x1="44" y1="82" x2="56" y2="82" stroke="white" strokeWidth="4"/>
        <line x1="50" y1="15" x2="50" y2="5" stroke="white" strokeWidth="3"/>
        <line x1="70" y1="20" x2="77" y2="13" stroke="white" strokeWidth="3"/>
        <line x1="30" y1="20" x2="23" y2="13" stroke="white" strokeWidth="3"/>
      </svg>
    ),
    title: { en: "Innovation", es: "Innovación" },
    tagline: { en: "Transforming Ideas into Reality", es: "Transformando Ideas en Realidad" },
    features: {
      en: [
        { title: "Creative Ideation", description: "We help you brainstorm and develop groundbreaking concepts that set you apart from the competition." },
        { title: "Rapid Prototyping", description: "Transform your ideas into tangible prototypes quickly with our agile development process." },
        { title: "Market Analysis", description: "Deep dive into market trends and user needs to ensure your innovation hits the mark." },
        { title: "Future-Ready Solutions", description: "Build scalable, adaptable solutions that grow with your business and technology landscape." }
      ],
      es: [
        { title: "Ideación Creativa", description: "Te ayudamos a desarrollar conceptos innovadores que te diferencien de la competencia." },
        { title: "Prototipado Rápido", description: "Transforma tus ideas en prototipos tangibles rápidamente con nuestro proceso ágil." },
        { title: "Análisis de Mercado", description: "Análisis profundo de tendencias y necesidades para asegurar el éxito de tu innovación." },
        { title: "Soluciones Preparadas", description: "Construye soluciones escalables que crezcan con tu negocio y tecnología." }
      ]
    },
    benefits: {
      en: ["First-Mover Advantage", "Competitive Edge", "Increased ROI", "Brand Differentiation", "Customer Loyalty", "Market Leadership"],
      es: ["Ventaja Competitiva", "Diferenciación", "Mayor ROI", "Liderazgo de Mercado", "Lealtad del Cliente", "Innovación Continua"]
    }
  },
  development: {
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="15" width="80" height="50" rx="3" stroke="white" strokeWidth="4"/>
        <line x1="30" y1="75" x2="70" y2="75" stroke="white" strokeWidth="4"/>
        <line x1="45" y1="65" x2="50" y2="75" stroke="white" strokeWidth="4"/>
        <line x1="55" y1="65" x2="50" y2="75" stroke="white" strokeWidth="4"/>
        <rect x="20" y="25" width="60" height="30" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: { en: "Development", es: "Desarrollo" },
    tagline: { en: "Building Powerful Digital Experiences", es: "Construyendo Experiencias Digitales Poderosas" },
    features: {
      en: [
        { title: "Custom Web Applications", description: "Tailored web solutions built with modern frameworks like React, Vue, and Node.js for optimal performance." },
        { title: "Mobile Development", description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android." },
        { title: "Cloud Architecture", description: "Scalable cloud infrastructure on AWS, Azure, or Google Cloud to support your growing business." },
        { title: "API Integration", description: "Seamlessly connect your systems with third-party services and custom API development." }
      ],
      es: [
        { title: "Aplicaciones Web Personalizadas", description: "Soluciones web construidas con frameworks modernos como React, Vue y Node.js." },
        { title: "Desarrollo Móvil", description: "Apps nativas y multiplataforma que ofrecen experiencias fluidas en iOS y Android." },
        { title: "Arquitectura Cloud", description: "Infraestructura escalable en AWS, Azure o Google Cloud para tu negocio en crecimiento." },
        { title: "Integración de APIs", description: "Conecta tus sistemas con servicios de terceros y desarrollo de APIs personalizadas." }
      ]
    },
    benefits: {
      en: ["Fast Time-to-Market", "Scalable Infrastructure", "Clean Code", "Security First", "Cross-Platform", "Performance Optimized"],
      es: ["Rápido al Mercado", "Infraestructura Escalable", "Código Limpio", "Seguridad Primero", "Multiplataforma", "Alto Rendimiento"]
    }
  },
  support: {
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="4"/>
        <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="4"/>
        <rect x="47" y="20" width="6" height="8" fill="white"/>
        <rect x="47" y="72" width="6" height="8" fill="white"/>
        <rect x="20" y="47" width="8" height="6" fill="white"/>
        <rect x="72" y="47" width="8" height="6" fill="white"/>
      </svg>
    ),
    title: { en: "Support", es: "Soporte" },
    tagline: { en: "Always Here When You Need Us", es: "Siempre Aquí Cuando Nos Necesitas" },
    features: {
      en: [
        { title: "24/7 Monitoring", description: "Round-the-clock system monitoring to catch and resolve issues before they impact your business." },
        { title: "Rapid Response Team", description: "Dedicated support engineers available to address critical issues within minutes, not hours." },
        { title: "Preventive Maintenance", description: "Proactive system updates, security patches, and performance optimization to prevent downtime." },
        { title: "Expert Consultation", description: "Strategic guidance from our technical experts to help you make informed technology decisions." }
      ],
      es: [
        { title: "Monitoreo 24/7", description: "Monitoreo continuo para detectar y resolver problemas antes de que afecten tu negocio." },
        { title: "Equipo de Respuesta Rápida", description: "Ingenieros de soporte dedicados disponibles para resolver problemas críticos en minutos." },
        { title: "Mantenimiento Preventivo", description: "Actualizaciones proactivas, parches de seguridad y optimización para prevenir caídas." },
        { title: "Consultoría Experta", description: "Orientación estratégica de nuestros expertos para tomar decisiones tecnológicas informadas." }
      ]
    },
    benefits: {
      en: ["99.9% Uptime SLA", "Priority Support", "Dedicated Account Manager", "Quarterly Reviews", "Knowledge Base Access", "Training & Documentation"],
      es: ["99.9% SLA Uptime", "Soporte Prioritario", "Gerente Dedicado", "Revisiones Trimestrales", "Base de Conocimiento", "Capacitación"]
    }
  }
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const { language } = useLanguage()

  if (!service) return null

  const data = servicesData[service]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-[var(--card-bg)] rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-8 text-center text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {data.icon}
              </motion.div>
              <h3 className="text-3xl font-extrabold mt-4">{data.title[language]}</h3>
              <p className="text-white/90 mt-2">{data.tagline[language]}</p>
            </div>

            {/* Body */}
            <div className="p-8">
              {/* Features */}
              <div className="space-y-6 mb-8">
                {data.features[language].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-[var(--foreground)]">{feature.title}</h5>
                      <p className="text-[var(--text-muted)] mt-1">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-[var(--bg-secondary)] rounded-2xl p-6">
                <h4 className="font-bold text-lg text-[var(--foreground)] mb-4">
                  {language === "en" ? "Key Benefits" : "Beneficios Clave"}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {data.benefits[language].map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-[var(--card-bg)] px-4 py-3 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent border border-cyan-500/20"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 pt-0 text-center">
              <motion.button
                onClick={onClose}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === "en" ? `Get Started with ${data.title.en}` : `Comenzar con ${data.title.es}`}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
