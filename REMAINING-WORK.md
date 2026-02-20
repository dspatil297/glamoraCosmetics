# Glamora Theme — Work Done & Remaining

## ✅ Done in theme code (Phases 1–7)

### Phase 1 (Foundation)
- Runbook: `PHASE-1-RUNBOOK.md`
- Policy placeholders: `policies/*.md`
- Theme name: Glamora in `config/settings_schema.json`

### Phase 2 (Brand & design)
- Glamora colors and typography in `settings_schema.json`
- `snippets/css-variables.liquid` — full palette + fonts
- `assets/critical.css` — buttons, cards, typography, section padding, dividers
- Header: announcement bar, sticky blur, cart badge (rose-gold), search icon
- Footer: 3-column (logo/address, links, payment icons)
- Runbook: `PHASE-2-RUNBOOK.md`

### Phase 3 (Core pages & content)
- **Home** (`templates/index.json`): hero slider (5 slides), welcome, category banners (3), featured products, USP banner, countdown banner, ingredients (3 cards), blog preview
- **Sections**: `hero-slider`, `welcome`, `category-banners`, `featured-products`, `usp-banner`, `countdown-banner`, `ingredients`, `blog-preview`
- **Collection**: `collection-banner` + `collection` (sort filter, product grid with `product-card`), `templates/collection.json`
- **Product**: `sections/product.liquid` — gallery, breadcrumb, form, trust badges, “Free shipping above ₹999”
- **Contact**: `sections/contact-page.liquid` — address, phone, email, hours, contact form (for Contact page)
- **About**: `sections/about-content.liquid` — brand story, vision, mission (3 cards) (for About page)

### Phase 4 (Products & collections)
- `snippets/product-card.liquid` — image hover swap, title, price, NEW badge, Add to cart link
- Collection template: banner + sort + grid; product cards in grid
- Product page: layout, form, trust line

### Phase 5 (Trust & conversion)
- `snippets/trust-badges.liquid` — Dermatologist Tested | Cruelty Free | Made in India | Paraben Free
- `snippets/whatsapp-button.liquid` — floating button (+91 86507 51707), in `theme.liquid`
- Trust badges rendered on product page

### Phase 7 (Polish)
- `snippets/mobile-bottom-bar.liquid` — Home, Shop, Search, Cart, Account (visible on mobile only), in `theme.liquid`
- `snippets/meta-tags.liquid` — default meta description when `page_description` blank
- Title, canonical, OG, Twitter cards already in meta-tags

---

## 🔲 Remaining (you do in Shopify Admin or later)

### Phase 1 (you)
- Create pages: About Us (`about-us`), Contact (`contact`); create blog News
- Create header + footer menus and assign in theme
- Create policy pages from `policies/` and link in footer
- Set store name, currency INR, timezone Asia/Kolkata, logo, favicon, domain

### Phase 3 (you)
- Add **Contact page** section to the Contact page (Theme Editor → Contact page → Add section → “Contact page”)
- Add **About content** section to the About page (Add section → “About content”)
- Create 5 blog posts (see build guide); add images to hero slides and category banners

### Phase 4 (you)
- Create 4 products and collections in Admin (Face Wash, Sunscreen, Moisturizer, All)
- Add product images; tag “new” for NEW badge where needed
- Assign featured collection in “Featured products” section

### Phase 5 (you)
- Install Judge.me (or similar) for reviews
- Install Wishlist app if desired
- Klaviyo (or Shopify Email) for signup + abandoned cart

### Phase 6 (you)
- Razorpay + COD; Shiprocket; free shipping over ₹999
- Finalize policy content with a lawyer

### Phase 7 (you)
- Facebook Pixel in Admin or theme.liquid
- QA: test checkout, forms, mobile, links

### Phase 8
- Post-launch: marketing, content, monitoring

---

## Quick reference

| Need | File / place |
|------|----------------|
| Home sections order | `templates/index.json` |
| Collection page | `templates/collection.json` + `sections/collection-banner.liquid`, `sections/collection.liquid` |
| Product card | `snippets/product-card.liquid` |
| Contact page content | Add section “Contact page” on Contact page in Theme Editor |
| About page content | Add section “About content” on About page in Theme Editor |
| WhatsApp number | `layout/theme.liquid` — render 'whatsapp-button', phone: '918650751707' |
| Trust badges | `snippets/trust-badges.liquid` (used on product section) |
