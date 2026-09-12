# WEBSITE BLUEPRINT — medalyze-clone (website-sujal)

> Full content + image + style inventory of the site, plus a rebrand map for
> converting it into an **AI automation agency** website.
> Live: https://website-sujal.vercel.app · Repo: `aiinfluencermodel1-dot/website-sujal`

## 1. Tech stack

- Next.js 16 + React 19 + Tailwind CSS 4, TypeScript
- Fonts (self-hosted in `public/fonts/`): **Satoshi** (body 400/500/700/900, woff2),
  **GT America Extended** (headings 300/400/500/700, otf)
- Animations: GSAP, Lenis smooth scroll, Swiper carousels
- All site copy lives in one file: `medalyze-clone/src/lib/constants.ts` (edit copy there)

## 2. Design tokens

| Token | Dark (default) | Light |
|---|---|---|
| Page bg | `#000000` | `#ffffff` |
| Secondary bg | `#0d0d0d` | `#f8f9fa` |
| Card bg | `#111111` | `#ffffff` |
| Body text | `#d9d9d9` | `#1a1a1a` |
| Headings | `#ffffff` | `#0a0a0a` |
| Muted text | `#7b7b7b` | `#6b7280` |
| Accent (cyan) | `#a8f4ff` | `#0891b2` |
| Accent-2 (blue) | `#3351f1` | `#3351f1` |

- Type scale: h1 `3rem/300`, h2 `3rem/400`, h3 `2.25rem/300`, h4 `2rem/300`, body `1rem`
- Content width: `max-w 1200px` (`75rem`), wide `80rem`
- Buttons: pill (radius `10rem`), accent bg + black uppercase text; cards: hairline white 8–15% borders
- Theme: dark default, toggle persisted in `localStorage` (`medalyze-theme`)

## 3. Global chrome (every page)

- **Announcement bar:** marquee `Medical Billing • Dental RCM • AI Scribe • Claims • Eligibility` + `Get Started` link
- **Navbar (fixed):** logo left (rendered `h-56px`, source `/logo-bigger.png`), center pill menu:
  Home · About Us · Services (mega-dropdown: Medical RCM 9 links / Dental RCM 10 links / Advanced Solutions 6 links) · Contact Us.
  Right: `Contact` accent pill + theme toggle. Mobile: hamburger → fullscreen menu.
- **Footer:** eyebrow `Medalyze Medtech LLC` + h4 `Analyze, Automate, Accelerate` + `Let's Talk` button.
  4 columns: Brand (logo `h-48px` + tagline + 4.8★/12k+ rating) · Solutions (5) · Company (5) · Legal (2).
  Bottom: address · phone · email · `© year Medalyze Medtech LLC` · working hours.
- **Shared CTA card (all pages except blog/legal):** `Ready to bring AI to your revenue cycle?` +
  `Drop in your information below and we'll be in touch.` + `Get Assessment` / `Talk to Sales` → `/contact` + `or call +1 (727) 208 5953`
- **Contact modal:** left blue panel `Let's get in touch`, right form: First* · Last* · Email* · Company* · Phone · Title/Role · Message · consent checkbox → `Send Message` (front-end only, no backend)
- **Contact info:** `MEDALYZE MEDTECH LLC, 7901 4th St N STE #300, St Petersburg FL 33702` ·
  `+1 (727) 208 5953` · `info@medalyzeus.com` · `Mon–Fri 9am–5pm`

## 4. Homepage (sections in order)

1. **Hero** — h1 `Analyze Automate Accelerate` + sub-paragraph + 4 stat pills
   (`8+ Years in Business` · `50 States Covered` · `30+ Health Specialties` · `4.8 Google Rating`) +
   CTA `30 Days Free Trial` → `/contact` + autoplay muted loop **video** (`16:9`, max-w `832px`)
   over an 1800px arc-dome backdrop with orbiting icons
2. **TrustedBy** — `Trusted by Healthcare Providers Nationwide`, 6 text logos,
   `Proven Outcomes from Deploying Medalyze` + 4 count-ups
   (`500+ Providers` · `$500M+ Claims` · `50 States` · `99.9% Accuracy`) over US-map bg
