# Phases 1–7 — Master Checklist

Every task from the plan. **Theme code tasks are done** (✅). **Admin tasks** are for you to complete in Shopify (☐).

---

## Phase 1 — Foundation & Setup

| Task | Status |
|------|--------|
| Sign up for Shopify (or use existing store) | ☐ You |
| Choose plan (Basic / Shopify / Advanced) | ☐ You |
| Set Store name: Glamora Cosmetics | ☐ You |
| Set Timezone: Asia/Kolkata | ☐ You |
| Set Currency: INR (₹) | ☐ You |
| Set Weight unit: Grams | ☐ You |
| Connect custom domain or use .myshopify.com | ☐ You |
| Add store logo (header) and favicon | ☐ You |
| Use theme from GitHub or push via CLI; duplicate as "Glamora – Custom" | ☐ You |
| Create pages: About Us, Contact; create blog News | ☐ You |
| Create navigation: Header (Home, About, Shop, Blog, Contact), Footer (policies + Contact) | ☐ You |
| Create policy pages from `policies/` and link in footer | ☐ You |
| **Theme:** Runbook `PHASE-1-RUNBOOK.md` | ✅ Done |
| **Theme:** Policy placeholders in `policies/` | ✅ Done |
| **Theme:** Theme name Glamora in settings_schema | ✅ Done |

---

## Phase 2 — Brand & Design System

| Task | Status |
|------|--------|
| **Theme:** Glamora colors in settings_schema (Primary, Secondary, Accent, Background, Text, CTA, etc.) | ✅ Done |
| **Theme:** CSS variables for palette in css-variables.liquid | ✅ Done |
| **Theme:** Typography — body + heading font pickers, loaded and used | ✅ Done |
| **Theme:** Buttons 4px radius, uppercase; cards 8–12px, shadow; hover scale on images | ✅ Done |
| **Theme:** Sticky header with backdrop blur; announcement bar | ✅ Done |
| **Theme:** Logo left, nav center, search + wishlist + cart (badge) + account | ✅ Done |
| **Theme:** Mobile hamburger + slide-in drawer menu | ✅ Done |
| **Theme:** 3-column footer (logo/address, links, payment icons) | ✅ Done |
| Set announcement text in Theme Editor (or use default) | ☐ You |
| Assign Header and Footer menus in Theme Editor | ☐ You |

---

## Phase 3 — Core Pages & Content

| Task | Status |
|------|--------|
| **Theme:** Hero slider (5 slides, tagline, heading, subtext, CTAs) | ✅ Done |
| **Theme:** Welcome section (centered text) | ✅ Done |
| **Theme:** Category banners (3 cards, hover zoom) | ✅ Done |
| **Theme:** Featured products (4-column grid, heading, link to collection) | ✅ Done |
| **Theme:** Full product row (Section 5 — 8 products, same section type) | ✅ Done |
| **Theme:** USP banner (image + 3 features + CTAs) | ✅ Done |
| **Theme:** Countdown banner (dark strip, timer, CTAs) | ✅ Done |
| **Theme:** Ingredients (3 cards) | ✅ Done |
| **Theme:** Blog preview (4 articles) | ✅ Done |
| **Theme:** Collection banner + collection page (sort, category links, grid) | ✅ Done |
| **Theme:** Product page (gallery, breadcrumb, form, trust badges, shipping line) | ✅ Done |
| **Theme:** Contact section (address, form, hours, social) | ✅ Done |
| **Theme:** About section (story, vision, mission 3 cards) | ✅ Done |
| Add images to hero slides and category banners in Theme Editor | ☐ You |
| On Contact page: add "Contact page" section | ☐ You |
| On About page: add "About content" section | ☐ You |
| Create 5 blog posts (see build guide) | ☐ You |
| Create collection menu for Shop sidebar (Face Wash, Sunscreen, etc.) and assign in Collection section | ☐ You |

---

## Phase 4 — Products & Collections

| Task | Status |
|------|--------|
| **Theme:** Product card (image hover swap, title, price, NEW badge, Add to cart) | ✅ Done |
| **Theme:** Collection grid 3/2/1 columns, sort, category nav | ✅ Done |
| **Theme:** Product page layout, variant select, quantity, Add to cart | ✅ Done |
| **Theme:** Cart drawer (opens on cart icon click, View cart / Checkout) | ✅ Done |
| **Theme:** Related products (4 cards) on product page | ✅ Done |
| Create collections: All Products, Face Wash, Sunscreen, Moisturizer | ☐ You |
| Create 4 products with images, descriptions, pricing (see build guide) | ☐ You |
| Tag products "new" where you want NEW badge | ☐ You |
| Assign featured collection in "Featured products" section | ☐ You |

---

## Phase 5 — Trust & Conversion

| Task | Status |
|------|--------|
| **Theme:** Trust badges (Dermatologist Tested, Cruelty Free, Made in India, Paraben Free) on product page | ✅ Done |
| **Theme:** WhatsApp floating button (+91 86507 51707) | ✅ Done |
| **Theme:** Wishlist icon in header (link configurable in section settings) | ✅ Done |
| Install Judge.me (or similar) for reviews | ☐ You |
| Install Wishlist app and set wishlist link in Header section | ☐ You |
| Set up Klaviyo (or Shopify Email) for signup + abandoned cart | ☐ You |

---

## Phase 6 — Payments, Shipping & Legal

| Task | Status |
|------|--------|
| Enable Razorpay (or PayU) in Settings → Payments | ☐ You |
| Enable COD if desired | ☐ You |
| Set shipping zone India; free shipping over ₹999; rate for under ₹999 | ☐ You |
| Install Shiprocket (optional) | ☐ You |
| Finalize Privacy, Terms, Refund, Cancellation policies (use `policies/` + lawyer) | ☐ You |
| **Theme:** Runbook `PHASE-6-RUNBOOK.md` | ✅ Done |

---

## Phase 7 — Polish, QA & Launch

| Task | Status |
|------|--------|
| **Theme:** Mobile bottom bar (Home, Shop, Search, Cart, Account) | ✅ Done |
| **Theme:** Meta description default when page_description blank | ✅ Done |
| **Theme:** Facebook Pixel (ID in Theme settings → Marketing, script in theme.liquid) | ✅ Done |
| Set Facebook Pixel ID in Theme settings if different from 4058893484256632 | ☐ You |
| Set homepage and key page meta titles/descriptions in Admin | ☐ You |
| QA: links, forms, cart, checkout, mobile, WhatsApp, policies | ☐ You |
| Remove password; confirm domain + SSL; final smoke test | ☐ You |
| **Theme:** Runbook `PHASE-7-RUNBOOK.md` | ✅ Done |

---

## Summary

- **All theme code for Phases 1–7 is complete.**  
- **Remaining work is in Shopify Admin:** store settings, pages, menus, products, collections, apps (Judge.me, Wishlist, Klaviyo), payments (Razorpay), shipping, policy finalization, Pixel verification, and QA/launch.  
- Use **PHASE-1-RUNBOOK.md** through **PHASE-7-RUNBOOK.md** for step-by-step Admin instructions.
