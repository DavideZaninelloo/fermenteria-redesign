# Construction Plan - Fermenteria Website

## Phase 1: Foundation & Design System (Current)
- [ ] Define Design Tokens in `tailwind.config.ts` (Colors: Warm Neutrals, Natural Green; Fonts: Elegant Serif/Sans).
- [ ] Create Global Layout components (`Navbar`, `Footer`, `WhatsAppCTA`).
- [ ] Setup folder structure for components (`/components/ui`, `/components/sections`).

## Phase 2: Homepage Development
- [ ] **Hero Section:** Strong claim, booking CTA, mobile-first optimization.
- [ ] **The Pillars:** Highlighting Artisanal, Bio, and Inclusive values.
- [ ] **Menu Preview:** Visual grid of signature dishes (using placeholders).
- [ ] **Wines & Fermentation:** Focusing on the local network.
- [ ] **Gluten-Free Inclusivity:** Dedicated section explaining the 100% GF availability.
- [ ] **Social Proof & Contact:** Reviews and Google Maps integration.

## Phase 3: The Digital Menu
- [ ] Parse `MENU-2026.pdf` content into a structured `menu.json`.
- [ ] Develop `/menu` page: Interactive, category-filtered, mobile-optimized.
- [ ] Add PDF download option for the traditionalists.

## Phase 4: SEO & Performance
- [ ] Implement `next-seo` or standard Metadata API for all pages.
- [ ] Add `Restaurant` Schema.org structured data.
- [ ] Optimize images using `next/image` with the photo-ready placeholder strategy.

## Phase 5: Finalization & Compliance
- [ ] Create `/contatti` page.
- [ ] Implement `/privacy` and `/cookie` pages (GDPR).
- [ ] Final Lighthouse audit and performance tuning.
