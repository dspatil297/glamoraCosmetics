# Glamora — Shopify Theme

Shopify theme for **Glamora Cosmetics** (glamoracosmetics.in). This repository is meant to be connected to GitHub and then to your Shopify store so you can deploy and manage the theme from version control.

---

## Repository structure

| Path | Purpose |
|------|--------|
| `layout/`, `sections/`, `snippets/`, `templates/`, `config/`, `assets/`, `locales/`, `blocks/` | Standard Shopify theme files (required for store) |
| `PHASE-1-RUNBOOK.md` | Step-by-step Phase 1 setup (Admin + theme) |
| `PHASE-2-RUNBOOK.md` | Phase 2 verify & tweak (brand & design in Theme Editor) |
| `PHASE-6-RUNBOOK.md` | Phase 6 — Payments, shipping & legal (Admin steps) |
| `PHASE-7-RUNBOOK.md` | Phase 7 — Polish, QA & launch (Pixel, QA, go-live) |
| `GLAMORA-SHOPIFY-MULTI-PHASE-PLAN.md` | Full 8-phase development plan |
| `PHASES-1-7-COMPLETE.md` | Master checklist: every Phase 1–7 task (theme done / Admin) |
| `CONTACT-ABOUT-SETUP.md` | How to set up Contact and About Us pages |
| `UNSPLASH-IMAGES.md` | Unsplash image URLs used in theme placeholders |
| `glamora-shopify-build-guide.md` | Brand, design, pages, and content reference |
| `policies/` | Policy page placeholder content (copy into Shopify **Settings → Legal**) |
| `REMAINING-WORK.md` | What’s done in theme code vs what to do in Shopify Admin |

---

## Connecting Shopify to this GitHub repo

1. **Push this folder to GitHub**  
   Ensure `my-theme` is the **root of the repo** (so Shopify sees `layout/`, `config/`, etc. at the top level), or that your repo has a single folder that contains these theme files.

2. **In Shopify Admin**  
   - Go to **Online Store → Themes**.  
   - Click **Add theme → Connect from GitHub**.  
   - Authorize Shopify to access your GitHub account and select this repository.  
   - Choose the **branch** (e.g. `main`).  
   - If your theme is in a **subdirectory**, set **Theme path** to that folder (e.g. `my-theme`). If the repo root is the theme, leave Theme path blank.

3. **Deploy**  
   After connecting, you can push changes from this repo to deploy a new theme version, or set the GitHub-connected theme as the live theme.

---

## Local development

From this directory:

```bash
# Log in to your store (one-time)
shopify auth login --store your-store.myshopify.com

# Push theme to Shopify
shopify theme push

# Or run a live preview with hot reload
shopify theme dev
```

Requires [Shopify CLI](https://shopify.dev/docs/themes/tools/cli).

---

## Docs quick links

- **Phase 1 setup:** Follow `PHASE-1-RUNBOOK.md` in order.  
- **Full roadmap:** See `GLAMORA-SHOPIFY-MULTI-PHASE-PLAN.md`.  
- **Brand & copy:** Use `glamora-shopify-build-guide.md` for colors, typography, page structure, and content.  
- **Policies:** Copy from `policies/*.md` into Shopify **Settings → Legal** (finalize with a lawyer in Phase 6).

---

*Glamora Cosmetics — Anti-Pollution Skincare*