3. **ServiceCategories** — `One Data Model. End-to-End RCM Automation.`
   3 alternating rows (Front End: Patient Access · Mid Cycle: Clinical Intelligence · Back End: Revenue Integrity),
   each: icon + title + desc + chips + `Learn more`, beside an image card (`800×600` cover)
4. **Testimonials** — `Real People. Real Impact.` Swiper carousel, 3 five-star quotes
5. **LatestContent** — `Insights for Better Revenue`, Swiper cards (image `16:10` + category pill + date + title + excerpt)
6. **FAQSection** — `Frequently Asked Questions`, 4 accordions (services · scalability · medical+dental · RCM scope)
7. **CTASection** — shared CTA card (see §3)

## 5. Service pages (one shared template)

Template: chip + H1 + subtitle + 2 hero CTAs (`Get Assessment`/`Get In Touch` → `/contact`, `Explore Features` → `#features`)
+ features grid (6 cards) + stats strip + shared CTA. No photos — lucide icons only.

| Route | H1 | Features (6) | Stats |
|---|---|---|---|
| `/medical-solutions` | Comprehensive Medical Billing. Maximum Reimbursement. | 9 RCM features (credentialing→billing) + 4 benefits | — |
| `/dental-solutions` | Dental Billing That Maximizes Chair Time | 10 dental RCM features + 4 benefits | — |
| `/ai-medical-scribe` | Intelligent Clinical Documentation, Without the Effort | 7 benefits (accuracy, automation, EHR, templates, compliance…) | — |
| `/ai-powered-appointments` | AI-Powered Appointments That Never Miss | no-show prevention, smart scheduling, reminders… | 0% no-shows · 3x booking · 24/7 |
| `/live-claim-tracking` | Real-Time Claim Tracking for Providers & Patients | status, portal, dashboard, alerts… | 24/7 · 100% · 0 missed |
| `/live-eligibility-verification` | Instant Eligibility Verification. Zero Denials. | real-time verify, coverage details, pre-claim checks… | 100% · 0 denials · 60% faster |
| `/live-rcm-analytics` | Live RCM Analytics & Intelligent Dashboards | dashboards, forecasting, denial analysis… | 24/7 · 100% · 30% faster |
| `/practice-analytics` | Practice & Hospital Analytics | patient metrics, revenue, productivity… | 360° · AI-powered · HIPAA |
| `/provider-credentialing` | Fast-Track Provider Credentialing | enrollment, licensing, CAQH, privileging… | 500+ · 45 days · 98% · 24/7 |
| `/denial-management` | AI-Powered Denial Management | root-cause, appeals, prevention… | 95% · 40% fewer · 3x faster |

## 6. Company pages

- **`/about`** — H1 `We care more than just your revenue` + since-2017 paragraph + stats
  (8+ yrs · 50 states · 30+ specialties) + process chips + Mission/Vision/Values cards
- **`/contact`** — H1 `Get in Touch`, 4 info cards, `Let's Start a Conversation`, full form (First*/Last*/Email*/Company/Phone/Title/Message*/consent → `Send Message`)
- **`/testimonials`** — H1 `Real People. Real Impact.`, 3 five-star cards + stats (99.9% · 40% faster · 50+ states · 24/7)
- **`/blog`** — H1 `Insights for Better Revenue`, 1 featured + 5 grid cards (`/blog/[slug]`),
  6 posts (RCM×2, Denial×1, AI×2, Dental×1). Post page: hero image `16:9` + lede + 4 category sections + 3 related posts
- **`/compliance`** — Trust Center: HIPAA · SOC 2 II · encryption · infra · access controls · auditing + BAA/PHI/training/incident blocks
- **`/legal/privacy`, `/legal/terms`** — 6 / 8 sections, Florida governing law

## 7. Image inventory (replace these on rebrand)

