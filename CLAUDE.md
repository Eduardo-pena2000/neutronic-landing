# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev      # Start development server at localhost:3000
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

This project uses **pnpm** as the package manager.

## Architecture

This is a **Next.js 16** landing page for "Neutronic Solutions" using the App Router.

### Tech Stack
- Next.js 16 with App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Framer Motion for animations

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page composing Navbar, Hero, Services, and CTA sections
  - `layout.tsx` - Root layout with Geist font configuration
  - `globals.css` - Global styles with Tailwind and CSS variables for theming
- `components/` - React components for landing page sections
  - `AnimatedAtom.tsx` - Client component using Framer Motion for rotating atom animation
- `public/icons/` - SVG icons used by ServiceCard components

### Path Aliases
`@/*` maps to the project root (configured in tsconfig.json).

### Client vs Server Components
Components are server components by default. Only `AnimatedAtom.tsx` uses `"use client"` for Framer Motion animations.
