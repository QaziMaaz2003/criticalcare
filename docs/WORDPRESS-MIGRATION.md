# Moving this site to WordPress

This React site is deliberately built so it converts to a **classic WordPress theme**: one route per WordPress template, plain CSS, presentational components, and all copy in data files. There is no Tailwind, CSS-in-JS or state library. `react-router-dom` is used only to give each page a clean URL in the prototype; it goes away in WordPress, where each URL is served by a PHP template.

## 1. Routes -> WordPress templates

| URL | React page (`src/pages/`) | WordPress template | WP object |
|---|---|---|---|
| `/` | `Home.jsx` | `front-page.php` | Page set as "Front page" |
| `/about-us` | `About.jsx` | `page-about-us.php` | Page |
| `/services` | `Services.jsx` | `archive-service.php` | CPT archive (or a Page with a `service` query) |
| `/services/:slug` | `ServiceDetail.jsx` | `single-service.php` | CPT `service` (slugs: micu, als, bls, wheelchair-transport, special-events) |
| `/our-work` | `OurWork.jsx` | `archive-work.php` | CPT `work` (or ACF gallery) |
| `/news` | `News.jsx` | `home.php` | Posts page (blog index) |
| `/news/:slug` | `NewsDetail.jsx` | `single.php` | Standard `post` |
| `/careers` | `Careers.jsx` | `page-careers.php` | Page (open roles could be CPT `job`) |
| `/contact-us` | `Contact.jsx` | `page-contact-us.php` | Page |
| `/faq` | `FaqPage.jsx` | `page-faq.php` | Page |
| `*` | `NotFound.jsx` | `404.php` | - |

Set permalinks to **Post name** so the URLs match. The route order and table are also commented at the top of `src/App.jsx`.

## 2. Theme skeleton

```
wp-content/themes/texas-critical-care/
├── style.css            # theme header + contents of src/styles/*.css (order of index.css)
├── functions.php        # enqueue fonts/CSS/main.js, register menus, CPTs, theme support
├── header.php           # <-- components/Header.jsx (+ Layout.jsx skip link)
├── footer.php           # <-- components/Footer.jsx
├── front-page.php ... 404.php   # <-- src/pages/* (table above)
├── template-parts/      # <-- src/components/* (table below)
├── assets/js/main.js    # mobile menu toggle (~15 lines)
└── assets/images/       # replace Unsplash hotlinks (src/content/images.js)
```

## 3. Component -> template part

| React component | Template part | Data source in WP |
|---|---|---|
| `Layout.jsx`, `Header.jsx`, `Footer.jsx` | `header.php`, `footer.php` | `wp_nav_menu` (Services has a sub-menu of the 5 service CPTs); phone in Customizer |
| `PageHero.jsx` | `template-parts/page-hero.php` | Page title, excerpt, featured image; breadcrumbs via Yoast/Rank Math |
| `CtaBand.jsx`, `Stats.jsx`, `SectionHead.jsx`, `Split.jsx`, `TrustStrip.jsx` | `template-parts/*.php` | Options page / ACF fields |
| `IconGrid.jsx`, `MissionVision.jsx`, `CompareTable.jsx` | `template-parts/icon-grid.php`, `mission-values.php`, `compare-table.php` | ACF repeaters (icon, title, text) |
| `Icon.jsx` | `template-parts/icon.php` | Inline SVG helper (or an SVG sprite) |
| `Hero.jsx`, `About.jsx`, `MobileIcu.jsx`, `Coverage.jsx`, `Process.jsx`, `Why.jsx`, `Quote.jsx` | `template-parts/section-*.php` | ACF fields / repeaters on the relevant Page |
| `Services.jsx` | `template-parts/section-services.php` | `WP_Query` on CPT `service` (`limit`, `exclude` props = `posts_per_page`, `post__not_in`) |
| `Work.jsx` | `template-parts/section-work.php` | `WP_Query` on CPT `work` |
| `News.jsx` | `template-parts/section-news.php` | Standard post loop; `get_the_date()`, `get_the_excerpt()`, featured image |
| `Faq.jsx` | `template-parts/section-faq.php` | ACF repeater or CPT `faq` (native `<details>`, no JS) |
| `CareersBand.jsx` | `template-parts/section-careers.php` | ACF |
| `ContactInfo.jsx` | `template-parts/contact-info.php` | Customizer / Options page |
| `ContactForm.jsx`, `ApplyForm.jsx` | shortcodes | Contact Form 7 / WPForms with the same fields |

