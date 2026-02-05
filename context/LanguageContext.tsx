"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Language = "en" | "es"

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title1: "Innovative",
      title2: "Tech Solutions",
      description: "We transform ideas into powerful digital solutions that drive your business forward.",
      cta: "Get Started",
    },
    about: {
      title: "About Us",
      description: "We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.",
      mission: "Our Mission",
      missionText: "To empower businesses with cutting-edge technology solutions that drive growth and innovation.",
      vision: "Our Vision",
      visionText: "To be the leading technology partner for businesses seeking digital transformation.",
      values: "Our Values",
      valuesText: "Innovation, integrity, and excellence in everything we do.",
    },
    stats: {
      clients: "Happy Clients",
      projects: "Projects Completed",
      years: "Years Experience",
      support: "24/7 Support",
    },
    services: {
      title: "Our Services",
      description: "We offer comprehensive solutions tailored to your business needs.",
      innovation: "Innovation",
      development: "Development",
      support: "Support",
    },
    testimonials: {
      title: "What Our Clients Say",
      description: "Don't just take our word for it - hear from some of our satisfied clients.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about our services.",
      q1: "What services do you offer?",
      a1: "We offer a wide range of services including web development, mobile app development, UI/UX design, cloud solutions, and technical consulting.",
      q2: "How long does a typical project take?",
      a2: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take several months.",
      q3: "Do you provide ongoing support?",
      a3: "Yes! We offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally.",
      q4: "What technologies do you work with?",
      a4: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, and more. We choose the best tools for each project.",
    },
    contact: {
      title: "Get in Touch",
      description: "Have a project in mind? Let's work together to bring your ideas to life.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "+1 (555) 000-0000",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message Sent!",
      successMessage: "We'll get back to you soon.",
      sendAnother: "Send another message",
      networkError: "Network error. Please check your connection.",
      genericError: "Something went wrong. Please try again.",
    },
    footer: {
      description: "Transforming ideas into powerful digital solutions.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      address: "123 Tech Street, Innovation City",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      title1: "Soluciones",
      title2: "Tecnológicas",
      description: "Transformamos ideas en soluciones digitales poderosas que impulsan tu negocio.",
      cta: "Comenzar",
    },
    about: {
      title: "Sobre Nosotros",
      description: "Somos un equipo de desarrolladores y diseñadores apasionados dedicados a crear experiencias digitales excepcionales.",
      mission: "Nuestra Misión",
      missionText: "Empoderar a las empresas con soluciones tecnológicas de vanguardia que impulsen el crecimiento y la innovación.",
      vision: "Nuestra Visión",
      visionText: "Ser el socio tecnológico líder para empresas que buscan transformación digital.",
      values: "Nuestros Valores",
      valuesText: "Innovación, integridad y excelencia en todo lo que hacemos.",
    },
    stats: {
      clients: "Clientes Felices",
      projects: "Proyectos Completados",
      years: "Años de Experiencia",
      support: "Soporte 24/7",
    },
    services: {
      title: "Nuestros Servicios",
      description: "Ofrecemos soluciones integrales adaptadas a las necesidades de tu negocio.",
      innovation: "Innovación",
      development: "Desarrollo",
      support: "Soporte",
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      description: "No solo confíes en nuestra palabra - escucha a nuestros clientes satisfechos.",
    },
    faq: {
      title: "Preguntas Frecuentes",
      description: "Encuentra respuestas a preguntas comunes sobre nuestros servicios.",
      q1: "¿Qué servicios ofrecen?",
      a1: "Ofrecemos una amplia gama de servicios incluyendo desarrollo web, desarrollo de apps móviles, diseño UI/UX, soluciones en la nube y consultoría técnica.",
      q2: "¿Cuánto tiempo toma un proyecto típico?",
      a2: "Los tiempos varían según la complejidad y alcance. Un sitio web simple puede tomar 2-4 semanas, mientras que una aplicación compleja podría tomar varios meses.",
      q3: "¿Ofrecen soporte continuo?",
      a3: "¡Sí! Ofrecemos paquetes completos de mantenimiento y soporte para asegurar que tu solución siga funcionando óptimamente.",
      q4: "¿Con qué tecnologías trabajan?",
      a4: "Trabajamos con tecnologías modernas incluyendo React, Next.js, Node.js, Python, AWS y más. Elegimos las mejores herramientas para cada proyecto.",
    },
    contact: {
      title: "Contáctanos",
      description: "¿Tienes un proyecto en mente? Trabajemos juntos para hacer realidad tus ideas.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@correo.com",
      phone: "Teléfono",
      phonePlaceholder: "+52 (555) 000-0000",
      message: "Mensaje",
      messagePlaceholder: "¿Cómo podemos ayudarte?",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje Enviado!",
      successMessage: "Te responderemos pronto.",
      sendAnother: "Enviar otro mensaje",
      networkError: "Error de red. Verifica tu conexión.",
      genericError: "Algo salió mal. Intenta de nuevo.",
    },
    footer: {
      description: "Transformando ideas en soluciones digitales poderosas.",
      quickLinks: "Enlaces Rápidos",
      contactInfo: "Información de Contacto",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados.",
      address: "123 Calle Tech, Ciudad Innovación",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
    },
  },
}

type Translations = typeof translations.en

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null
    if (stored) {
      setLanguage(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "es" : "en")
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
