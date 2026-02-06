"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export default function Workflow() {
    const { t } = useLanguage()

    const steps = [
        {
            number: "01",
            title: t.workflow.step1,
            description: t.workflow.step1Desc,
        },
        {
            number: "02",
            title: t.workflow.step2,
            description: t.workflow.step2Desc,
        },
        {
            number: "03",
            title: t.workflow.step3,
            description: t.workflow.step3Desc,
        },
        {
            number: "04",
            title: t.workflow.step4,
            description: t.workflow.step4Desc,
        },
    ]

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Process
                    </span>
                    <h2 className="text-4xl font-extrabold text-[var(--foreground)]">
                        {t.workflow.title}
                    </h2>
                    <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto text-lg hover:text-[var(--foreground)] transition-colors duration-300">
                        {t.workflow.description}
                    </p>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-purple-500/20 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative pt-8 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Dot on the line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-0.125rem)] w-4 h-4 rounded-full bg-[var(--background)] border-2 border-cyan-500 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300" />

                            <div className="bg-[var(--card-bg)] p-6 rounded-2xl border border-[var(--card-border)] h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                                <span className="text-5xl font-bold text-[var(--card-border)] mb-4 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-pink-500 transition-all duration-300">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">{step.title}</h3>
                                <p className="text-[var(--text-muted)]">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
