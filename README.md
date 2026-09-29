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

## Structure

```
src/
  content/      all copy and data (site info, services, FAQ, images...)
  components/   one presentational component per page section
  styles/       plain CSS: tokens.css (variables) + one file per area
  App.jsx       section order, same as front-page.php in WordPress
docs/
  WORDPRESS-MIGRATION.md   component -> template-part map and migration steps
```

Design rules that keep the WordPress move cheap: single page with anchor navigation, plain CSS with BEM class names and CSS variables (no Tailwind or CSS-in-JS), no text hard-coded in components, and minimal JavaScript. See [docs/WORDPRESS-MIGRATION.md](docs/WORDPRESS-MIGRATION.md).
