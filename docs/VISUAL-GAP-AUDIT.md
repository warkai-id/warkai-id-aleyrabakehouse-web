# VISUAL GAP AUDIT — Aleyra Bakehouse Digital Flagship

> **Reference:** `assets-source/references/UIUX AleyraBakehouse V_3.webp`
> **PRD:** `doc/PRD.md` (content, routes, business rules source of truth)
> **Date:** 2026-07-21
> **Scope:** Current implementation vs. approved visual reference

---

## Methodology

The reference image (`V_3.webp`) is the **single source of truth for visual direction**. The PRD remains the **single source of truth for content, routes, business rules, and functionality**.

**Adaptation note:** The reference contains a "Journal" page. Per PRD §2.3, Journal is removed from MVP. Journal-related visual slots must be adapted into the **"Apa Kata Mereka"** section, preserving the same editorial visual rhythm, spacing, proportions, and styling from the Journal page layout.

Each finding is classified:

| Priority | Meaning |
|---|---|
| 🔴 Critical | Breaks visual identity or brand perception; must fix before launch |
| 🟠 Major | Noticeably deviates from reference; should fix in current phase |
| 🟡 Minor | Subtle polish item; can be addressed in refinement pass |

---

## 1. Page Width & Max-Width

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Max-width | `1280px` | ~`1200px` visual content area within wider canvas | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L180) `.section-container` |
| Hero width | Full-bleed `100vw` | Contained within header boundaries, not full-bleed; hero image sits to the right of text content in a split-layout | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx) |
| Side padding (desktop) | `4rem` (64px) | ~`5rem–6rem` (80–96px) generous whitespace margins | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L194-L199) |

**Current condition:** Content container is `max-width: 1280px` with `4rem` desktop padding, producing ~1152px content width.

**Expected condition:** Reference shows a ~1100–1200px content area with more generous outer margins. Hero is not full-bleed but a contained split-layout within the same container.

**Recommended correction:**
- Reduce `.section-container` `max-width` to `1200px`
- Increase desktop padding to `5rem` (80px)
- Restructure hero from full-bleed overlay to contained split-layout

**Priority:** 🟠 Major

---

## 2. Header Height & Spacing

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Header height | `h-16` (64px) | ~72–80px, more generous vertical padding | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L8) |
| Background | `bg-warm-white/80 backdrop-blur-md` | Clean solid `warm-white` / `butter-cream`, no blur glass effect | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L7) |
| Bottom border | `border-b border-light-taupe` | Very subtle or no visible bottom border; clean separation through whitespace | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L7) |
| Sticky behavior | `sticky top-0` | Reference shows sticky, which is correct | — |
| Order Now button position | Separate `<div>` after nav | Integrated at the end of navigation row, styled distinctly with border/pill outline | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L21-L30) |

**Current condition:** Header uses 64px height, backdrop-blur glassmorphism, and a light taupe bottom border. "Order Now" is visually separated from nav links.

**Expected condition:** Reference shows a taller (~72–80px) header with clean solid background (no glassmorphism per PRD §4.2 "avoid excessive glassmorphism"), no visible border, and "Order Now" as a pill-outline button at the end of the navigation row. Logo is the actual Aleyra logo image, not text.

**Recommended correction:**
- Increase header height to `h-[72px]` or `h-20` (80px)
- Remove `backdrop-blur-md` and opacity; use solid `bg-warm-white`
- Remove or reduce `border-b` to a very thin line or remove entirely
- Replace text-only logo with `next/image` logo image (`/images/brand/logo-transparent.webp`)
- Integrate "Order Now" as the final nav item with outline-pill style

**Priority:** 🔴 Critical

---

## 3. Logo Sizing

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Logo type | Text-only: `"Aleyra Bakehouse"` styled with `font-heading text-xl font-bold` | Image logo: wordmark with bakehouse subtitle and heart icon, centered vertically | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L9-L11) |
| Logo height | N/A (text rendered at ~20px) | ~36–44px height mark with "ALEYRA" prominent above "• BAKEHOUSE •" | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L9-L11) |
| Logo in footer | Text: `"Aleyra Bakehouse"` h3 | Full brand logo image at larger size with "Made with Love ♡" tagline below | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L13) |

**Current condition:** Logo is plain text using Playfair Display font. No brand identity image is used anywhere in the header or footer.

