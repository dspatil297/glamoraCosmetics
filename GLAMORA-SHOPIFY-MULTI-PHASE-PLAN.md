# Glamora Cosmetics — Multi-Phase Shopify Development Plan

> A phased roadmap to build a **fully functional**, **professional**, **premium**, and **trustworthy** Shopify store.  
> Reference: `glamora-shopify-build-guide.md` (in this folder).

**Phase 1:** Runbook → `PHASE-1-RUNBOOK.md` | Policy placeholders → `policies/` folder.  
**Phase 2:** Brand & design system in theme; runbook → `PHASE-2-RUNBOOK.md`.  
**Phases 3–7 (theme code):** Home (9 sections), Collection (banner + grid), Product, Contact/About sections, trust badges, WhatsApp, mobile bar, SEO. See `REMAINING-WORK.md` for what’s done in code vs Admin.

---

## Overview

| Phase | Focus | Outcome |
|-------|--------|--------|
| **1** | Foundation & setup | Live Shopify store with correct settings, domain, and structure |
| **2** | Brand & design system | Consistent premium look and feel across the store |
| **3** | Core pages & content | Home, Shop, About, Blog, Contact + policies |
| **4** | Products & collections | All 4 products, collections, filters, and product UX |
| **5** | Trust & conversion | Reviews, security, trust badges, and conversion features |
| **6** | Payments, shipping & legal | India-ready checkout, shipping, and compliance |
| **7** | Polish, QA & launch | Mobile, performance, SEO, and go-live checklist |
| **8** | Post-launch optimization | Marketing, analytics, and iterative improvements |

---

## Phase 1 — Foundation & Setup  
**Goal:** Store exists, is correctly configured, and ready for design and content.

### 1.1 Shopify account and plan
- [ ] Sign up for Shopify (or use existing store)
- [ ] Choose plan (Basic / Shopify / Advanced) based on expected volume
- [ ] Set **Store name:** Glamora Cosmetics
- [ ] Set **Timezone:** Asia/Kolkata
- [ ] Set **Currency:** INR (₹)
- [ ] Set **Weight unit:** Grams

### 1.2 Domain and branding
- [ ] Connect custom domain (e.g. `glamoracosmetics.in`) or use `.myshopify.com` for testing
- [ ] Add store logo (high-res, transparent PNG for header)
- [ ] Add favicon

### 1.3 Theme selection and base setup
- [ ] Use this theme from GitHub (Connect from GitHub in Themes) or push via Shopify CLI
- [ ] Duplicate theme before heavy customization (e.g. "Glamora – Custom")
- [ ] Create required **pages** (placeholders): About Us, Contact; Blog (News)
- [ ] Create **navigation menus:** Header (Home, About Us, Shop, Blog, Contact) and Footer (policies + Contact)

### 1.4 Policy pages (placeholders)
- [ ] Create: Privacy Policy, Terms & Conditions, Refund & Returns Policy, Cancellation Policy  
- [ ] Copy content from `policies/` in this folder into Shopify **Settings → Legal**
- [ ] Link in footer; full legal copy can be completed in Phase 6

### 1.5 Deliverable
- Store is live (or on development domain), correct region/currency, theme installed, navigation and policy page links in place.

---

## Phase 2 — Brand & Design System  
**Goal:** Theme looks professional, premium, and on-brand everywhere.

### 2.1 Color system
- [ ] In theme settings (or `settings_schema.json`), set: Primary #C4896F, Secondary #F2D4C8, Accent #D4AF87, Background #FAF7F4, Text #2C2C2C, Muted #7A7A7A, CTA #A0614A, CTA hover #7A3D2E, Section alt #F5EDE6
- [ ] Use these in CSS variables or theme settings so all sections stay consistent

### 2.2 Typography
- [ ] Load **Cormorant Garamond** (headings) and **Lato** (body) from Google Fonts
- [ ] Set heading and body sizes per build guide

### 2.3 Global UI elements
- [ ] Buttons: 4px border-radius, uppercase; cards: 8–12px radius, subtle shadow; hover scale on images

### 2.4 Header and announcement bar
- [ ] Sticky header with backdrop blur; announcement bar "Free shipping on orders above ₹999 | Anti-Pollution Skincare"
- [ ] Logo left, nav center, right: search, wishlist, cart (badge), account; mobile hamburger

### 2.5 Footer
- [ ] 3-column: Logo + address + phone; Useful links (policies, Contact); Recent blog posts; bottom bar with payment icons

### 2.6 Deliverable
- Consistent premium warm aesthetic; header and footer match the guide.

---

## Phase 3 — Core Pages & Content  
**Goal:** All main pages exist with correct structure and content.

### 3.1 Home page (9 sections)
- [ ] Hero slider (5 slides) | Welcome | Category banners (3) | Featured products (4) | Full product row | Brand features / USP | Countdown / offer | Organic ingredients | Blog preview

### 3.2 Shop page (`/collections/all`)
- [ ] Collection banner; sidebar filters (category, price, rating, sort); product grid 3/2/1 columns

### 3.3 About Us, Blog, Contact
- [ ] About: brand story, vision, mission (3 icons); Blog: 5 posts; Contact: info + form + map

### 3.6 Deliverable
- Home, Shop, About, Blog, Contact complete; blog 5 posts; contact form works.

---

## Phase 4 — Products & Collections  
**Goal:** All products live, collections, filters, product UX, cart drawer.

### 4.1–4.5
- [ ] Collections: All Products, Face Wash, Sunscreen, Moisturizer
- [ ] 4 products with images, descriptions, pricing per guide
- [ ] Product page: gallery, details, tabs, related products; quick-view; cart drawer

---

## Phase 5 — Trust & Conversion  
**Goal:** Reviews, trust badges, wishlist, WhatsApp, email capture.

### 5.1–5.5
- [ ] Judge.me reviews; trust badges (Dermatologist Tested, Cruelty Free, etc.); Wishlist Plus; WhatsApp float +91 86507 51707; Klaviyo signup + abandoned cart

---

## Phase 6 — Payments, Shipping & Legal  
**Goal:** Razorpay + COD, Shiprocket, free shipping over ₹999; policies finalized and linked.

---

## Phase 7 — Polish, QA & Launch  
**Goal:** Mobile bottom bar, SEO, performance, Facebook Pixel, QA, go-live.

---

## Phase 8 — Post-Launch Optimization  
**Goal:** Marketing, content, reviews, monitoring.

---

## Summary: Trust & Premium Checklist

| Area | Actions |
|------|--------|
| **Look** | Consistent colors, typography, spacing (Phase 2) |
| **Content** | Real copy; benefits and ingredients (Phases 3–4) |
| **Trust** | Reviews, badges, policies, WhatsApp (Phases 5–6) |
| **Function** | Cart, filters, checkout, contact form (Phases 4, 6, 7) |
| **Legal** | Privacy, T&C, Refund, Cancellation linked (Phases 1, 6) |
| **Performance** | Fast load, mobile-first, SEO (Phase 7) |

---

*Plan derived from `glamora-shopify-build-guide.md` — February 2026*
