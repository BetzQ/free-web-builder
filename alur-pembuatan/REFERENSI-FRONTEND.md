# DOKUMEN REFERENSI UTAMA: ARSITEKTUR & VISUAL FRONTEND BUILDER
**Lokasi File:** `./alur-pembuatan/REFERENSI-FRONTEND.md`
**Tujuan untuk AI Agent:** Gunakan daftar URL dan pola arsitektur di bawah ini sebagai cetak biru (blueprint) standar kualitas visual, interaksi UI/UX, logika CSS Variables, dan kelengkapan fitur pada **Modul Frontend Studio**.

---

## 1. Referensi Base Platform, AI PRD & Design Token Studio
Gunakan situs-situs ini sebagai acuan tata letak *Workspace*, konsep *Anti-AI Slop*, dan alur klik-ke-kode:
* **NgodingPakeAI** — `https://www.ngodingpakeai.com/`
  * *Apa yang diambil:* Tata letak *dashboard* pembuatan PRD, pembagian *Task Plan*, dan penyajian *template codebase* siap pakai.
* **DesainPakeAI** — `https://desainpakeai.com/`
  * *Apa yang diambil:* Konsep **"Bebas AI Slop"** (hierarki rapi, *spacing* konsisten, tipografi terukur), pilihan **Fondasi Sistem** (gaya *Ramp, Linear, Cal.com, Raycast, Railway, Stripe, Figma, Mintlify*), serta output file `DESIGN.md` berisi *design tokens*.
* **Shadcn UI Theme Editor (tweakcn)** — `https://tweakcn.com/` & `https://ui.shadcn.com/themes`
  * *Apa yang diambil:* Mekanisme mengubah tema secara *real-time* (Mode Default vs Mode Custom) menggunakan variabel CSS (`--background`, `--foreground`, `--primary`, `--radius`) yang langsung merombak tampilan tombol, *card*, *input*, dan grafik di kanvas *preview*.
* **v0 by Vercel** — `https://v0.dev/` & **Bolt.new** — `https://bolt.new/`
  * *Apa yang diambil:* Tampilan *Split-Screen Studio* (Panel Kontrol di Kiri, Live Interactive Preview & Code Inspector di Kanan) dengan *toggle* layar Desktop, Tablet, dan Mobile.
* **Relume Library** — `https://www.relume.io/`
  * *Apa yang diambil:* Struktur *wireframe* ke komponen jadi untuk *Navbar, Hero Section, Feature Grid, Pricing, Testimonial,* dan *Footer*.

---

## 2. Referensi Mesin Pewarnaan Kompleks (Multi-Stop, Split Color & Live Palette)
Gunakan referensi ini untuk membangun **Complex Color Engine** (pewarnaan otomatis, setengah kustom, hingga warna gabungan kiri-merah/kanan-biru & *mesh gradient*):
* **Realtime Colors** — `https://www.realtimecolors.com/`
  * *Apa yang diambil:* Sistem simulasi warna langsung di atas halaman web nyata (mengatur *Text, Background, Primary, Secondary, Accent*) lengkap dengan tombol *Randomize Palette* dan *Light/Dark Mode preview* instan.
* **CSS Gradient Generator** — `https://cssgradient.io/`
  * *Apa yang diambil:* Kontrol *Multi-Stop Color Bar* di mana user bisa menggeser titik warna (misal: **0% Merah di Kiri, 50% Ungu di Tengah, 100% Biru di Kanan**), memilih tipe (`linear-gradient`, `radial-gradient`, `conic-gradient`), dan memutar derajat arah warna (`0deg` sampai `360deg`).
* **Hypercolor** — `https://hypercolor.dev/`
  * *Apa yang diambil:* Koleksi preset gradien modern berbasis Tailwind CSS (*Oceanic, Cotton Candy, Gotham, Sunset, Cyberpunk, Aurora*) untuk user yang memilih **Mode Default/Malas**.
* **Mesh Gradient & CSS Hero** — `https://meshgradient.in/` & `https://www.csshero.org/mesher/`
  * *Apa yang diambil:* Pewarnaan 4-sudut (*4-Corner Radial Mesh Gradient*) di mana setiap sudut komponen atau *background* bisa diberi warna berbeda yang menyatu secara halus.
* **UI Colors (Tailwind Scale Generator)** — `https://uicolors.app/create`
  * *Apa yang diambil:* Algoritma pembangkit skala warna otomatis (`50, 100, 200 ... 900, 950`) hanya dari 1 warna pilihan user, lengkap dengan warna status *Hover*, *Active*, *Focus Ring*, dan *Disabled*.