**Expected condition:** Reference shows the actual Aleyra Bakehouse logotype image (already available at `/images/brand/logo-transparent.webp`) in both header and footer. The header logo is a moderate height wordmark; the footer logo is larger and accompanied by "Made with Love ♡" in script.

**Recommended correction:**
- Replace text logo in header with `<Image src="/images/brand/logo-transparent.webp" ... />` at ~40px height
- Replace text in footer with logo image at ~80px height + Dancing Script "Made with Love ♡"

**Priority:** 🔴 Critical

---

## 4. Navigation Typography

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Font family | `font-body` (Manrope) | Reference shows serif-leaning or clean serif nav labels: HOME, MENU, OUR STORY, EVENTS, JOURNAL, VISIT US | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L13) |
| Font size | `text-sm` (14px) | ~13–14px, similar but with wider letter-spacing | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L13) |
| Font weight | `font-semibold` (600) | Regular to medium weight (400–500); elegant, not heavy | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L13) |
| Letter spacing | Default (0) | Noticeable tracking (~0.05–0.1em) | — |
| Gap between items | `gap-8` (32px) | ~24–28px, slightly tighter | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L13) |
| "Order Now" style | `btn-primary` (solid cocoa-brown filled pill) | Outlined pill border with cocoa-brown text, not filled | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L22-L29) |
| Nav items per PRD | Home, Menu, Our Story, Events, Visit Us | Reference shows Journal (removed per PRD). Current is correct per PRD. | [navigation.ts](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/content/navigation.ts) |

**Current condition:** Navigation uses Manrope at `font-semibold`, no letter-spacing, 32px gap. "Order Now" is a filled solid button.

**Expected condition:** Reference shows lighter-weight navigation text with tracking, tighter spacing. "Order Now" uses an outline-pill style, clearly differentiated from body CTA buttons.

**Recommended correction:**
- Change nav font-weight to `font-medium` (500) or `font-normal` (400)
- Add `tracking-wide` or `letter-spacing: 0.05em`
- Reduce `gap-8` to `gap-6` (24px)
- Change "Order Now" from `btn-primary` to `btn-secondary` (outline pill)

**Priority:** 🟠 Major

---

## 5. Hero Geometry

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Layout | Full-bleed background image with centered text overlay | **Split layout:** left side text content (~45%), right side hero image (~55%) | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L6) |
| Height | `h-[90vh] min-h-[600px]` | ~70–80vh, moderate height, not full-screen | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L6) |
| Background color | Image fills entire section | Left side: solid `butter-cream` or `warm-white`; right side: hero photo | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx) |
| Text position | Centered, overlaid on image | Left-aligned on left column, vertically centered | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L23) |
| Event info box | Not present | Small "FIND US THIS WEEKEND" card at bottom-right of hero area with pin icon, location, time, and "SEE ALL EVENTS" link | Missing component |
| Pagination dots | Not present | Three dots beneath hero image suggesting carousel or slide indicator | Missing component |

**Current condition:** Hero is a full-viewport-height section with a background image and dark gradient overlay. All text is centered. No event info card or carousel indicators exist.

**Expected condition:** Reference shows a clean split-layout: left column has "MADE WITH LOVE" eyebrow, "Baked Fresh for Every Order." headline, supporting copy, and two CTA buttons — all left-aligned against a light background. Right column shows the cheesecake hero image. Below the hero image area is a small event card and pagination dots.

**Recommended correction:**
- Complete restructure of hero to two-column grid (`grid-cols-1 lg:grid-cols-2`)
- Left column: light background, left-aligned text
- Right column: hero image with natural edges (not full-bleed)
- Add "FIND US THIS WEEKEND" mini event card
- Add decorative pagination dots
- Reduce height to ~`min-h-[500px] lg:h-[75vh]`

**Priority:** 🔴 Critical

---

## 6. Hero Image Crop

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Crop style | `object-cover` filling entire viewport | Contained image showing full cheesecake with natural edges; not edge-to-edge | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L14) |
| Image content | `product-lifestyle.webp` (cheesecake with doodles) | Close-up of cheesecake slice showing creamy interior and caramelized top; clean editorial photography with no doodles | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L10) |
| Overlay | Dark gradient `from-deep-cocoa/80 via-cocoa-brown/40` + `bg-black/20` | No dark overlay; image displayed naturally | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L18-L19) |

