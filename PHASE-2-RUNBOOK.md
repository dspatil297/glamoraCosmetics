# Phase 2 — Brand & Design System — Runbook

Phase 2 is **implemented in the theme code**. Use this runbook to verify and tweak in the Theme Editor.

---

## What’s already done in the repo

- **Glamora colors** in Theme settings: Primary, Secondary, Accent, Background, Background alt, Text, Text muted, CTA button, CTA hover, Border (see `config/settings_schema.json`).
- **Typography**: Body font (Lato default), Heading font (Cormorant Garamond default). Both loaded via Shopify font picker and CSS variables.
- **Layout**: Button radius (4px), card radius (8px), section padding (80px), dividers (`#E8D8CE`).
- **Header**: Sticky with backdrop blur; announcement bar (“Free shipping on orders above ₹999 | Anti-Pollution Skincare”); cart count badge in rose-gold (primary color); search icon added.
- **Footer**: 3-column layout — (1) Logo + address + phone + social, (2) Useful links menu, (3) Payment icons. Editable address and social URLs.
- **Base CSS**: Buttons (`.btn--primary`, `.btn--secondary`), cards (`.card` with hover scale), typography (h1–h3 use heading font).

---

## Verify in Theme Editor

1. **Online Store → Themes → Customize** (on your Glamora theme).

2. **Theme settings (left sidebar, click the theme name or “Theme settings”)**
   - **Glamora colors**: Confirm all palette swatches match the build guide (Primary `#C4896F`, Background `#FAF7F4`, etc.). Adjust if needed.
   - **Typography**: Confirm “Body font” and “Heading font” (Lato + Cormorant Garamond). If your store doesn’t show Cormorant Garamond, choose the closest serif and add Google Fonts fallback in `theme.liquid` if you prefer.
   - **Layout**: Page width, margin, button/card radius.

3. **Header section**
   - Toggle “Show announcement bar” and set “Announcement text” (e.g. “Free shipping on orders above ₹999 | Anti-Pollution Skincare”).
   - Assign the **Main menu** (Home, About Us, Shop, Blog, Contact).

4. **Footer section**
   - Assign the **Footer menu** (Privacy, Terms, Refund, Cancellation, Contact).
   - Check “Show address and phone”; edit Address if needed.
   - Add Instagram and Facebook URLs if you have them.
   - Toggle “Show payment icons” (visible once payments are set up in Phase 6).

5. **Quick visual check**
   - Announcement bar appears above header; header is sticky and slightly blurred on scroll.
   - Cart icon shows a rose-gold badge when cart has items.
   - Footer has 3 columns on desktop and stacks on mobile.
   - Body text uses body font; headings use heading font; buttons use CTA color.

---

## Optional: Google Fonts fallback

If Cormorant Garamond or Lato are not available in your theme’s font picker, add this in `layout/theme.liquid` inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700&family=Lato:ital,wght@0,400;0,700&display=swap" rel="stylesheet">
```

Then in `snippets/css-variables.liquid` you can add fallbacks in the `:root` block, e.g.:

```css
--font-heading: "Cormorant Garamond", serif;
--font-body: "Lato", sans-serif;
```

(Only if you’re not relying on the font picker for these.)

---

## Phase 2 complete when

- [ ] All Glamora colors are set and used across the theme.
- [ ] Headings use the chosen serif (Cormorant Garamond or fallback); body uses Lato or chosen sans.
- [ ] Buttons and cards use the new radius and shadow; section padding feels consistent.
- [ ] Header has announcement bar (optional) and sticky blur; cart badge is rose-gold.
- [ ] Footer is 3-column with logo/address, links, and payment icons.

Next: **Phase 3 — Core Pages & Content** (Home sections, Shop, About, Blog, Contact).
