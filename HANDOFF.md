# Project Handoff Document — Z's Exterior Services Landing Page

> Handoff for continued development (Bolt.new / any AI agent or developer).
> Last updated: June 2026.

---

## 1. Project Overview

A single-page marketing website for **Z's Exterior Services**, a family-run landscaping and exterior services company based in Manassas, VA, serving Northern Virginia. The page is a conversion-focused, dark-themed, animated landing page that showcases services, builds trust, displays testimonials, and drives visitors toward requesting a free quote.

**Primary goal:** A visually polished, dynamic (animated, interactive) marketing page. Emphasis is on motion (scroll-triggered reveals, hover interactions, a Ken Burns hero) and a modern, trustworthy aesthetic.

**Business details used on the site:**
- Phone: (571) 279-5452
- Email: zsexteriors@gmail.com
- Location: Manassas, VA — Northern Virginia
- Hours: Mon–Fri, 8:00 AM – 7:00 PM
- Social proof: 220+ five-star reviews

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript 5.7.3 |
| UI library | React 19 |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Animation | Framer Motion 12 |
| Icons | lucide-react |
| Font | Inter (via `next/font/google`) |
| Analytics | @vercel/analytics (production only) |
| UI primitives | shadcn/ui (button only so far), @base-ui/react |
| Package manager | pnpm |
| Deployment target | Vercel |

> Note: The original spec referenced Vite + React. The actual scaffold is **Next.js App Router**. The component logic is framework-agnostic React and can be ported to Vite/Bolt if needed (see Section 13).

---

## 3. Folder Structure

```
.
├── app/
│   ├── globals.css         # Tailwind v4 import + @theme tokens + base styles
│   ├── layout.tsx          # Root layout, metadata, Inter font, Analytics
│   └── page.tsx            # Home page — assembles all sections in order
├── components/
│   ├── Navbar.tsx          # Sticky nav, transparent→solid on scroll, mobile drawer
│   ├── Hero.tsx            # Full-screen hero, Ken Burns bg, staggered intro
│   ├── TrustBar.tsx        # 4 trust indicators, dark, green left borders
│   ├── Services.tsx        # 9 service cards w/ photo bg + hover reveal
│   ├── Testimonials.tsx    # Review cards, gold stars, quote marks
│   ├── WhyChooseUs.tsx     # 3 pillars w/ large faded numbers
│   ├── CTABanner.tsx       # Full-width green call-to-action banner
│   ├── Footer.tsx          # 4-column dark footer + bottom legal bar
│   └── ui/
│       └── button.tsx      # shadcn button primitive
├── lib/
│   └── utils.ts            # cn() class merge helper
├── public/
│   ├── hero-bg.png         # Generated hero background
│   └── services/           # 9 generated service images (PNG)
│       ├── plant-installation.png
│       ├── mulching.png
│       ├── yard-cleanup.png
│       ├── hardscaping.png
│       ├── drainage.png
│       ├── leaf-removal.png
│       ├── power-washing.png
│       ├── led-installs.png
│       └── snow-removal.png
├── components.json         # shadcn config
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

> Cleanup note: `public/` also contains throwaway QA screenshots (`preview.png`, `preview-mid.png`, `preview-bottom.png`, `s1.png`, `s2.png`, `hover.png`, `hover2.png`) and default placeholder assets. These can be safely deleted.

---

## 4. Components Created

| Component | Client/Server | Description |
|-----------|---------------|-------------|
| `Navbar` | `'use client'` | Fixed header. Transparent over hero, switches to white/blur with shadow after 20px scroll. Desktop links + "Get a Free Quote" CTA. Mobile hamburger opens an animated (Framer Motion) drawer. Links: Home, About, FAQ, Contact. |
| `Hero` | `'use client'` | Full-viewport section. Background image with an infinite Ken Burns zoom (scale 1→1.1, reverse loop). 55% black overlay. Staggered fade-in of badge, headline, subtext, and two CTA buttons. Bottom gradient fade into the dark page. |
| `TrustBar` | `'use client'` | Dark section. 4 trust cards (icon + title + text) with a bright-green left border and `whileInView` bounce/fade-in animation. |
| `Services` | `'use client'` | Dark section. Responsive grid of 9 cards. Each card is a full-bleed photo (local PNG) with a dark gradient, white uppercase title, green underline accent. On hover: image zooms, description + "Learn More" button reveal. |
| `Testimonials` | `'use client'` | Dark section. Review cards on `#2d2d2d` with green top border, gold star ratings, large faded quote mark, green reviewer names. Includes a "220+ Reviews" CTA. |
| `WhyChooseUs` | `'use client'` | Section (`#0f0f0f`). 3 value pillars, each with a large faded green number, title, and description. `id="about"`. |
| `CTABanner` | `'use client'` | Full-width brand-green banner with headline and free-quote button. |
| `Footer` | `'use client'` | `#1a1a1a` 4-column footer: brand + social, services list, company links, contact info. Bottom bar with copyright + legal links. `id="contact"`. Includes an inline `GoogleIcon` SVG (lucide has no Google icon). |
| `ui/button` | Server | shadcn/ui button primitive (currently unused by sections; raw `<a>`/`<button>` are used instead). |