**Current condition:** Hero uses `product-lifestyle.webp` (whole cake with hand-drawn doodles) stretched as full-bleed background with heavy dark overlays.

**Expected condition:** Reference shows a clean close-up editorial photo of cheesecake with natural, warm lighting — no doodles, no dark overlay. The image sits in the right column of the split layout and shows the creamy center and burnt top prominently.

**Recommended correction:**
- Source or crop a new hero image that matches the reference close-up (creamy interior, caramelized top, editorial lighting)
- Remove dark gradient overlays entirely
- Use `object-cover` within the contained right column, not as full-bleed background
- Ensure PRD §4.5 compliance: "Hero harus menonjolkan creamy center dan caramelized top"

**Priority:** 🔴 Critical

---

## 7. Hero Text Alignment

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Alignment | `text-center` on all elements | Left-aligned (`text-left`) for all hero text | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L23) |
| Eyebrow | "Aleyra Bakehouse" in uppercase | "MADE WITH LOVE" in small tracking text with heart | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L24) |
| Headline | "Soft inside. Burnt just right." (center, white) | "Baked Fresh for Every Order." (left, `deep-cocoa` or `cocoa-brown`) | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L26-L28) |
| Body copy | Centered, white text with opacity | Left-aligned, `cocoa-brown` text on light background, full opacity | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L30-L32) |
| CTA buttons | Centered row, cherry-red primary + white outline secondary | Left-aligned row, dark "Order Now" (cocoa-brown filled) + "Explore Menu" (outline) | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L34-L46) |
| Script tagline | "Freshly baked in limited batches ♡" below CTAs | Not visible in hero in reference; micro-copy like "♡" integrated into eyebrow | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L48-L50) |

**Current condition:** All hero text is centered, white-on-dark, with a different headline and eyebrow than the reference.

**Expected condition:** All hero text is left-aligned on a light background. Headline is "Baked Fresh for Every Order." in dark serif type. Body copy describes the cheesecake. CTAs are "Order Now" (filled) and "Explore Menu" (outline), left-aligned.

> [!NOTE]
> PRD §6.1B recommends "Soft inside. Burnt just right." as the headline. The reference uses "Baked Fresh for Every Order." The PRD is the content source of truth — use the PRD headline but match the visual layout from the reference.

**Recommended correction:**
- Change alignment to `text-left` / `items-start`
- Change text colors from white to `cocoa-brown` / `deep-cocoa`
- Update eyebrow to "MADE WITH LOVE" with heart
- Keep PRD headline per content authority
- Align CTA buttons to the left
- Move or remove script tagline from hero

**Priority:** 🔴 Critical

---

## 8. Color Balance

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Page background | `warm-white (#FFFBF5)` | `butter-cream (#FFF3D6)` as the dominant page background | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L19) |
| Hero background | Dark overlay on image | Light `butter-cream` / `warm-white` on left, image on right | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx) |
| Section alternation | Products: `bg-warm-white` | Reference alternates: `butter-cream` → `warm-white` → `warm-beige` between sections | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L18) |
| Cherry red usage | Used in badges, eyebrow text, accent CTA, focus states | Reference uses cherry red sparingly: only for "Order Now" header button outline accent, specific highlights | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css) |
| Cocoa brown dominance | Secondary (headings, footer, CTA) | Primary visual color: headings, nav, buttons, card text, footer | All components |
| Warm beige | Only as `background-alt` token, not visibly used | Used as alternating section backgrounds and card surfaces | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L20) |

**Current condition:** The page is overwhelmingly `warm-white` with dark overlays in the hero. Cherry red is used broadly. There is no visible section color alternation.

**Expected condition:** Reference shows a warm, golden-toned palette with `butter-cream` as the dominant background, alternating `warm-beige` sections, and cocoa brown as the primary text/UI color. Cherry red is used very sparingly.

**Recommended correction:**
- Change body/page background to `butter-cream` or `warm-white` with explicit `butter-cream` for hero area
- Implement alternating section backgrounds: butter-cream → warm-white → warm-beige
- Reduce cherry-red usage to specific accent moments only
- Ensure overall warmth matches the golden-bakery tone of the reference

**Priority:** 🟠 Major

---