| Asset | Size | Used as | Display |
|---|---|---|---|
| `public/logo.png` | `1411×567` | logo (alt) | h-56px navbar |
| `public/logo-bigger.png` | `2116×850` | **main logo** (`logoUrl`) | h-56px navbar, h-48px footer |
| `public/logo-original.png` | `1411×567` | logo (alt) | — |
| `public/logo-transparent.png` | `1411×567` | logo (alt) | — |
| Hero video (remote Webflow CDN) | video `16:9` | hero visual | max-w `832px` card |
| `mazdoc1.jpg` (remote) | photo `~16:9` | video poster, about hero, category visual | cover |
| `1.png`, `Your-paragraph-text.png` (remote) | graphics `800×600` | category visuals | `800×600` cover |
| `united-states-1.png` (remote) | map | TrustedBy bg | 8% opacity |
| `faq-image.png`, `icon*.png`, `appointment*.png` (remote) | various | FAQ/services | card tiles |
| `avatar*.webp`, `testi-*.webp` (remote) | square | testimonial avatars | circle crop |
| Blog thumbs (remote, `*-600x420.png`) | `600×420` | blog cards | `16:10`, 800×500 hover-zoom |
| `aboutPoster`, `aboutSecondary` (remote) | posters | about page | cover |

> All remote images hotlink `medalyzeus.com` — **must be replaced** with owned assets on rebrand.

## 8. REBRAND MAP — AI automation agency

Keep layout/components 1:1, swap copy + images per this table.

| # | Current (healthcare RCM) | Replace with (AI automation agency) |
|---|---|---|
| 1 | Brand `Medalyze`, tagline `Analyze Automate Accelerate` | Your agency name + tagline (e.g. `Automate. Delegate. Scale.`) |
| 2 | Hero H1 + RCM sub + `30 Days Free Trial` | H1 for automation outcomes (e.g. `We Put Your Business on Autopilot`) + `Book a Free Audit` CTA |
| 3 | Hero stats (years/states/specialties/rating) | `X+ Workflows Shipped` · `X+ Hours Saved/mo` · `X+ Clients` · rating |
| 4 | Hero video (clinic) | Product demo / dashboard screen-record `16:9`, ≤832px wide |
| 5 | 3 categories Front/Mid/Back RCM | 3 service pillars: **AI Chatbots & Voice Agents** · **Workflow Automation (CRM/ops)** · **AI Content & Data Systems** |
| 6 | 10 service pages (billing, coding, scribe…) | Agency service pages: AI Chatbot Development · Voice AI Agents · CRM Automation · Lead-gen Automation · AI Content Engine · Analytics Dashboards… (same template, 6 features + stats each) |
| 7 | Nav mega-menu Medical/Dental/Advanced | Services dropdown with your offers (keep ≤3 groups, ≤10 links) |
| 8 | TrustedBy (providers, claims $, states) | Client logos + `X+ automations live` · `X hrs saved` · `X% cost cut` · `X+ five-star reviews` |
| 9 | Testimonials (clinic roles) | Client testimonials (founder/ops titles), keep 3-card Swiper |
| 10 | Blog (RCM/medical posts) | Posts: automation playbooks, AI tool comparisons, case studies (same card system) |
| 11 | About (since 2017, mission/vision/values) | Agency story + mission/vision/values + team photo replaces `mazdoc1.jpg` |
| 12 | Contact info (FL address, phone, email) | Your address/phone/email/hours; form works as-is (add backend later) |
| 13 | Compliance (HIPAA/SOC2) | Reframe as `Security & Trust`: data privacy, GDPR, API security, access controls |
| 14 | Legal (Florida law) | Update entity name, address, governing law |
| 15 | Logos `1411×567` / `2116×850` | New logo exported at **same pixel sizes** (drop-in, no code change) |
| 16 | Accent cyan `#a8f4ff` + blue `#3351f1` | Optional: keep (techy) or re-tint in `globals.css` variables only |
| 17 | Metadata title/desc (`layout.tsx`) | Agency title + SEO description |

### Rebrand execution checklist

1. New logo PNGs at `1411×567` (+1 `@1.5x` at `2116×850`) → overwrite `public/logo*.png`
2. Rewrite `src/lib/constants.ts` (90% of site copy: hero, nav, categories, stats, testimonials, FAQs, blog, footer)
3. Rewrite the 10 service pages + about/contact/testimonials/compliance/legal copy
4. Replace remote `medalyzeus.com` images with owned assets (same aspects: `16:9` hero, `800×600` category, `600×420` blog)
5. Update `layout.tsx` metadata, footer/contact constants, announcement bar
6. `npm run build` → commit → push → auto-deploys to Vercel (or just type `/deploy`)

**To start the rebrand, just tell me: (1) agency name + tagline, (2) your 3–6 services,
(3) contact details — and I'll rewrite the whole site.**
