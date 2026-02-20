# Glamora Cosmetics — Shopify Build Guide
> A complete AI prompt guide to recreate and improve GlamoraCosmetics.in on Shopify with better design, structure, and conversion optimization.

---

## 🎨 Brand Identity & Design System

### Color Palette
Use these exact colors throughout the theme:

| Role | Color | Hex |
|------|-------|-----|
| Primary / Brand | Deep Rose Gold | `#C4896F` |
| Secondary | Warm Blush | `#F2D4C8` |
| Accent | Champagne Gold | `#D4AF87` |
| Background | Cream White | `#FAF7F4` |
| Dark Text | Charcoal | `#2C2C2C` |
| Muted Text | Warm Gray | `#7A7A7A` |
| CTA Button | Dark Rose | `#A0614A` |
| CTA Hover | Deep Burgundy | `#7A3D2E` |
| Section Alt BG | Soft Ivory | `#F5EDE6` |

> The original site uses a warm, feminine palette anchored in rose-gold tones with cream backgrounds. Maintain this warmth — avoid cold whites or stark blacks.

### Typography
```
Headings:     Cormorant Garamond — Elegant serif, conveys luxury
Subheadings:  Playfair Display — Slightly bolder serif
Body Text:    Lato or DM Sans — Clean, highly readable sans-serif
Buttons/Tags: Montserrat — Geometric, modern sans-serif

Font sizes:
  H1: 52–64px (hero), 36–44px (sections)
  H2: 28–34px
  H3: 20–24px
  Body: 15–16px, line-height 1.7
  Small/Labels: 12–13px, letter-spacing 0.1em, uppercase
```

> Load fonts from Google Fonts. Cormorant Garamond + Lato is the recommended pairing.

### Styling Details
- **Border radius:** 4px on buttons, 8–12px on cards and image containers
- **Shadows:** Subtle box-shadow `0 4px 20px rgba(0,0,0,0.07)` on product cards
- **Buttons:** Uppercase text, 1.5–2px letter-spacing, solid fill for primary CTAs, outlined for secondary
- **Hover effects:** Slight scale (1.03) on product images, color darken on buttons
- **Spacing:** Generous white space — minimum 80px vertical section padding
- **Dividers:** Thin 1px lines in `#E8D8CE` instead of harsh grays
- **Icons:** Feather icons or custom SVG line icons (cosmetics, leaf, shield, spray)

---

## 🏗️ Shopify Theme Recommendation

**Recommended Theme:** `Dawn` (free, Shopify default) or `Crave` / `Impulse` (premium)

> If using Dawn: heavily customize via `theme.liquid`, `settings_schema.json`, and custom CSS sections.
> If budget allows, use **Crave** theme — it has built-in lifestyle imagery support and cosmetic-brand layouts.

---

## 📄 Pages to Create (5 Pages — Same as Original)

1. **Home** (`/`)
2. **Shop** (`/collections/all`)
3. **About Us** (`/pages/about-us`)
4. **Blog** (`/blogs/news`)
5. **Contact Us** (`/pages/contact`)

Plus required policy pages:
- Privacy Policy
- Terms & Conditions
- Refund & Returns Policy
- Cancellation Policy

---

## 🧭 Navigation Structure

### Header
```
[Logo — Left]                [Nav — Center]                    [Icons — Right]
                  Home | About Us | Shop | Blog | Contact       🔍 ♡ 🛒 👤
```

- Sticky header on scroll with slight background blur (`backdrop-filter: blur(8px)`)
- Announcement bar above header: `"Free shipping on orders above ₹999 | Anti-Pollution Skincare"`
- Mobile: hamburger menu with slide-in drawer
- Cart icon shows item count badge in rose-gold

### Footer (3-column layout)
```
[Column 1]              [Column 2]            [Column 3]
Logo + Address          Useful Links          Recent Blog Posts
Phone: +91 86507 51707  - Privacy Policy      - Post thumbnail + title
Instagram | Facebook    - Terms & Conditions  - Post thumbnail + title
                        - Refund Policy       
                        - Cancellation Policy 
                        - Contact Us          

[Bottom bar: © 2024 Glamora | Payment icons (Visa, Mastercard, UPI, Razorpay)]
```

---

## 🛒 Page 2: Shop Page (`/collections/all`)

**Layout:** Sidebar filter + product grid

### Sidebar Filters:
- Category: Skin Products, Face Wash, Sunscreen, Moisturizer
- Price Range: ₹0 – ₹1000 (slider)
- Rating: ⭐ 4+ Stars filter
- Sort: Featured | Price Low-High | Price High-Low | Newest

### Product Grid:
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- All 4 current products displayed
- "Showing X of Y products" count
- Pagination or infinite scroll

### Collection Banner at Top:
```
[Full-width banner image]
Shop Glamora
"Anti-Pollution Skincare for Urban Living"
```

---

## ℹ️ Page 3: About Us (`/pages/about-us`)

### Layout: Split sections alternating image + text