## 4. Content files -> WordPress data

| File in `src/content/` | Becomes |
|---|---|
| `site.js` | Customizer / ACF Options: phone, fax, email, address, map URLs, founded year. `nav` -> Appearance -> Menus (`primary`). |
| `services.js` | CPT `service`: title, excerpt, subtitle, badge, body, `highlights` and `idealFor` repeaters, featured image |
| `extra.js` | ACF repeaters: trust strip, audiences, values, comparison table, careers extras, per-service `glance` + FAQs, FAQ groups (FAQ category taxonomy) |
| `articles.js` | Standard `post` entries (category, featured image, excerpt, content) |
| `pages.js` | Page banners (title/excerpt/featured image) + ACF for About story/crew/standards, Careers perks/roles |
| `about.js`, `hero.js`, `sections.js` | ACF fields (front page / About), news posts -> `post`, gallery -> `work` CPT |
| `images.js` | Media Library uploads (set alt text there) |

## 5. CSS

- Copy `src/styles/*.css` into `style.css` in the order listed in `src/styles/index.css`, under the required theme header comment.
- Class names are BEM and self-contained, so they will not clash with core. `pages.css` holds the inner-page pieces (page hero, split, detail, CTA band).
- Tokens live in `tokens.css` `:root`. To expose them in the block editor, mirror them in `theme.json` (`settings.color.palette`, `settings.typography.fontFamilies`).
- Fonts: enqueue Google Fonts (Space Grotesk, DM Sans) in `functions.php`, or self-host them.

## 6. Behavior (JS)

- **Scroll reveal:** `Layout.jsx` adds `.reveal` to cards/sections and toggles `.is-visible` with an IntersectionObserver (respects `prefers-reduced-motion`). Copy the ~15 lines into `main.js`; content stays visible if JS is off.
- **Mobile menu:** toggle `hidden` on `#mobile-menu` and `aria-expanded` on `.menu-toggle`; close on navigation (see `Header.jsx`). This is the only real JS.
- **Services dropdown:** pure CSS (`:hover` / `:focus-within`), no JS. WordPress adds the `current-menu-item` class instead of the `.active` class React Router sets; restyle `.nav__link.active` accordingly.
- **Scroll to top on navigation** is automatic in WordPress (full page loads).

## 7. Forms

Both forms are stubs that only show a success message. Replace them with a plugin and keep the fields: contact = name, phone, email, service, message; careers = name, phone, email, position, message, resume upload. Add spam protection and route to `info@txcriticalcare.com`.

## 8. Before launch

- Replace Unsplash hotlinks with owned, compressed images (WebP), ideally real photos of the fleet and crew.
- Replace the sample news articles (`articles.js`, educational drafts) and the "Our Work" gallery with real posts and photos (the original site's were lorem ipsum).
- Review drafted copy: audiences, values/mission wording, comparison table, service FAQs, full FAQ page, careers requirements and hiring steps, news articles, process steps, "why us", FAQ, coverage towns, service "ideal for" lists, careers perks/role descriptions. Only About, service definitions, equipment, licensing, careers intro and contact details come from the original site.
- The Google Map embed and "View on map" links use the Sugar Land address; the original site linked to a Richmond, TX address. Confirm which is correct.
- Add SEO (Yoast/Rank Math), `LocalBusiness` schema and a valid SSL certificate. **The current txcriticalcare.com certificate has expired.**
