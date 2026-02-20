# Contact & About Us Pages — Setup Guide

Both pages are now **properly configured** with dedicated templates and sections.

---

## Contact Page (`/pages/contact`)

**Template:** `page.contact.json` (automatically used when page handle is `contact`)

**Sections included:**
1. **Contact hero** — "Contact Us" heading + subtitle
2. **Contact page** — Address, phone, email, hours, social links + contact form + FAQ accordion
3. **Contact map** — Google Maps embed (Moradabad location)

### To set up:

1. **In Shopify Admin:**
   - Go to **Online Store → Pages**
   - Create or edit page with handle `contact` (URL: `/pages/contact`)
   - In **Template** dropdown, select **contact** (or it auto-selects if handle matches)
   - The page will automatically use `page.contact.json` template

2. **In Theme Editor (optional customization):**
   - Go to **Online Store → Themes → Customize**
   - Navigate to **Contact** page
   - Edit sections:
     - **Contact page**: Update address, phone, email, hours, Instagram/Facebook URLs
     - **Contact map**: Paste your Google Maps embed code (or use default Moradabad location)
     - **FAQ**: Edit questions/answers or add more FAQ blocks

---

## About Us Page (`/pages/about-us`)

**Template:** `page.about-us.json` (automatically used when page handle is `about-us`)

**Sections included:**
1. **About hero** — "About Glamora" heading + "Your Daily Dose of Glamour" tagline
2. **About content** — Brand story (image + text), Vision (text + icon), Mission (3 cards)
3. **About trust** — "Why Trust Glamora" + trust badges + 4 trust cards

### To set up:

1. **In Shopify Admin:**
   - Go to **Online Store → Pages**
   - Create or edit page with handle `about-us` (URL: `/pages/about-us`)
   - In **Template** dropdown, select **about-us** (or it auto-selects if handle matches)
   - The page will automatically use `page.about-us.json` template

2. **In Theme Editor (optional customization):**
   - Navigate to **About Us** page
   - Edit sections:
     - **About content**: Upload story image, edit brand story and vision text
     - All content is editable via section settings

---

## Template matching

Shopify automatically matches page templates when:
- Page handle = `contact` → uses `page.contact.json`
- Page handle = `about-us` → uses `page.about-us.json`
- Other pages → uses default `page.json`

If the template doesn't auto-select, manually choose it in the page editor under **Template**.

---

## What's included

### Contact Page:
- ✅ Hero banner
- ✅ 2-column layout (info left, form right)
- ✅ Address, phone, email, hours
- ✅ Social links (Instagram, Facebook)
- ✅ Contact form (name, email, phone, subject, message)
- ✅ FAQ accordion (3 default FAQs, editable)
- ✅ Google Maps embed (Moradabad)

### About Us Page:
- ✅ Hero banner
- ✅ Brand story (image + text)
- ✅ Vision section (text + decorative icon)
- ✅ Mission (3 cards: Premium Quality, Pollution Defense, Nourishing Care)
- ✅ Trust badges section (4 cards: Dermatologist Tested, Cruelty Free, Made in India, Paraben Free)

Both pages are **mobile-responsive** and use Glamora brand colors and typography.
