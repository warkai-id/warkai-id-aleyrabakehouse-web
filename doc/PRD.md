# MASTER PRD — ALEYRA BAKEHOUSE DIGITAL FLAGSHIP

**Project Name:** Aleyra Bakehouse Digital Flagship  
**Repository:** `warkai-id/aleyrabakehouse-web`  
**Primary Domain:** `aleyrabake.my.id`  
**Secondary Domain:** `www.aleyrabake.my.id` → redirect ke domain utama  
**Document Version:** 1.0 Final Blueprint  
**Status:** ACC untuk fase desain dan implementasi MVP  
**Prepared for:** Mas Ardi / Warkai  
**Implementation Tool:** Google Antigravity dengan agent workflow  
**Deployment Target:** Cloudflare  
**Target Launch:** **Perlu dikonfirmasi ulang** — tanggal yang diberikan `25 Juli 2025` sudah berlalu.

---

## 1. PRODUCT VISION & SUCCESS DEFINITION

### 1.1 Vision

Membangun website premium Aleyra Bakehouse sebagai **digital boutique bakery** yang memperpanjang pengalaman offline ke ranah digital.

Website bukan sekadar daftar menu, tetapi pengalaman brand yang:

- hangat,
- personal,
- premium,
- editorial,
- mobile-first,
- mudah digunakan untuk melihat produk,
- mudah digunakan untuk mengecek event,
- dan langsung mengarahkan pelanggan ke WhatsApp.

### 1.2 Product Concept

**Maison Aesthetic × Journal Storytelling × Gen Z Warm Copy**

Arah desain menggabungkan:

- boutique bakery premium,
- editorial photography,
- visual cheesecake sebagai hero utama,
- cerita brand yang hangat,
- microcopy modern dan ringan,
- serta interaksi mobile yang elegan.

### 1.3 Success Definition MVP

MVP dinyatakan selesai apabila:

1. Website tampil premium dan responsif pada mobile, tablet, dan desktop.
2. Pengunjung dapat melihat produk utama, cerita brand, event, testimoni, lokasi, dan kontak.
3. CTA pemesanan WhatsApp dapat digunakan dari seluruh bagian penting website.
4. Halaman QR Booth dapat dibuka melalui URL khusus.
5. Website berhasil terhubung ke GitHub, ter-deploy ke Cloudflare, dan domain `aleyrabake.my.id` aktif.
6. Seluruh konten dummy dapat diganti tanpa merombak struktur UI.
7. Performa, SEO dasar, accessibility, dan metadata sosial telah diterapkan.

---

## 2. SCOPE MVP & NON-SCOPE

### 2.1 In Scope — MVP

#### Public Pages

1. Home
2. Menu
3. Our Story
4. Events
5. Visit Us
6. QR Booth Experience
7. Privacy Policy
8. Terms / Informasi Pemesanan

#### Homepage Sections

1. First View Welcome Experience
2. Hero Banner
3. Signature Products
4. Brand Story
5. Brand Values
6. Seasonal / Pre-Order Highlight
7. Upcoming Events
8. Apa Kata Mereka
9. Instagram Gallery
10. Final WhatsApp CTA
11. Footer

#### Core Features

- WhatsApp ordering
- Instagram link
- Email contact
- Event cards
- Google Maps link
- QR Booth landing page
- Screenshot testimonial carousel
- One video testimonial
- Responsive navigation
- Image lightbox
- Ambient jazz control
- SEO metadata
- Open Graph image
- Sitemap
- Robots.txt
- Analytics-ready structure
- Cloudflare deployment
- GitHub integration

### 2.2 Out of Scope — Phase 2

- Membership
- Loyalty points
- Live stock
- Real-time inventory
- Login / authentication
- Marketplace integration
- Internal checkout
- Payment gateway
- Delivery tracking
- Digital gift card
- Pre-order reservation engine
- Admin dashboard
- Full CMS
- Customer account
- Automated stock synchronization

### 2.3 Removed from MVP

- Journal
- Blog
- Artikel editorial

Journal digantikan oleh section **“Apa Kata Mereka”**.

---

## 3. TARGET USERS & USER NEEDS

### 3.1 Primary Audience

