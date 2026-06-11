# CLAUDE.md — Project Constitution

## Project
**Name:** Native Screens Website
**North Star:** A professional website that turns South Florida visitors into phone calls for Native Screens — Broward County's 50+ year screen enclosure business.
**Status:** Phase B — Blueprint (Complete) → Phase L pending research

---

## Data Schema

### Input Shape (what the site receives)
```json
{
  "visitor": "South Florida homeowner searching for screen/enclosure services",
  "intent": "find a trusted local contractor",
  "primary_action": "call for a free estimate"
}
```

### Output Shape (Payload)
```json
{
  "deliverable": "Static website hosted on Netlify",
  "domain": "TBD — needs availability check (nativescreens.com or similar)",
  "primary_CTA": "Click-to-call phone number",
  "sections": [
    "Hero — headline + phone number + free estimate CTA",
    "Services — 5 service cards with descriptions",
    "Trust bar — 50+ years, licensed, insured, Google reviews",
    "Gallery — before/after project photos",
    "Service area — South Florida coverage",
    "Google Reviews — embedded/displayed testimonials",
    "Footer — phone, email, social links, Google Maps"
  ]
}
```

---

## B.L.A.S.T. Phase Outputs

### B — Blueprint ✅
- **North Star:** Phone calls from South Florida homeowners seeking screen/enclosure services
- **Integrations:** Contact CTA (click-to-call), Google Reviews, Google Maps, Photo Gallery, Facebook/Instagram links
- **Source of Truth:** Google Business listing (phone, address, hours, reviews), Facebook/Instagram (photos)
- **Delivery Payload:** Static site on Netlify, custom domain TBD
- **Behavioral Rules:**
  - Tone: Family/legacy AND professional/expert — both
  - Must-dos: 50+ years in business front and center, all 5 services listed, South Florida service area, phone number everywhere
  - Must-not-dos: No chatbots, keep it clean and simple
  - Pricing: INCLUDED as of 2026-06-11 (owner decision — reverses earlier "no pricing" rule). Fortress Collection offer: $15K decoy tier + $35–55K premium tier
  - Offer framework: "Hurricane-Proof Luxury Enclosure" / Fortress Collection with free $2,500 storm assessment
  - Services: Rescreens, Screen Enclosures, Pool Enclosures, Aluminum Roofs, Super Gutters
  - Service area: All of South Florida (Broward County primary + Miami-Dade, Palm Beach)

### L — Link
- Services verified: _TBD_
- Probe scripts: _TBD_

### A — Architect
- SOPs defined: _TBD_
- A.N.T. layers: _TBD_

### S — Stylize
- Output format: Static HTML/CSS/JS (no framework needed — simple, fast, maintainable)
- User sign-off: _Pending_

### T — Trigger
- Firing mechanism: Manual deploy to Netlify via drag-and-drop or CLI
- Cron / webhook / event: N/A — static site

---

## Behavioral Rules
- Primary CTA is always the phone number — never buried
- Tone: "Your neighbor's trusted contractor for 50+ years" + "Licensed, professional, expert"
- Pricing: shown via Fortress Collection tiers (owner reversed the earlier "no pricing" rule on 2026-06-11)
- No chatbots
- Mobile-first (most local service searches are on phones)
- Every page section must load fast — no heavy JS frameworks

## Architectural Invariants
- Logic changes require SOP update before code change
- Credentials live in .env only
- All intermediate files route through /.tmp/
- No speculative abstractions — minimum logic for the task
- Static HTML/CSS/JS only — no CMS, no database, no backend

## Trigger / Automation Map
- Deploy: Netlify drag-and-drop or `netlify deploy --prod`
- Domain: Register via Namecheap/Google Domains, point DNS to Netlify

## Maintenance Notes
- Photos can be swapped by replacing files in /assets/images/
- Phone number and business info live in one place (index.html) for easy updates
