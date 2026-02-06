"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export default function TechStack() {
    const { t } = useLanguage()

    const technologies = [
        { name: "Next.js", color: "#000000" }, // Black (Dark mode handles white)
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Node.js", color: "#339933" },
        { name: "Framer Motion", color: "#0055FF" },
        { name: "AWS", color: "#FF9900" },
        { name: "Docker", color: "#2496ED" },
    ]

    // Duplicate for seamless loop
    const allTechs = [...technologies, ...technologies, ...technologies]

    return (
        <section className="py-12 relative overflow-hidden bg-[var(--bg-secondary)] border-y border-[var(--card-border)]">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h3 className="text-xl font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    {t.techStack.title}
                </h3>
            </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex gap-8 md:gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {allTechs.map((tech, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 group/item cursor-default"
                        >
                            {/* Fallback to text if no SVG, but here we use text primarily for simplicity and performance */}
                            <span
                                className="text-2xl font-bold text-[var(--text-muted)] transition-colors duration-300 group-hover/item:text-[var(--foreground)]"
                                style={{
                                    // In a real scenario, use actual SVG logos. 
                                    // Here we simulate the "brand color on hover" effect
                                    // by using CSS variable override or direct style if needed.
                                    // For now, simple text highlight.
                                }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient fades on sides */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10" />
            </div>
        </section>
    )
}
