"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export default function Portfolio() {
    const { t } = useLanguage()

    const projects = [
        {
            title: t.portfolio.project1Title,
            description: t.portfolio.project1Desc,
            gradient: "from-blue-500 to-cyan-500",
            icon: "🛍️",
        },
        {
            title: t.portfolio.project2Title,
            description: t.portfolio.project2Desc,
            gradient: "from-purple-500 to-pink-500",
            icon: "💳",
        },
        {
            title: t.portfolio.project3Title,
            description: t.portfolio.project3Desc,
            gradient: "from-amber-500 to-orange-500",
            icon: "📊",
        },
    ]

    return (
        <section className="py-20 bg-[var(--bg-secondary)] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Works
                    </span>
                    <h2 className="text-4xl font-extrabold text-[var(--foreground)]">
                        {t.portfolio.title}
                    </h2>
                    <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto text-lg">
                        {t.portfolio.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Background with Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transform transition-transform duration-500">
                                <div className="absolute top-8 right-8 text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    {project.description}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {t.portfolio.viewProject}
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