- Wanita usia 22–40 tahun
- Menyukai dessert premium
- Aktif di Instagram
- Sering berkunjung ke market, mall, bazaar, atau event kuliner
- Membeli produk untuk self-reward, hadiah, ulang tahun, dan momen spesial

### 3.2 Secondary Audience

- Corporate gifting
- Wedding dan hampers
- Food enthusiast
- Event organizer
- Calon partner booth
- Pelanggan area Bekasi dan sekitarnya

### 3.3 Primary User Needs

Pengguna harus dapat:

- memahami karakter Aleyra dalam kurang dari 10 detik,
- melihat visual cheesecake dengan jelas,
- menemukan harga produk,
- mengetahui area layanan,
- melihat event mendatang,
- membaca pengalaman pelanggan lain,
- dan melakukan pemesanan melalui WhatsApp tanpa alur panjang.

---

## 4. BRAND, CONTENT & DESIGN SYSTEM

### 4.1 Brand Personality

- Warm
- Elegant
- Handmade
- Honest
- Premium
- Memorable
- Personal
- Approachable
- Refined

### 4.2 Visual Direction

- Editorial photography
- Warm lighting
- Soft shadow
- Large whitespace
- Elegant serif typography
- Minimal line icons
- Organic botanical accents
- Vintage bakery illustration sebagai elemen editorial terbatas
- Rounded card secukupnya
- Tidak terlihat seperti template SaaS
- Tidak menggunakan visual neon, glassmorphism berlebihan, atau gradien modern generik

### 4.3 Color Palette

| Token | Value | Usage |
|---|---:|---|
| Butter Cream | `#FFF3D6` | Background utama |
| Cocoa Brown | `#5B3A29` | Heading, footer, CTA utama |
| Cherry Red | `#B6282E` | Accent, active state, highlight |
| Warm Beige | `#F3E6CF` | Section alternate |
| Light Taupe | `#DCC8B0` | Border, decorative element |
| Warm White | `#FFFBF5` | Content surface |
| Deep Cocoa | `#3D2418` | High contrast text |

### 4.4 Typography

- **Headline:** Playfair Display
- **Body:** Lora atau Manrope
- **Accent script:** Dancing Script
- Script hanya digunakan sebagai accent, bukan body text.
- Font harus dimuat secara optimal melalui `next/font`.

### 4.5 Photography Rules

- Gunakan foto produk asli sebagai prioritas.
- Hero harus menonjolkan creamy center dan caramelized top.
- Rasio gambar harus konsisten.
- Gunakan `next/image`.
- Hindari crop yang memotong produk utama.
- Berikan `alt` yang deskriptif.
- Foto dummy hanya digunakan untuk aset proses produksi dan booth yang belum tersedia.

### 4.6 Copywriting Style

Target copywriting: **Gen Z, hangat, premium, tidak berlebihan**.

Prinsip:

- kalimat pendek,
- natural,
- tidak terdengar seperti iklan agresif,
- tidak memakai klaim palsu,
- mengutamakan rasa, tekstur, momen, dan kedekatan.

Contoh:

- “Soft inside. Burnt just right.”
- “A little slice of happiness.”
- “Freshly baked in limited batches.”
- “Golden on top, creamy at heart.”
- “Your cheesecake moment is one chat away.”

---

## 5. INFORMATION ARCHITECTURE & USER FLOW

### 5.1 Main Navigation

Desktop:

- Home
- Menu
- Our Story
- Events
- Visit Us
- Order Now

Mobile:

- Logo
- Hamburger menu
- Sticky WhatsApp CTA
- Bottom-safe spacing

### 5.2 Main User Flow

`Visitor → Home → Explore Menu → View Product → Read Story / Testimonial → Order via WhatsApp`

### 5.3 Event User Flow

`Visitor → Events → Select Event → Open Maps → Order / Visit Booth`

### 5.4 QR Booth User Flow

`Scan QR → QR Booth Page → Today’s Menu → Promo → Order via WhatsApp`

### 5.5 First View Experience

Saat kunjungan pertama:

1. Tampilkan welcome popup visual statis.
2. Popup memuat:
   - logo,
   - visual Aleyra,
   - headline singkat,
   - tombol “Enter Aleyra”,
   - opsi ambience jazz.
