"use client"

import { motion } from "framer-motion"

export default function AnimatedAtom() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full h-auto aspect-square"
    >
      <defs>
        <linearGradient id="atomLargeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
      </defs>

      {/* Núcleo central */}
      <circle className="atom-nucleus" cx="100" cy="100" r="15" fill="url(#atomLargeGradient)" />

      {/* Órbitas rotando */}
      <g className="atom-orbit-1">
        <ellipse cx="100" cy="100" rx="80" ry="30" stroke="url(#atomLargeGradient)" strokeWidth="4" fill="none" />
        <circle cx="100" cy="40" r="10" fill="url(#atomLargeGradient)" />
      </g>

      <g className="atom-orbit-2">
        <ellipse cx="100" cy="100" rx="80" ry="30" stroke="url(#atomLargeGradient)" strokeWidth="4" fill="none" />
        <circle cx="170" cy="130" r="10" fill="url(#atomLargeGradient)" />
      </g>

      <g className="atom-orbit-3">
        <ellipse cx="100" cy="100" rx="80" ry="30" stroke="url(#atomLargeGradient)" strokeWidth="4" fill="none" />
        <circle cx="30" cy="130" r="10" fill="url(#atomLargeGradient)" />
      </g>
    </svg>
  )
}
