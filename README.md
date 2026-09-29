# criticalcare

Website for **Texas Critical Care Ambulance** (Sugar Land, TX), built with React + Vite and structured so it can be moved to a WordPress theme later.

- Content reference: https://www.txcriticalcare.com/
- Design reference: https://txcc-homepage-revamp.lovable.app/
- Images: Unsplash

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/about-us` | About Us |
| `/services` | Services overview |
| `/services/micu`, `/als`, `/bls`, `/wheelchair-transport`, `/special-events` | Service detail pages |
| `/our-work` | Gallery, fleet and coverage |
| `/news` | News |
| `/careers` | Careers + application form |
| `/contact-us` | Contact form, details and map |
| `/faq` | FAQ |

## Structure

```
src/
  content/      all copy and data (site info, services, pages, FAQ, images...)
  pages/        one file per route  (= one WordPress template each)
  components/   presentational building blocks (= WordPress template parts)
  styles/       plain CSS: tokens.css (variables) + one file per area
  App.jsx       route table, commented with the matching WordPress template
docs/
  WORDPRESS-MIGRATION.md   route/component/content -> WordPress mapping and launch checklist
```

Design rules that keep the WordPress move cheap: plain CSS with BEM class names and CSS variables (no Tailwind or CSS-in-JS), no text hard-coded in components, one route per WordPress template, and minimal JavaScript. See [docs/WORDPRESS-MIGRATION.md](docs/WORDPRESS-MIGRATION.md).

> Hosting the built site needs a rewrite of all routes to `index.html` (SPA fallback). This is not needed once the site is a WordPress theme.
