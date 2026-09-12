# NEXAFLOW AI — Site Guide (where what is, what to change)

> Live: https://website-sujal.vercel.app · Repo: `aiinfluencermodel1-dot/website-sujal`
> Deploy anytime by typing `/deploy`. Brand: **NexaFlow AI** — `Automate, Delegate, Scale.`

## 1. Brand & contact (change here first)

All in `medalyze-clone/src/lib/constants.ts` → `contactInfo` + `footerData` + `companyData`:

| What | Current value |
|---|---|
| Company | NEXAFLOW AI LLC |
| Address | 600 Congress Ave, STE #1400, Austin TX 78701 |
| Phone | +1 (415) 555-0132 |
| Email | hello@nexaflow.ai |
| Hours | Mon–Fri 9:00 AM–6:00 PM CT |
| Tagline | Automate, Delegate, Scale. |
| Rating | 4.9 (500+ reviews) |

Legal pages (`src/app/legal/privacy/page.tsx`, `src/app/legal/terms/page.tsx`) repeat
name/address/email/phone + Texas/Travis County law — update both if contact changes.

## 2. Page → file map

| Route | File | Notes |
|---|---|---|
| `/` homepage | `src/app/page.tsx` (section order) | Hero → TrustedBy → Problem → Process → Pillars → WhyUs → Testimonials → Blog → FAQ → CTA |
| Hero | `src/components/home/Hero.tsx` | H1, sub, AEO snippet, pills (`heroPills`), dual CTA, hero image |
| 3D hero scene | `src/components/3d/HeroScene.tsx` | R3F canvas: wireframe core, orbit rings, particles, starfield, mouse parallax |
| Tilt cards | `src/components/ui/TiltCard.tsx` | Mouse 3D tilt + glare; used on pillar visuals + use-case cards |
| Trusted-by + stats | `src/components/home/TrustedBy.tsx` | Client names (`partnerLogos`), stats from `trustedByData` |
| Problem | `src/components/home/ProblemSection.tsx` | H2 + 6 warning signs + AEO snippet (all hardcoded) |
| Process (3 steps) | `src/components/home/ProcessSection.tsx` | H2 + 3 steps in `steps[]` |
| 3 pillars | `src/components/home/ServiceCategories.tsx` | Header copy hardcoded; pillar copy in `serviceCategories`; images in `visuals[]` |
| Testimonials | `src/components/home/Testimonials.tsx` | Quotes from `testimonials` |
| Blog cards | `src/components/home/LatestContent.tsx` | Pulls `blogPosts` automatically |
| FAQ | `src/components/home/FAQSection.tsx` | Q&A from `faqs` |
| FAQ teaser | `src/components/home/FAQSection.tsx` | Q&A from `faqs`; props: `items`, `showAllLink` → `/faq` |
| CTA card | `src/components/home/CTASection.tsx` | Heading + buttons hardcoded |
| Navbar | `src/components/layout/Navbar.tsx` | Menu in `MENU_LINKS`; announce bar hardcoded |
| Footer | `src/components/layout/Footer.tsx` | Link columns in `footerCols`; brand/contact from constants |
| Contact modal | `src/components/layout/ContactPanel.tsx` | Form fields in `fields[]` (front-end only, no backend) |
| `/about` | `src/app/about/page.tsx` | Stats (`heroStats`), chips (`rcmServices`), mission/vision from `companyData` |
| `/contact` | `src/app/contact/page.tsx` + `ContactForm.tsx` | Offer list (`features`); consent text in form |
| `/testimonials` | `src/app/testimonials/page.tsx` | Metrics in `resultMetrics` |
| `/blog`, `/blog/[slug]` | `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` | Posts in `blogPosts`; article bodies in `categorySections` (keyed by category) |
| `/faq` | `src/app/faq/page.tsx` | Full Q&A from `allFaqs` + FAQPage JSON-LD schema |
| `/use-cases` | `src/app/use-cases/page.tsx` | 11 industries in `useCases[]` (problem/solution/result) |
| `/compliance` | `src/app/compliance/page.tsx` | Trust cards in `complianceFeatures` + `securityFeatures` |
| 6 service pages | `src/app/ai-chatbots/`, `voice-ai-agents/`, `workflow-automation/`, `lead-generation/`, `content-engine/`, `analytics-dashboards/` | Each self-contained: chip, H1, sub, `features[6]`, `stats[3]` |
| SEO title/desc | `src/app/layout.tsx` (`metadata`) + favicon `public/favicon.svg` | Per-post titles in `blog/[slug]/page.tsx` |
| Theme | `src/lib/ThemeContext.tsx` (key `nexaflow-theme`) | Colors/fonts: `src/app/globals.css` variables |