**Section 1 — Brand Story**
```
[Left: Product lifestyle image — woman + Glamora bottles]
[Right:]
About our online store

At Glamora, we believe skincare is more than a routine – it's a ritual 
of self-love. Our journey began with a simple desire: to create products 
that truly care for your skin, not just protect it. Every formula we craft 
is designed to nourish, hydrate, and enhance your skin's natural beauty, 
leaving you feeling confident and radiant every day.

Using advanced scientific research and premium natural extracts, we ensure 
that every product delivers visible results without compromising on luxury. 
We believe that glamour isn't just a look, it's a feeling – and Glamora 
is your daily dose of that feeling.
```

**Section 2 — Vision**
```
[Decorative icon]
Our Vision

At Glamora, we envision a world where beauty and wellness go hand in hand. 
Our mission is to empower confidence and radiance by offering skincare that 
protects, enhances, and cares for your skin. With a commitment to effectiveness, 
luxury, and sustainability, we ensure your beauty routine supports both your 
skin and the planet. Our vision is to be the trusted choice for premium 
anti-pollution skincare, helping you glow every day, wherever life takes you.
```

**Section 3 — Mission (3 columns with icons)**
```
Our Mission — At Glamora, we promise excellence in every product.

[Icon] Premium Quality        [Icon] Pollution Defense        [Icon] Nourishing Care
Crafted with finest           Advanced protection against     Hydrates, revitalizes, and
ingredients for visible,      pollution, UV rays, and         repairs for radiant, healthy
lasting results.              environmental stressors.        skin every day.
```

> **Improvement over original:** Add a team photo section, brand founding story with a timeline, and a trust badges row (Dermatologist Tested | Cruelty Free | Made in India | Paraben Free).

---

## 📝 Page 4: Blog (`/blogs/news`)

**Layout:** Featured post (large) + 3-column grid below

### Blog Posts to Create:
1. **The Best Anti-Pollution Foaming Face Wash from Glamora** — Skincare Tips | Dec 26, 2024
2. **Protect Your Skin with Glamora's Anti-Pollution Sunscreen** — Sun Protection | Dec 26, 2024
3. **Hydrate and Shield with Glamora's Anti-Pollution Moisturizing Spray** — Hydration | Dec 26, 2024
4. **Glow Naturally: Glamora's Ultimate Anti-Pollution Skincare Line** — Brand Story | Dec 27, 2024
5. **Deep Cleanse and Defend: Glamora Anti-Pollution Face Wash** — Product Review | Dec 27, 2024

### Blog Card Design:
- Date badge overlaid top-left corner of thumbnail (rose-gold background)
- Category pill below title
- Author avatar + name + date
- "Continue Reading →" link in brand color

---

## 📬 Page 5: Contact Us (`/pages/contact`)

**Layout:** 2-column — left: info, right: contact form

### Left Column — Contact Information:
- Address: 38, Deputy Gunj, Moradabad - 244001, Uttar Pradesh, India
- Phone: +91 86507 51707 | Email: support@glamoracosmetics.in
- Hours: Mon–Sat, 10:00 AM – 6:00 PM
- Instagram @glamoracosmetics.official | Facebook Glamora Cosmetics

### Right Column — Contact Form:
Full Name *, Email *, Phone, Subject (dropdown), Message *, [SEND MESSAGE] (full width, rose-gold)

> Add Google Maps (Moradabad) and optional FAQ accordion below.

---

## 🛍️ Product Pages — 4 Products

1. **Glamora Pollution Control Face Wash** — ₹469, 100ml
2. **Glamora Pollution Control Foaming Face Wash** — ₹399, 150ml
3. **Glamora Pollution Control Hybrid Sunscreen** — ₹669, 50g, 4.67/5
4. **Glamora Pollution Control Moisturizing Spray** — ₹649, 100ml, NEW

See full descriptions, ingredients, benefits, and product page layout in this guide.

---

## 🔧 Shopify Apps to Install

Judge.me Reviews | Klaviyo | Wishlist Plus | Razorpay / PayU | Shiprocket | SEO Manager | Loox | WhatsApp Chat | Facebook Pixel (4058893484256632)

---

## 📱 Mobile Optimization

Sticky bottom bar: Home, Shop, Search, Cart, Account. Touch targets ≥ 44px. Swipeable gallery. Accordion filter drawer. WhatsApp: +91 86507 51707.

---

## ⚙️ Shopify Settings Configuration

Store name: Glamora Cosmetics | Currency: INR (₹) | Weight: Grams | Time zone: Asia/Kolkata. Theme colors/fonts per JSON in guide.

---

## 📋 Content Checklist for AI/Developer

Set brand colors, Cormorant Garamond + Lato, 4 products, collections, Home 9 sections, About 3 sections, 5 blog posts, Contact form + map, policy pages, navigation, Razorpay, Facebook Pixel, social links, shipping India, support@glamoracosmetics.in, WhatsApp +91 86507 51707, mobile test, SEO meta.

---

*Guide created by analyzing glamoracosmetics.in — February 2026*
