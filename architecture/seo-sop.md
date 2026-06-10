# SOP — SEO Strategy for Native Screens

## Goal
Rank #1–3 in Google for screen enclosure and related searches in South Florida.
Drive organic phone calls — zero ad spend required.

## On-Page SEO

### Title Tags
- Homepage: `Native Screens | Screen Enclosures & Pool Enclosures | Broward County, FL`
- Max 60 characters. Primary keyword first.

### Meta Description
`Family-owned for 50+ years. Native Screens installs screen enclosures, pool enclosures, rescreens, aluminum roofs & super gutters across South Florida. Free estimates — (954) 966-0163.`

### H1 (one per page)
`South Florida's Most Trusted Screen & Enclosure Experts`

### H2s (section headings — keyword-rich)
- `Screen Enclosure Installation in Broward County`
- `Pool Enclosure Experts — South Florida`
- `Rescreen Services Near You`
- `Aluminum Roofs & Super Gutters`
- `Serving All of South Florida`
- `What Our Customers Say`

### URL Structure
- `/` — homepage (all services)
- Future: `/screen-enclosures/`, `/pool-enclosures/`, `/rescreens/` (separate pages per service for deeper ranking)

### Image Alt Text Template
- `[service] installed by Native Screens in [city], FL`
- Example: `Pool enclosure installed by Native Screens in Fort Lauderdale, FL`

### Schema Markup (JSON-LD — inject in <head>)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Native Screens",
  "telephone": "(954) 966-0163",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": "South Florida",
  "description": "Screen enclosures, pool enclosures, rescreens, aluminum roofs, and super gutters. Family-owned 50+ years.",
  "foundingYear": "1974",
  "priceRange": "$$"
}
```

## Target Keywords

### Primary (highest intent — people ready to buy)
- screen enclosures Broward County
- pool enclosure South Florida
- rescreen near me
- screen enclosure installation Fort Lauderdale
- pool screen enclosure Broward
- aluminum screen enclosure Florida

### Secondary (service-specific)
- rescreen company near me
- aluminum roof patio enclosure South Florida
- super gutters Florida
- screen porch enclosure Broward County
- lanai screen repair near me

### Long-tail (easy wins, less competition)
- screen enclosure company near Fort Lauderdale FL
- how much does a screen enclosure cost in Florida (answer in FAQ)
- best screen enclosure company Broward County
- pool enclosure repair South Florida
- 50 year screen enclosure company Florida

### City-specific (add to service area section)
- screen enclosures Pembroke Pines
- screen enclosures Hollywood FL
- screen enclosures Coral Springs
- screen enclosures Weston FL
- screen enclosures Davie FL
- screen enclosures Plantation FL
- screen enclosures Miramar FL
- screen enclosures Deerfield Beach
- screen enclosures Pompano Beach
- screen enclosures Boca Raton

## Technical SEO

### Speed (Core Web Vitals)
- Compress all images (WebP format, max 200kb each)
- No heavy JS frameworks — vanilla HTML/CSS/JS only
- Google Fonts loaded with `display=swap`
- Lazy-load gallery images

### Mobile
- Responsive design, mobile-first CSS
- Tap targets min 48x48px
- Phone number is `<a href="tel:+19549660163">` — tappable everywhere

### Indexability
- `robots.txt` — allow all
- `sitemap.xml` — list homepage (and future service pages)
- Canonical tag on homepage

### Google Business Profile (critical for local SEO)
- Ensure listing is claimed and verified
- Add all 5 services to the listing
- Add photos regularly
- Respond to all reviews
- Keep hours updated
- Add website URL once domain is live

## Content Strategy (post-launch)
- Add a simple blog/FAQ section with 5 posts targeting long-tail keywords:
  1. "How Much Does a Screen Enclosure Cost in Florida?"
  2. "Screen Enclosure vs. Glass Enclosure — What's Right for You?"
  3. "How Often Should You Rescreen Your Pool Enclosure?"
  4. "Benefits of an Aluminum Roof for Your Florida Patio"
  5. "Why Super Gutters Are Essential for Florida Homes"

## Tracking
- Google Analytics 4 (GA4) — free, add tracking script
- Google Search Console — verify site, submit sitemap, monitor rankings
- Both are free and essential
