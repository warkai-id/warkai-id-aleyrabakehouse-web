# MISSING CONTENT — Aleyra Bakehouse Digital Flagship

> Checklist of content that is placeholder, missing, or requires action before production launch.

---

## 🔴 Must Resolve Before Launch

### WhatsApp Number
- **Current:** Dummy `6280000000000`
- **Location:** `content/brand.ts` → `contact.whatsapp`
- **Action:** Replace with official Aleyra Bakehouse WhatsApp number
- **TODO marker:** Yes, in source code

### Testimonial Privacy Masking
The following testimonial screenshots require masking of personal data before launch:

| File | Data to Mask |
|---|---|
| `testimonial-01.webp` (from TESTIMONI 1) | Contact name "Btn Putri Lestari...", profile photo |
| `testimonial-04.webp` (from TESTIMONI 4) | Contact name "Btn Putri Lestari...", profile photo |
| `testimonial-09.webp` (from TESTIMONI 10) | Contact name "Widha", profile photo |
| `testimonial-10.webp` (from TESTIMONI 11) | Contact name "Widha", profile photo |
| `testimonial-11.webp` (from TESTIMONI 12) | Instagram username "riskanovaliani", profile photo |
| `testimonial-12.webp` (from TESTIMONI 13) | Instagram username "minieasmarani", profile photo, @yubitaswadie mention |
| `testimonial-13.webp` (from TESTIMONI 14) | Instagram username "widhachr", profile photo, @yubitaswadie mention |

**TESTIMONI (9)** is fully excluded — contains bank transfer receipt with names and account numbers.

### Audio File
- **Current:** Placeholder path `/audio/aleyra-jazz-ambience.mp3` — no file exists
- **Action:** Source a royalty-free jazz ambience track, convert to MP3, place at `public/audio/aleyra-jazz-ambience.mp3`
- **Interface behavior:** Fails gracefully without the file, no console errors

---

## 🟡 Should Resolve Before Launch

### Seasonal Product
- **Current:** Dummy "Matcha Burnt Cheesecake" with placeholder price
- **Location:** `content/products.ts`
- **Action:** Replace with real seasonal product or remove the card
- **Marked as:** `isPlaceholder: true` in content config

### Event Data
- **Current:** 3 dummy events with generic names and venues
- **Location:** `content/events.ts`
- **Action:** Replace with real events or mark as "Coming Soon"
- **Marked as:** `isDummy: true` in content config

### Target Launch Date
- **Current:** Not set (original 25 July 2025 has passed)
- **Action:** Confirm new target launch date with owner

### Favicon & App Icons
- **Current:** Default Next.js favicon
- **Action:** Create Aleyra-branded favicon in multiple sizes (16x16, 32x32, 180x180 apple-touch-icon)
- **Required variants:** dark background, light background, transparent, square

### Open Graph Image
- **Current:** Using hero product image as fallback
- **Action:** Create dedicated 1200x630 OG image with Aleyra branding

---

## 🟢 Acceptable for MVP (Dummy OK per PRD)

### Production Process Photos
- **Source:** `assets-source/process-dummy/` — empty
- **Current:** Elegant text-based placeholder in Our Story page
- **PRD allows:** Dummy for production process until real photos available

### Booth Photos
- **Source:** `assets-source/booth-dummy/` — empty
- **Current:** Elegant text-based placeholder in Booth page
- **PRD allows:** Dummy for booth until real photos available

### Brand Story Copy
- **Current:** Approved direction from PRD, written in warm Gen Z style
- **Status:** Final review by owner recommended but MVP-acceptable

### Instagram Gallery
- **Current:** Uses packaging/product images as curated gallery
- **Action:** Optional — can be updated with actual Instagram content later

---

## Content Verification Checklist (Pre-Launch)

- [ ] WhatsApp number replaced with real number
- [ ] All testimonial screenshots have PII masked
- [ ] Three product prices verified by owner (25000, 183000, 244000)
- [ ] Email address verified: aleyrabakehouse@gmail.com
- [ ] Instagram handle verified: @aleyra.bakehouse
- [ ] Seasonal product updated or removed
- [ ] Events updated with real data or marked "Coming Soon"
- [ ] Audio file sourced and placed
- [ ] Favicon created and placed
- [ ] OG image created
- [ ] Full copywriting review by owner
- [ ] Launch date confirmed