## 9. Typography Scale

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Hero headline | `text-5xl md:text-6xl lg:text-7xl` (48→60→72px) | ~42–52px desktop; large but not overpowering | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L26) |
| Section headings | `h2` at `3xl→4xl→5xl` (30→36→48px) | ~28–36px; moderate, refined | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L119-L132) |
| Body text | `text-sm` (14px) through `text-lg` (18px) | ~14–16px body; clean and comfortable | Components |
| Font: Body | Manrope (sans-serif) | Reference typography panel shows **Lora** (serif) for body. PRD allows "Lora atau Manrope" | [layout.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/layout.tsx#L13-L17) |
| Font: Heading | Playfair Display ✓ | Playfair Display ✓ — matches | — |
| Font: Accent | Dancing Script ✓ | Dancing Script ✓ — matches | — |
| Product card price | `font-body font-bold text-cherry-red` | Smaller, subdued price in cocoa-brown below product name | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L56-L58) |

**Current condition:** Typography is slightly too large at desktop breakpoints. Body uses Manrope sans-serif. Prices are cherry-red bold.

**Expected condition:** Reference uses more restrained heading sizes. The typography panel explicitly shows Lora for body text. Prices are subdued.

**Recommended correction:**
- Reduce hero headline to `text-4xl md:text-5xl lg:text-[3.25rem]`
- Reduce h2 desktop to `text-3xl md:text-4xl` (remove the 5xl step)
- Consider switching body font from Manrope to Lora to match reference typography panel
- Reduce price styling: use `text-sm font-medium text-cocoa-brown` instead of bold cherry-red

**Priority:** 🟠 Major

---

## 10. Section Spacing

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Section vertical padding | Mobile: `3rem` (48px), Desktop: `5rem` (80px) | ~`4rem` (64px) mobile, ~`6rem` (96px) desktop; more breathing room | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L40-L41) |
| Section heading margin-bottom | `mb-16` (64px) | ~48–56px (`mb-12` to `mb-14`); slightly tighter | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L20) |
| Missing sections | Only Hero + Products exist | Reference shows: Hero → Best Sellers → Our Story teaser → Upcoming Events → Instagram Gallery → Gifting section → Quote/Testimonial → Footer | [page.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/page.tsx) |
| Decorative breaks | Heart divider used | Reference shows thin taupe horizontal rules and decorative flourish separators between sections | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L329-L345) |

**Current condition:** Only two sections are implemented (Hero + Products). Spacing is functional but not matched to the reference's generous breathing room and editorial rhythm.

**Expected condition:** Reference shows 8+ homepage sections with consistent generous spacing, alternating backgrounds, and subtle dividers creating an editorial magazine-like vertical rhythm.

**Recommended correction:**
- Increase `--spacing-section` to `6rem` and `--spacing-section-mobile` to `4rem`
- Reduce heading bottom margin to `mb-12`
- Implement all missing homepage sections per PRD
- Use thin `light-taupe` horizontal rules as section separators where appropriate

**Priority:** 🔴 Critical (completeness of sections)

---

## 11. Product Card Proportions

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Card layout | Vertical card: image on top → content below; 3-column grid | Reference shows a **vertical list layout** on the menu page: small square thumbnail left, product name + price + "DETAIL" button right | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L26-L83) |
| Homepage product display | 3-col grid of full cards | Reference homepage shows: row of "Best Seller" cards below hero with horizontal scroll, square images, product name + price below | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx) |
| Image aspect ratio | `aspect-[4/3]` (landscape) | Homepage: ~`1:1` square thumbnails. Menu page: ~`1:1` small square | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L29) |
| Card size | Full-width on mobile, ~33% on desktop | Compact cards, ~200–240px wide with modest image | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx) |
| CTA button | Full-width "Order via WhatsApp" inside every card | Small "DETAIL" text link or subtle outlined button per product | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L71-L79) |
| Badge position | `absolute top-4 left-4` | Top-left with subtle tag styling, similar placement | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L38-L41) |

**Current condition:** Products use large vertical card grid with 4:3 landscape images and full-width WhatsApp buttons inside each card. This looks like a generic SaaS product grid.

**Expected condition:** Reference homepage shows compact, elegant product cards with square images, minimal text (name + price), displayed in a horizontal scrollable "Best Seller" row. Menu page uses a vertical list with thumbnail + text rows.