## 3. Copy central (`src/lib/constants.ts`)

90% of site text: `announcementText`, `heroData`, `navLinks`, `serviceCategories`,
`trustedByData`, `testimonials`, `whyChooseUs`, `blogPosts`, `faqs` (homepage teaser),
`allFaqs` (/faq page), `companyData`,
`contactInfo`, `footerData`, `advancedSolutionsIntro`. Edit here, whole site updates.

## 4. Images (`medalyze-clone/public/`)

| File | Size | Used in |
|---|---|---|
| `logo-bigger.png` (main, `logoUrl`) | `2116×850` | navbar (h-56px), footer (h-48px), about |
| `logo.png` | `1411×567` | alt logo (unused — keep in sync if logo changes) |
| `favicon.svg` | vector | browser tab |
| `images/hero-poster.jpg` | `1600×900` | hero card (`Hero.tsx`) |
| `images/visual-engage.jpg` | `800×600` | pillar 1 (chatbots/voice) |
| `images/visual-automate.jpg` | `800×600` | pillar 2 (workflows) |
| `images/visual-scale.jpg` | `800×600` | pillar 3 (content/analytics) |
| `images/about-team.jpg` | `1200×800` | about section (`assets.aboutPoster`) |
| `images/about-office.jpg` | `1200×800` | about hero bg |
| `images/globe.jpg` | `1600×900` | trusted-by bg, 8% opacity (`assets.usMap`) |
| `images/blog-1/2/3.jpg` | `600×420` | blog cards + post heroes (posts reference by path) |
| `images/avatar-1/2/3.jpg` | `256×256` | spare (testimonial avatars if added) |

Swap any image with a same-aspect file at the same path — no code change needed.

## 5. Common changes (recipes)

- **Add a blog post**: append to `blogPosts` in constants (slug/title/excerpt/date/category/image)
  → write matching body sections under its category in `categorySections` (`blog/[slug]/page.tsx`).
  New category? Add a new key to `categorySections` or it falls back to Playbooks.
- **Add a service page**: duplicate `src/app/ai-chatbots/page.tsx` → new folder, rewrite
  chip/H1/sub/features/stats → add links in `MENU_LINKS` (Navbar), `navLinks` (constants),
  footer `footerCols`, and pillar `links[]` if featured on homepage.
- **SEO**: per-page title/desc via `metadata` export in each `page.tsx`;
  Organization schema in `layout.tsx`, FAQPage schema in `faq/page.tsx`.
- **Edit homepage stats/pills**: `trustedByData` (constants) for count-ups; `heroPills` (Hero.tsx).
- **Change logo**: export PNG wordmark at `2116×850` → overwrite `public/logo-bigger.png`
  (and `1411×567` → `public/logo.png`).
- **Change accent color**: `src/app/globals.css` → `--accent` / `--accent-2` (dark + light blocks).
- **Contact form backend**: `ContactForm.tsx` + `ContactPanel.tsx` currently `preventDefault`
  with success message — wire `fetch()` to Formspree/your API in `handleSubmit`.

## 6. Design tokens (quick ref)

Dark default: bg `#000`, card `#111`, text `#d9d9d9`, headings `#fff`,
accent cyan `#a8f4ff`, blue `#3351f1`. Body font Satoshi, headings GT America Extended
(self-hosted in `public/fonts/`). Content width `1200px`. Buttons: accent pill, black
uppercase text. Full scale in `src/app/globals.css`.
