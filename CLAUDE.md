# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fermenteria Website Redesign** - A conversion-focused restaurant website for an artisanal biological restaurant in Bassano del Grappa, Italy. The goal is to replace the current WordPress site with a modern, mobile-optimized showcase that increases WhatsApp inquiries and phone bookings.

**Key Business Values to Emphasize:**
- Handmade artisanal cuisine prepared fresh daily
- Biological/km0 ingredients (local sourcing)
- 100% gluten-free inclusive menu (not "special diet" but standard offering)
- Traditional Italian techniques with modern inclusivity

## Architecture & Tech Stack

**Recommended Stack** (from PDR requirements):
- **Frontend:** Next.js with React
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Content:** Static JSON/Markdown (no backend needed)
- **SEO:** Schema.org Restaurant structured data

**Site Structure:**
- `/` - Homepage (single-page with strategic sections)
- `/menu` - Interactive menu page
- `/contatti` - Contact page
- `/privacy` - Privacy policy
- `/cookie` - Cookie policy

## Development Commands

Since this is a planning-phase project, no package.json exists yet. When implementing:

```bash
# Initial setup (when creating the Next.js project)
npx create-next-app@latest fermenteria --typescript --tailwind --eslint --app
cd fermenteria

# Development
npm run dev

# Build & Production
npm run build
npm start

# Linting & Code Quality
npm run lint
```

## Key Integration Points

**Required External Integrations:**
- Google Maps embed (restaurant location)
- WhatsApp fixed CTA button (always visible)
- Click-to-call phone functionality
- Social media links (Facebook, Instagram, YouTube, TripAdvisor)
- FoodRacers delivery integration
- PDF downloads (menu, wine list, allergen info)

## Homepage Section Architecture

**Strategic Section Order** (optimized for conversion):
1. **Hero** - Strong claim + WhatsApp/Phone CTA
2. **Why Fermenteria** - Three pillars (Artisanal/Bio/Inclusive)
3. **Featured Dishes** - Menu preview
4. **Wines & Fermentation** - Local wines + craft story
5. **Gluten-Free & Inclusivity** - Non-apologetic messaging
6. **Customer Testimonials** - Social proof
7. **Location** - Google Maps + contact info
8. **Takeout & Delivery** - Additional revenue streams
9. **About Us** - Chef story + team

## Image Architecture (Photo-Ready Strategy)

**Critical Pattern:** The site must work without professional photos initially. All image spaces use specific aspect ratios with placeholder strategy:

**Image Types Defined:**
- **Hero:** 16:9 horizontal (handmade/action shots)
- **Artisanal section:** 4:5 vertical (hands working pasta)
- **Bio section:** 16:9 horizontal (fresh ingredients)
- **Signature dishes:** 1:1 squares (6 featured items)
- **Wines:** 4:5 vertical (bottles/glasses)
- **Team/Chef:** Portrait + 16:9 kitchen shots
- **Ambient:** 16:9 interior restaurant shots

**Technical Requirements:**
- Use `next/image` for all images
- Lock aspect ratios to prevent layout shift
- Implement lazy loading
- Support WebP/AVIF formats
- Add comments in code marking future photo replacement points

## Content Strategy

**Core Messaging Framework:**
- **Artisanal:** "Fatto a mano ogni giorno" (handmade daily)
- **Biological:** Organic, km0, local sourcing
- **Inclusive:** Entire menu available gluten-free (not special accommodation)

**Menu Content Management:**
- Menu data in JSON/Markdown (not CMS)
- Easy updates by restaurant staff without code changes
- Filterable HTML version + downloadable PDF
- Mobile-optimized presentation

## Development Process Rules

**Logging & Documentation:**
- **Mandatory Log:** Every work session REQUIRES a NEW daily log file.
- **Path:** `/docs/daily-log/YYYY-MM-DD-short-description.md`
- **Rule:** NEVER overwrite or modify previous daily logs. Create a unique file for each session to preserve historical context.

## Performance & SEO Requirements

**Technical Standards:**
- Lighthouse score > 90 (mobile and desktop)
- Mobile-first responsive design
- Schema.org Restaurant structured data
- Local SEO optimization ("ristorante bio Bassano", "gluten free Bassano")
- GDPR compliance (cookie banner, privacy policy)

## Source Content

**Project Documents:**
- `PDR-website-redesign` - Complete project requirements (single source of truth)
- `MENU-2026.pdf` - Current restaurant menu
- `firecrawl scrape/` - Content audit from existing WordPress site

**Current Site Analysis Available:**
- `firecrawl scrape/www.fermenteria.it_.md` - Homepage structure and messaging
- Various `evento_*.md` files - Blog posts and events content

## Key Constraints

**Design Requirements:**
- Mobile-first approach (primary traffic source)
- Fast loading on mobile connections
- Accessibility compliance (color contrast, keyboard navigation)
- GDPR compliance with cookie management

**Content Limitations:**
- Professional photography not yet available
- All layouts must accommodate placeholder → real photo swaps
- No complex backend/CMS needed (restaurant staff updates via file editing)

## Conversion Optimization

**Primary CTAs:**
- WhatsApp button (fixed/floating element)
- Click-to-call phone number
- Multiple booking touchpoints throughout the page

**Success Metrics:**
- Increased WhatsApp contact requests
- Higher menu page engagement
- Improved mobile call conversion
- Better local SEO rankings
- Reduced mobile bounce rate

## Development Notes

- **No over-engineering:** Keep solutions simple and focused on requirements
- **Static-first:** No backend complexity unless absolutely necessary
- **Photo-ready:** Every image placement designed for easy asset swapping
- **Inclusive messaging:** Position gluten-free as standard, not special accommodation
- **Local focus:** Optimize for Bassano del Grappa local search terms

## Reference Priority

When making decisions, always reference the `PDR-website-redesign` document first - it contains the complete business requirements, user personas, and success criteria for the project.