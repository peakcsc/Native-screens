# GEO / AI-Search Analysis — nativescreens.com
Date: 2026-11-16 · Framed per Google: "optimizing for generative AI search is still SEO."
Grounded by a live by-hand AI-answer check (5 queries, Hollywood FL, 2026-11-16).

## GEO Readiness Score: 66/100
(Heuristic checklist score — NOT a predicted citation rate. Technically the site is
in good shape; the gap is authority/brand signals, which is exactly what the live
AI-answer check confirmed.)

### Reality check from the live test
Across 5 real customer queries, an AI answer appeared 5/5 times and Native Screens
was named 0/5. The businesses named had 44–240 Google reviews; Native Screens has 7.
Conclusion: the ceiling here is NOT page structure (which is good) — it is
authority/brand signals (reviews, mentions, entity presence).

---

## 1. Technical Accessibility — STRONG (18/20)
- Static HTML, server-side rendered. AI crawlers that read raw HTML (OAI-SearchBot,
  PerplexityBot, Claude-SearchBot) get full content. No JS dependency. ✓
- robots.txt = "User-agent: * / Allow: /" → every AI crawler is allowed:
  - Search citability crawlers ALLOWED: OAI-SearchBot (ChatGPT Search), Googlebot
    (Google AI Overviews/AI Mode), PerplexityBot, Claude-SearchBot. ✓
  - Training crawlers ALLOWED: GPTBot, ClaudeBot, Google-Extended, CCBot,
    Applebot-Extended. (Allowing is fine; this is a licensing choice, not a
    search-visibility one.)
- Note: robots.txt cannot block user-triggered fetchers (ChatGPT-User, Perplexity-User,
  Google-Agent) anyway; no action needed.
- Sitemap referenced. ✓

## 2. Structural Readability — STRONG (17/20)
- Clean H1→H2→H3 hierarchy on every page. ✓
- Question-based headings in FAQ sections (matches how people ask AI). ✓
- Cost guides use comparison TABLES with specific price ranges. ✓
- Short paragraphs, lists. ✓

## 3. Passage-Level Citability — GOOD (18/25)
- Cost guides front-load a direct, quotable answer in the first sentence
  ("a full pool cage rescreen in South Florida typically costs $1,200–$4,500").
  This is the single most AI-citable pattern on the site. ✓
- FAQ answers are self-contained and quotable. ✓
- GAP: service/location pages lead with brand/positioning prose, not a crisp
  "What is X / How much is X" answer block in the first 60 words. Front-loading a
  one-paragraph definitional answer on each would raise citability.
- GAP: the homepage has no single quotable "Native Screens is a ___" entity
  sentence near the top for an AI to lift.

## 4. Authority & Brand Signals — WEAK (8/20)  ← the real problem
- NO visible publication/update dates on pages. Recency is a strong citation
  correlate (SE Ranking: content updated within 3 months cited ~3x more). Add
  visible "Updated November 2026" to the cost guides especially.
- NO author/Person schema or named-expert byline (owner "Larry", 50+ yrs) — a
  missed E-E-A-T/authority signal.
- Brand mentions (the strongest AI-visibility correlate in Ahrefs' study, ~3x
  backlinks): essentially none.
  - Wikipedia / Wikidata: none (normal for a local SMB; low priority).
  - Reddit / YouTube / LinkedIn mentions: none found.
  - Directory citations (BBB, Angi, Houzz, Yelp, Nextdoor, chamber): thin.
- Reviews: 7 — far below the 44–240 of every competitor named in the live test.
  This is the dominant lever for local AI answers and the local pack.

## 5. Multi-Modal — ADEQUATE (5/15)
- Has logo, hero image/video, embedded Google Map. ✓
- GAP: no original charts/infographics, no YouTube video, gallery is sparse.
  Real before/after job photos + a short YouTube clip would add citable media
  and a brand-mention surface at once.

---

## Schema status (already strong)
HomeAndConstructionBusiness + FAQPage (home), Article + FAQPage + Breadcrumb
(guides/pages), Review + aggregateRating (home). Valid across all pages.
- ADD: visible dateModified/datePublished to the Article schema on the guides.
- CONSIDER: Person schema for the owner on an About section.

## llms.txt
Present at /llms.txt. Per Google's AI optimization guide this is IGNORED by Google
Search (no help, no harm) and may help some non-Google AI crawlers. Keep it; do not
count on it as a Google lever.

---

## Top 5 Highest-Impact GEO Changes (biggest first)
1. REVIEWS 7 → 50+. The live test proves this is the gate for being named in local
   AI answers. Nothing else moves the needle as much. (Review kit already provided.)
2. BUILD BRAND MENTIONS / CITATIONS. Consistent listings on BBB, Angi, Houzz, Yelp,
   Nextdoor, chamber of commerce + a few Reddit/Nextdoor/YouTube touchpoints. This
   is the strongest AI-visibility correlate after reviews.
3. ADD DATES + OWNER AUTHORSHIP. Visible "Updated Nov 2026" on the cost guides and
   a short "About Larry / since 1972" author block (+ Person schema). Cheap,
   improves recency + E-E-A-T.
4. FRONT-LOAD A QUOTABLE ANSWER on each service/location page — a 40–60 word
   "What is / How much is X in [city]" block at the very top, before the brand prose.
5. GET THE NEW PAGES INDEXED. They're live now; submit the sitemap in Search Console
   so Google crawls them — they can't be cited until indexed. (Also unlocks the
   Search Console "Search generative AI" eligibility control.)

## What I could not measure
- No DataForSEO/SE Ranking connected, so no tool-measured per-platform citation
  rate. The live by-hand check (5 queries, one location, one device, one moment)
  is the evidence used here — a strong snapshot, not a measured rate.
- Competitor mention/review velocity not pulled from an API.