3. Audio **tidak boleh diputar sebelum interaksi pengguna**, karena browser modern dapat memblokir autoplay audio.
4. Setelah pengguna menekan “Enter Aleyra”, ambience jazz boleh dimulai dengan volume rendah.
5. Sediakan tombol:
   - mute,
   - unmute,
   - stop.
6. Preferensi audio disimpan di local storage.
7. Pengguna dengan `prefers-reduced-motion` tetap mendapat pengalaman ringan.
8. Popup tidak boleh mengganggu kunjungan berikutnya; tampilkan sekali per sesi atau sesuai konfigurasi.

---

## 6. PAGE & SECTION SPECIFICATIONS

# 6.1 HOME PAGE

## A. First View Welcome Popup

**Purpose:** menciptakan first impression premium.

**Content:**

- Aleyra Bakehouse logo
- Static visual
- Short intro
- “Enter Aleyra”
- Ambient jazz toggle
- Skip option

**Acceptance Criteria:**

- bekerja pada mobile,
- tidak menyebabkan layout shift,
- dapat ditutup dengan keyboard,
- audio hanya berjalan setelah user interaction,
- memiliki aria label.

---

## B. Hero Section

**Recommended Headline:**

> Soft inside. Burnt just right.

**Supporting Copy:**

> Cheesecake lembut yang dibuat fresh untuk momen kecil yang layak dirayakan.

**CTA:**

- Order via WhatsApp
- Explore the Menu

**Microcopy:**

> Freshly baked in limited batches ♡

**Visual:**

- Foto statis produk asli
- Image priority enabled
- Gradient overlay tipis untuk menjaga keterbacaan

---

## C. Signature Products

### Product 1

**Name:** Burnt Cheesecake Slice  
**Price:** Rp25.000  
**Description:** Potongan burnt cheesecake dengan bagian tengah lembut, rasa keju seimbang, dan permukaan caramelized.

### Product 2

**Name:** Whole Burnt Cheesecake 14 cm  
**Price:** Rp183.000  
**Description:** Ukuran personal untuk hadiah kecil, family time, atau sweet moment yang ingin dirayakan.

### Product 3

**Name:** Whole Burnt Cheesecake 18 cm  
**Price:** Rp244.000  
**Description:** Ukuran lebih besar untuk berbagi, perayaan, hampers, dan momen bersama.

### Product 4

**Name:** Seasonal / Pre-Order Special  
**Price:** Dummy / dapat diubah  
**Description:** Menu terbatas untuk periode tertentu. Konten dan harga dapat diganti tanpa perubahan layout.

**Product Card Requirements:**

- image,
- product name,
- short description,
- price,
- size badge,
- WhatsApp order button,
- accessible button label.

**Financial Data Rule:**

Harga disimpan sebagai integer rupiah:

- `25000`
- `183000`
- `244000`

Tidak menggunakan float.

---

## D. Brand Story

**Headline:**

> A little bakehouse for meaningful moments.

**Content Direction:**

Aleyra lahir dari keinginan menghadirkan dessert yang personal, hangat, dan dibuat sungguh-sungguh. Produk dikembangkan dari home bakery menuju boutique bakery dengan perhatian terhadap rasa, tekstur, kualitas bahan, dan pengalaman pelanggan.

**CTA:** Meet Aleyra

---

## E. Brand Values

Tampilkan maksimal empat nilai:

1. Premium Ingredients
2. Homemade with Love
3. Fresh by Order
4. Perfect for Every Moment

Format:

- line icon,
- short title,
- one-sentence copy.

---

## F. Seasonal / Pre-Order Highlight

Section dapat menampilkan:

- status Open PO,
- jadwal pengiriman,
- batas pemesanan,
- produk tersedia,
- CTA WhatsApp.

Versi awal menggunakan dummy data dan harus mudah diganti.

---

## G. Upcoming Events

Data awal menggunakan dummy.

Card memuat:

- event name,
- location,
- date,
- operating time,
- event photo,
- maps button,
- event detail button,
- WhatsApp button.

Tidak ada live event CMS pada MVP.

---

