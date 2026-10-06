# Solo Spark website

The marketing site for **Solo Spark LLC**: https://mysolospark.com

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) + TypeScript.
It builds to plain static HTML, so it runs on any static host. The only JavaScript is the mobile menu, the contact form, and a few small motion helpers (scroll reveals, the header's frosted state, the cursor light on cards).

## Run it locally

You need Node.js 22.12 or newer.

```bash
npm install        # once
npm run dev        # local dev server at http://localhost:4321
npm run build      # type-check, then build the static site into dist/
npm run preview    # serve the built dist/ folder locally
```

## Still to fill in (TODO)

Search the code for `TODO` to find each one.

- [ ] **Booking link**: `bookingUrl` in `src/config/site.ts`. Until it's set, "Book a free call" buttons go to `/contact`.
- [ ] **Headshot**: save a square photo as `public/images/sai.jpg`.
- [ ] **LinkedIn / GitHub URLs**: `social` in `src/config/site.ts` (hidden while empty; they're also added to the structured data).
- [ ] **Privacy policy date**: `updated` at the top of `src/pages/privacy.astro`.
- [ ] **Web3Forms**: send one real test message after deploying to confirm it reaches your inbox.

## Edit the content

**Almost everything you'll want to change is in one file: [`src/config/site.ts`](src/config/site.ts).**

| What | Where in `site.ts` |
|------|--------------------|
| Email, phone | `site.contact` |
| Booking link (Cal.com / Calendly) | `site.bookingUrl` |
| Web3Forms access key | `site.web3formsKey` |
| LinkedIn / GitHub links | `site.social` |
| Pricing wording | `site.pricing` |
| Navigation | `nav` |
| Services and their use cases | `services` |
| "How it works" steps | `steps` |
| Case studies (Work page) | `builds` |
| FAQ | `faq` |
| Tools list | `tools` |

Change a value, rebuild, and every page picks it up.

**Booking link.** When `bookingUrl` is empty, every "Book a free call" button goes to `/contact`. Once you paste a link, the buttons open your booking page in a new tab, and a booking box appears on the Contact page.

**Headshot.** Save a square photo as `public/images/sai.jpg` (at least 640×640). The About page picks it up automatically on the next build. Until then it shows a placeholder.

Page text that isn't in the config lives in `src/pages/*.astro` (one file per page).

### Design tokens

Colors, fonts, type scale, spacing and radius are defined once in [`src/styles/global.css`](src/styles/global.css) inside the `@theme` block. Tailwind turns them into classes (`bg-night`, `text-mist`, `font-display`, `rounded-card`, …).

The direction is **"blue hour, one warm spark"**: the brand ink is deepened into a night-blue base so the cobalt can glow like light, and spark yellow is the only warm light on the page.

| Token | Value | Use |
|-------|-------|-----|
| `night` | `#05081A` | Page background |
| `night-1` | `#0A0F2A` | Raised bands (footer) |
| `snow` | `#F2F4FF` | Headings and body text (18:1 on night) |
| `mist` / `haze` | `#B4BEE6` / `#8A95C4` | Secondary text / small print (10.8:1 and 6.8:1) |
| `cobalt` / `cobalt-bright` | `#1B36C9` / `#3A5BFF` | Brand blue; the source of every cool glow |
| `volt` | `#8EA2FF` | Links and labels on night |
| `spark` | `#FFC933` | The one warm accent: primary buttons, the spark mark, the hero spark |

Fonts are self-hosted through Fontsource: Bricolage Grotesque (headings) and Atkinson Hyperlegible Next (body).

### Surfaces, light and motion

The building blocks live in the same file, under `@layer components`:

- **Surfaces**: `.panel` (a group of things) and `.card` (one thing) are see-through with a hairline border lit from the top. `.glass` adds frosted blur, used only where light passes behind it (header, mobile menu).
- **Light**: `.glow` plus `.glow-cobalt`, `.glow-deep` or `.glow-spark` is a soft pool of light; position and size it with Tailwind classes. `.sky` is the lit backdrop behind every page's header, and `.seam` draws a line of light along the top of a section.
- **Buttons**: `.btn` with `.btn-spark` (primary), `.btn-light` (solid secondary) or `.btn-ghost` (glass outline); add `.btn-sm` for the compact size.
- **Motion**: `.load-in` (with `style="--d: 120ms"` for a delay) plays once on page load. `data-reveal` fades an element up when it scrolls into view (stagger a group with `style="--i: 1"`, `--i: 2`, …). Add `data-spotlight` to a panel or card for the cursor-following light. `.drift-a`, `.drift-b`, `.float` and `.breathe` are slow ambient loops.

Everything that moves is switched off for visitors who ask their system for reduced motion, and the hero diagram then shows a still picture. Pages also cross-fade into each other in browsers that support view transitions.

### Brand assets

- `public/logo.svg`, `public/logo-light.svg`: wordmark with the spark mark (text is outlined, so it never depends on fonts loading).
- `public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`: icons.
- `public/og.png`: 1200×630 social share image.

## Contact form

The form posts to [Web3Forms](https://web3forms.com), which emails each submission to the address linked to your access key. It includes:

- inline validation (name, valid email, a message of at least 10 characters),
- a hidden honeypot field (`botcheck`). If a bot fills it in, the form shows success but sends nothing,
- loading, success and error states. The error state shows your email as a backup.

The access key is public by design. It only allows sending to your inbox.

## SEO

- Unique `<title>` and meta description on every page (set in each page's `<Base>` props).
- Canonical URLs on `https://mysolospark.com`, Open Graph and Twitter tags, and a shared social image.
- `sitemap-index.xml` (generated by `@astrojs/sitemap`) and `robots.txt` (`src/pages/robots.txt.ts`).
- JSON-LD in `src/layouts/Base.astro`: `ProfessionalService` (name, URL, email, phone, address, founder, area served), `Person` (founder) and `WebSite` on every page. `FAQPage` is on the home page and `Service` entries are on the Services page.

After launch, add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://mysolospark.com/sitemap-index.xml`.

## Deploy

`npm run build` writes the whole site to `dist/`. Upload that folder to any static host. Pages are built as `about.html`, `services.html` and so on, and links point to clean URLs (`/about`), which all of the hosts below serve automatically.

**Cloudflare Pages** (recommended, free)
1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
4. Add the custom domain `mysolospark.com`.

**Netlify**
1. New site from Git → pick the repo.
2. Build command `npm run build`, publish directory `dist`.
3. Site settings → Domain management → add `mysolospark.com`.

**Vercel**
1. Import the repo. Vercel detects Astro automatically.
2. Add `mysolospark.com` under Settings → Domains.

`404.html` is served automatically by all three for unknown URLs.

Point the domain so that `www.mysolospark.com` redirects to `https://mysolospark.com` (no `www`), which matches the canonical URLs.

## Project layout

```
src/
  config/site.ts        ← all editable content
  styles/global.css     ← design tokens, surfaces, light and motion
  layouts/Base.astro    ← <head>, SEO tags, JSON-LD, header, footer
  components/           ← Header, Footer, Logo, ContactForm, HeroDiagram, SparkOrb, ServiceGlyph, …
  pages/                ← one file per page (index, services, work, about, contact, privacy, 404)
public/                 ← logo, favicons, og.png, images/
.agents/product-marketing.md  ← positioning doc the copy is based on
```