* **OKLCH Color Picker & Atmos** — `https://oklch.com/` & `https://atmos.style/`
  * *Apa yang diambil:* Standar kontras warna yang ramah mata (WCAG Accessibility Check) agar tulisan di atas tombol atau *background* warna gabungan tetap terbaca jelas.
* **Coolors** — `https://coolors.co/` & **ColorHunt** — `https://colorhunt.co/`
  * *Apa yang diambil:* Bank kombinasi warna populer (Trending, Pastel, Vintage, Neon, Gold, Dark, Warm, Cold).

---

## 3. Referensi Geometri Bentuk (Shape), Sudut Per-Partikel, Efek Kaca & Background
Gunakan referensi ini untuk membangun **Shape & Particle Geometry Panel** (mengatur sudut tajam/halus per komponen, *border*, bayangan, dan latar belakang partikel):
* **Fancy Border Radius (8-Point Control)** — `https://9elements.github.io/fancy-border-radius/`
  * *Apa yang diambil:* Kontrol `border-radius` independen di setiap sudut (`border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius`, `border-bottom-left-radius`) untuk menciptakan bentuk tajam (`0px`), *smooth rounded* (`8px–16px`), kapsul (`9999px`), maupun bentuk asimetris unik.
* **Squircley & Smooth Corners** — `https://squircley.app/`
  * *Apa yang diambil:* Bentuk lengkungan *Squircle* (lengkungan halus ala ikon iOS/macOS) untuk *Card* dan *Button*.
* **Smooth Shadow Generator** — `https://shadows.brumm.af/` & `https://getcssscan.com/css-box-shadow-examples`
  * *Apa yang diambil:* *Multi-layer box-shadow* (bayangan berlapis yang sangat halus, bayangan *Hard Brutalist* `4px 4px 0px #000`, hingga *Neon Glow Shadow* `0 0 20px rgba(...)`).
* **Glassmorphism CSS Generator** — `https://ui.glass/generator/` & `https://hype4.academy/tools/glassmorphism-generator`
  * *Apa yang diambil:* Pengaturan efek kaca transparan (`backdrop-filter: blur(...)`, transparansi `rgba`, dan garis tepi tipis `1px solid rgba(255,255,255,0.2)`).
* **Neumorphism (Soft UI)** — `https://neumorphism.io/`
  * *Apa yang diambil:* Gaya tombol timbul/cekung (*extruded/inset plastic look*) dengan kombinasi 2 bayangan terang dan gelap.
* **Background Snippets & Particle Engines:**
  * **Ibelick Background Snippets** — `https://bg.ibelick.com/` (Kumpulan *Grid Background, Dot Matrix, Radial Halos* siap pakai di Tailwind/CSS).
  * **tsParticles / Particles.js** — `https://particles.js.org/` (Mesin partikel latar belakang interaktif: mengatur jumlah partikel, bentuk bulat/bintang/poligon, garis penghubung, dan kecepatan gerak).
  * **FFFuel & Haikei SVG Generators** — `https://fffuel.co/` & `https://haikei.app/` (Generator tekstur *Noise/Grain*, gelombang SVG, *Blob*, dan pola geometris).

---

## 4. Referensi Katalog Partikel UI (Komponen Mikro dari A sampai Z)
AI Agent wajib memastikan setiap partikel (Tombol, Input, Card, Navbar, Tabel, Modal, Badge) memiliki variasi kelas dunia dari pustaka berikut:
* **Shadcn UI** — `https://ui.shadcn.com/docs/components` (Standar emas komponen bersih & modern).
* **Aceternity UI** — `https://ui.aceternity.com/components` (Referensi efek animasi imajinatif: *3D Card Effect, Moving Border Button, Aurora Background, Spotlight, Bento Grid*).
* **Magic UI** — `https://magicui.design/docs/components` (Referensi *Shimmer Button, Marquee, Animated Beam, Bento Cards, Border Beam*).
* **Uiverse (Open-Source UI Elements)** — `https://uiverse.io/` (Referensi ratusan gaya mikro untuk **Button, Input, Checkbox, Toggle Switch, Card, dan Loader** dalam CSS & Tailwind murni).
* **DaisyUI** — `https://daisyui.com/components/` (Referensi sistem 30+ tema instan: *Cyberpunk, Synthwave, Retro, Corporate, Luxury, Dracula, Coffee, Nord*).
* **Radix UI Themes** — `https://www.radix-ui.com/themes/playground` (Referensi panel pengaturan skala radius, ketebalan *border*, dan kepadatan *spacing*).
* **HeroUI (NextUI)** — `https://www.heroui.com/` & **Mantine UI** — `https://mantine.dev/` (Referensi varian Input Form: *Flat, Bordered, Underlined, Faded, Floating Label*).