## H. Apa Kata Mereka

Section menggantikan Journal.

### Format

- Carousel screenshot testimonial
- 14 screenshot real testimonial akan diinjeksi dari local disk
- 1 video testimonial
- Dummy assets digunakan pada fase awal
- Mobile-first horizontal swipe
- Autoplay ringan dan dapat dihentikan
- Click-to-open lightbox
- Support portrait screenshot
- Video tidak autoplay dengan suara
- Lazy loading untuk seluruh testimoni di luar viewport

### Headline

> Apa Kata Mereka

### Eyebrow

> REAL WORDS, SWEET MOMENTS

### Supporting Copy

> Cerita kecil dari mereka yang pernah membawa Aleyra pulang.

### Privacy Rules

Sebelum publikasi, wajib samarkan:

- nomor telepon,
- alamat,
- username pribadi,
- foto profil tanpa izin,
- nomor order,
- data sensitif lain.

### Technical Rules

- Gunakan file local static untuk fase pertama.
- Tidak menyimpan base64 di source code.
- Semua media menggunakan path terstruktur.
- Video dikompresi.
- Poster image disediakan untuk video testimonial.

---

## I. Instagram Gallery

Instagram: **@aleyra.bakehouse**

Versi MVP:

- curated image gallery,
- tidak embed feed berat,
- setiap item menuju Instagram,
- 6–8 gambar,
- lazy-loaded,
- responsive grid.

---

## J. Final CTA

**Headline:**

> Your cheesecake moment is one chat away.

**Body:**

> Mau self-reward, gifting, atau dibawa ke acara? Ceritain kebutuhanmu ke Aleyra.

**CTA:** Chat Aleyra on WhatsApp

Nomor WhatsApp sementara memakai dummy dan wajib disimpan di satu file konfigurasi agar mudah diganti.

---

## K. Footer

Tampilkan:

- Instagram: `@aleyra.bakehouse`
- Email: `aleyrabakehouse@gmail.com`
- Area layanan: `Jatibening — Kota Bekasi`
- Jam operasional: `09.00–20.00`
- WhatsApp dummy
- Privacy Policy
- Terms
- Domain
- Copyright
- Made with Love

---

# 6.2 MENU PAGE

Kategori MVP:

- Slice
- Whole Cake
- Seasonal / Pre-Order

Tidak menggunakan checkout internal.

Setiap produk diarahkan ke WhatsApp dengan template pesan yang sudah terisi.

Contoh:

> Halo Aleyra, aku mau pesan Whole Burnt Cheesecake 14 cm. Bisa bantu cek jadwal available?

---

# 6.3 OUR STORY PAGE

Konten:

1. Brand introduction
2. How Aleyra began
3. Brand philosophy
4. Product craftsmanship
5. Ingredient philosophy
6. Packaging experience
7. Final brand quote

Foto proses produksi menggunakan dummy sampai aset real tersedia.

---

# 6.4 EVENTS PAGE

Versi MVP:

- event cards,
- event detail,
- Google Maps external link,
- date and time,
- booth information,
- WhatsApp CTA.

Data dummy harus diletakkan dalam typed data file agar mudah diganti.

---

# 6.5 VISIT US PAGE

Informasi:

- Area produksi: Jatibening — Kota Bekasi
- Jam operasional: 09.00–20.00
- Contact options
- Maps placeholder
- Delivery / pickup note
- Event links

Alamat lengkap tidak ditampilkan sebelum disetujui owner.

---

# 6.6 QR BOOTH EXPERIENCE

Mobile-only priority.

Content:

- Welcome to Aleyra
- Today’s Menu
- Dummy promo
- Event name
- Booth location
- Product list
- WhatsApp CTA
- Instagram CTA
- Thank-you state

Live stock ditunda ke Phase 2.

---

## 7. FUNCTIONAL & DATA REQUIREMENTS

### 7.1 Content Configuration

Seluruh konten dinamis awal harus disimpan pada typed configuration files:

- brand config,
- contact config,
- products,
- events,
- testimonials,
- social links,
- navigation.

Tidak boleh menyebarkan nomor WhatsApp atau email di banyak file.

### 7.2 WhatsApp Integration

