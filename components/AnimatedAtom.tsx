"use client"

import { motion } from "framer-motion"

export default function AnimatedAtom() {
  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [0, 360] }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      }}
    >
      {/* Órbita horizontal - cyan/azul */}
      <ellipse cx="100" cy="100" rx="85" ry="32" stroke="#22D3EE" strokeWidth="2.5" fill="none"/>

      {/* Órbita diagonal derecha - púrpura */}
      <ellipse cx="100" cy="100" rx="85" ry="32" stroke="#A855F7" strokeWidth="2.5" fill="none" transform="rotate(55 100 100)"/>

      {/* Órbita diagonal izquierda - rosa/magenta */}
      <ellipse cx="100" cy="100" rx="85" ry="32" stroke="#EC4899" strokeWidth="2.5" fill="none" transform="rotate(-55 100 100)"/>

      {/* Núcleo central */}
      <circle cx="100" cy="100" r="16" stroke="#A855F7" strokeWidth="2.5" fill="none"/>
      <circle cx="100" cy="100" r="6" fill="#A855F7"/>

      {/* Electrones en órbita horizontal (cyan) */}
      <circle cx="185" cy="100" r="7" fill="#22D3EE"/>
      <circle cx="15" cy="100" r="7" fill="#22D3EE"/>

      {/* Electrones en órbita diagonal derecha (púrpura) */}
      <circle cx="52" cy="32" r="7" fill="#22D3EE"/>
      <circle cx="148" cy="168" r="7" fill="#A855F7"/>

      {/* Electrones en órbita diagonal izquierda (rosa) */}
      <circle cx="148" cy="32" r="7" fill="#EC4899"/>
      <circle cx="52" cy="168" r="7" fill="#EC4899"/>
    </motion.svg>
  )
}
