# Phase 7 — Polish, QA & Launch — Runbook

Complete this phase so the store is ready for real traffic and you can go live.

---

## 7.1 Facebook Pixel & analytics

| Step | Action | Where |
|------|--------|--------|
| 1 | In **Settings → Customer events** (or **Online Store → Preferences**), find **Facebook Pixel** or **Additional scripts**. | Shopify Admin |
| 2 | Add your **Facebook Pixel ID**: `4058893484256632` (from build guide). Use Shopify’s native Facebook channel or a “Meta pixel” / custom pixel option so PageView, AddToCart, Purchase fire correctly. | |
| 3 | Optional: Add **Google Analytics 4** (GA4) via Google channel or tag in theme/checkout if needed. | |

- [ ] Facebook Pixel (4058893484256632) installed and verified in Events Manager
- [ ] Test: trigger a page view / add to cart and confirm in Events Manager

---

## 7.2 SEO (meta & content)

| Step | Action | Where |
|------|--------|--------|
| 1 | **Online Store → Preferences**: Set **Homepage title** and **Homepage meta description** (e.g. "Glamora Cosmetics — Anti-Pollution Skincare | Your Daily Dose of Glamour"). | Shopify Admin |
| 2 | For **each product**: Edit product → **Search engine listing** — unique title and description. | Products |
| 3 | For **About**, **Contact**, **Blog**: Edit page/blog → **Search engine listing** — title and description. | Pages / Blog |
| 4 | Theme already has default meta description when page description is blank; confirm in View source that `<meta name="description">` and OG tags are present. | Theme |

- [ ] Homepage title and meta set
- [ ] Key products and pages have unique titles/descriptions
- [ ] OG/meta present on key pages (view source)

---

## 7.3 QA checklist

| Check | Done |
|-------|------|
| **Links** — Header (Home, About, Shop, Blog, Contact), footer (policies, Contact), all CTAs | [ ] |
| **Forms** — Contact form submits; newsletter signup (if any) works | [ ] |
| **Cart** — Add to cart, update quantity, remove item; cart count in header updates | [ ] |
| **Checkout** — Guest and logged-in; select Razorpay (and COD); complete test order; refund | [ ] |
| **Mobile** — Bottom bar (Home, Shop, Search, Cart, Account); tap targets comfortable; no horizontal scroll | [ ] |
| **Policy links** — From footer and from checkout | [ ] |
| **WhatsApp** — Floating button opens chat with correct number (+91 86507 51707) | [ ] |
| **Blog & About & Contact** — Pages load; Contact shows form and address; About shows story/vision/mission | [ ] |

---

## 7.4 Launch

| Step | Action | Where |
|------|--------|--------|
| 1 | If store is **password protected**, go to **Online Store → Preferences** and **Disable password** (or set launch date). | Shopify Admin |
| 2 | Confirm **domain** is set and **SSL** is active (https). | Settings → Domains |
| 3 | Run a **final smoke test**: browse Home → Shop → Product → Add to cart → Checkout → Pay (then refund). | Storefront |
| 4 | Optional: Submit sitemap to **Google Search Console** (e.g. `https://yourstore.com/sitemap.xml`). | Google Search Console |

- [ ] Password removed (or launch date set)
- [ ] Domain and SSL confirmed
- [ ] Final smoke test passed
- [ ] Search Console submitted (optional)

---

## Phase 7 complete when

- Facebook Pixel (and optional GA4) are live and firing.
- Key pages have meta titles and descriptions.
- QA checklist is signed off.
- Store is live (no password), on custom domain, with SSL.

**Next:** **Phase 8 — Post-launch optimization** (marketing, content, reviews, monitoring).