Nomor WhatsApp sementara: dummy.

Kebutuhan:

- URL dibuat melalui utility function.
- Pesan order berbeda berdasarkan produk.
- Semua parameter di-encode dengan benar.
- CTA dapat diubah dari satu konfigurasi.
- Tidak ada API key.

### 7.3 Media Architecture

Struktur yang disarankan:

```text
public/
  images/
    brand/
    hero/
    products/
    packaging/
    process/
    booth/
    events/
    testimonials/
  videos/
    testimonials/
  audio/
    ambience/
```

### 7.4 Audio Requirements

- Musik jazz harus legal digunakan.
- Jangan meminta agent menyalin musik berhak cipta.
- Gunakan audio original, royalty-free, atau generated audio dengan lisensi penggunaan yang jelas.
- Format dioptimalkan untuk web.
- Volume default rendah.
- Tidak memblokir rendering halaman.
- Lazy initialization.
- User dapat mute kapan pun.

### 7.5 Validation

Semua input publik, termasuk form contact di masa depan, wajib menggunakan Zod.

MVP tidak memiliki form backend. Namun konfigurasi data tetap harus memiliki schema Zod untuk memastikan struktur valid saat build.

### 7.6 Deletion & Persistence

MVP tidak memiliki database.

Saat database ditambahkan pada fase berikutnya:

- gunakan CUID/UUID,
- gunakan soft delete untuk data penting,
- gunakan integer untuk nilai finansial,
- gunakan Drizzle ORM,
- validasi dengan Zod,
- gunakan presigned URL untuk media upload.

---

## 8. TECHNICAL ARCHITECTURE

### 8.1 Official Stack

- Next.js 15+
- TypeScript strict mode
- App Router
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Zod
- Lucide Icons
- Git
- GitHub
- Cloudflare deployment
- Google Antigravity agent workflow

### 8.2 Rendering Strategy

- Server Components sebagai default
- Client Components hanya untuk:
  - mobile menu,
  - testimonial carousel,
  - lightbox,
  - audio control,
  - motion interactions.
- Tidak menggunakan `useEffect` untuk static content fetching.
- Static generation untuk public pages.
- Optimized image rendering.

### 8.3 State Management

- `useState` untuk local UI state
- Tidak perlu Zustand pada MVP kecuali state global benar-benar muncul
- Tidak perlu TanStack Query karena belum ada server-state API
- Audio preference dapat disimpan secara ringan di client

### 8.4 Folder Architecture

```text
app/
  page.tsx
  menu/
  our-story/
  events/
  visit-us/
  booth/
  privacy/
  terms/
  layout.tsx
  globals.css

components/
  ui/
  layout/
  sections/
  features/
    audio/
    testimonials/
    whatsapp/

content/
  brand.ts
  products.ts
  events.ts
  testimonials.ts
  navigation.ts

lib/
  schemas/
  utils/
  constants/
  whatsapp/

public/
  images/
  videos/
  audio/

docs/
  PRD.md
  ASSET-MAP.md
  CONTENT-CHECKLIST.md
```

### 8.5 Security

- Tidak ada secret pada frontend.
- Jangan upload `.env`.
- Jangan commit API key.
- Cloudflare token tidak boleh disalin ke agent prompt.
- GitHub token tidak boleh ditempel di chat.
- Gunakan login resmi / OAuth flow tool.
- Jika secret pernah terbuka, segera rotate.

---

## 9. QUALITY GATES, ACCEPTANCE CRITERIA & DELIVERY

### 9.1 Mobile First

Target utama:

- 360 px
- 375 px
- 390 px
- 430 px

Kemudian:

- tablet,
- desktop,
- wide desktop.

Tidak boleh ada horizontal overflow.

### 9.2 Performance

Target:

- Lighthouse Performance ≥ 90 pada halaman utama
- Accessibility ≥ 90
- Best Practices ≥ 90
- SEO ≥ 95
- LCP ideal < 2.5 detik
- CLS < 0.1
- Hero image optimized
- Video testimonial lazy-loaded
- Audio tidak di-load sebelum dibutuhkan

### 9.3 Accessibility

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text
- Aria labels
- Reduced motion support
- Modal focus trap
- Carousel controls dapat digunakan tanpa gesture