---

## 5. Referensi Tipografi, Pasangan Font & Mesin Copywriting (3-Mode Tulisan)
Gunakan situs ini untuk membangun **Typography & Copywriting Assistant** (Default, Setengah Custom, dan Full Custom):
* **Typescale** — `https://typescale.com/` & **Utopia Fluid Type** — `https://utopia.fyi/`
  * *Apa yang diambil:* Skala ukuran huruf otomatis yang proporsional dari `H1, H2, H3, Body, Caption` beserta pengaturan `line-height` dan `letter-spacing`.
* **Fontpair** — `https://www.fontpair.co/` & **Fontshare** — `https://www.fontshare.com/` & **Google Fonts** — `https://fonts.google.com/`
  * *Apa yang diambil:* Kombinasi pasangan font terbaik yang siap dipilih 1x klik:
    * *Modern SaaS:* `Inter` + `JetBrains Mono`
    * *Editorial / Elegan:* `Playfair Display` + `Plus Jakarta Sans`
    * *Tech / Startup:* `Space Grotesk` + `DM Sans`
    * *Futuristic / Gaming:* `Orbitron` / `Rajdhani` + `Chakra Petch`
    * *Corporate / Bank:* `IBM Plex Sans` + `IBM Plex Mono`
* **GoodUI** — `https://goodui.org/` & **Microcopy.me** — `https://www.microcopy.me/`
  * *Apa yang diambil:* Bank kalimat tombol (*Call-to-Action*), judul *Hero* yang menjual, teks *placeholder* form, pesan *empty state*, dan pesan *error* yang ramah pengguna untuk **Mode Tulisan Default & Semi-Custom**.

---

## 6. Referensi Konverter Korporasi Besar (Enterprise Design Systems & Web Components)
Agar output Frontend bisa disisipkan ke web perusahaan raksasa (bank, BUMN, e-commerce besar) tanpa bentrok CSS:
* **The Component Gallery** — `https://component.gallery/` & **Design Systems Repo** — `https://designsystemsrepo.com/`
  * *Apa yang diambil:* Standarisasi penamaan komponen dan struktur *Design Tokens* dari sistem desain perusahaan besar dunia:
    * **Shopify Polaris** (`https://polaris.shopify.com/`)
    * **IBM Carbon Design System** (`https://carbondesignsystem.com/`)
    * **Atlassian Design System** (`https://atlassian.design/`)
    * **Google Material Design 3** (`https://m3.material.io/`)
    * **Ant Design Enterprise** (`https://ant.design/`)
* **W3C Design Tokens Format** — `https://tr.designtokens.org/format/`
  * *Apa yang diambil:* Standar format ekspor file `tokens.json` agar hasil desain dari web kita bisa langsung di-import ke pipeline perusahaan besar.
* **Lit / Web Components & Shadow DOM** — `https://lit.dev/` & `https://developer.mozilla.org/en-US/docs/Web/API/Web_components`
  * *Apa yang diambil:* Pola membungkus kode UI ke dalam `class CustomEnterpriseWidget extends HTMLElement` dengan `this.attachShadow({ mode: 'open' })` sehingga perusahaan besar tinggal menempelkan `<enterprise-widget></enterprise-widget>` di web lama mereka (Java JSP, PHP, Angular, React, .NET) tanpa merusak style yang sudah ada.

---

## 7. Referensi Dokumentasi Multi-Framework Frontend (Target Export Code)
Mesin `codeScaffolder.ts` wajib mengikuti struktur sintaks resmi dari dokumentasi berikut saat mengekspor kode:
* **HTML5 / CSS3 / Vanilla JS:** `https://developer.mozilla.org/`
* **React (Vite + TypeScript):** `https://react.dev/` & `https://vite.dev/`
* **Next.js (App Router):** `https://nextjs.org/docs`
* **Vue 3 & Nuxt:** `https://vuejs.org/` & `https://nuxt.com/`
* **Svelte & SvelteKit:** `https://svelte.dev/docs`
* **Angular:** `https://angular.dev/`
* **Astro:** `https://docs.astro.build/`
* **Tailwind CSS:** `https://tailwindcss.com/docs`