**Recommended correction:**
- Homepage: Change to a horizontal scroll row with compact square cards (~1:1 image, name, price below)
- Change image aspect to `aspect-square`
- Remove full-width CTA buttons from homepage product cards; use a small "DETAIL" or link
- On menu page (separate route): implement vertical list layout with small thumbnails

**Priority:** 🔴 Critical

---

## 12. Border Radius

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Card radius | `--radius-xl` = `1rem` (16px) | ~`8–12px` (`0.5–0.75rem`); softer, not overly rounded | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L52) |
| Button radius | `--radius-full` = `9999px` (fully round pill) | Pill style for CTA buttons ✓, but with less extreme rounding on some cards | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L243) |
| Badge radius | `rounded-full` | Rounded pill ✓ — matches | — |
| Image radius | Inherits card overflow | Reference shows product images with subtle rounded corners within cards | — |

**Current condition:** Cards use 16px radius. Buttons use fully rounded pills.

**Expected condition:** Reference shows slightly tighter card radii (~8–12px). Pill buttons are correct. The overall feel is "rounded but refined, not bubbly."

**Recommended correction:**
- Reduce `.card` `border-radius` to `--radius-lg` (0.75rem / 12px) or `--radius-md` (0.5rem / 8px)
- Keep pill buttons as-is

**Priority:** 🟡 Minor

---

## 13. Border Colors

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Card border | `1px solid var(--color-light-taupe)` (#DCC8B0) | Very subtle, nearly invisible border or no border; relies on shadow for separation | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L313) |
| Header border | `border-b border-light-taupe` | Very faint or no visible border | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L7) |
| Mobile menu dividers | `border-b border-light-taupe` on each nav item | Reference mobile shows clean list without heavy dividers | [mobile-navigation.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/mobile-navigation.tsx#L32) |
| "Order Now" button border | None (filled button) | `1.5px solid` outline in cocoa-brown | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L26) |

**Current condition:** Borders are visible and prominent using `light-taupe`. Card borders are clearly visible.

**Expected condition:** Reference uses minimal borders. Cards rely on subtle shadow + background contrast. Header has no visible dividing line. Borders are used only for deliberate editorial elements.

**Recommended correction:**
- Remove or significantly reduce card border opacity: `border-color: transparent` or `rgba(220, 200, 176, 0.3)`
- Remove header `border-b` or change to `border-b border-light-taupe/20`
- Use shadow as the primary card separator
- Change "Order Now" to outline style

**Priority:** 🟡 Minor

---

## 14. Shadow Intensity

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Card resting shadow | `--shadow-soft: 0 2px 8px rgba(93,58,41,0.06)` | Very subtle, nearly flat. ~`0 1px 4px rgba(93,58,41,0.04)` | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L44) |
| Card hover shadow | `--shadow-card: 0 4px 16px rgba(93,58,41,0.08)` | Mild lift, not dramatic. Similar but slightly less | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L45) |
| Card hover transform | `translateY(-2px)` | Subtle or no lift; the reference aesthetic avoids bouncy interactions | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L322-L323) |
| Button hover transform | `translateY(-1px)` | Minimal or no vertical shift; color change only | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L252) |

**Current condition:** Shadows are already soft, which is good. Hover effects include translateY lifts.

**Expected condition:** Reference shows an extremely flat, warm, editorial aesthetic. Shadows are barely perceptible. Hover animations are minimal.

**Recommended correction:**
- Reduce `--shadow-soft` to `0 1px 4px rgba(93,58,41,0.04)`
- Reduce `--shadow-card` to `0 2px 8px rgba(93,58,41,0.06)`
- Remove or reduce `translateY` on card hover to `0` or `-1px`
- Remove `translateY` on button hover; use color change only

**Priority:** 🟡 Minor

---

## 15. CTA Sizing

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Primary button padding | `0.875rem 2rem` (14px 32px) | ~`12px 24px` — more compact, elegant | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L236) |
| Button font size | `--font-size-sm` (14px) | ~13–14px — similar but buttons are generally smaller overall | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L238) |
| Hero CTAs | Two side-by-side pills, full-width on mobile | Two moderate-width pills, left-aligned, not full-width on mobile | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx#L34-L46) |
| Product card CTA | Full-width `btn-primary w-full` | Compact "DETAIL" link or small button, not full-width | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx#L71-L79) |
| Header "Order Now" | `btn-primary py-2 px-4` (filled) | Outline pill, `py-1.5 px-4`, tighter | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx#L26) |

