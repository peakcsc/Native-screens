# SOP — Native Screens Website Architecture

## Business Info
- **Name:** Native Screens
- **Phone:** (954) 966-0163
- **Location:** Broward County, South Florida
- **Years in Business:** 50+
- **Services:** Rescreens, Screen Enclosures, Pool Enclosures, Aluminum Roofs, Super Gutters
- **Service Area:** All of South Florida

## Site Type
Static HTML/CSS/JS — single page (index.html) with anchor navigation.
No backend. No CMS. No database. Deployed to Netlify.

## Page Sections (top to bottom)

### 1. Navigation Bar
- Logo (left) — "Native Screens"
- Nav links: Services | Gallery | About | Service Area | Contact
- Phone number (right, always visible, click-to-call on mobile)

### 2. Hero Section
- Full-width background: high-quality pool enclosure or screen enclosure photo
- Headline: "South Florida's Most Trusted Screen & Enclosure Experts"
- Sub-headline: "Family owned and operated for 50+ years in Broward County"
- Primary CTA button: "Call for a Free Estimate — (954) 966-0163"
- Trust badges row: 50+ Years | Licensed & Insured | Free Estimates | 5-Star Rated

### 3. Services Section
- Section title: "Our Services"
- 5 cards, one per service:
  1. Rescreens
  2. Screen Enclosures
  3. Pool Enclosures
  4. Aluminum Roofs
  5. Super Gutters
- Each card: icon + service name + 2-line description + "Get a Free Estimate" link (scrolls to contact / triggers call)

### 4. Why Choose Us / Trust Section
- "Why South Florida Trusts Native Screens"
- 3-4 trust points: 50+ years experience, family owned, licensed & insured, free estimates
- Photo of work or team (if available)

### 5. Photo Gallery
- Grid of before/after project photos
- Pulled from Facebook/Instagram
- Lightbox on click (simple CSS/JS)

### 6. Google Reviews
- Section title: "What Our Customers Say"
- Display 3-5 top reviews manually (star rating, name, review text)
- Link to Google Business listing for more reviews

### 7. Service Area
- "Serving All of South Florida"
- List of key cities: Broward, Miami-Dade, Palm Beach counties
- Embedded Google Map (iframe)

### 8. Contact / CTA Section
- Large phone number: (954) 966-0163
- "Call or Text for Your Free Estimate"
- Simple contact form: Name, Phone, Service Needed (dropdown), Message, Submit
- Social links: Facebook, Instagram

### 9. Footer
- Logo + tagline
- Quick links
- Phone number
- © Native Screens — All Rights Reserved

## Color Palette (pending competitor research refinement)
- Primary: Deep green (#1a6b3a or similar)
- Secondary: Ocean blue (#1e5f8a or similar)
- Accent: White + light gray
- CTA buttons: Bright green or orange for contrast

## Typography
- Headlines: Bold sans-serif (e.g. Montserrat Bold)
- Body: Clean sans-serif (e.g. Open Sans)
- Both available free via Google Fonts

## Mobile Rules
- Phone number always tappable (tel: link)
- CTA button pinned or easily reachable on scroll
- Navigation collapses to hamburger menu
- Gallery scrolls horizontally or stacks on mobile

## SEO Basics
- Title tag: "Native Screens | Screen Enclosures & Pool Enclosures | South Florida"
- Meta description: "Native Screens — South Florida's trusted screen enclosure, pool enclosure, and rescreen experts. 50+ years serving Broward County. Call (954) 966-0163 for a free estimate."
- H1: One per page, matches primary keyword
- Alt text on all images
- Google Business embed for local SEO signal
