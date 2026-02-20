# Phase 1 — Foundation & Setup — Runbook

Follow these steps in order. Use the checkboxes to track progress.

---

## 1.1 Shopify account and plan

| Step | Action | Where |
|------|--------|--------|
| 1 | Sign up at [shopify.com](https://www.shopify.com) or log into your existing store | — |
| 2 | **Settings → General** | Shopify Admin |
| 3 | Set **Store name:** `Glamora Cosmetics` | General |
| 4 | Set **Store currency:** `INR (₹)` | General |
| 5 | Set **Timezone:** `Asia/Kolkata` | General |
| 6 | Set **Weight unit:** `Grams` | Standards and formats |
| 7 | Choose plan (Basic / Shopify / Advanced) when prompted | Billing |

- [ ] Store name, currency, timezone, and weight unit set

---

## 1.2 Domain and branding

| Step | Action | Where |
|------|--------|--------|
| 1 | **Settings → Domains**: Connect `glamoracosmetics.in` (or buy/transfer), or use `*.myshopify.com` for testing | Domains |
| 2 | **Settings → Store details**: Upload **Store logo** (transparent PNG, ~200px height for header) | Store details |
| 3 | Upload **Favicon** (e.g. 32×32 or 64×64 PNG) | Theme customizer → Theme settings (if available) or favicon in theme |

- [ ] Domain connected or development URL noted  
- [ ] Logo and favicon added

---

## 1.3 Theme and base setup

### Option A — Use this theme from GitHub

| Step | Action |
|------|--------|
| 1 | Push this repo to GitHub. In Shopify Admin: **Online Store → Themes → Add theme → Connect from GitHub**. Select this repo and branch; set **Theme path** if the theme lives in a subdirectory. |
| 2 | After the theme is added, click **Actions → Duplicate**. Rename duplicate to **Glamora – Custom**. |
| 3 | **Actions → Publish** when ready (or keep as development theme). |

### Option B — Use Shopify CLI (local push)

| Step | Action |
|------|--------|
| 1 | From this directory run: `shopify theme push` (or `shopify theme dev`). Ensure you’re logged in to the correct store. |
| 2 | In Admin: **Online Store → Themes**. Find the theme you pushed (e.g. "Glamora"). |
| 3 | Click **Actions → Duplicate**. Rename duplicate to **Glamora – Custom**. |
| 4 | **Actions → Publish** when ready (or keep development theme for now). |

### Create pages (placeholders)

| Step | Action | Where |
|------|--------|--------|
| 1 | **Online Store → Pages → Add page** | Pages |
| 2 | Create these pages (title only or 1 line of placeholder text): | |
| | **About Us** — handle: `about-us` | |
| | **Contact** — handle: `contact` | |
| | (Home is usually the theme default; no separate "Home" page needed.) | |
| 3 | **Online Store → Blog**: Create blog **News** (handle: `news`) if not already present. | Blogs |

- [ ] Theme duplicated and renamed to Glamora – Custom  
- [ ] Pages: About Us, Contact created  
- [ ] Blog: News created  

### Create navigation menus

| Step | Action | Where |
|------|--------|--------|
| 1 | **Online Store → Navigation → Add menu** | Navigation |
| 2 | **Header menu** (name: e.g. "Main menu"): | |
| | Add menu items: **Home** (link: `/`), **About Us** (link: `/pages/about-us`), **Shop** (link: `/collections/all`), **Blog** (link: `/blogs/news`), **Contact** (link: `/pages/contact`) | |
| 3 | **Footer menu** (name: e.g. "Footer"): | |
| | Add: **Privacy Policy**, **Terms & Conditions**, **Refund & Returns**, **Cancellation**, **Contact Us** (link to `/pages/contact`) | |
| 4 | **Online Store → Themes → Customize** (on your Glamora theme): | |
| | In **Header** section: set "Menu" to the Header menu you created. | |
| | In **Footer** section: set "Menu" to the Footer menu; enable "Show payment icons" if desired. | |

- [ ] Header menu created and assigned in theme  
- [ ] Footer menu created and assigned in theme  

---

## 1.4 Policy pages (placeholders)

Shopify can auto-generate policy pages. You can replace the content later (Phase 6).

| Step | Action | Where |
|------|--------|--------|
| 1 | **Settings → Legal** | Legal |
| 2 | Click **Create from template** for each: **Privacy Policy**, **Terms of service**, **Refund policy**, **Shipping policy** (or **Cancellation** if you use that). | |
| 3 | Edit each template: paste or adapt content from the **`policies`** folder in this theme repo (see below). | |
| 4 | Save. Ensure **Footer** menu links to these policy pages (e.g. `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/refund-policy`). | Navigation |

Placeholder content for each policy is in this repo:

- `policies/privacy-policy.md`
- `policies/terms-and-conditions.md`
- `policies/refund-returns-policy.md`
- `policies/cancellation-policy.md`

- [ ] Privacy Policy created and linked  
- [ ] Terms & Conditions created and linked  
- [ ] Refund & Returns Policy created and linked  
- [ ] Cancellation (or Shipping) Policy created and linked  

---

## 1.5 Verify

| Check | Done |
|-------|------|
| Store name shows as "Glamora Cosmetics" in header/footer | [ ] |
| Currency is INR (₹) across the store | [ ] |
| Header shows: Home, About Us, Shop, Blog, Contact | [ ] |
| Footer shows: policy links + Contact | [ ] |
| Clicking each nav link opens the correct page (or 404 for empty placeholders) | [ ] |
| Theme is duplicated; you're editing the duplicate, not the original | [ ] |

---

## Phase 1 complete when

- Store exists with correct name, timezone, currency (INR), and weight (grams).  
- Domain is connected or development URL is in use.  
- Logo and favicon are set.  
- Theme is installed and duplicated as "Glamora – Custom".  
- About Us and Contact pages exist; Blog (News) exists.  
- Header and footer menus are created and assigned in the theme.  
- All four policy pages exist and are linked in the footer.  

Next: **Phase 2 — Brand & Design System** (colors, typography, header/footer styling).