**Current condition:** CTAs are slightly oversized with generous padding. Product cards have full-width WhatsApp buttons.

**Expected condition:** Reference shows compact, refined CTAs. Buttons are proportional, never dominant. Product actions are understated.

**Recommended correction:**
- Reduce `.btn-primary` / `.btn-secondary` padding to `0.75rem 1.5rem`
- In product cards, replace full-width CTA with a compact "DETAIL" button
- On hero, keep CTAs `inline-flex` without `w-full` on mobile

**Priority:** 🟠 Major

---

## 16. Editorial Decorative Details

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Heart divider | `divider-heart` with `::before/::after` horizontal lines + center content | Reference uses thin horizontal rules and small decorative elements (dots, botanical accent, small heart) but not the heavy heart-divider pattern | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L329-L345) |
| Section eyebrow styling | `.eyebrow` (cherry-red, uppercase, tracking) | Eyebrow text in cocoa-brown or muted tone, not cherry-red | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L213-L220) |
| Script accent usage | Dancing Script class defined but barely used | Reference shows "Made with Love" in script at hero eyebrow and footer | [globals.css](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/app/globals.css#L222-L225) |
| Editorial quote block | Not implemented | Reference Journal page (→ adapt to "Apa Kata Mereka") shows a large pull-quote with oversized opening quotation mark in taupe/brown | Missing component |
| Vintage bakery illustrations | Not implemented | Reference brand guide shows vintage botanical/bakery illustration used in the welcome popup and as decorative accents | Missing asset usage |
| Brand elements icons | Not implemented | Reference shows icons for "Made with Love", "Freshly Baked", "Quality Ingredients", "Warm & Honest", "Memorable Moments" with heart/hand-drawn style | Missing component |
| Instagram grid | Not implemented | Reference shows "AS SEEN ON INSTAGRAM" curated gallery grid | Missing component |
| "Gifting Made Special" section | Not implemented | Reference shows a packaging/gifting section with image + "VIEW PACKAGING" CTA | Missing component |

**Current condition:** Decorative detail is minimal — only the heart divider and eyebrow class exist. No editorial quotes, illustrations, brand value icons, or editorial accents are implemented.

**Expected condition:** Reference shows rich editorial decorative details: oversized quotation marks, botanical illustrations, brand value icons, curated Instagram grid, gifting section, and consistent editorial rhythm throughout.

**Recommended correction:**
- Redesign `.divider-heart` to a simpler thin rule + small decorative element
- Change `.eyebrow` color from cherry-red to cocoa-brown/deep-cocoa
- Add editorial pull-quote component for "Apa Kata Mereka"
- Add brand values section with icon illustrations
- Add Instagram gallery section
- Add gifting/packaging section
- Integrate vintage bakery illustration from `popup-first-view.webp` where appropriate

**Priority:** 🔴 Critical (completeness of editorial details)

---

## 17. Mobile Composition

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Mobile header | Hamburger + text logo | Logo image (compact) + hamburger icon; no visible text-only logo | [header.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/header.tsx), [mobile-navigation.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/mobile-navigation.tsx) |
| Mobile hero | Full-screen image background with centered overlay text | Stacked: full-width hero image on top → text content below, left-aligned | [hero-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/hero-section.tsx) |
| Mobile product cards | Single-column full-width cards | Compact cards with horizontal scroll, or vertical list with smaller images | [product-section.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/sections/product-section.tsx) |
| Sticky WhatsApp CTA | Not implemented | Reference mobile preview shows a persistent bottom WhatsApp button/bar | Missing component |
| Mobile nav overlay | Full-screen `bg-warm-white`, drops from top | Reference shows clean slide-down panel or drawer, not full-screen takeover | [mobile-navigation.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/mobile-navigation.tsx#L25) |
| Bottom safe spacing | Not implemented | PRD §5.1 requires "Bottom-safe spacing" | [mobile-navigation.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/mobile-navigation.tsx) |

**Current condition:** Mobile experience uses full-screen overlay for nav and the same centered full-bleed hero as desktop. No sticky WhatsApp CTA or bottom-safe spacing.

**Expected condition:** Reference mobile previews show: stacked hero (image above, text below), compact product cards, persistent bottom WhatsApp bar, and clean nav drawer.

**Recommended correction:**
- On mobile: hero becomes stacked (image on top, text below, left-aligned)
- Implement sticky WhatsApp CTA bar at bottom of viewport
- Add `pb-safe` / `env(safe-area-inset-bottom)` for bottom-safe spacing
- Refine mobile nav overlay to be less intrusive (consider slide panel)
- Use logo image in mobile header

**Priority:** 🔴 Critical

---

## 18. Footer Structure

| Aspect | Current | Reference | Affected |
|---|---|---|---|
| Background color | `bg-cocoa-brown` | `cocoa-brown` or `deep-cocoa` — similar, roughly correct ✓ | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L8) |
| Layout | 3-column grid: Brand info / Contact / Links | Reference footer: Logo left, "Made with Love ♡" center, social icons right — single row, simpler | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L10) |
| Logo | Text "Aleyra Bakehouse" h3 | Actual logo image (light/white version), prominently placed left | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L13) |
| "Made with Love" | In bottom bar as "Made with love in Bekasi" | Center prominence: "Made with Love ♡" in Dancing Script | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L68) |
| Social icons | Instagram + Mail inline with text | Reference shows Instagram, TikTok icons (not email) on the far right, + @aleyra.bakehouse handle | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L37-L42) |
| Footer height | Generous 3-column with `py-12` + divider + bottom bar | Compact single-row bar footer; simpler and more refined | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx) |
| Contact details | Listed with icons in footer body | Contact details are on Visit Us page, not heavy in footer | [footer.tsx](file:///d:/WARKAI.CO/PROJECT%20WARKAI/WEBSITE/DEPLOY%20WEB/aleyrabakehouse-web/warkai-id-aleyrabakehouse-web/components/layout/footer.tsx#L19-L43) |

**Current condition:** Footer is a heavy 3-column layout with detailed contact info, link lists, and a bottom bar. Uses text-only brand name.

**Expected condition:** Reference footer is a compact, elegant single-row bar: logo on the left, "Made with Love ♡" centered in script, social icons + handle on the right. All on a cocoa-brown background.

**Recommended correction:**
- Restructure footer to a single-row layout: `flex justify-between items-center`
- Left: Logo image (light version)
- Center: "Made with Love ♡" in Dancing Script
- Right: @aleyra.bakehouse + Instagram + TikTok icons
- Move contact details and link lists to Visit Us page or a pre-footer section
- Reduce footer vertical padding

**Priority:** 🟠 Major

---

## Summary Matrix

| # | Dimension | Priority | Gap Severity |
|---|---|---|---|
| 1 | Page width & max-width | 🟠 Major | Moderate deviation |
| 2 | Header height & spacing | 🔴 Critical | Glassmorphism, height, border all wrong |
| 3 | Logo sizing | 🔴 Critical | Text-only vs. brand image |
| 4 | Navigation typography | 🟠 Major | Weight, spacing, CTA style wrong |
| 5 | Hero geometry | 🔴 Critical | Full-bleed vs. split-layout |
| 6 | Hero image crop | 🔴 Critical | Wrong image, wrong overlays |
| 7 | Hero text alignment | 🔴 Critical | Centered vs. left-aligned |
| 8 | Color balance | 🟠 Major | Warm tone and alternation missing |
| 9 | Typography scale | 🟠 Major | Oversized headings, body font choice |
| 10 | Section spacing | 🔴 Critical | Missing sections, wrong rhythm |
| 11 | Product card proportions | 🔴 Critical | Grid vs. horizontal scroll, wrong ratios |
| 12 | Border radius | 🟡 Minor | Slightly too rounded |
| 13 | Border colors | 🟡 Minor | Too prominent |
| 14 | Shadow intensity | 🟡 Minor | Slightly heavy |
| 15 | CTA sizing | 🟠 Major | Oversized, wrong style in products |
| 16 | Editorial decorative details | 🔴 Critical | Most editorial elements missing |
| 17 | Mobile composition | 🔴 Critical | Missing sticky WA, wrong hero layout |
| 18 | Footer structure | 🟠 Major | Heavy 3-col vs. compact single-row |

**Total findings:**
- 🔴 Critical: **9**
- 🟠 Major: **6**
- 🟡 Minor: **3**
