# Moving this site to WordPress

This React site is deliberately built so it converts to a **classic WordPress theme**: one page, plain CSS, presentational components, and all copy in data files. Nothing here depends on a router, Tailwind or a state library.

## 1. Theme skeleton

```
wp-content/themes/texas-critical-care/
├── style.css            # theme header + contents of src/styles/*.css (in the order of index.css)
├── functions.php        # enqueue fonts + CSS + main.js, register menus, CPTs, theme support
├── header.php           # <-- Header.jsx
├── footer.php           # <-- Footer.jsx
├── front-page.php       # <-- App.jsx (section order is identical)
├── template-parts/      # one file per component (table below)
├── assets/js/main.js    # mobile menu toggle (~15 lines)
└── assets/images/       # replace Unsplash hotlinks (src/content/images.js)
```

## 2. Component -> template part

| React component | WordPress file | Data source in WP |
|---|---|---|
| `Header.jsx` | `header.php` | `wp_nav_menu(['theme_location' => 'primary'])`, Customizer phone |
| `Hero.jsx` | `template-parts/section-hero.php` | ACF fields on the front page |
| `About.jsx` | `template-parts/section-about.php` | About page content / ACF |
| `Services.jsx` | `template-parts/section-services.php` | `WP_Query` on CPT `service` (+ ACF: badge, subtitle, highlights repeater) |
| `MobileIcu.jsx` | `template-parts/section-micu.php` | ACF (equipment repeater) |
| `Process.jsx`, `Why.jsx` | `section-process.php`, `section-why.php` | ACF repeaters |
| `Coverage.jsx` | `section-coverage.php` | ACF (areas repeater) |
| `Work.jsx` | `section-work.php` | `WP_Query` on CPT `work`, or an ACF gallery |
| `Quote.jsx` | `section-quote.php` | ACF |
| `News.jsx` | `section-news.php` | Standard `post` loop; `get_the_date()`, `get_the_excerpt()` |
| `Faq.jsx` | `section-faq.php` | ACF repeater or CPT `faq` (keeps native `<details>`) |
| `Careers.jsx` | `section-careers.php` | ACF, or CPT `job` if you want individual listings |
| `Contact.jsx` | `section-contact.php` | Contact Form 7 / WPForms shortcode replaces the `<form>` |
| `SectionHead.jsx` | `template-parts/section-head.php` | `get_template_part('template-parts/section-head', null, $args)` |

## 3. Content files -> WordPress data

| File in `src/content/` | Becomes |
|---|---|
| `site.js` | Customizer settings / ACF Options page: phone, fax, email, address, founded year |
| `site.js` `nav` | Appearance -> Menus (`primary` location). Keep the `#anchor` links, or point them at real pages. |
| `services.js` | CPT `service` (three levels) + a "Wheelchair" and "Special Events" entry |
| `about.js`, `hero.js`, `sections.js` | ACF fields on the front page |
| `images.js` | Media Library uploads (set alt text there) |

## 4. CSS

- Copy `src/styles/*.css` into `style.css` in the order listed in `src/styles/index.css`, under the required theme header comment.
- Class names are BEM and self-contained, so they will not clash with core. Wrap in a prefix only if you use a page builder that injects generic classes.
- Tokens live in `tokens.css` `:root`. If you want them in the block editor, mirror them in `theme.json` (`settings.color.palette`, `settings.typography.fontFamilies`).
- Fonts: enqueue Google Fonts (Space Grotesk, DM Sans) in `functions.php`, or self-host them for GDPR/performance.

## 5. Behavior (JS)

Only one piece of real JS exists:

- **Mobile menu:** toggle `hidden` on `#mobile-menu` and `aria-expanded` on `.menu-toggle` (see `Header.jsx`).

FAQ uses native `<details>`; smooth scrolling is CSS (`scroll-behavior`, `scroll-padding-top`).

## 6. Forms

`Contact.jsx` posts nowhere. Replace the `<form>` with a plugin shortcode and keep the same fields: name, phone, email, service, message. Add spam protection (reCAPTCHA / honeypot) and route submissions to `info@txcriticalcare.com`.

## 7. Before launch

- Replace Unsplash hotlinks with owned, compressed images (WebP) and real photos of the fleet and crew.
- Replace placeholder news posts and the "Our Work" gallery (the original site's were lorem ipsum).
- Review the drafted copy in `sections.js` (process, why, FAQ, coverage cities). Only the About, services, equipment, careers and contact details come from the original site.
- Add SEO (Yoast/Rank Math), `LocalBusiness` schema, and an SSL certificate. **The current txcriticalcare.com certificate has expired.**
