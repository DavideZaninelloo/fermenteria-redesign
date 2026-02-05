# GEMINI.md - Fermenteria Website Redesign

## Project Overview
**Fermenteria** is an artisanal, biological, and inclusive restaurant located in Bassano del Grappa, Italy. This project involves a comprehensive website redesign, migrating from a legacy WordPress site to a modern, conversion-focused **Next.js** application.

The primary objective is to increase reservations and inquiries via WhatsApp/Phone while emphasizing the restaurant's core values: handmade artisanal cuisine, local biological ingredients, and a 100% gluten-free inclusive menu.

### Core Architecture
- **Framework:** Next.js (React) with App Router.
- **Styling:** Tailwind CSS.
- **Content Management:** Static-first approach using JSON/Markdown for easy updates without a complex CMS.
- **Hosting:** Vercel.
- **SEO:** Optimized for local search with Schema.org Restaurant structured data.

## Project Structure
- `PDR-website-redesign`: The "Single Source of Truth" containing business requirements, target personas, and strategic section ordering.
- `MENU-2026.pdf`: Current restaurant menu used for content extraction.
- `firecrawl scrape/`: Content audit and source material from the existing WordPress site.
- `CLAUDE.md`: Implementation guidance and development patterns.

## Development Roadmap (Implementation Phase)

### 1. Initialization
When starting the implementation, scaffold the project:
```bash
npx create-next-app@latest fermenteria --typescript --tailwind --eslint --app
```

### 2. Strategic Site Map
- `/`: Single-page homepage with the following sections (in order):
  1. **Hero:** Claim + WhatsApp/Phone CTA.
  2. **Three Pillars:** Artisanal, Bio, Inclusive.
  3. **Menu Preview:** Signature dishes.
  4. **Wines & Fermentation:** Local network focus.
  5. **Gluten-Free:** Messaging focused on inclusivity.
  6. **Social Proof:** Customer reviews.
  7. **Location:** Interactive map and contact.
- `/menu`: Interactive, mobile-optimized HTML menu with PDF download options.
- `/contatti`: Contact details and social links.
- `/privacy` & `/cookie`: GDPR compliance.

### 3. Key Functionalities
- **Fixed WhatsApp CTA:** Always visible for quick booking.
- **Click-to-Call:** Seamless mobile integration.
- **Placeholder Strategy:** Layouts are designed to be "Photo-Ready," working with placeholders until professional photography is available.

## Development Commands (Standard Next.js)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Compiles the production build. |
| `npm start` | Runs the production server. |
| `npm run lint` | Runs ESLint for code quality checks. |

## Content Strategy & Tone
- **Tone:** Professional, authentic, warm, and premium.
- **Keywords:** "Artigianale", "Biologico", "Gluten Free", "Bassano del Grappa".
- **Inclusivity:** Avoid treating gluten-free as a "special diet"; position it as the standard high-quality offering for everyone.

## Verification & Standards
- **Lighthouse:** Maintain scores > 90 for Mobile and Desktop.
- **Responsive:** Mobile-first approach is mandatory.
- **Accessibility:** Ensure high contrast and clear typography.

## Documentation & Logging
- **Daily Log:** EVERY development session MUST be documented in a NEW file in `/docs/daily-log/YYYY-MM-DD-feature-name.md`.
- **No Overwriting:** Never overwrite previous log files. Each file represents a discrete session of work.
- **Content:** The log should describe what was done, the reasoning behind decisions, and future plans.
