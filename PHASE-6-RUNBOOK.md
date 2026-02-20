# Phase 6 — Payments, Shipping & Legal — Runbook

Complete this phase so customers can pay (India), shipping is set, and policies are finalized.

---

## 6.1 Payments (India)

| Step | Action | Where |
|------|--------|--------|
| 1 | Go to **Settings → Payments** | Shopify Admin |
| 2 | Under **Third-party providers**, click **Add provider** (or **Choose provider**) | |
| 3 | Add **Razorpay** (or PayU). Follow the app/setup flow: connect your Razorpay account, enable UPI, cards, netbanking, wallets as needed. | |
| 4 | If you want **COD**: Under **Manual payment methods**, enable **Cash on Delivery (COD)** and set any restrictions (e.g. max order value, India only). | |
| 5 | Test: place a test order, pay with a real payment method, then refund from Admin. | |

- [ ] Razorpay (or PayU) connected and live
- [ ] COD enabled (optional)
- [ ] Test payment and refund done

---

## 6.2 Shipping

| Step | Action | Where |
|------|--------|--------|
| 1 | Go to **Settings → Shipping and delivery** | Shopify Admin |
| 2 | **Shipping zones**: Add (or edit) a zone **India** — include country India. | |
| 3 | **Rates**: Add a rate **Free shipping** — name e.g. "Free delivery", condition **Order price is greater than or equal to** `999` (₹), rate **₹0**. | |
| 4 | Add a second rate for orders below ₹999, e.g. **Flat rate** ₹99 (or use **Shiprocket** app to calculate rates). | |
| 5 | If using **Shiprocket**: Install from App Store, connect account, enable in shipping profile so rates pull automatically. | |
| 6 | Ensure your **announcement bar** and product page text match: "Free shipping on orders above ₹999". | Theme / Content |

- [ ] India shipping zone created
- [ ] Free shipping over ₹999 set
- [ ] Rate for orders under ₹999 set (or Shiprocket)
- [ ] Shiprocket installed and connected (optional)

---

## 6.3 Legal (policies)

| Step | Action | Where |
|------|--------|--------|
| 1 | Go to **Settings → Legal** | Shopify Admin |
| 2 | For each policy (Privacy, Terms, Refund, Cancellation/Shipping): **Edit** the current text. | |
| 3 | Replace with finalized content. Use the placeholders in this repo’s **`policies/`** folder as a base, then have a lawyer review and finalize for India (jurisdiction, consumer rights, etc.). | |
| 4 | Add **Effective date** and **Last updated** dates. | |
| 5 | Confirm **Footer** menu (and checkout) links to the correct policy URLs: `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/refund-policy`, and your cancellation/shipping policy. | Navigation / Checkout |

- [ ] Privacy Policy finalized and linked
- [ ] Terms & Conditions finalized and linked
- [ ] Refund & Returns Policy finalized and linked
- [ ] Cancellation (or Shipping) Policy finalized and linked
- [ ] Legal review done (recommended)

---

## 6.4 Verify

| Check | Done |
|-------|------|
| At checkout, customer can choose Razorpay (and COD if enabled) | [ ] |
| Free shipping appears when cart total ≥ ₹999 | [ ] |
| All four policy pages open from footer and show final copy | [ ] |
| Checkout shows policy links and they work | [ ] |

---

## Phase 6 complete when

- Customers can pay with Razorpay (and COD if you enabled it).
- Shipping shows free over ₹999 and a paid option below.
- All policy pages are finalized, linked in footer and checkout, and (ideally) reviewed by a lawyer.

**Next:** **Phase 7 — Polish, QA & Launch** (Facebook Pixel, QA checklist, go-live).