---

## 5. Routes / Pages Created

This is a **single-page application**. There is only one route:

- `/` (`app/page.tsx`) — the full landing page, rendering all sections in order: Navbar → Hero → TrustBar → Services → Testimonials → WhyChooseUs → CTABanner → Footer.

In-page navigation uses anchor hash links to section IDs:
- `#home` → Hero
- `#about` → WhyChooseUs
- `#contact` → Footer
- `#faq` → **no matching section yet (broken anchor — see Pending Tasks)**
- `#services`, `#testimonials`, `#gallery` → referenced in Footer but **no matching IDs on those sections yet**

---

## 6. Styling System

- **Tailwind CSS v4**, configured CSS-first in `app/globals.css` via `@import 'tailwindcss'` and an `@theme inline` block. There is **no `tailwind.config.js`**.
- **Font:** Inter, loaded in `layout.tsx` as a CSS variable `--font-inter`, exposed to Tailwind as `--font-sans`. Use the `font-sans` class.
- **Design tokens** defined in `globals.css`:
  - `--color-brand-green: #3a5a40` (primary)
  - `--color-brand-light-green: #588157`
  - `--color-brand-dark: #1a1a1a`
  - `--color-brand-gray-bg: #f5f5f5`
  - `--color-brand-gold: #d4a017`
- **Accent green for dark sections:** `#4ade80` (bright green) is used for icons, underlines, and borders to pop against dark backgrounds. (Not yet a token — see Known Bugs.)
- **Section background rhythm (dark theme):** alternating `#1a1a1a` / `#0f0f0f`, with the green CTA banner as a color break.
- **Layout:** Flexbox-first, CSS grid for card grids. Max content width `1200px`, horizontal padding `px-6`.
- **Animation conventions:** Scroll reveals use Framer Motion `whileInView` with `viewport={{ once: true }}`. Hover effects use Tailwind `group`/`group-hover` transitions.

> Many color values are currently hardcoded hex strings in className (e.g. `bg-[#1a1a1a]`, `text-[#4ade80]`) rather than referencing the theme tokens. Consolidating these into tokens is a recommended refactor.

---

## 7. Features Completed

- Responsive, mobile-first layout across all sections.
- Sticky navbar with scroll-aware styling and animated mobile drawer.
- Full-screen hero with infinite Ken Burns background zoom and staggered content intro.
- Trust bar with 4 animated indicators.
- Services grid (9 services) with local, topic-accurate generated images and hover-to-reveal descriptions.
- Testimonials section with star ratings and styled review cards.
- "Why Choose Us" pillars section.
- Green CTA banner.
- Comprehensive dark footer with contact details, service/company links, and social buttons.
- SEO metadata + Open Graph tags in `layout.tsx`.
- Vercel Analytics wired up for production.
- Dark, cohesive visual theme throughout.

---

## 8. Features Partially Completed

- **Hover reveal on service cards** — reworked to use a max-height/opacity transition. Functional but should be verified across breakpoints; the reveal can clip on very short cards. Browser verification of the latest reveal change was **not finalized** before handoff.
- **Anchor navigation** — Navbar/Footer link to several hash targets (`#faq`, `#services`, `#testimonials`, `#gallery`) that have **no corresponding section IDs**, so those links currently do nothing.
- **Footer social links** — placeholder `href="#"`; Facebook/Instagram use stand-in lucide icons (`Users`, `Camera`) because the installed lucide-react version lacks brand icons.

---

## 9. Pending Tasks

1. **Contact / Quote form** — there is no actual form. All "Get a Free Quote" CTAs link to `#contact` (the footer). Build a real contact form with a backend (e.g. server action + email/DB) or a `mailto:`/Calendly fallback.
2. **FAQ section** — referenced by nav (`#faq`) but does not exist. Build it and add `id="faq"`.
3. **Gallery / Testimonials / Services anchors** — add `id="services"`, `id="testimonials"`, and a `#gallery` section (or remove the dead links).
4. **Real social media URLs** and proper brand icons (e.g. `react-icons` or simple-icons) for Facebook/Instagram/Google.
5. **Replace placeholder testimonial/review content** with real customer reviews and a Google reviews link.
6. **Token consolidation** — move hardcoded hex colors into the `@theme` token system.
7. **Asset cleanup** — delete QA screenshots and unused placeholder files from `public/`.
8. **Accessibility pass** — verify color contrast on dark sections, focus states on all interactive elements, and reduced-motion support (`prefers-reduced-motion`) for the Ken Burns/scroll animations.
9. **Legal pages** — Privacy Policy, Terms of Service, Sitemap links in the footer point to `#`.

---

## 10. Environment Variables Required

**None are currently required** for the site to build and run. The project runs fully static.