### 9.4 SEO

- Page metadata
- Canonical URL
- Open Graph
- Twitter card
- Structured data:
  - LocalBusiness
  - Bakery
  - Product
- Sitemap
- Robots.txt
- Favicon
- Manifest
- Descriptive titles
- Indonesian locale

### 9.5 Responsive Acceptance Criteria

- Hero tidak terpotong buruk.
- CTA mudah ditekan dengan satu tangan.
- Font body minimal nyaman dibaca.
- Carousel testimoni dapat di-swipe.
- Popup welcome tidak memenuhi layar secara berlebihan.
- Sticky WhatsApp tidak menutupi konten.
- Footer tetap rapi di layar kecil.

### 9.6 Content Acceptance Criteria

Sebelum launch:

- WhatsApp dummy diganti
- Target launch dikonfirmasi
- Event dummy diperbarui atau ditandai “Coming Soon”
- Testimonial screenshot disensor
- Video testimonial dikompresi
- Foto dummy ditandai dan diganti bila tersedia
- Email diverifikasi
- Instagram diverifikasi
- Semua harga diverifikasi owner

### 9.7 GitHub Workflow

Repository:

`warkai-id/aleyrabakehouse-web`

Branch:

- `main` → production
- `develop` → integration
- `feature/*` → pekerjaan per fitur

Rules:

- Tidak push langsung ke `main`
- Gunakan pull request
- Build wajib lulus sebelum merge
- Commit kecil dan deskriptif
- PRD disimpan di `docs/PRD.md`

### 9.8 Deployment Acceptance Criteria

- Cloudflare project terhubung ke GitHub
- Preview deployment aktif
- Production branch: `main`
- Domain `aleyrabake.my.id` terhubung
- `www.aleyrabake.my.id` redirect ke root domain
- HTTPS aktif
- No build error
- No exposed secret
- 404 page tersedia
- Error boundaries tersedia

---

# PROJECT DATA SUMMARY

| Field | Value |
|---|---|
| Brand | Aleyra Bakehouse |
| Domain | aleyrabake.my.id |
| Instagram | @aleyra.bakehouse |
| Email | aleyrabakehouse@gmail.com |
| Area | Jatibening — Kota Bekasi |
| Operating Hours | 09.00–20.00 |
| WhatsApp | Dummy, wajib diganti |
| GitHub Owner | warkai-id |
| Repository | aleyrabakehouse-web |
| Deployment | Cloudflare |
| Hero | Static image |
| Welcome Popup | Yes |
| Ambient Jazz | Yes, after user interaction |
| Testimonials | 14 screenshots + 1 video |
| Missing Assets | Process production, booth |
| Membership | Phase 2 |
| Live Stock | Phase 2 |
| Journal | Removed |
| Order Flow | WhatsApp |

---

# OPEN ITEMS BEFORE PRODUCTION LAUNCH

1. Konfirmasi target launch karena `25 Juli 2025` sudah berlalu.
2. Berikan nomor WhatsApp resmi.
3. Verifikasi tiga harga produk.
4. Tentukan produk keempat atau hapus card produk keempat.
5. Masukkan 14 screenshot testimoni.
6. Masukkan 1 video testimoni.
7. Sensor seluruh data pribadi pada testimoni.
8. Konfirmasi alamat lengkap atau tetap gunakan area umum.
9. Siapkan event real atau gunakan “Coming Soon”.
10. Verifikasi lisensi musik jazz.
11. Siapkan favicon dan logo versi:
    - dark,
    - light,
    - transparent,
    - square.
12. Final review copywriting oleh owner.

---

# FINAL APPROVAL

Blueprint MVP telah disetujui dengan perubahan:

- Journal dihapus.
- Diganti section “Apa Kata Mereka”.
- Testimoni menggunakan carousel screenshot real.
- Versi awal dapat menggunakan dummy.
- Membership ditunda.
- Live stock ditunda.
- Order melalui WhatsApp.
- Mobile-first premium aesthetic.
- GitHub dan Cloudflare menjadi bagian workflow.

**Status:** Ready for Phase 1 — Project Setup & Asset Mapping.
