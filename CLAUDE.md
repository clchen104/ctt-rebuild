# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for California Table Tennis (CTT), a table tennis club in the San Gabriel Valley, LA. Founded by Former World Champion Gao Jun. Built with Next.js 16 App Router, React 19, and Tailwind CSS 4.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- No test framework is configured

## Architecture

**Static marketing site** — all pages are statically rendered with hardcoded content. No database, no API routes, no CMS. The contact form (`app/components/ContactForm.js`) is not yet wired to a backend.

**Routing**: Next.js App Router with flat page structure under `app/`. Each route is a single `page.js` file. Root layout (`app/layout.js`) wraps all pages with `<Navbar />` and `<Footer />`.

**Shared components** live in `app/components/`:
- `Navbar.js` — sticky header with desktop nav, "More" dropdown, mobile hamburger menu
- `Footer.js` — server component, multi-column link grid
- `SideNav.js` — scroll-tracking right-side nav with active section highlighting. Accepts an `items` prop for per-page customization (used on homepage and about page)
- `ContactForm.js` — client form with local state validation (email sending is a TODO)
- `ImageCarousel.js` — auto-rotating image carousel with manual controls

**Styling**: Tailwind CSS 4 via `@tailwindcss/postcss`. Colors are hardcoded in classes throughout — the canonical values are:
- Navy: `#1B2A4A` (primary text, dark backgrounds)
- Red: `#CC0000` (CTAs, accents, active states)
- Light gray: `#F5F5F5` (alternate section backgrounds)
- Border gray: `#D4D4D4`
- Muted text: `#6B7280`

CSS variables are also defined in `globals.css` but Tailwind classes use the hex values directly.

**Fonts**: Montserrat (`--font-heading`) for headings, Inter (`--font-body`) for body text, loaded via `next/font/google` in the root layout.

**Images**: Static files in `/public/`. Uses raw `<img>` tags, not `next/image`.

## Design System

See `DESIGN.md` for the full design system reference (color palette, typography hierarchy, component patterns, spacing). The design is border-forward (borders over shadows), inspired by Zapier's approach but adapted with CTT's navy/red brand colors.

## Key Patterns

- All interactive components use `"use client"` directive. Pages without interactivity are server components by default.
- The booking flow currently embeds Calendly via inline widget on `/booking`. All "Book Now" buttons site-wide link to `/booking`.
- The classes page uses a tab interface to switch between programs (Beginner Youth, Elite Youth, Private Lesson), each with its own schedule and pricing data defined as a static array at the top of the file.
- Path alias `@/*` maps to project root (configured in `jsconfig.json`).

@AGENTS.md