- `@vercel/analytics` only activates when `NODE_ENV === 'production'` and needs no key on Vercel.
- If/when a contact form with email or database is added, new env vars will be required (e.g. SMTP/Resend API key, or database connection string). None exist today.

---

## 11. Dependencies Installed

**Runtime dependencies:**
- `next@16.2.6`
- `react@^19`, `react-dom@^19`
- `framer-motion@^12.40.0` — animations (added for this project)
- `lucide-react@^1.16.0` — icons (added for this project)
- `@vercel/analytics@1.6.1`
- `@base-ui/react@^1.5.0`
- `class-variance-authority@^0.7.1`, `clsx@^2.1.1`, `tailwind-merge@^3.3.1` — styling utilities
- `shadcn@^4.8.0`
- `tw-animate-css@^1.4.0`

**Dev dependencies:**
- `tailwindcss@^4.2.0`, `@tailwindcss/postcss@^4.2.0`, `postcss@^8.5`
- `typescript@5.7.3`
- `@types/node@^24`, `@types/react@^19`, `@types/react-dom@^19`

**Install & run:**
```bash
pnpm install
pnpm dev     # local dev
pnpm build   # production build
pnpm start   # serve production build
```

---

## 12. Known Bugs

1. **Dead anchor links** — `#faq`, `#services`, `#testimonials`, `#gallery` have no matching section IDs; clicking them scrolls nowhere.
2. **`globals.css` background mismatch** — `html` is set to `bg-[#0f0f0f]` (dark) but the base `body` rule sets `background-color: #ffffff` and `color: #1a1a1a`. The dark sections cover this, but any uncovered gap (e.g. overscroll) can flash white, and the global default text color is dark-on-dark. Should set body to the dark background/light text for consistency.
3. **Brand icon substitution** — Footer Facebook/Instagram use `Users`/`Camera` placeholder icons because the installed lucide-react version removed brand icons.
4. **Service card hover reveal** — latest implementation not fully browser-verified; may clip the revealed description/button on short viewports.
5. **`ui/button` unused** — sections use raw anchors/buttons instead of the shadcn `Button`, leading to inconsistent button styling patterns.
6. **No `prefers-reduced-motion` handling** — the infinite hero zoom and scroll animations run regardless of user motion preferences (accessibility concern).

---

## 13. Instructions for Another AI Agent to Continue Development

**Context you need first:**
1. This is a **Next.js 16 App Router** project (not Vite, despite the original spec). All section components are in `components/` and are client components (`'use client'`) because they use Framer Motion. The single route is `app/page.tsx`.
2. Styling is **Tailwind v4 with CSS-first config** — there is no `tailwind.config.js`. Add/adjust design tokens in the `@theme inline` block in `app/globals.css`. Apply fonts via `font-sans`.
3. Always read a component fully before editing it. Keep the dark theme and the existing brand palette (`#3a5a40` primary green, `#4ade80` bright accent on dark, `#d4a017` gold stars).

**Recommended order of work:**
1. **Fix navigation integrity first** — either add the missing sections (`#faq`, `#services`, `#testimonials`, `#gallery`) with matching IDs, or remove the dead links so nav is trustworthy.
2. **Build the FAQ section** as a new `components/Faq.tsx` (accordion), import it into `page.tsx` before the CTA banner, and give it `id="faq"`.
3. **Build a real Contact/Quote form** — new `components/ContactForm.tsx`. Prefer a Next.js Server Action posting to a database or transactional email provider. If adding email/DB, document new env vars and request them. Wire all "Get a Free Quote" CTAs to it.
4. **Fix the `globals.css` body background** to match the dark theme (dark bg, light text).
5. **Consolidate colors into theme tokens** and replace hardcoded hex classNames.
6. **Accessibility:** add `prefers-reduced-motion` guards around the Ken Burns and scroll animations, verify contrast and focus rings.
7. **Clean up `public/`** — remove QA screenshots and unused placeholders.

**Conventions to follow:**
- Mobile-first; Flexbox by default, CSS grid for card layouts; max width `1200px`, padding `px-6`.
- Scroll-in animations: Framer Motion `whileInView` with `viewport={{ once: true }}`.
- Generate real, topic-relevant images and store them in `public/` — do not rely on external Unsplash URLs (earlier attempts loaded mismatched/broken images, which is why all 9 service images are now local generated PNGs).
- Keep the component-per-section structure; `page.tsx` only composes sections.
- No emojis in UI. Use lucide-react icons (and a dedicated icon library for brand logos when needed).

**Porting to Bolt.new / Vite (if required):**
- The section components are standard React + Framer Motion + Tailwind and port directly.
- Replace `next/font` (Inter) with a `<link>` to Google Fonts or `@fontsource/inter`.
- Replace `next/image` if introduced (currently using CSS background images and `<img>`, so minimal changes).
- Move `app/page.tsx` composition into your Vite `App.tsx`/root; move `app/globals.css` to your Vite entry CSS.
- Drop `@vercel/analytics` or swap for your analytics of choice.
- Static `public/` assets map directly to a Vite `public/` directory.
