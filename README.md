# Trade Africa — Website

A free educational resource and community platform helping Nigerian SME traders in fashion/textiles and agro-processing understand and access the benefits of the African Continental Free Trade Area (AfCFTA).

**Live goal:** get traders to a free WhatsApp community, backed by accurate, plain-language AfCFTA compliance guidance.

---

## Stack

Plain static HTML/CSS/JS — no framework, no build step, no dependencies.

- Real, crawlable multi-page routes (folder + `index.html` per URL, not a single-page app)
- Vanilla CSS (`css/style.css`) using CSS custom properties for the design system
- Vanilla JS (`js/main.js`) for mobile nav toggle, tabs, and scroll-reveal
- Google Fonts: Fraunces (display), Inter (body), IBM Plex Mono (data/labels)

## Project structure
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

## Run locally

Root-relative paths (`/css/style.css`, `/guide/...`) require a real local server — opening `index.html` directly won't resolve them correctly.

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

No build command needed — it's static.

## Before going live — replace these placeholders

- **`SITE_URL`** — currently `https://tradeafrica.example` in `sitemap.xml` and every page's JSON-LD. Swap for the real production domain.
- **LinkedIn URL** — footer/contact links currently point to `#`. No real LinkedIn URL was provided at build time.
- **Contact email** — currently `hello@tradeafrica.ng` (placeholder). Replace with the real inbox.
- **Logo** — `assets/logo.svg` is a text-wordmark placeholder. Swap in the real uploaded logo file.
- **Partners page** — intentionally left as a holding statement; update once partnerships are formally confirmed.

## SEO / structured data

- Unique `<title>` + meta description per page, canonical tags on every page
- JSON-LD: Organization (every page), WebSite (homepage), BreadcrumbList + Article (every `/guide/*` page), FAQPage (`/guide/faq`)
- `sitemap.xml` and `robots.txt` included — resubmit `sitemap.xml` in Search Console after the domain swap above

## Explicitly out of scope (by design)

No user accounts, no e-commerce/payments, no CMS/blog system, no multi-language support, no third-party trackers or chat widgets. Kept deliberately lean per the original brief.
