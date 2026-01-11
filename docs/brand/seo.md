# SEO & Content Strategy

> Last updated: January 2026

---

## Current Meta Tags

### Title (50 chars)
```
LUCIDUX — AI UX & Product Design Studio Sydney
```

### Description (158 chars)
```
AI startup with UX problems? We help founders fix conversion and usability fast. UX audits, product design for mobile apps, web apps & SaaS. Cursor, v0, Bolt.
```

### Positioning
- **Public-facing:** "Design Studio" (boutique, approachable, not enterprise-priced)
- **Voice:** "We help" (agency/studio language, not solo "I help")
- **SEO keywords:** Include "agency" terms to capture those searches

---

## Keyword Strategy

Keywords are organized by search intent. All are implemented in `app/layout.tsx` meta keywords.

### Problem-Based (High Intent)
Founders actively looking for help:
- "fix my app UX"
- "improve startup conversion"
- "users confused by my app"
- "bad user experience fix"
- "my app conversion is bad"
- "why users abandon my app"
- "how to fix bad UX"
- "signup flow not working"

### AI Tool-Specific
Founders who built with AI coding tools:
- "improve AI generated UI"
- "fix cursor app design"
- "v0 app design review"
- "bolt app UX help"
- "AI built app looks bad"
- "vibe coded app UX"
- "cursor generated UI fix"
- "AI startup UX"

### Help-Seeking
Founders looking for quick assistance:
- "need UX help fast"
- "quick UX review"
- "someone to review my UX"
- "startup UX on a budget"
- "need help with product design"
- "UX expert for startup"

### Core Services
Standard industry terms:
- "UX designer", "UI designer"
- "startup design", "UX audit"
- "design systems", "product design help"
- "UX design partner", "design partner for startups"
- "fractional UX designer", "startup UX consultant"
- "MVP design", "conversion optimization"

### Location (Local SEO)
Sydney/Australia targeting:
- "Sydney UX designer"
- "Sydney UI designer"
- "Australian design consultant"

### Mobile App Specific
- "mobile app UX design"
- "iOS app designer"
- "Android app UX"
- "mobile app conversion"
- "fix mobile app UX"
- "mobile app usability"
- "app store optimization UX"

### Web App / SaaS Specific
- "SaaS UX design"
- "web app UX"
- "dashboard UX design"
- "SaaS conversion optimization"
- "web application design"
- "B2B SaaS designer"
- "SaaS onboarding UX"

### Website Specific
- "website UX"
- "landing page UX"
- "website conversion optimization"
- "fix website conversion"
- "landing page designer"

### AI Agency/Expert Positioning
For founders searching for AI-focused agencies (in keywords, not title):
- "AI UX design agency"
- "UX agency for AI startups"
- "AI design consultant"
- "AI product design agency"
- "UX expert for AI products"
- "AI focused design agency"
- "design agency for AI companies"
- "AI product designer"
- "AI UX consultant"

---

## Schema Markup

Implemented in `app/layout.tsx` as JSON-LD with `@graph` pattern.

### Schema Types Used
| Type | Purpose |
|------|---------|
| **Organization** | Lucidux Design entity |
| **Person** | Gabriel Hidalgo (founder) with `knowsAbout` array |
| **ProfessionalService** | Main service with reviews nested inside |
| **LocalBusiness** | Sydney location with coordinates |
| **FAQPage** | FAQ section (6 questions) |
| **Service** | Array of individual services offered |

### Key Implementation Notes
- Reviews are **nested inside ProfessionalService** (not standalone in @graph) to avoid Google Search Console "multiple aggregate ratings" error
- Person schema includes extensive `knowsAbout` array for entity SEO
- LocalBusiness includes Sydney coordinates: `-33.8688, 151.2093`

---

## Blog Strategy

### Location
- URL: `/blog` and `/blog/[slug]`
- Data: `lib/blog.ts` (TypeScript, no CMS)
- Generation: Static Site Generation (SSG) via `generateStaticParams`

### Articles (8 total)
Targeting founder search queries:

1. **ux-mistakes-ai-startups** - Common UX mistakes in AI-built products
2. **when-to-hire-ux-designer** - Timing for hiring design help
3. **evaluate-product-ux** - Self-evaluation checklist
4. **design-partner-vs-agency** - Comparison guide
5. **ux-audit-checklist** - DIY audit process
6. **fix-cursor-v0-bolt-app-ux** - AI tool-specific fixes
7. **why-users-dont-understand-your-app** - Usability problems
8. **fix-startup-conversion-rate** - Conversion optimization

### SEO Features
- BlogPosting schema per article
- Internal linking from footer sitemap
- Each article ends with CTA for free UX audit

---

## Technical Implementation

### Files
| File | Contains |
|------|----------|
| `app/layout.tsx` | All meta tags, keywords, JSON-LD schema |
| `app/sitemap.ts` | Dynamic sitemap including blog URLs |
| `lib/blog.ts` | Blog article data |
| `app/blog/page.tsx` | Blog listing page |
| `app/blog/[slug]/page.tsx` | Individual article pages with BlogPosting schema |

### Analytics
- Google Analytics: `G-GEGQY0ME41`
- Microsoft Clarity: `ury7erb81j`
- Google Search Console: Verified

---

## Entity Optimization (for AI Search Platforms)

**Lucidux is:**
AI UX & Product Design Studio based in Sydney, specializing in clear design thinking for AI products built with Cursor, v0, Bolt, and similar tools.

**Lucidux offers:**
UX audits, product design, design systems, conversion optimization for mobile apps, web apps, SaaS, and websites.

**Lucidux serves:**
Technical founders, AI startups, small teams (1-3 people) who built with AI tools and need design expertise without a full-time hire.

**Lucidux solves:**
Poor conversion rates, user confusion, visual hierarchy issues, cognitive load problems, interaction pattern mismatches in AI-generated interfaces.

---

## Content Strategy

### High-Value Content Types

#### Problem-Solution Articles
- "Why users don't understand your AI-built app"
- "How to fix conversion problems in your startup"
- "Common UX mistakes in Cursor/v0/Bolt apps"

#### Decision Guides
- "Design partner vs agency: which is right for your startup?"
- "When to hire a UX designer for your AI product"

#### Practical Checklists
- "UX audit checklist for AI startups"
- "How to evaluate your product's UX yourself"

---

**Document Version:** 2.0
**Last Updated:** January 2026
**Implementation File:** `app/layout.tsx`
