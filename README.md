# Trade Africa — Website

A free educational resource and community platform helping Nigerian SME traders in fashion/textiles and agro-processing understand and access the benefits of the African Continental Free Trade Area (AfCFTA).

**Live goal:** get traders to a free WhatsApp community, backed by accurate, plain-language AfCFTA compliance guidance.

---

## Stack

Plain static HTML/CSS/JS — no framework, no build step, no dependencies.

- Real, crawlable multi-page routes (one file per URL, not a single-page app)
- Vanilla CSS (`css/style.css`) using CSS custom properties for the design system
- Vanilla JS (`js/main.js`) for mobile nav toggle, tabs, and scroll-reveal
- Google Fonts: Fraunces (display), Inter (body), IBM Plex Mono (data/labels)

## File naming

Every page's HTML file is named after its own folder, not `index.html` — this avoids the ambiguous multi-`index.html` structure that caused problems on manual deploys. The homepage is the one exception and stays `index.html`.
## Project structure
trade-africa/
├── index.html Homepage
├── about/about.html
├── guide/guide.html Guide hub (numbered register of 10 sections)
├── guide/what-is-afcfta/what-is-afcfta.html
├── guide/afcfta-for-your-business/afcfta-for-your-business.html
├── guide/rules-of-origin/rules-of-origin.html
├── guide/certificate-of-origin/certificate-of-origin.html
├── guide/agro-export-compliance/agro-export-compliance.html
├── guide/simplified-trade-regime/simplified-trade-regime.html
├── guide/national-single-window/national-single-window.html
├── guide/cross-border-payments/cross-border-payments.html
├── guide/export-checklist/export-checklist.html
├── guide/faq/faq.html
├── workshop/workshop.html
├── partners/partners.html
├── community/community.html
├── contact/contact.html
├── css/style.css
├── js/main.js
├── assets/
│ ├── logo.jpg Original uploaded logo
│ ├── logo.png Cropped, transparent background
│ ├── logo-header.png Retina-sized render used in the header
│ ├── logo-footer.png Retina-sized render used in the footer
│ ├── hero-graphic.jpg Homepage hero image
│ ├── favicon.svg
│ └── og-guide.svg
├── sitemap.xml
└── robots.txt
## Brand system

| Token | Value |
|---|---|
| Primary background (dark) | `#0C3D28` |
| Accent / gold | `#C99A2E` |
| Text on dark | `#FFFFFF` |
| Text on light | `#1A1A1A` |
| Light background | `#FAF9F6` |
| Muted text (light bg) | `#555555` |
| Muted text (dark bg) | `#C8C4BC` |

Typography: Fraunces (headings), Inter (body), IBM Plex Mono (data/labels/nav). Minimum 16px base body size.

## Logo & hero image

- The real logo now appears in the header and footer (`assets/logo-header.png` / `assets/logo-footer.png`), cropped tight with a transparent background so it sits directly on the dark green.
- The homepage hero uses the supplied hero graphic (`assets/hero-graphic.jpg`), which carries its own headline text visually. The real `<h1>` is still present in the HTML (visually hidden) so search engines and screen readers get the text properly.
- Structured data (`Organization` / `Article` JSON-LD) points at `assets/logo.png` for the publisher logo.

## Contact & community links (live)

- WhatsApp community: `https://chat.whatsapp.com/DpDLPClTP1lIZzf8K3NN9j`
- Email: `tradeafrica.atos@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/trade-africa`

## Run locally

Each page's paths are root-relative (`/css/style.css`, `/guide/guide.html`, etc.), so open it through a real local server rather than double-clicking the file:

```bash
# from inside the trade-africa folder
python -m http.server 8000
# then open http://localhost:8000
```

or, with Node:

```bash
npx serve .
```

## Deploy

**GitHub Pages** — push the folder to a repo and enable Pages on the branch/folder in repo settings. No build step needed.

**Netlify** — drag the `trade-africa` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Vercel**
```bash
npm install -g vercel
vercel --prod
```

## Before going live — remaining placeholder

- **`SITE_URL`** — currently `https://tradeafrica.example` in `sitemap.xml` and every page's JSON-LD. Swap for the real production domain once you have it.

## SEO / structured data

- Unique `<title>` + meta description per page, canonical tags on every page
- JSON-LD: Organization (every page), WebSite (homepage), BreadcrumbList + Article (every `/guide/*` page), FAQPage (`/guide/faq`)
- `sitemap.xml` and `robots.txt` included — resubmit `sitemap.xml` in Search Console after the domain swap above

## Explicitly out of scope (by design)

No user accounts, no e-commerce/payments, no CMS/blog system, no multi-language support, no third-party trackers or chat widgets. Kept deliberately lean per the original brief.
